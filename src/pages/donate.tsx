import Layout from "@/layout";
import React from "react";

function DonatePage() {
	return (
		<Layout>
			<div className="my-24">
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
							placeholder="Enter your pledged donation"
							className="input input-bordered border mt-4 input-primary w-full"
						/>
						<textarea
							className="textarea h-40 border resize-none"
							placeholder="Dedication"
						></textarea>
						<button className="text-white bg-redPrimary px-4 py-2 rounded-md font-bold">
							Donate
						</button>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default DonatePage;
