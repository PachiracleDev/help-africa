import { useEffect, useState } from "react";

function DateCount() {
	const finishDate = new Date("May 27, 2023 16:00:00").getTime();

	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = finishDate - now;
			setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
			setHours(
				Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			);
			setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
			setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
		}, 1000);
		return () => clearInterval(interval);
	}, [finishDate]);

	return (
		<div>
			<div className=" d-flex text-white text-sm gap-12 justify-content-center">
				<div className=" border p-2 w-20">
					<div className=" flex flex-col gap-1 items-center">
						<span className=" text-3xl">{days}</span>
						<span className="countdown-text">Days</span>
					</div>
				</div>
				<div className=" border p-2 w-20">
					<div className=" flex flex-col gap-1 items-center">
						<span className="days text-3xl">{hours}</span>
						<span className="countdown-text">Hours</span>
					</div>
				</div>
				<div className="countdown-item border p-2 w-20">
					<div className="countdown-number flex flex-col gap-1 items-center">
						<span className="days text-3xl">{minutes}</span>
						<span className="countdown-text">Minutes</span>
					</div>
				</div>
				<div className=" border p-2 w-20">
					<div className=" flex flex-col gap-1 items-center">
						<span className="days text-3xl">{seconds}</span>
						<span className="countdown-text">Seconds</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DateCount;
