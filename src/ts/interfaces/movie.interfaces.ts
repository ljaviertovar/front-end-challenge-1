export interface SearchMovieList {
	Search: Movie[]
	totalResults: string
}

export interface Movie {
	Poster: string
	Title: string
	Type: string
	Year: string
	imdbID: string
}

export interface Timer {
	time: number
	seconds: number
	minuts: number
}
