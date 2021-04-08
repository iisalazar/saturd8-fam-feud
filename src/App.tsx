import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/molecules/Navbar";
import Dashboard from "./components/pages/Dashboard";
import AnswersDashboard from "./components/pages/AnswersDashboard";
import QuestionsPage from "./components/templates/QuestionsPage";
import AnswersPage from "./components/templates/AnswersPage";
import "./App.scss";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar logoText="Saturd8 Family Feud" />
				<div className="body">
					<Switch>
						<Route path="/questions/:id" component={QuestionsPage} />
						<Route path="/answers/:id" component={AnswersPage} />
						<Route exact path="/answers/" component={AnswersDashboard} />
						<Route exact path="/" component={Dashboard} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
