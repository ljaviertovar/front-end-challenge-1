import axios from "axios"

const movieApi = axios.create({
	baseURL: "http://www.omdbapi.com/",
	headers: {
		"Content-Type": "application/json",
	},
})

export default movieApi
