import styled from "styled-components"

export const InputSearch = styled.div`
	width: 100%;
	position: relative;
	display: flex;

	input {
		width: 100%;
		height: 36px;
		border: 3px solid ${({ theme }) => theme.colors.main};
		border-right: none;
		padding: 5px;
		border-radius: 5px 0 0 5px;
		outline: none;

		&:focus {
			border-color: ${({ theme }) => theme.colors.shadowMain};
		}
	}

	div {
		width: 40px;
		height: 36px;
		border: 1px solid ${({ theme }) => theme.colors.main};
		background: ${({ theme }) => theme.colors.main};
		text-align: center;
		color: ${({ theme }) => theme.colors.btnText};
		border-radius: 0 5px 5px 0;
		font-size: 20px;
	}

	img {
		width: 100%;
		padding: 0.5rem;
	}
`
export const CardMovie = styled.div`
	/* background-color: ${({ theme }) => theme.colors.dark}; */
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	button {
		padding: 0.2rem 0.5rem;
		border-radius: 3px;
		color: ${({ theme }) => theme.colors.btnText};
		border: 1px solid ${({ theme }) => theme.colors.main};
		background-color: ${({ theme }) => theme.colors.main};
		font-family: "Robot", sans-serif;
		font-weight: 500;
		transition: 0.3s ease all;

		&:hover {
			background-color: ${({ theme }) => theme.colors.shadowMain};
		}
	}
`

export const ImageContainer = styled.div`
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const MovieTitle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 0.5rem 0;
	h3 {
		height: 46px;
		text-overflow: ellipsis;
		overflow: hidden;
		margin: 0;
	}
`

export const MovieList = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 1rem;
	text-align: center;
`
export const EmptyList = styled.div`
	width: 100%;
	margin: auto;
	text-align: center;
	font-size: 1.5rem;
`
export const Searching = styled.div`
	width: 100%;
	margin: auto;
	text-align: center;
	font-size: 1.5rem;
`
export const ErrorDiv = styled.div`
	width: 100%;
	margin: auto;
	text-align: center;
	color: tomato;
	font-size: 1.5rem;
`
