import {exampleAttributes} from "./Attributes";
import {exampleDecisions} from "./Decisions";
import {exampleVotes} from "./Votes";
import {Poll} from "../../app/ts/models/Poll";


export var exampleTitle: string = "What should I do today?";
export var exampleDescription: string = "Don't know what I should do today, so please help me with the decision.";
export var exampleImage: string = "https://example.com/nothing-here.png";
export var someDay: number = (new Date(2017, 6, 12)).getTime(); // 2017-07-12 00:00
export var aDayLater: number = (new Date(2017, 6, 13)).getTime(); // 2017-07-13 00:00
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

export var serializedExamplePoll: string = '{"version":1,"title":"What should I do today?","description":"Don\'t know what I should do today, so please help me with the decision.","imageUrl":"https://example.com/nothing-here.png","startDate":1499810400000,"endDate":1499896800000,"multipleDecisionsPossible":false,"decisions":["Be nice","Walk the dog","Go on adventure","Stay in bed"],"requireAllAttributes":false,"requiredAttributes":["exampleAttributeA","exampleAttributeB"],"pollId":"examplePoll"}';


export var dummyPoll: Poll = new Poll("", "", "", 0, 0, false, [], false, []);
dummyPoll.pollId = "dummyPoll";
