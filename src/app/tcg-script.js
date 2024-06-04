// @ts-check

/**
 * @typedef {Object} CardTag
 * @property {string} id - The unique identifier of the card tag.
 * @property {string} name - The name of the card tag.
 * @property {string} color - The color associated with the card tag in hex format.
 * @property {?null} category - The category of the card tag, null if not applicable.
 * @property {string} owner - The owner of the card tag.
 * @property {string} createdAt - The date and time when the card tag was created in ISO 8601 format.
 * @property {string} updatedAt - The date and time when the card tag was last updated in ISO 8601 format.
 * @property {number} _version - The version number of the card tag.
 * @property {?null} _deleted - Indicates if the card tag has been deleted, null if not deleted.
 * @property {number} _lastChangedAt - The timestamp of the last change in milliseconds since epoch.
 * @property {string} __typename - The GraphQL typename for the card tag object.
 */

/**
 * @typedef {Object} LorcaniaSet
 * @property {string} id - The unique identifier of the set.
 * @property {string} name - The name of the set.
 * @property {string} code - The code representing the set.
 * @property {string} slug - The URL-friendly identifier for the set.
 * @property {number} cards - The number of cards in the set.
 * @property {string} en - The English version identifier of the set.
 * @property {string} de - The German version identifier of the set.
 * @property {string} fr - The French version identifier of the set.
 * @property {string} release - The initial release date of the set in YYYY-MM-DD format.
 * @property {string} general_release - The general release date of the set in YYYY-MM-DD format.
 * @property {string} image - The URL of the image representing the set.
 * @property {string} createdAt - The date and time when the set was created in ISO 8601 format.
 * @property {string} updatedAt - The date and time when the set was last updated in ISO 8601 format.
 * @property {number} _version - The version number of the set.
 * @property {?null} _deleted - Indicates if the set has been deleted, null if not deleted.
 * @property {number} _lastChangedAt - The timestamp of the last change in milliseconds since epoch.
 * @property {string} __typename - The GraphQL typename for the set object.
 */

/**
 * @typedef {Object} LorcaniaEdition
 * @property {string} id - The unique identifier of the edition.
 * @property {string} name - The name of the edition.
 * @property {string} code - The code representing the edition.
 * @property {string} __typename - The GraphQL typename for the edition object.
 */

