import {Attribute} from './Attribute';
import {Evaluation} from './Evaluation';
import {Vote} from './Vote';

/** Class representing a poll */
export class Poll {
	/** Title of the poll */
	public title: string;

	/** Description of the poll */
	public description: string;

	/** URL to an icon for the poll */
	public imageUrl: string;

	/** Start date of the poll (the earliest date a vote counts as valid) */
	public startDate: number;

	/** End date of the poll (the latest date a vote counts as valid) */
	public endDate: number;

	/** Boolean that determines whether multiple answers are possible */
	public multipleDecisionsPossible: boolean;

	/** Array of decisions from which a user can choose to vote */
	public decisions: string[];

	/** Boolean that determines whether all specified attributes are needed to participate. If false one is sufficient */
	public requireAllAttributes: boolean;

	/** Array of required attributes to be able to participate in this poll */
	public requiredAttributes: Attribute[];

	/** Array of votes that a finished poll got, empty on running polls */
	public votes: Vote[] = [];

	/** Version number of poll data structure */
	protected version: number = 1;

	/** Constructor for creating a new poll object */
	constructor(
		title: string,
		description: string,
		imageUrl: string,
		startDate: number,
		endDate: number,
		multipleDecisionsPossible: boolean,
		decisions: string[],
		requireAllAttributes: boolean,
		requiredAttributes: Attribute[]
	) {
		this.title = title;
		this.description = description;
		this.imageUrl = imageUrl;
		this.startDate = startDate;
		this.endDate = endDate;
		this.multipleDecisionsPossible = multipleDecisionsPossible;
		this.decisions = decisions;
		this.requireAllAttributes = requireAllAttributes;
		this.requiredAttributes = requiredAttributes;
	}

	/** Sets an array of votes */
	public setVotes(votes: Vote[]): void {
		this.votes = votes;
	}

	/** Returns an array of votes a poll got */
	public getVotes(): Vote[] {
		return this.votes;
	}

	/** Evaluates a poll and returns an object with evaluation data in it */
	public evaluate(): Evaluation {
		// @todo
		return null;
	}

	/** Returns true if the poll is currently running, otherwise false */
	public isRunning(): boolean {
		// @todo
		return false;
	}
}
