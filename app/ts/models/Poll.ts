import {Attribute} from './Attribute';
import {Evaluation} from './Evaluation';
import {Publishable} from './Publishable';
import {Vote} from './Vote';

// @todo
import {exampleAttributeA, exampleAttributeB} from '../../../test/exampleData/Attributes';
import {examplePoll} from '../../../test/exampleData/Poll';
import {exampleVotes} from '../../../test/exampleData/Votes';

/** Class representing a poll */
export class Poll extends Publishable {
	/** An unique id for the poll */
	public pollId: string;

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
		// @todo refactor

		try {
			var loadedPoll: Poll = JSON.parse(jsonString);
		} catch(e) {
			throw new Error("No valid JSON data found");
		}

		switch(loadedPoll.version) {
			case 1:
				if(typeof loadedPoll.pollId === "string" && loadedPoll.pollId != "") {
					this.pollId = loadedPoll.pollId;
				} else {
					throw new Error("No or invalid 'pollId' attribute found in serialized poll");
				}

				if(typeof loadedPoll.title === "string") {
					this.title = loadedPoll.title;
				} else {
					throw new Error("No or invalid 'title' attribute found in serialized poll");
				}

				if(typeof loadedPoll.description === "string") {
					this.description = loadedPoll.description;
				} else {
					throw new Error("No or invalid 'description' attribute found in serialized poll");
				}

				if(typeof loadedPoll.imageUrl === "string") {
					this.imageUrl = loadedPoll.imageUrl;
				} else {
					throw new Error("No or invalid 'imageUrl' attribute found in serialized poll");
				}

				if(typeof loadedPoll.startDate === "number") {
					this.startDate = loadedPoll.startDate;
				} else {
					throw new Error("No or invalid 'startDate' attribute found in serialized poll");
				}

				if(typeof loadedPoll.endDate === "number") {
					this.endDate = loadedPoll.endDate;
				} else {
					throw new Error("No or invalid 'endDate' attribute found in serialized poll");
				}

				if(typeof loadedPoll.multipleDecisionsPossible === "boolean") {
					this.multipleDecisionsPossible = loadedPoll.multipleDecisionsPossible;
				} else {
					throw new Error("No or invalid 'multipleDecisionsPossible' attribute found in serialized poll");
				}

				if(Array.isArray(loadedPoll.decisions)) {
					if(loadedPoll.decisions.length > 0) {
						this.decisions = loadedPoll.decisions;
					} else {
						throw new Error("Attribute 'decisions' is empty");
					}
				} else {
					throw new Error("No or invalid 'decisions' attribute found in serialized poll");
				}

				if(typeof loadedPoll.requireAllAttributes === "boolean") {
					this.requireAllAttributes = loadedPoll.requireAllAttributes;
				} else {
					throw new Error("No or invalid 'requireAllAttributes' attribute found in serialized poll");
				}

				if(Array.isArray(loadedPoll.requiredAttributes)) {
					loadedPoll.requiredAttributes.forEach((attribute: any) => {
						// @todo
						switch(attribute.identifier) {
							case "exampleAttributeA":
								this.requiredAttributes.push(new exampleAttributeA());
								break;
							case "exampleAttributeB":
								this.requiredAttributes.push(new exampleAttributeB());
								break;
						}
					});
				} else {
					throw new Error("No or invalid 'requiredAttributes' attribute found in serialized poll");
				}

				this.version = loadedPoll.version;

				this.loadVotesFromAtlas();
				break;

			default:
				throw new Error("No or invalid 'version' attribute found in serialized poll");
		}
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
