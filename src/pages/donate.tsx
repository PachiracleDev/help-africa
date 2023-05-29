import Layout from "@/layout";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import Spinner from "react-loading";

function DonatePage() {
	const [dedication, setDedication] = React.useState("");
	const [amount, setAmount] = React.useState(0);
	const [currency, setCurrency] = React.useState("USD");
	const [loading, setLoading] = React.useState(false);

	const handleSubmit = async () => {
		if (!amount || !dedication || !currency)
			return toast.error("Please fill all the fields");

		try {
			setLoading(true);
			const rta = await fetch("/api/donate", {
				method: "POST",
				body: JSON.stringify({
					dedication,
					amount,
					currency,
				}),
			});
			const data = await rta.json();
			setLoading(false);

			window.location.href = data.url;
		} catch (error) {
			setLoading(false);
			toast.error("Something went wrong");
		}
	};

	return (
		<Layout>
			<div className="my-24 p-3">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-3xl text-center ">Enter Your Pledged Donation</h2>
					<p className="text-gray-500 text-sm text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
						quibusdam, voluptatum, quia, quos voluptatem voluptate quod
						asperiores quas voluptatibus doloribus fugiat. Quisquam quibusdam,
					</p>
					<div className="justify-center max-w-sm mx-auto flex flex-col gap-4">
						<input
							type="number"
							value={amount}
							onChange={(e) => setAmount(parseInt(e.target.value))}
							placeholder="Enter your pledged donation"
							className="input input-bordered border mt-4 input-primary w-full"
						/>
						<select
							onChange={(e) => setCurrency(e.target.value)}
							value={currency}
							className="select border  w-full text-gray-600"
						>
							<option disabled selected>
								Currency
							</option>
							<option value="USD">USD</option>
							<option value="EUR">EUR</option>
						</select>
						<textarea
							className="textarea h-40 border resize-none"
							placeholder="Dedication"
							value={dedication}
							onChange={(e) => setDedication(e.target.value)}
						></textarea>
						<button
							onClick={() => handleSubmit()}
							disabled={loading}
							className="text-white justify-center items-center flex bg-primaryCol px-4 py-2 rounded-md font-bold"
						>
							{loading ? (
								<Spinner type="spin" height={20} width={20} color="#fff" />
							) : (
								"Donate"
							)}
						</button>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default DonatePage;
