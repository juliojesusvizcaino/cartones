import { AsyncPipe } from "@angular/common";
import { Component, computed, inject, signal } from "@angular/core";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { filter, switchMap } from "rxjs";
import { LorcanaApiService, LorcanaSet } from "../lorcana-api.service";
import { MatBadgeModule } from "@angular/material/badge";
import { ParsedCard, RepositoryService } from "../repository.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

const regex = /^(?<cardNum>\d+)(?<foilAfter>f)?$/i;

function parseRaw(raw: string): ParsedCard | null {
	const result = regex.exec(raw);
	if (!result?.groups) return null;
	return {
		num: Number.parseInt(result.groups["cardNum"]),
		foil: result.groups["foilAfter"] !== undefined,
	};
}

@Component({
	selector: "app-add-cards",
	standalone: true,
	imports: [
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		AsyncPipe,
		MatIconModule,
		MatButtonModule,
		MatBadgeModule,
	],
	templateUrl: "./add-cards.component.html",
	styleUrl: "./add-cards.component.scss",
})
export class AddCardsComponent {
	api = inject(LorcanaApiService);
	repo = inject(RepositoryService);
	router = inject(Router);
	snackBar = inject(MatSnackBar);

	selectedSet = signal<LorcanaSet | null>(null);
	rawCardsToAdd = signal<string>("");
	lookup = toSignal(
		toObservable(this.selectedSet).pipe(
			filter((set): set is LorcanaSet => set !== null),
			switchMap((set) => this.api.cardsInSetLookup(set.Set_Num)),
		),
	);

	cardsToAdd = computed(() => {
		const lookup = this.lookup();
		return lookup
			? this.rawCardsToAdd()
					.split(" ")
					.filter((x) => x.length > 0)
					.map((x) => {
						const parsed = parseRaw(x);
						return {
							raw: x,
							parsed,
							card: parsed ? lookup.get(parsed.num) : null,
						};
					})
			: [];
	});

	onSubmit() {
		const set = this.selectedSet();
		if (!set) {
			return;
		}

		const cards: ParsedCard[] = [];
		for (const card of this.cardsToAdd()) {
			if (card.card && card.parsed) {
				cards.push(card.parsed);
			}
		}

		this.repo.addCards({
			setNum: set.Set_Num,
			cards,
		});

		this.snackBar.open("Cards imported");

		this.router.navigateByUrl("/");
	}
}
