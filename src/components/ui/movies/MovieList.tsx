import { FC } from "react"
import MovieCard from "./MovieCard"

import { Movie } from "../../../ts/interfaces/movie.interfaces"

import * as S from "./styles"

interface Props {
	searchResults: Movie[]
	searching: boolean
	error: boolean
}

const MovieList: FC<Props> = ({ searchResults, searching, error }) => {
	if (searching) {
		return (
			<S.Searching>
				<p>Searching...</p>
			</S.Searching>
		)
	}

	if (error) {
		return (
			<S.ErrorDiv>
				<p>An error has occurred</p>
			</S.ErrorDiv>
		)
	}

	if (searchResults.length === 0) {
		return (
			<S.EmptyList>
				<p>Nothing to show.</p>
			</S.EmptyList>
		)
	}

	return (
		<S.MovieList>
			{searchResults.map((movie: Movie, index) => {
				return (
					<MovieCard movie={movie} moviePos={index}>
						{movie.Title}
					</MovieCard>
				)
			})}
		</S.MovieList>
	)
}

export default MovieList
