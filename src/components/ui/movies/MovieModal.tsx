import { Modal } from "../modals"
import * as S from "../modals/styles"

import { ModalPositionX, ModalPositionY } from "../../../ts/interfaces/modal.interface"
import { FC, useEffect, useState } from "react"
import { movieApi } from "../../../api"

const MODAL_CONFIG = {
	title: "",
	showHeader: false,
	showOverlay: true,
	positionX: ModalPositionX.center,
	positionY: ModalPositionY.center,
	padding: "20px",
}

interface Props {
	id: string
	openModal: boolean
	moviePos: number
	setOpenModal(open: boolean): void
}

const MovieModal: FC<Props> = ({ id, openModal, setOpenModal, moviePos }) => {
	const [movie, setMovie] = useState<any>(null)
	const [moviPostId, setMoviPostId] = useState(moviePos)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		setLoading(true)
		if (openModal) {
			getMovie(id)
		}
	}, [id, openModal])

	const getMoviePos = (pos: number, posType: string) => {
		const movieIds = JSON.parse(localStorage.getItem("movieIds") || "[]")
		const newPos = posType === "next" ? pos + 1 : pos - 1
		const moviePosId = movieIds[newPos]

		if (newPos >= 0 && newPos < movieIds.length) setMoviPostId(newPos)

		if (moviePosId) getMovie(moviePosId)
	}

	const getMovie = (idMovie: string) => {
		movieApi
			.get<any>(`?apikey=${import.meta.env.VITE_API_KEY_MOVIES}&i=${idMovie}&plot=short&r=json`)
			.then(response => {
				setMovie(response.data)
			})
			.catch(err => {
				console.log({ err })
				setError(true)
			})
			.finally(() => setLoading(false))
	}

	if (loading) {
		return null
	}

	return (
		<Modal show={openModal} setShow={setOpenModal} config={MODAL_CONFIG}>
			<>
				{error ? (
					<S.ErrorDiv>
						<p>An error has occurred</p>
					</S.ErrorDiv>
				) : (
					<>
						<S.DetailsContainer>
							<S.DetailsImg>
								<img src={movie?.Poster} alt={movie?.Title} />
							</S.DetailsImg>
							<S.Details>
								<h3>{movie?.Title}</h3>
								<p>
									<strong>Genre: </strong>
									{movie?.Genre}
								</p>
								<p>
									<strong>Language: </strong>
									{movie?.Language}
								</p>
								<p>
									<strong>Year: </strong>
									{movie?.Year}
								</p>
								<p>
									<strong>Director: </strong>
									{movie?.Director}
								</p>
								<p>
									<strong>Plot: </strong>
									{movie?.Plot}
								</p>
							</S.Details>
						</S.DetailsContainer>

						<S.ModalBtns>
							<S.ModalButtonSecondary disabled={false} onClick={() => getMoviePos(moviPostId, "prev")}>
								Prev
							</S.ModalButtonSecondary>
							<S.ModalButtonSecondary disabled={false} onClick={() => getMoviePos(moviPostId, "next")}>
								Next
							</S.ModalButtonSecondary>
						</S.ModalBtns>
					</>
				)}
			</>
		</Modal>
	)
}

export default MovieModal
