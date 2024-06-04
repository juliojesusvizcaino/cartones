import { Injectable } from "@angular/core";

function body(id: number) {
	return `{\"query\":\"query SearchSearchableLorcaniaCards($filter: SearchableSearchableLorcaniaCardFilterInput, $sort: [SearchableSearchableLorcaniaCardSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableSearchableLorcaniaCardAggregationInput]) {\\n  searchSearchableLorcaniaCards(\\n    filter: $filter\\n    sort: $sort\\n    limit: $limit\\n    nextToken: $nextToken\\n    from: $from\\n    aggregates: $aggregates\\n  ) {\\n    items {\\n      id\\n      dbVersion\\n      addAmount\\n      addFoilAmount\\n      addFoilType\\n      name\\n      title\\n      color\\n      image\\n      type\\n      cost\\n      inkwell\\n      lore\\n      strength\\n      willpower\\n      classifications\\n      action\\n      flavour\\n      separator\\n      number\\n      set_code\\n      set_name\\n      set_total\\n      franchise\\n      rarity\\n      lorcania_language\\n      illustrator\\n      final\\n      en_card_id\\n      en_language\\n      en_name\\n      en_title\\n      en_action\\n      en_flavour\\n      en_image\\n      de_card_id\\n      de_language\\n      de_name\\n      de_title\\n      de_action\\n      de_flavour\\n      de_image\\n      fr_card_id\\n      fr_language\\n      fr_name\\n      fr_title\\n      fr_action\\n      fr_flavour\\n      fr_image\\n      editions {\\n        id\\n        name\\n        code\\n        __typename\\n      }\\n      cardmarketId\\n      tcgplayer_id\\n      tcgplayer_url\\n      cardmarketPrice\\n      cardmarketFoilPrice\\n      cardmarketPriceDifferenceToYesterdayAbsolute\\n      cardmarketFoilPriceDifferenceToYesterdayAbsolute\\n      cardmarketPriceDifferenceTo7DaysAgoAbsolute\\n      cardmarketFoilPriceDifference7DaysAgoAbsolute\\n      cardmarketPriceDifferenceTo30DaysAgoAbsolute\\n      cardmarketFoilPriceDifferenceTo30DaysAgoAbsolute\\n      cardmarketPriceDifferenceToYesterdayPercent\\n      cardmarketFoilPriceDifferenceToYesterdayPercent\\n      cardmarketPriceDifferenceTo7DaysAgoPercent\\n      cardmarketFoilPriceDifference7DaysAgoPercent\\n      cardmarketPriceDifferenceTo30DaysAgoPercent\\n      cardmarketFoilPriceDifferenceTo30DaysAgoPercent\\n      tcgplayerPrice\\n      tcgplayerFoilPrice\\n      tcgplayerPriceDifferenceToYesterdayAbsolute\\n      tcgplayerFoilPriceDifferenceToYesterdayAbsolute\\n      tcgplayerPriceDifferenceTo7DaysAgoAbsolute\\n      tcgplayerFoilPriceDifference7DaysAgoAbsolute\\n      tcgplayerPriceDifferenceTo30DaysAgoAbsolute\\n      tcgplayerFoilPriceDifferenceTo30DaysAgoAbsolute\\n      tcgplayerPriceDifferenceToYesterdayPercent\\n      tcgplayerFoilPriceDifferenceToYesterdayPercent\\n      tcgplayerPriceDifferenceTo7DaysAgoPercent\\n      tcgplayerFoilPriceDifference7DaysAgoPercent\\n      tcgplayerPriceDifferenceTo30DaysAgoPercent\\n      tcgplayerFoilPriceDifferenceTo30DaysAgoPercent\\n      createdAt\\n      updatedAt\\n      _version\\n      _deleted\\n      _lastChangedAt\\n      __typename\\n    }\\n    nextToken\\n    total\\n    aggregateItems {\\n      name\\n      result {\\n        ... on SearchableAggregateScalarResult {\\n          value\\n        }\\n        ... on SearchableAggregateBucketResult {\\n          buckets {\\n            key\\n            doc_count\\n            __typename\\n          }\\n        }\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\",\"variables\":{\"filter\":{\"and\":[{\"and\":[{\"name\":{\"exists\":true}}]},{\"or\":[{\"set_code\":{\"eq\":\"${id}\"}}]}]},\"limit\":1000}}`;
}

async function fetchCards(auth: string) {
	const things = [];
	for (const i of [1, 2, 3, 4]) {
		const response = await fetch(
			"https://sb5yujx4rbderjap4y73kaepyi.appsync-api.eu-central-1.amazonaws.com/graphql",
			{
				headers: {
					accept: "application/json, text/plain, */*",
					"accept-language": "en-US,en;q=0.9,es;q=0.8",
					authorization: auth,
					"content-type": "application/json; charset=UTF-8",
					"sec-ch-ua":
						'"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
					"sec-ch-ua-mobile": "?0",
					"sec-ch-ua-platform": '"Linux"',
					"sec-fetch-dest": "empty",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "cross-site",
					"x-amz-user-agent": "aws-amplify/5.3.15 framework/4",
				},
				referrer: "https://app.tcg-home.com/",
				referrerPolicy: "strict-origin-when-cross-origin",
				body: body(i),
				method: "POST",
				mode: "cors",
			},
		);
		const x = await response.json();
		things.push(...x.data.searchSearchableLorcaniaCards.items);
	}
}

@Injectable({
	providedIn: "root",
})
export class TcgHomeService {}
