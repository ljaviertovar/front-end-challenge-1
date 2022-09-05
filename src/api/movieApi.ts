import axios from "axios"

const movieApi = axios.create({
	baseURL: "https://www.omdbapi.com/",
	headers: {
		"Content-Type": "application/json",
	},
})

export default movieApi
