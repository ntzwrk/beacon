import * as React from "react";
import {Route, Switch} from "react-router-dom";

import {ViewPollById} from "./ViewPollById";
import {ViewPollSelection} from "./ViewPollSelection";

export const ViewPoll = () => (
	<Switch>
		<Route path="/view" exact component={ViewPollSelection} />
		<Route path="/view/:pollId" component={ViewPollById} />
	</Switch>
);
