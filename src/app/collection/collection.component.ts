import { Component, effect, inject, signal } from "@angular/core";
import { LorcanaApiService, LorcanaCard } from "../lorcana-api.service";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { RepositoryService } from "../repository.service";

@Component({
	selector: "app-collection",
	standalone: true,
	imports: [MatIconModule, MatButtonModule, RouterLink],
	templateUrl: "./collection.component.html",
	styleUrl: "./collection.component.scss",
})
export class CollectionComponent {
	api = inject(LorcanaApiService);
	repo = inject(RepositoryService);

	cards = signal<LorcanaCard[] | null>(null);

	constructor() {
		this.api.cards().then((cards) => {
			this.cards.set(cards.slice(30));
		});
	}
}
