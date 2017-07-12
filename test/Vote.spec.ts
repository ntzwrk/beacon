import {examplePoll} from "./exampleData/Poll";
import {
	dummyVote,
	exampleVotes,
	voteA as exampleVoteA,
	serializedVoteA as serializedExampleVoteA
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
	});
});
