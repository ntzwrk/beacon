import {Attribute} from "../../app/ts/models/Attribute";


export class exampleAttributeA implements Attribute {
	check() {
		return true;
	}

	toJSON() {
		return "exampleAttributeA";
	}
}

export class exampleAttributeB implements Attribute {
	check() {
		return false;
	}

	toJSON() {
		return "exampleAttributeB";
	}
}


export var exampleAttributes: Attribute[] = [
	new exampleAttributeA(),
	new exampleAttributeB()
];
