import React from "react";
import ReactDOM from "react-dom";

// COMPONENTS
import App from "./components/App";

// APOLLO REQUIREMENTS
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

// CHECKING FOR ERRORS
const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map((message) =>
			console.log(`GraphQL Error : ${message}`)
		);
	}
	if (networkError) {
		console.log(`network Error : ${networkError}`);
	}
});

const link = from([
	errorLink,
	new HttpLink({ uri: "https://api.graphql.jobs/" }),
]);

// SETTING UP APOLLO CLIENT
const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