/**
 * @typedef {Object} SearchableLorcaniaCard
 * @property {string} id - The unique identifier of the card.
 * @property {string} dbVersion - The database version of the card.
 * @property {?null} addAmount - Additional amount (null if not applicable).
 * @property {?null} addFoilAmount - Additional foil amount (null if not applicable).
 * @property {?null} addFoilType - Additional foil type (null if not applicable).
 * @property {string} name - The name of the card.
 * @property {string} title - The title of the card.
 * @property {string} color - The color classification of the card.
 * @property {string} image - The URL of the image representing the card.
 * @property {string} type - The type classification of the card.
 * @property {number} cost - The cost to play the card.
 * @property {number} inkwell - The inkwell value of the card.
 * @property {number} lore - The lore value of the card.
 * @property {number} strength - The strength value of the card.
 * @property {number} willpower - The willpower value of the card.
 * @property {string[]} classifications - The classifications of the card.
 * @property {string} action - The action description of the card.
 * @property {?null} flavour - The flavour text of the card (null if not applicable).
 * @property {?null} separator - The separator (null if not applicable).
 * @property {number} number - The card number in the set.
 * @property {string} set_code - The code of the set the card belongs to.
 * @property {string} set_name - The name of the set the card belongs to.
 * @property {number} set_total - The total number of cards in the set.
 * @property {string} franchise - The franchise the card is part of.
 * @property {string} rarity - The rarity classification of the card.
 * @property {?null} lorcania_language - The Lorcania language (null if not applicable).
 * @property {string} illustrator - The illustrator of the card.
 * @property {?null} final - The final value (null if not applicable).
 * @property {string} en_card_id - The English version identifier of the card.
 * @property {string} en_language - The language code for English.
 * @property {string} en_name - The English name of the card.
 * @property {string} en_title - The English title of the card.
 * @property {string} en_action - The English action description of the card.
 * @property {?null} en_flavour - The English flavour text of the card (null if not applicable).
 * @property {string} en_image - The URL of the English image representing the card.
 * @property {string} de_card_id - The German version identifier of the card.
 * @property {string} de_language - The language code for German.
 * @property {?null} de_name - The German name of the card (null if not applicable).
 * @property {?null} de_title - The German title of the card (null if not applicable).
 * @property {?null} de_action - The German action description of the card (null if not applicable).
 * @property {?null} de_flavour - The German flavour text of the card (null if not applicable).
 * @property {string} de_image - The URL of the German image representing the card.
 * @property {string} fr_card_id - The French version identifier of the card.
 * @property {string} fr_language - The language code for French.
 * @property {string} fr_name - The French name of the card.
 * @property {string} fr_title - The French title of the card.
 * @property {string} fr_action - The French action description of the card.
 * @property {?null} fr_flavour - The French flavour text of the card (null if not applicable).
 * @property {string} fr_image - The URL of the French image representing the card.
 * @property {LorcaniaEdition[]} editions - The editions the card is part of.
 * @property {string} cardmarketId - The Cardmarket identifier of the card.
 * @property {number} tcgplayer_id - The TCGplayer identifier of the card.
 * @property {string} tcgplayer_url - The TCGplayer URL for the card.
 * @property {number} cardmarketPrice - The price of the card on Cardmarket.
 * @property {number} cardmarketFoilPrice - The foil price of the card on Cardmarket.
 * @property {number} cardmarketPriceDifferenceToYesterdayAbsolute - The absolute price difference on Cardmarket compared to yesterday.
 * @property {number} cardmarketFoilPriceDifferenceToYesterdayAbsolute - The absolute foil price difference on Cardmarket compared to yesterday.
 * @property {number} cardmarketPriceDifferenceTo7DaysAgoAbsolute - The absolute price difference on Cardmarket compared to 7 days ago.
 * @property {number} cardmarketFoilPriceDifference7DaysAgoAbsolute - The absolute foil price difference on Cardmarket compared to 7 days ago.
 * @property {number} cardmarketPriceDifferenceTo30DaysAgoAbsolute - The absolute price difference on Cardmarket compared to 30 days ago.
 * @property {number} cardmarketFoilPriceDifferenceTo30DaysAgoAbsolute - The absolute foil price difference on Cardmarket compared to 30 days ago.
 * @property {number} cardmarketPriceDifferenceToYesterdayPercent - The percentage price difference on Cardmarket compared to yesterday.
 * @property {number} cardmarketFoilPriceDifferenceToYesterdayPercent - The percentage foil price difference on Cardmarket compared to yesterday.
 * @property {number} cardmarketPriceDifferenceTo7DaysAgoPercent - The percentage price difference on Cardmarket compared to 7 days ago.
 * @property {number} cardmarketFoilPriceDifference7DaysAgoPercent - The percentage foil price difference on Cardmarket compared to 7 days ago.
 * @property {number} cardmarketPriceDifferenceTo30DaysAgoPercent - The percentage price difference on Cardmarket compared to 30 days ago.
 * @property {number} cardmarketFoilPriceDifferenceTo30DaysAgoPercent - The percentage foil price difference on Cardmarket compared to 30 days ago.
 * @property {number} tcgplayerPrice - The price of the card on TCGplayer.
 * @property {number} tcgplayerFoilPrice - The foil price of the card on TCGplayer.
 * @property {number} tcgplayerPriceDifferenceToYesterdayAbsolute - The absolute price difference on TCGplayer compared to yesterday.
 * @property {number} tcgplayerFoilPriceDifferenceToYesterdayAbsolute - The absolute foil price difference on TCGplayer compared to yesterday.
 * @property {number} tcgplayerPriceDifferenceTo7DaysAgoAbsolute - The absolute price difference on TCGplayer compared to 7 days ago.
 * @property {number} tcgplayerFoilPriceDifference7DaysAgoAbsolute - The absolute foil price difference on TCGplayer compared to 7 days ago.
 * @property {number} tcgplayerPriceDifferenceTo30DaysAgoAbsolute - The absolute price difference on TCGplayer compared to 30 days ago.
 * @property {number} tcgplayerFoilPriceDifferenceTo30DaysAgoAbsolute - The absolute foil price difference on TCGplayer compared to 30 days ago.
 * @property {number} tcgplayerPriceDifferenceToYesterdayPercent - The percentage price difference on TCGplayer compared to yesterday.
 * @property {number} tcgplayerFoilPriceDifferenceToYesterdayPercent - The percentage foil price difference on TCGplayer compared to yesterday.
 * @property {number} tcgplayerPriceDifferenceTo7DaysAgoPercent - The percentage price difference on TCGplayer compared to 7 days ago.
 * @property {number} tcgplayerFoilPriceDifference7DaysAgoPercent - The percentage foil price difference on TCGplayer compared to 7 days ago.
 * @property {number} tcgplayerPriceDifferenceTo30DaysAgoPercent - The percentage price difference on TCGplayer compared to 30 days ago.
 * @property {number} tcgplayerFoilPriceDifferenceTo30DaysAgoPercent - The percentage foil price difference on TCGplayer compared to 30 days ago.
 * @property {string} createdAt - The date and time when the card was created in ISO 8601 format.
 * @property {string} updatedAt - The date and time when the card was last updated in ISO 8601 format.
 * @property {number} _version - The version number of the card.
 * @property {?null} _deleted - Indicates if the card has been deleted, null if not deleted.
 * @property {number} _lastChangedAt - The timestamp of the last change in milliseconds since epoch.
 * @property {string} __typename - The GraphQL typename for the card object.
 */

