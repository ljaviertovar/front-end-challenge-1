import { ChangeEvent, FC, useEffect, useState } from "react"
import useDebounce from "../../../hooks/useDebounce"

import movieApi from "../../../api/movieApi"

import { Movie } from "../../../ts/interfaces/movie.interfaces"

import * as S from "./styles"

import iconSearch from "../../../assets/icons/icons-search.svg"

interface Props {
	setSearchResults(movies: Movie[]): void
	setSearching(searching: boolean): void
	setError(error: boolean): void
}

const MovieSearch: FC<Props> = ({ setSearchResults, setSearching, setError }) => {
	const [searchTitle, setSearchTitle] = useState("")

	const debouncedValue = useDebounce<string>(searchTitle)

	useEffect(() => {
		if (debouncedValue.length >= 3) {
			setSearching(true)

			movieApi
				.get<any>(`?apikey=${import.meta.env.VITE_API_KEY_MOVIES}&s=${debouncedValue}&page=1&plot=short&r=json`)
				.then(response => {
					if (response.data.Response === "True") {
						setSearchResults(response?.data?.Search)
						localStorage.setItem("movieIds", JSON.stringify(response?.data?.Search.map((m: Movie) => m.imdbID)))
					} else {
						setSearchResults([])
						localStorage.setItem("movieIds", JSON.stringify([]))
					}
				})
				.catch(err => {
					console.log({ err })
					setError(true)
				})
				.finally(() => setSearching(false))
		} else {
			setSearchResults([])
		}
	}, [debouncedValue])

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTitle(event.target.value)
	}

	return (
		<S.InputSearch>
			<input type='text' placeholder='What are you looking for?' onChange={handleChange} value={searchTitle} />
			<div>
				<img src={iconSearch} className='logo react' alt='React logo' />
			</div>
		</S.InputSearch>
	)
}

export default MovieSearch
