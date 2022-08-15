import { Variable } from "./variable.model";

export class Formula{
    formulaString!: string;
    explanation!: string;
    variables!: Variable[];

    constructor(formulaString: string, explanation: string, variables: Variable[]) {
        this.formulaString = formulaString;
        this.explanation = explanation;
        this.variables = variables;
    }
}