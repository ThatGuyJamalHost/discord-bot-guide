import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import termsFrPath from "./DiscordjsNoob.md";

class introPage extends Component {
	constructor(props) {
		super(props);

		this.state = { terms: null };
	}

	componentWillMount() {
		fetch(termsFrPath)
			.then((response) => response.text())
			.then((text) => {
				this.setState({ terms: text });
			});
	}

	render() {
		return (
			<div className="home-page-main">
				<ReactMarkdown source={this.state.terms} />
			</div>
		);
	}
}

export default introPage;
