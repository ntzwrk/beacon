import * as React from "react";

import {Poll} from "../models/Poll";
import {Vote} from "../models/Vote";

import {examplePoll} from "../../../test/exampleData/Poll";

export class ViewPollById extends React.Component<{match: {params: {pollId: string}}}, {decision: string, poll: Poll}> {
	constructor(props: any) {
		super(props);

		this.state = {decision: "", poll: examplePoll};
		// this.state = {decision: "", poll: Poll.createFromPollId(this.props.match.params.pollId)};

		this.submitVote = this.submitVote.bind(this);
		this.updateVoteDecision = this.updateVoteDecision.bind(this);
	}

	submitVote() {
		// @todo
		var decision: string = "@todo";
		var vote: Vote = new Vote(this.state.poll.pollId, decision);
	}

	updateVoteDecision(event: any) {
        // this.setState({decision: event.target.value, poll: this.state.poll});
		console.log(event.target);
	}

	render() {
		var poll: Poll = this.state.poll;

		if(!poll) {
			return <div>Sorry, we couldn't find that poll :(</div>;
		}

		var decisions = null;
		if(!poll.isRunning()) {
			var type: string = "";
			if(poll.multipleDecisionsPossible) {
				type = "checkbox";
			} else {
				type = "radio";
			}

			decisions = (
				<div onChange={this.updateVoteDecision}>
					{poll.decisions.map((item, index) => (
						<div className={type} key={index}>
							<label><input name="pollDecisions" type={type} key={index} value={item}/>{item}</label>
						</div>
					))}
					<button className="btn btn-default" type="button" onClick={this.submitVote}>Submit vote</button>
				</div>
			);
		} else {
			decisions = (
				<ol>
					{poll.decisions.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ol>
			);
		}


		return (
			<div>
				<h1>Poll: {poll.title}</h1>

				<div style={{margin: "15px"}}>
					<span className="label label-default" style={{margin: "5px"}}>from {(new Date(poll.startDate)).toUTCString()}</span>
					<span className="label label-default" style={{margin: "5px"}}>until {(new Date(poll.endDate)).toUTCString()}</span>
				</div>

				<div>{poll.description}</div>

				<div>Multiple decisions are {!poll.multipleDecisionsPossible ? "not " : ""}possible.</div>

				<div>You need {poll.requireAllAttributes ? "all" : "at least one"} of the following attributes to qualify for voting.</div>

				<ul>
					{poll.requiredAttributes.map((item, index) => (
						<li key={index}>{item.toString()}</li>
					))}
				</ul>

				{decisions}
			</div>
		);
	}
}
