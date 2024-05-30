import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import {
	BehaviorSubject,
	lastValueFrom,
	map,
	of,
	shareReplay,
	tap,
} from "rxjs";

export interface LorcanaCard {
	Artist: string;
	Set_Name: string;
	Classifications: string;
	Set_Num: number;
	Color: string;
	Franchise: string;
	Image: string;
	Cost: number;
	Inkable: boolean;
	Name: string;
	Type: string;
	Lore: number;
	Rarity: string;
	Flavor_Text: string;
	Unique_ID: string;
	Card_Num: number;
	Body_Text: string;
	Willpower: number;
	Strength: number;
	Set_ID: string;
}

export interface LorcanaSet {
	Set_Num: number;
	Release_Date: string;
	Cards: number;
	Name: string;
	Set_ID: string;
}

@Injectable({
	providedIn: "root",
})
export class LorcanaApiService {
	http = inject(HttpClient);

	sets$ = this.http
		.get<LorcanaSet[]>("https://api.lorcana-api.com/sets/fetch")
		.pipe(shareReplay(1));

	cachedCardsInSet = new Map<number, Map<number, LorcanaCard>>();

	async cards() {
		return await lastValueFrom(
			this.http.get<LorcanaCard[]>("https://api.lorcana-api.com/cards/fetch"),
		);
	}

	cardsInSetLookup(setNum: number) {
		const currentCards = this.cachedCardsInSet.get(setNum);
		if (currentCards) {
			return of(currentCards);
		}

		return this.http
			.get<LorcanaCard[]>(
				`https://api.lorcana-api.com/cards/fetch?search=set_num=${setNum}`,
			)
			.pipe(
				map((cards) => {
					return new Map(cards.map((card) => [card.Card_Num, card]));
				}),
				tap((lookup) => {
					this.cachedCardsInSet.set(setNum, lookup);
				}),
			);
	}

	someCards(params: { cards: number[]; setNum?: number }) {
		console.log({ params });
		if (params.cards.length === 0) {
			return of([]);
		}
		const cardParam = params.cards.map((card) => `card_num=${card};`).join("|");
		const setParam =
			params.setNum === undefined || params.setNum === null
				? ""
				: `;set_num=${params.setNum}`;
		return this.http.get<LorcanaCard[]>(
			`https://api.lorcana-api.com/cards/fetch?search=(${cardParam})${setParam}`,
		);
		// return params.cards.map(card => card in cached ? of(cached[card]) : this.getCard({card, setNum: params.setNum})
	}

	private getCard(params: { card: number; setNum?: number }) {
		return this.http.get(
			"https://api.lorcana-api.com/cards/fetch?search=(card_num=3;|card_num=4;);set_num=2",
		);
	}
}