function getAuth() {
	const authKey =
		"CognitoIdentityServiceProvider.2l2rbh21leurkg4fbjorbpi00e.trufas.accessToken";
	const auth = localStorage.getItem(authKey);
	if (!auth) {
		throw new Error(`no auth in ${authKey}`);
	}
	return auth;
}

/**
 * @param {string} setCode
 */
function body(setCode) {
	return {
		query:
			"query SearchSearchableLorcaniaCards($filter: SearchableSearchableLorcaniaCardFilterInput, $sort: [SearchableSearchableLorcaniaCardSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableSearchableLorcaniaCardAggregationInput]) {\n  searchSearchableLorcaniaCards(\n    filter: $filter\n    sort: $sort\n    limit: $limit\n    nextToken: $nextToken\n    from: $from\n    aggregates: $aggregates\n  ) {\n    items {\n      id\n      dbVersion\n      addAmount\n      addFoilAmount\n      addFoilType\n      name\n      title\n      color\n      image\n      type\n      cost\n      inkwell\n      lore\n      strength\n      willpower\n      classifications\n      action\n      flavour\n      separator\n      number\n      set_code\n      set_name\n      set_total\n      franchise\n      rarity\n      lorcania_language\n      illustrator\n      final\n      en_card_id\n      en_language\n      en_name\n      en_title\n      en_action\n      en_flavour\n      en_image\n      de_card_id\n      de_language\n      de_name\n      de_title\n      de_action\n      de_flavour\n      de_image\n      fr_card_id\n      fr_language\n      fr_name\n      fr_title\n      fr_action\n      fr_flavour\n      fr_image\n      editions {\n        id\n        name\n        code\n        __typename\n      }\n      cardmarketId\n      tcgplayer_id\n      tcgplayer_url\n      cardmarketPrice\n      cardmarketFoilPrice\n      cardmarketPriceDifferenceToYesterdayAbsolute\n      cardmarketFoilPriceDifferenceToYesterdayAbsolute\n      cardmarketPriceDifferenceTo7DaysAgoAbsolute\n      cardmarketFoilPriceDifference7DaysAgoAbsolute\n      cardmarketPriceDifferenceTo30DaysAgoAbsolute\n      cardmarketFoilPriceDifferenceTo30DaysAgoAbsolute\n      cardmarketPriceDifferenceToYesterdayPercent\n      cardmarketFoilPriceDifferenceToYesterdayPercent\n      cardmarketPriceDifferenceTo7DaysAgoPercent\n      cardmarketFoilPriceDifference7DaysAgoPercent\n      cardmarketPriceDifferenceTo30DaysAgoPercent\n      cardmarketFoilPriceDifferenceTo30DaysAgoPercent\n      tcgplayerPrice\n      tcgplayerFoilPrice\n      tcgplayerPriceDifferenceToYesterdayAbsolute\n      tcgplayerFoilPriceDifferenceToYesterdayAbsolute\n      tcgplayerPriceDifferenceTo7DaysAgoAbsolute\n      tcgplayerFoilPriceDifference7DaysAgoAbsolute\n      tcgplayerPriceDifferenceTo30DaysAgoAbsolute\n      tcgplayerFoilPriceDifferenceTo30DaysAgoAbsolute\n      tcgplayerPriceDifferenceToYesterdayPercent\n      tcgplayerFoilPriceDifferenceToYesterdayPercent\n      tcgplayerPriceDifferenceTo7DaysAgoPercent\n      tcgplayerFoilPriceDifference7DaysAgoPercent\n      tcgplayerPriceDifferenceTo30DaysAgoPercent\n      tcgplayerFoilPriceDifferenceTo30DaysAgoPercent\n      createdAt\n      updatedAt\n      _version\n      _deleted\n      _lastChangedAt\n      __typename\n    }\n    nextToken\n    total\n    aggregateItems {\n      name\n      result {\n        ... on SearchableAggregateScalarResult {\n          value\n        }\n        ... on SearchableAggregateBucketResult {\n          buckets {\n            key\n            doc_count\n            __typename\n          }\n        }\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
		variables: {
			filter: {
				and: [
					{
						and: [
							{
								name: {
									exists: true,
								},
							},
						],
					},
					{
						or: [
							{
								set_code: {
									eq: setCode,
								},
							},
						],
					},
				],
			},
			limit: 1000,
		},
	};
}

