import { Component, effect, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { LorcanaApiService, LorcanaSet } from "../lorcana-api.service";
import { AsyncPipe } from "@angular/common";
import { toObservable } from "@angular/core/rxjs-interop";
import {
	EMPTY,
	catchError,
	combineLatest,
	debounceTime,
	filter,
	lastValueFrom,
	shareReplay,
	switchMap,
} from "rxjs";

@Component({
	selector: "app-add-cards",
	standalone: true,
	imports: [
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		AsyncPipe,
	],
	templateUrl: "./add-cards.component.html",
	styleUrl: "./add-cards.component.scss",
})
export class AddCardsComponent {
	api = inject(LorcanaApiService);

	selectedSet = signal<LorcanaSet | null>(null);
	cardsToAdd = signal<string>("");

	theCards$ = combineLatest([
		toObservable(this.selectedSet),
		toObservable(this.cardsToAdd),
	]).pipe(
		filter((params) => params[0] !== null),
		debounceTime(300),
		switchMap(async ([set, cards]) => {
			console.assert(set !== null);
			if (set === null) {
				throw new Error("no way this is null, as we are already filtering it");
			}
			const lookup = await lastValueFrom(
				this.api.cardsInSetLookup(set.Set_Num),
			);
			return cards.split(" ").map((x) => lookup.get(Number.parseInt(x)));
			//    return cards.map(card => lookup.get(card))
			// this.api
			// 	.someCards({
			// 		cards: cards
			// 			.split(" ")
			// 			.map((x) => Number.parseInt(x))
			// 			.filter((x) => !Number.isNaN(x)),
			// 		setNum: set?.Set_Num,
			// 	})
			// 	.pipe(catchError(() => EMPTY)),
		}),
		shareReplay(1),
	);

	constructor() {
		effect(() => {
			console.log(this.cardsToAdd());
			console.log(this.selectedSet());
		});
		this.theCards$.subscribe((things) => {
			console.log("things", things);
		});
	}
}
