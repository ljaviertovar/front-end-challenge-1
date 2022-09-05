import { FC, ReactNode, useState } from "react"

import { Movie } from "../../../ts/interfaces/movie.interfaces"

import * as S from "./styles"
import MovieModal from "./MovieModal"

interface Props {
	children: ReactNode | ReactNode[]
	movie: Movie
	moviePos: number
}

const MovieCard: FC<Props> = ({ movie, moviePos }) => {
	const [openModal, setOpenModal] = useState<boolean>(false)

	return (
		<>
			<S.CardMovie>
				<S.ImageContainer>
					<img src={movie.Poster} alt={movie.Title} />
				</S.ImageContainer>
				<S.MovieTitle>
					<h3>{movie.Title}</h3>
					<button type='button' onClick={() => setOpenModal(true)}>
						See details
					</button>
				</S.MovieTitle>
			</S.CardMovie>

			<MovieModal id={movie.imdbID} openModal={openModal} setOpenModal={setOpenModal} moviePos={moviePos} />
		</>
	)
}

export default MovieCard
