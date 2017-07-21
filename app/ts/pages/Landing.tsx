import * as React from "react";
import {Link} from "react-router-dom";

export class Landing extends React.Component<any, any> {
	render() {
		return (
			<div style={{textAlign: "center"}}>
				<h1>Beacon</h1>
				<div>decentralized, transparent voting</div>

				<div style={{marginTop: "25px"}}>
					<Link to="/view" className="btn btn-default" style={{margin: "5px"}}>View a poll</Link>
					<Link to="/submit" className="btn btn-default" style={{margin: "5px"}}>Submit a poll</Link>
				</div>
			</div>
		);
	}
}
