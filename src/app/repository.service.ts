import { Injectable } from "@angular/core";

export interface ParsedCard {
	num: number;
	foil: boolean;
}

const repoName = 'lorcanaDB';

@Injectable({
	providedIn: "root",
})
export class RepositoryService {
	addCards(params: {
		setNum: number;
		cards: ParsedCard[];
	}) {
    const repo = localStorage.getItem(repoName);
	}
}
