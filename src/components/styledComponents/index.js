import styled from "styled-components";

export const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	justify-content: flex-start;
`;

export const Heading = styled.h1`
	color: navy;
	margin: 1rem;
	text-align: center;
	font-family: sans-serif;
	span {
		color: black;
	}
`;

export const SubHeading = styled.h3`
	color: maroon;
	margin: 1rem;
	text-align: center;
	font-family: sans-serif;
`;

export const Form = styled.form`
	width: 80%;
	font-size: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-content: flex-start;
	align-items: flex-start;
	@media all and (max-width: 500px) {
		width: 100%;
		font-size: 0.7rem;
	}
`;

export const InputSection = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2rem 0rem;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	width: 100%;
`;

export const Label = styled.label`
	color: navy;
	text-align: left;
	font-weight: 1000;
`;

export const Input = styled.input`
	border: none;
	width: 100%;
	outline: none;
	border-bottom: 1px solid black;
	border-radius: 1px;
	font-size: 1rem;
	color: navy;
	transition: all 0.2s ease-in-out;
	padding: 1rem 1rem 0rem 1rem;
	:focus {
		border-bottom: 2px solid navy;
		border-radius: 2px;
	}
`;

export const Button = styled.button`
	display: flex;
	align-self: center;
	font-family: sans-serif;
	font-weight: 500;
	letter-spacing: 0.1rem;
	font-size: 1rem;
	background-color: ${(props) =>
		props.disabled === true ? "skyblue" : "navy"};
	color: white;
	border: 0.3rem solid white;
	border-radius: 10px;
	padding: 0.5rem 1rem;
	width: auto;
	margin: 1rem;
	:focus {
		outline: none;
	}
`;
