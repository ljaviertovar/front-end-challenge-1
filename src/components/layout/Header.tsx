import Timer from "../ui/timer/Timer"
import * as S from "./styles"

interface Props {
	isDarkTheme: boolean
	setTheme: (value: string) => void
}

const Header = ({ isDarkTheme, setTheme }: Props) => {
	const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark")

	return (
		<S.Header>
			<S.HeaderContainer>
				<S.LogoTitle>
					<h1>Best Movies</h1>
				</S.LogoTitle>
				<S.TimeDiv>
					<Timer />
				</S.TimeDiv>
				<S.ButtonSecondary onClick={toggleTheme}>
					{isDarkTheme ? (
						<span aria-label='Light mode' role='img'>
							🌞
						</span>
					) : (
						<span aria-label='Dark mode' role='img'>
							🌜
						</span>
					)}
				</S.ButtonSecondary>
			</S.HeaderContainer>
		</S.Header>
	)
}

export default Header
