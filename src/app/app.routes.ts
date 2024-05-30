import type { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		loadComponent: () =>
			import("./collection/collection.component").then(
				(mod) => mod.CollectionComponent,
			),
	},
	{
		path: "add-cards",
		loadComponent: () =>
			import("./add-cards/add-cards.component").then(
				(mod) => mod.AddCardsComponent,
			),
	},
];
