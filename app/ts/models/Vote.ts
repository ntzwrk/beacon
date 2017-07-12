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
}
