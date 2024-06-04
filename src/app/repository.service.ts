import { Injectable, effect, signal } from "@angular/core";
import { z } from "zod";

export interface ParsedCard {
	num: number;
	foil: boolean;
}

const repoSchema = z.object({
	version: z.enum(["1"]),
	imports: z.array(
		z.object({
			setNum: z.number(),
			cards: z.array(
				z.object({
					num: z.number(),
					foil: z.boolean(),
				}),
			),
		}),
	),
});

type RepoSchema = z.infer<typeof repoSchema>;

const repoName = "lorcanaDB";

function getRepo() {
	const rawCurrentRepo = localStorage.getItem(repoName);

	return rawCurrentRepo
		? repoSchema.parse(JSON.parse(rawCurrentRepo))
		: ({ version: "1", imports: [] } satisfies RepoSchema);
}

@Injectable({
	providedIn: "root",
})
export class RepositoryService {
	#repo = signal(getRepo());
	repo = this.#repo.asReadonly();

	constructor() {
		effect(() => {
			localStorage.setItem(repoName, JSON.stringify(this.repo()));
		});
	}

	addCards(params: {
		setNum: number;
		cards: ParsedCard[];
	}) {
		this.#repo.update((currentRepo) => {
			currentRepo.imports.push(params);
			return currentRepo;
		});
	}
}
