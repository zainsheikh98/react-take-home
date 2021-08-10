import React, { useState } from "react";
// FUNCTION FOR DISPLAYING ALERTS
import Alert from "../utilities/Alert";
// STYLED COMPONENTS
import {
	Button,
	Input,
	InputSection,
	Label,
	SubHeading,
	Form,
	Heading,
} from "../styledComponents";

// APOLLO HOOK FOR GRAPHQL MUTATIONS
import { useMutation } from "@apollo/client";

// GRAPHQL MUTATION
import { POST_NEW_JOB_MUTATION } from "../../GraphQL/mutations";

// MAIN COMPONENT
const JobForm = () => {
	// INIT. USEMUTATION HOOK WITH THE GRAPHQL MUTATION
	const [newJobPost, { error }] = useMutation(POST_NEW_JOB_MUTATION);

	// KEEPING TRACK OF STATE OF FORM WETHER SUBMITTED OR NOT
	const [loading, setLoading] = useState(false);

	// SAVING FORM DATA IN STATE
	const [jobDetails, setJobDetails] = useState({
		title: "",
		locationNames: "",
		description: "",
		userEmail: "",
		applyUrl: "",
		commitmentId: "cjtu8esth000z0824x00wtp1i",
		companyName: "Trimu Labs",
	});

	// HANDLING CHANGE EVENT ON FORM FIELDS
	const changeHandler = (e) => {
		setJobDetails({
			...jobDetails,
			[e.target.name]: e.target.value,
		});
	};

	// HANDLING FORM SUBMISSION
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// PASSING FORM DATA TO THE MUTATIION WHICH RETURNS A PROMISE EITHER RESOLVED OR REJECTED
		newJobPost({
			variables: {
				job: jobDetails,
			},
		}).then((res) => {
			let id = res.data.postJob.id;
			let title = res.data.postJob.title;
			Alert(
				`Title : ${title} and ID : ${id}`,
				"success",
				"Job Posted Successfully"
			);
			setLoading(false);
		});
	};
	// IF THERE IS ERROR DISPLAY IT
	if (error) {
		Alert(error, "error", "Something Went Wrong");
	}
	// EXTRACTING VALUES FROM LOCAL STATE
	const { title, locationNames, description, userEmail, applyUrl } =
		jobDetails;

	return (
		<Form onSubmit={handleSubmit}>
			<Heading>Post New Job</Heading>
			<SubHeading>All Fields Are Required</SubHeading>
			<InputSection>
				<Label>Job Title</Label>
				<Input
					type="text"
					required
					value={title}
					onChange={changeHandler}
					autoComplete="off"
					size="30"
					placeholder="I.e Software Engineer"
					max-length="50"
					name="title"
				/>
			</InputSection>
			<InputSection>
				<Label>Location For The Job</Label>
				<Input
					type="text"
					required
					value={locationNames}
					onChange={changeHandler}
					autoComplete="off"
					size="30"
					placeholder="Lahore, Punjab, Pakistan"
					max-length="100"
					name="locationNames"
				/>
			</InputSection>
			<InputSection>
				<Label>Job Poster Email</Label>
				<Input
					type="email"
					required
					value={userEmail}
					onChange={changeHandler}
					autoComplete="off"
					size="30"
					placeholder="abc@test.com"
					max-length="50"
					name="userEmail"
				/>
			</InputSection>
			<InputSection>
				<Label>Enter Job Description</Label>
				<Input
					type="text"
					required
					value={description}
					onChange={changeHandler}
					autoComplete="off"
					size="30"
					placeholder="Explain Responsibilities"
					max-length="50"
					name="description"
				/>
			</InputSection>
			<InputSection>
				<Label>URL to Apply For The Job</Label>
				<Input
					type="url"
					required
					value={applyUrl}
					onChange={changeHandler}
					autoComplete="off"
					size="30"
					placeholder="https://xyz.com"
					max-length="50"
					name="applyUrl"
				/>
			</InputSection>
			<Button disabled={loading} type="submit" background={"navy"}>
				{loading ? "Please Wait" : "Submit"}
			</Button>
		</Form>
	);
};

export default JobForm;
