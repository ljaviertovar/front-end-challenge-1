import styled from "styled-components"

export const Header = styled.header`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.dark};
	padding: 1rem;
`
export const HeaderContainer = styled.div`
	width: 80%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	@media (max-width: 640px) {
		width: 100%;
	}
`

export const LogoTitle = styled.div`
	color: ${({ theme }) => theme.colors.btnText};
	@media (max-width: 640px) {
		h1 {
			font-size: 1.5rem;
		}
	}
`

export const ButtonSecondary = styled.button`
	padding: 0.2rem;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.colors.main};
	border-radius: 3px;
	height: fit-content;

	&:hover {
		background-color: ${({ theme }) => theme.colors.shadowMain};
	}
`
export const Main = styled.main`
	width: 80%;
	margin: auto;
`

export const Section = styled.section`
	width: 100%;
	margin: 2rem auto;
`
export const TimeDiv = styled.div`
	color: #fff;
`
