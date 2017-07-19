import {Attribute} from "../../app/ts/models/Attribute";


export class exampleAttributeA implements Attribute {
	identifier = "exampleAttributeA";

	check() {
		return true;
	}

	toString() {
		return "Attribute that is always given";
	}
}

export class exampleAttributeB implements Attribute {
	identifier = "exampleAttributeB";

	check() {
		return false;
	}

	toString() {
		return "Attribute that is never given";
	}
}


export var exampleAttributes: Attribute[] = [
	new exampleAttributeA(),
	new exampleAttributeB()
];
