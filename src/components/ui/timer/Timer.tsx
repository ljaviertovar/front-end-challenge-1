import { useEffect, useState } from "react"
import { formatSeconds } from "../../../utils/timeUtils"

const Timer = () => {
	const [seconds, setSeconds] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(prevSeconds => prevSeconds + 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return <div>Your time: {formatSeconds(seconds)}</div>
}

export default Timer
