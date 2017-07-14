import {examplePoll} from "./exampleData/Poll";
import {
	dummyVote,
	exampleVotes,
	voteA as exampleVoteA,
	serializedVoteA as serializedExampleVoteA,
	serializedVoteTest_wrongVersion,
	serializedVoteTest_noVersion,
	serializedVoteTest_wrongPollId,
	serializedVoteTest_wrongDecisionType
} from "./exampleData/Votes";
import {Poll} from "../app/ts/models/Poll";

describe("Vote", () => {
	it("sets the respective poll correctly", () => {
		chai.assert.strictEqual(Poll.createFromPollId(exampleVoteA.pollId), examplePoll);
	});

	it("sets the decision correctly", () => {
		chai.assert.strictEqual(exampleVoteA.decision, examplePoll.decisions[0]);
	});

	it("serializes correctly", () => {
		chai.assert.strictEqual(exampleVoteA.toJson(), serializedExampleVoteA);
	});

	it("deserializes correctly", () => {
		dummyVote.loadFromJson(serializedExampleVoteA);
		chai.assert.deepEqual(exampleVoteA, dummyVote);

		chai.assert.throws(() => dummyVote.loadFromJson(serializedVoteTest_wrongVersion), Error, "No or invalid 'version' attribute found in serialized vote");
		chai.assert.throws(() => dummyVote.loadFromJson(serializedVoteTest_noVersion), Error, "No or invalid 'version' attribute found in serialized vote");
		chai.assert.throws(() => dummyVote.loadFromJson(serializedVoteTest_wrongPollId), Error, "No or invalid 'pollId' attribute found in serialized vote");
		chai.assert.throws(() => dummyVote.loadFromJson(serializedVoteTest_wrongDecisionType), Error, "No or invalid 'decision' attribute found in serialized vote");
		chai.assert.throws(() => dummyVote.loadFromJson("this is no valid json"), Error, "No valid JSON data found");
	});
});
