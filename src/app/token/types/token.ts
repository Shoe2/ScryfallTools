import { ScryfallCard } from "scryfall-ts/build/ScryfallCard";
import { ScryfallColor } from "scryfall-ts/build/ScryfallColor";
import { ScryfallImages } from "scryfall-ts/build/ScryfallImages";

export class Token {
    Owned: number;
    Wanted: number;
    Power: string;
    Toughness: string;
    Colors: ScryfallColor[];
    Name: string;
    TypeLine: string;
    Text: string;
    Editions: string[];
    CreatedBy: ScryfallCard[];
    ImageURL: ScryfallImages;

    constructor(
        Power: string,
        Toughness: string,
        Colors: ScryfallColor[],
        Name: string,
        TypeLine: string,
        Text: string,
        ImageURL: ScryfallImages ) {
        this.Power = Power;
        this.Toughness = Toughness;
        this.Colors = Colors;
        this.Name = Name;
        this.TypeLine = TypeLine;
        this.Text = Text;
        this.ImageURL = ImageURL;
        this.CreatedBy = [];
    }
}
