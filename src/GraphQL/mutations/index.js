import { gql } from "@apollo/client";

export const POST_NEW_JOB_MUTATION = gql`
	mutation newJobPost($job: PostJobInput!) {
		postJob(input: $job) {
			id
			title
		}
	}
`;
