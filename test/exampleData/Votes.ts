import {exampleDecisions} from "./Decisions";
import {Vote} from "../../app/ts/models/Vote";

export var voteA: Vote = new Vote("examplePoll", exampleDecisions[0]);
export var voteB: Vote = new Vote("examplePoll", exampleDecisions[0]);
export var voteC: Vote = new Vote("examplePoll", exampleDecisions[1]);
export var voteD: Vote = new Vote("examplePoll", exampleDecisions[3]);

export var dummyVote = new Vote("dummyPoll", "dummyDecision");

export var exampleVotes: Vote[] = [voteA, voteB, voteC, voteD];

export var serializedVoteA: string = '{"version":1,"pollId":"examplePoll","decision":"Be nice"}';
