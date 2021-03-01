import { ScryfallCard } from "scryfall/build/ScryfallCard";

export class ScryfallAPIResponse {
    data: ScryfallCard[];
    has_more: boolean;
    next_page: string;
    object: string;
    total_cards: number;
}

