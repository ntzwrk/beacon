import {Attribute} from './Attribute';
import {Evaluation} from './Evaluation';
import {Publishable} from './Publishable';
import {Vote} from './Vote';

// @todo
import {examplePoll} from '../../../test/exampleData/Poll';
import {exampleVotes} from '../../../test/exampleData/Votes';

/** Class representing a poll */
export class Poll extends Publishable {
	/** An unique id for the poll */
	protected pollId: string;

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
		super();
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

	public toJson(): string {
		// More information on the second (the replacer) parameter:
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter

		return JSON.stringify(this, (key, value) => {
			if(key === "votes") {
				return undefined;
			} else {
				return value;
			}
		});
	}

	public loadFromJson(jsonString: string): void {
		// More information on the second (the reviver) parameter:
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter

		JSON.parse(jsonString, (key, value) => {
			switch(key) {
				case "title":
					this.title = value;
					break;
				case "description":
					this.description = value;
					break;
				case "imageUrl":
					this.imageUrl = value;
					break;
				case "startDate":
					this.startDate = value;
					break;
				case "endDate":
					this.endDate = value;
					break;
				case "multipleDecisionsPossible":
					this.multipleDecisionsPossible = value;
					break;
				case "decisions":
					// @fixme decisions is [undefined, ...] at this point
					this.decisions = value;
					break;
				case "requireAllAttributes":
					this.requireAllAttributes = value;
					break;
				case "requiredAttributes":
					// @fixme requiredAttributes is [{}, {}] at this point
					this.requiredAttributes = value;
					break;
				case "version":
					this.version = value;
					break;
			}
		});

		this.loadVotesFromAtlas();
	}

	/** Sets an array of votes */
	public setVotes(votes: Vote[]): void {
		this.votes = votes;
	}

	/** Returns an array of votes a poll got */
	public getVotes(): Vote[] {
		return this.votes;
	}

	public static createFromPollId(pollId: string): Poll {
		// @todo
		return examplePoll;
	}

	/** Loads all respective votes that are visible on Atlas */
	public loadVotesFromAtlas(): void {
		// @todo
		this.votes = exampleVotes;
	}

	/** Evaluates a poll and returns an object with evaluation data in it */
	public evaluate(): Evaluation {
		// @todo
		return null;
	}

	/** Returns true if the poll is currently running, otherwise false */
	public isRunning(date: number = Date.now()): boolean {
		return (this.startDate <= date) && (date <= this.endDate);
	}
}
