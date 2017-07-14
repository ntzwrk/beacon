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
		// @todo refactor

		try {
			var loadedVote: Vote = JSON.parse(jsonString);
		} catch(e) {
			throw new Error("No valid JSON data found");
		}

		switch(loadedVote.version) {
			case 1:
				if(typeof loadedVote.pollId === "string" && loadedVote.pollId != "") {
					this.pollId = loadedVote.pollId;
				} else {
					throw new Error("No or invalid 'pollId' attribute found in serialized vote");
				}

				if(typeof loadedVote.decision === "string") {
					this.decision = loadedVote.decision;
				} else {
					throw new Error("No or invalid 'decision' attribute found in serialized vote");
				}

				this.version = loadedVote.version;
				break;

			default:
				throw new Error("No or invalid 'version' attribute found in serialized vote");
		}
	}
}
