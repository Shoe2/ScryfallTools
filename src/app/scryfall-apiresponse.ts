import { ScryfallCard } from "scryfall-ts/build/ScryfallCard";

export class ScryfallAPIResponse {
    data: ScryfallCard[] | string[];
    has_more: boolean;
    next_page: string;
    object: string;
    total_cards: number;
}

