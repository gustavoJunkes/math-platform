import { Formula } from "./formula.model";

export class Post {
    title!: string;
    date!: string;
    formula!: Formula;

    constructor(title: string, date: string, formula: Formula) {
        this.title = title;
        this.date = date;
        this.formula = formula;
    }
}