/**
 * @param {string} setCode
 * @returns {Promise<SearchableLorcaniaCard[]>}
 */
async function fetchCards(setCode) {
	const response = await fetch(
		"https://sb5yujx4rbderjap4y73kaepyi.appsync-api.eu-central-1.amazonaws.com/graphql",
		{
			headers: {
				accept: "application/json, text/plain, */*",
				"accept-language": "en-US,en;q=0.9,es;q=0.8",
				authorization: getAuth(),
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
			body: JSON.stringify(body(setCode)),
			method: "POST",
			mode: "cors",
		},
	);
	const data = await response.json();
	return data.data.searchSearchableLorcaniaCards.items;
}

/**
 * @returns {Promise<LorcaniaSet[]>}
 */
async function fetchSets() {
	const response = await fetch(
		"https://sb5yujx4rbderjap4y73kaepyi.appsync-api.eu-central-1.amazonaws.com/graphql",
		{
			headers: {
				accept: "application/json, text/plain, */*",
				"accept-language": "en-US,en;q=0.9,es;q=0.8",
				authorization: getAuth(),
				"content-type": "application/json; charset=UTF-8",
				"sec-ch-ua":
					'"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": '"Linux"',
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "cross-site",
				"x-amz-user-agent": "aws-amplify/5.3.15 framework/0",
			},
			referrer: "https://app.tcg-home.com/",
			referrerPolicy: "strict-origin-when-cross-origin",
			body: '{"query":"query ListLorcaniaSets($filter: ModelLorcaniaSetFilterInput, $limit: Int, $nextToken: String) {\\n  listLorcaniaSets(filter: $filter, limit: $limit, nextToken: $nextToken) {\\n    items {\\n      id\\n      name\\n      code\\n      slug\\n      cards\\n      en\\n      de\\n      fr\\n      release\\n      general_release\\n      image\\n      createdAt\\n      updatedAt\\n      _version\\n      _deleted\\n      _lastChangedAt\\n      __typename\\n    }\\n    nextToken\\n    startedAt\\n    __typename\\n  }\\n}\\n","variables":{"limit":999}}',
			method: "POST",
			mode: "cors",
		},
	);
	const data = await response.json();
	return data.data.listLorcaniaSets.items;
}

/**
 * @returns {Promise<CardTag[]>}
 */
async function fetchTags() {
	const response = await fetch(
		"https://sb5yujx4rbderjap4y73kaepyi.appsync-api.eu-central-1.amazonaws.com/graphql",
		{
			headers: {
				accept: "application/json, text/plain, */*",
				"accept-language": "en-US,en;q=0.9,es;q=0.8",
				authorization: getAuth(),
				"content-type": "application/json; charset=UTF-8",
				"sec-ch-ua":
					'"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": '"Linux"',
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "cross-site",
				"x-amz-user-agent": "aws-amplify/5.3.15 api/1 framework/4",
			},
			referrer: "https://app.tcg-home.com/",
			referrerPolicy: "strict-origin-when-cross-origin",
			body: '{"query":"query GetCardTagByOwner($owner: String!, $sortDirection: ModelSortDirection, $filter: ModelCardTagFilterInput, $limit: Int, $nextToken: String) {\\n  getCardTagByOwner(\\n    owner: $owner\\n    sortDirection: $sortDirection\\n    filter: $filter\\n    limit: $limit\\n    nextToken: $nextToken\\n  ) {\\n    items {\\n      id\\n      name\\n      color\\n      category\\n      owner\\n      createdAt\\n      updatedAt\\n      _version\\n      _deleted\\n      _lastChangedAt\\n      __typename\\n    }\\n    nextToken\\n    startedAt\\n    __typename\\n  }\\n}\\n","variables":{"owner":"trufas","limit":1000}}',
			method: "POST",
			mode: "cors",
		},
	);
	const data = await response.json();
	console.log({ response, data });
	return data.data.getCardTagByOwner.items;
}

/**
 * @param {SearchableLorcaniaCard} card
 * @param {boolean} foil
 * @param {string[]} tagIds
 */
async function saveCard(card, foil, tagIds) {
	const response = await fetch(
		"https://sb5yujx4rbderjap4y73kaepyi.appsync-api.eu-central-1.amazonaws.com/graphql",
		{
			headers: {
				accept: "application/json, text/plain, */*",
				"accept-language": "en-US,en;q=0.9,es;q=0.8",
				authorization: getAuth(),
				"content-type": "application/json; charset=UTF-8",
				"sec-ch-ua":
					'"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": '"Linux"',
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "cross-site",
				"x-amz-user-agent": "aws-amplify/5.3.15 api/1 framework/4",
			},
			referrer: "https://app.tcg-home.com/",
			referrerPolicy: "strict-origin-when-cross-origin",
			body: `{"query":"mutation CreateLorcanaCardAsCustomer($input: CreateLorcanaCardInput!, $condition: ModelLorcanaCardConditionInput) {\\n  createLorcanaCard(input: $input, condition: $condition) {\\n    id\\n    cardmarketId\\n    lorcaniaId\\n    tagIds\\n    language\\n    condition\\n    finish\\n    price\\n    purchasePrice\\n    userSellingPrice\\n    cardmarketListedPrice\\n    owner\\n    status\\n    createdAt\\n    updatedAt\\n    _version\\n    _deleted\\n    _lastChangedAt\\n  }\\n}\\n","variables":{"input":{"cardmarketId":"${
				card.cardmarketId
			}","lorcaniaId":"${
				card.id
			}","language":"English","condition":"NEAR_MINT","tagIds":${JSON.stringify(
				tagIds,
			)},"finish":${foil ? 1 : 0},"status":"AT_HOME","owner":"trufas"}}}`,
			method: "POST",
			mode: "cors",
		},
	);
	const data = await response.json();
	return data;
}

// Create overlay elements
const overlay = document.createElement("div");
overlay.id = "overlay";
document.body.appendChild(overlay);

const overlayContent = document.createElement("div");
overlayContent.id = "overlay-content";
overlay.appendChild(overlayContent);

const form = document.createElement("form");
form.id = "overlay-form";
overlayContent.appendChild(form);

// Create and append select input with dynamic values
const selectLabel = document.createElement("label");
selectLabel.setAttribute("for", "set-select");
selectLabel.textContent = "Choose an option:";
form.appendChild(selectLabel);

const setSelect = document.createElement("select");
setSelect.id = "set-select";
form.appendChild(setSelect);

// Dynamic select options
const sets = await fetchSets();
for (const set of sets.sort((x, y) => x.id - y.id)) {
	const optionElement = document.createElement("option");
	optionElement.value = set.id;
	optionElement.textContent = set.name;
	setSelect.appendChild(optionElement);
}

const selectTagLabel = document.createElement("label");
selectTagLabel.setAttribute("for", "tag-select");
selectTagLabel.textContent = "Choose tags:";
form.appendChild(selectTagLabel);

const tagSelect = document.createElement("select");
tagSelect.id = "tag-select";
tagSelect.multiple = true;
form.appendChild(tagSelect);

const tags = await fetchTags();
for (const tag of tags) {
	const optionElement = document.createElement("option");
	optionElement.value = tag.id;
	optionElement.textContent = tag.name;
	tagSelect.appendChild(optionElement);
}

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

// Create and append text input
const textInputLabel = document.createElement("label");
textInputLabel.setAttribute("for", "text-input");
textInputLabel.textContent = "Type something:";
form.appendChild(textInputLabel);

const textInput = document.createElement("input");
textInput.id = "text-input";
textInput.type = "text";
form.appendChild(textInput);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

// Create and append submit button
const submitButton = document.createElement("button");
submitButton.id = "submit-button";
submitButton.type = "button";
submitButton.textContent = "Submit";
form.appendChild(submitButton);

// Styles
const styles = `
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
#overlay-content {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
}
#image-container {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  overflow: auto;
  position: relative;
}
.foil {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  padding: 0.5rem;
  border-radius: 3rem;
  background-color: white;
}
.card-wrapper {
  position: relative;
}
.card-img {
  max-width: 10rem;
}
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const regex = /^(?<cardNum>\d+)(?<foilAfter>f)?$/i;

function parseRaw(raw) {
	const result = regex.exec(raw);
	if (!result?.groups) return null;
	return {
		num: Number.parseInt(result.groups["cardNum"]),
		foil: result.groups["foilAfter"] !== undefined,
	};
}

function debounce(callback, wait) {
	let timerId;
	return (...args) => {
		clearTimeout(timerId);
		timerId = setTimeout(() => {
			callback(...args);
		}, wait);
	};
}

/** @type {SearchableLorcaniaCard[]} */
let setCards;

setSelect.addEventListener("change", async () => {
	const setSelected = sets.find((x) => x.id === setSelect.value);

	setCards = await fetchCards(setSelected.code);
});

/** @type {(() => void) | null} */
let thing = null;

/** @type {(() => void)[]} */
const effects = [];

function runEffects() {
	while (true) {
		const effect = effects.shift();
		if (!effect) {
			break;
		}
		effect();
	}
}

/**
 * @template T
 * @param {T} initialValue
 */
function signal(initialValue) {
	let value = initialValue;
	/** @type {(() => void )[]} */
	const subs = [];

	const notify = () => {
		for (const sub of subs) {
			sub();
		}
		runEffects();
	};

	const getter = () => {
		if (thing && !subs.includes(thing)) {
			subs.push(thing);
		}
		return value;
	};

	getter.set = (/** @type {T} */ x) => {
		if (x === value) {
			return;
		}
		value = x;
		notify();
	};
	getter.update = (/** @type {(arg0: T) => T} */ f) => {
		const x = f(value);
		getter.set(x);
	};

	return getter;
}

/**
 * @template T
 * @param {{ (): T; }} f
 */
function computed(f) {
	/** @type T */
	let value;
	let cached = false;

	/** @type {(() => void )[]} */
	const subs = [];

	const invalidate = () => {
		cached = false;
		for (const sub of subs) {
			sub();
		}
	};

	return () => {
		if (!cached) {
			const previousThing = thing;
			thing = invalidate;
			value = f();
			thing = previousThing;
			cached = true;
		}

		if (thing && !subs.includes(thing)) {
			subs.push(thing);
		}

		return value;
	};
}

/**
 * @param {{ (): void; }} func
 */
function effect(func) {
	thing = () => {
		if (!effects.includes(func)) {
			effects.push(func);
		}
	};

	func();

	thing = null;
}

/**
 * @typedef {Object} ParsedData
 * @property {number} num - A numerical value.
 * @property {boolean} foil - Indicates if the item is foil.
 */

/**
 * @typedef {Object} CardData
 * @property {number} index
 * @property {string} raw - The raw data as a string.
 * @property {ParsedData|null} parsed - The parsed data object or null if not applicable.
 * @property {SearchableLorcaniaCard|null|undefined} card - The card data which can be a SearchableLorcaniaCard object, null, or undefined.
 */

/** @type {CardData[]} */
const cardData = [];

const cards = signal(cardData);

/** @type {HTMLDivElement} */
let imageContainer;

effect(() => {
	imageContainer?.remove();

	imageContainer = document.createElement("div");
	imageContainer.id = "image-container";
	overlayContent.appendChild(imageContainer);

	for (const card of cards()) {
		if (!card.parsed) {
			const thing = document.createElement("p");
			thing.textContent = `invalid card syntax: ${card.raw}`;
			imageContainer.prepend(thing);
		} else if (!card.card) {
			const thing = document.createElement("p");
			thing.textContent = `card ${card.parsed.num} not found`;
			imageContainer.prepend(thing);
		} else {
			const thing = document.createElement("div");
			const img = document.createElement("img");
			img.src = card.card.en_image;
			img.alt = card.card.name;
			img.id = card.card.id;
			img.classList.add("card-img");
			thing.classList.add("card-wrapper");
			thing.appendChild(img);
			if (card.parsed.foil) {
				const foil = document.createElement("span");
				foil.classList.add("foil");
				foil.textContent = "foil";
				thing.appendChild(foil);
			}
			imageContainer.prepend(thing);
		}
	}
});

// Event listener for text input to add/remove images
textInput.addEventListener(
	"input",
	debounce(() => {
		const value = textInput.value.toLowerCase();
		cards.set(
			value
				.split(" ")
				.filter((x) => x.length > 0)
				.map((x, i) => {
					const parsed = parseRaw(x);
					return {
						index: i,
						raw: x,
						parsed,
						card: parsed
							? setCards.find((card) => card.number === parsed.num)
							: null,
					};
				}),
		);
	}, 300),
);

// Event listener for the submit button
form.addEventListener("submit", async (event) => {
	event.preventDefault();
	const tags = [];

	for (const tag of tagSelect.selectedOptions) {
		tags.push(tag.value);
	}

	/** @type {[number, SearchableLorcaniaCard, boolean][]} */
	const cardsToSave = [];

	for (const card of cards()) {
		if (!card.card || !card.parsed) {
			return;
		}
		cardsToSave.push([card.index, card.card, card.parsed.foil]);
	}

	await Promise.all(
		cardsToSave.map(([index, card, foil]) =>
			saveCard(card, foil, tags).then(() => {
				cards.update((cs) => cs.filter((c) => c.index !== index));
			}),
		),
	);

  textInput.value = '';
});
