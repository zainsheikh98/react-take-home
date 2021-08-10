import React from "react";

// COMPONENTS
import JobForm from "../JobForm";
import Header from "../Header";

// STYLED COMPONENTS
import { Container } from "../styledComponents";

// MAIN APP COMPONENT
const App = () => {
	return (
		<Container>
			<Header />
			<JobForm />
		</Container>
	);
};

export default App;
