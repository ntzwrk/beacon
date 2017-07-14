import {exampleDecisions} from "./Decisions";
import {Vote} from "../../app/ts/models/Vote";

export var voteA: Vote = new Vote("examplePoll", exampleDecisions[0]);
export var voteB: Vote = new Vote("examplePoll", exampleDecisions[0]);
export var voteC: Vote = new Vote("examplePoll", exampleDecisions[1]);
export var voteD: Vote = new Vote("examplePoll", exampleDecisions[3]);

export var dummyVote = new Vote("dummyPoll", "dummyDecision");

export var exampleVotes: Vote[] = [voteA, voteB, voteC, voteD];

export var serializedVoteA: string = '{"version":1,"pollId":"examplePoll","decision":"Be nice"}';

export var serializedVoteTest_wrongVersion: string = '{"version":2,"pollId":"examplePoll","decision":"Be nice"}';
export var serializedVoteTest_noVersion: string = '{"pollId":"examplePoll","decision":"Be nice"}';
export var serializedVoteTest_wrongPollId: string = '{"version":1,"pollid":"examplePoll","decision":"Be nice"}';
export var serializedVoteTest_wrongDecisionType: string = '{"version":1,"pollId":"examplePoll","decision":true}';
