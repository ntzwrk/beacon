import {Poll} from './Poll'

/** Class representing a vote */
export class Vote {
	/** Poll that this vote is for */
	public poll: Poll;

	/** Decision chosen from the poll's decisions */
	public decision: string;

	/** Version number of vote data structure */
	protected version: string = "0.1.0";


	/** Constructor for creating a new vote object */
	constructor(poll: Poll, decision: string) {
		this.poll = poll;
		this.decision = decision;
	}
}
