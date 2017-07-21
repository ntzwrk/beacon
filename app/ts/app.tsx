import * as React from "react";
import * as ReactDOM from "react-dom";
import {
	HashRouter, Route
} from "react-router-dom";

import {Landing} from "./pages/Landing";
import {Layout} from "./pages/Layout";
import {SubmitPoll} from "./pages/SubmitPoll";
import {ViewPoll} from "./pages/ViewPoll";


const appElement = document.getElementById("app");

export const App = () => (
    <Layout>
		<Route path="/" exact component={Landing}></Route>
		<Route path="/view" component={ViewPoll}></Route>
		<Route path="/submit" component={SubmitPoll}></Route>
	</Layout>
);

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
appElement);
