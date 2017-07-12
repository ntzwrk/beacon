import {Publishable} from './Publishable';

/** Class representing a vote */
export class Vote extends Publishable {
	/** Id of the poll that this vote is for */
	public pollId: string;

	/** Decision chosen from the poll's decisions */
	public decision: string;

	/** Version number of vote data structure */
	protected version: number = 1;


	/** Constructor for creating a new vote object */
	constructor(pollId: string, decision: string) {
		super();
		this.pollId = pollId;
		this.decision = decision;
	}

	public toJson(): string {
		return JSON.stringify(this);
	}

	public loadFromJson(jsonString: string): void {
		// More information on the second (the reviver) parameter:
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter

		JSON.parse(jsonString, (key, value) => {
				switch(key) {
				case "pollId":
					this.pollId = value;
					break;
				case "decision":
					this.decision = value;
					break;
				case "version":
					this.version = value;
					break;
			}
		});
	}
}
