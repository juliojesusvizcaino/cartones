import { Component, effect, inject, signal } from "@angular/core";
import { LorcanaApiService, LorcanaCard } from "../lorcana-api.service";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-collection",
	standalone: true,
	imports: [MatIconModule, MatButtonModule, RouterLink],
	templateUrl: "./collection.component.html",
	styleUrl: "./collection.component.scss",
})
export class CollectionComponent {
	api = inject(LorcanaApiService);

	cards = signal<LorcanaCard[] | null>(null);

	constructor() {
		this.api.cards().then((cards) => {
			this.cards.set(cards.slice(30));
		});

		effect(() => {
			console.log(this.cards());
		});
	}
}
