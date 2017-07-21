import * as React from "react";
import {Link} from "react-router-dom";

export class ViewPollSelection extends React.Component<any, {pollId: string}> {
	constructor(props: any) {
		super(props);

		this.state = {pollId: ""};

		this.navigateToPoll = this.navigateToPoll.bind(this);
		this.updatePollId = this.updatePollId.bind(this);
	}

	navigateToPoll() {
		if(this.state.pollId != "") {
			this.props.history.push("/view/" + this.state.pollId);
		}
	}

	updatePollId(event: any) {
		this.setState({pollId: event.target.value});
	}

	render() {
		return (
			<div>
				<h1>Please enter a poll id</h1>
				<div className="input-group col-lg-6">
					<input type="text" className="form-control" placeholder="poll id (transaction id)" value={this.state.pollId} onChange={this.updatePollId} />
					<span className="input-group-btn">
						<button className="btn btn-default" type="button" onClick={this.navigateToPoll}>View</button>
					</span>
				</div>
				<Link to=".." className="btn btn-default" style={{marginTop: "10px"}}>Back</Link>
			</div>
		);
	}
}
