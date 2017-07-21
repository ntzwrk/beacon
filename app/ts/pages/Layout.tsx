import * as React from "react";

export class Layout extends React.Component<any, any> {
	render() {
		return (
			<div className="container" style={{marginTop: "60px"}}>
				<div className="row">
					<div className="col-md-8 col-md-offset-2" style={{padding: "25px", backgroundColor: "#f2f2f2", borderRadius: "5px"}}>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}
