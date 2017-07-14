import {
	dummyPoll,
	examplePoll,
	serializedExamplePoll,
	serializedPollTest_noVersion,
	serializedPollTest_unknownVersion,
	serializedPollTest_noDecisions,
	serializedPollTest_emptyPollId
} from "./exampleData/Poll";
import {exampleVotes} from "./exampleData/Votes";

describe("Poll", () => {
	it("sets votes correctly", () => {
		chai.assert.strictEqual(examplePoll.getVotes(), exampleVotes);
	});

	it("decides correctly whether the poll is running or not", () => {
		// examplePoll started 2017-07-12 00:00 UTC and ended 24h later

		chai.assert.isFalse(examplePoll.isRunning());
		chai.assert.isFalse(examplePoll.isRunning(examplePoll.startDate - 1));
		chai.assert.isTrue(examplePoll.isRunning(examplePoll.startDate));
		chai.assert.isTrue(examplePoll.isRunning(examplePoll.startDate + (1000*60*60*24)));
		chai.assert.isFalse(examplePoll.isRunning(examplePoll.startDate + (1000*60*60*24) + 1));
		chai.assert.isTrue(examplePoll.isRunning(examplePoll.endDate));
		chai.assert.isFalse(examplePoll.isRunning(examplePoll.endDate + 1));
	});

	it("serializes correctly", () => {
		chai.assert.strictEqual(examplePoll.toJson(), serializedExamplePoll);
	});

	it("deserializes correctly", () => {
		dummyPoll.loadFromJson(serializedExamplePoll);
		chai.assert.deepEqual(examplePoll, dummyPoll);

		chai.assert.throws(() => dummyPoll.loadFromJson(serializedPollTest_noVersion), Error, "No or invalid 'version' attribute found in serialized poll");
		chai.assert.throws(() => dummyPoll.loadFromJson(serializedPollTest_unknownVersion), Error, "No or invalid 'version' attribute found in serialized poll");
		chai.assert.throws(() => dummyPoll.loadFromJson(serializedPollTest_noDecisions), Error, "No or invalid 'decisions' attribute found in serialized poll");
		chai.assert.throws(() => dummyPoll.loadFromJson(serializedPollTest_emptyPollId), Error, "No or invalid 'pollId' attribute found in serialized poll");
		chai.assert.throws(() => dummyPoll.loadFromJson("this is invalid json"), Error, "No valid JSON data found");
	});
});
