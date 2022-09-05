import { FC, useState } from "react"
import { Header } from "./components/layout"
import { MovieList, MovieSearch } from "./components/ui/movies"

import { Movie } from "./ts/interfaces/movie.interfaces"

import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "./styles/theme"
import * as S from "./components/layout/styles"

const App: FC = () => {
	const [theme, setTheme] = useState("dark")
	const [searchResults, setSearchResults] = useState<Movie[]>([])
	const [searching, setSearching] = useState<boolean>(false)
	const [error, setError] = useState(false)

	const isDarkTheme = theme === "dark"

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Header isDarkTheme={isDarkTheme} setTheme={setTheme} />
			<S.Main>
				<S.Section>
					<MovieSearch setSearchResults={setSearchResults} setSearching={setSearching} setError={setError} />
				</S.Section>
				<S.Section>
					<MovieList searchResults={searchResults} searching={searching} error={error} />
				</S.Section>
			</S.Main>
		</ThemeProvider>
	)
}

export default App
