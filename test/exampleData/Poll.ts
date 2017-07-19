import {exampleAttributes} from "./Attributes";
import {exampleDecisions} from "./Decisions";
import {exampleVotes} from "./Votes";
import {Poll} from "../../app/ts/models/Poll";


export var exampleTitle: string = "What should I do today?";
export var exampleDescription: string = "Don't know what I should do today, so please help me with the decision.";
export var exampleImage: string = "https://example.com/nothing-here.png";
export var someDay: number = Date.UTC(2017, 6, 12); // 2017-07-12 00:00 UTC
export var aDayLater: number = Date.UTC(2017, 6, 13); // 2017-07-13 00:00 UTC
export var multipleDecisionsPossible: boolean = false;
export var requireAllAttributes: boolean = false;


export var examplePoll: Poll = new Poll(
	exampleTitle,
	exampleDescription,
	exampleImage,
	someDay,
	aDayLater,
	multipleDecisionsPossible,
	exampleDecisions,
	requireAllAttributes,
	exampleAttributes
);
examplePoll.pollId = "examplePoll";
examplePoll.setVotes(exampleVotes);

export var serializedExamplePoll: string = '{"version":1,"title":"What should I do today?","description":"Don\'t know what I should do today, so please help me with the decision.","imageUrl":"https://example.com/nothing-here.png","startDate":1499817600000,"endDate":1499904000000,"multipleDecisionsPossible":false,"decisions":["Be nice","Walk the dog","Go on adventure","Stay in bed"],"requireAllAttributes":false,"requiredAttributes":[{"identifier":"exampleAttributeA"},{"identifier":"exampleAttributeB"}],"pollId":"examplePoll"}';


export var dummyPoll: Poll = new Poll("", "", "", 0, 0, false, [], false, []);
dummyPoll.pollId = "dummyPoll";


export var serializedPollTest_invalidJson: string = '{"version":2,"title":"What should I do today?","description":"Don\'t know what I should do today, so please help me with the decision.","imageUrl":"https://example.com/nothing-here.png","startDate":1499817600000,"endDate":1499904000000,"multipleDecisionsPossible":false,"decisions":["Be nice","Walk the dog","Go on adventure","Stay in bed"],"requireAllAttributes":false,"requiredAttributes":[{"identifier":"exampleAttributeA"},{"identifier":"exampleAttributeB"}],"pollId":"examplePoll"}';
export var serializedPollTest_noVersion: string = '{"title":"What should I do today?","description":"Don\'t know what I should do today, so please help me with the decision.","imageUrl":"https://example.com/nothing-here.png","startDate":1499817600000,"endDate":1499904000000,"multipleDecisionsPossible":false,"decisions":["Be nice","Walk the dog","Go on adventure","Stay in bed"],"requireAllAttributes":false,"requiredAttributes":[{"identifier":"exampleAttributeA"},{"identifier":"exampleAttributeB"}],"pollId":"examplePoll"}';
export var serializedPollTest_unknownVersion: string = '{"version":2,"title":"What should I do today?","description":"Don\'t know what I should do today, so please help me with the decision.","imageUrl":"https://example.com/nothing-here.png","startDate":1499817600000,"endDate":1499904000000,"multipleDecisionsPossible":false,"decisions":["Be nice","Walk the dog","Go on adventure","Stay in bed"],"requireAllAttributes":false,"requiredAttributes":[{"identifier":"exampleAttributeA"},{"identifier":"exampleAttributeB"}],"pollId":"examplePoll"}';
export var serializedPollTest_noDecisions: string = '{"version":1,"title":"What should I do today?","description":"Don\'t know what I should do today, so please help me with the decision.","imageUrl":"https://example.com/nothing-here.png","startDate":1499817600000,"endDate":1499904000000,"multipleDecisionsPossible":false,"requireAllAttributes":false,"requiredAttributes":[{"identifier":"exampleAttributeA"},{"identifier":"exampleAttributeB"}],"pollId":"examplePoll"}';
export var serializedPollTest_emptyPollId: string = '{"version":1,"title":"What should I do today?","description":"Don\'t know what I should do today, so please help me with the decision.","imageUrl":"https://example.com/nothing-here.png","startDate":1499817600000,"endDate":1499904000000,"multipleDecisionsPossible":false,"decisions":["Be nice","Walk the dog","Go on adventure","Stay in bed"],"requireAllAttributes":false,"requiredAttributes":[{"identifier":"exampleAttributeA"},{"identifier":"exampleAttributeB"}],"pollId":""}';
export var serializedPollTest_wrongTitle: string = '{"version":1,"Title":"What should I do today?","description":"Don\'t know what I should do today, so please help me with the decision.","imageUrl":"https://example.com/nothing-here.png","startDate":1499817600000,"endDate":1499904000000,"multipleDecisionsPossible":false,"decisions":["Be nice","Walk the dog","Go on adventure","Stay in bed"],"requireAllAttributes":false,"requiredAttributes":[{"identifier":"exampleAttributeA"},{"identifier":"exampleAttributeB"}],"pollId":"examplePoll"}';
