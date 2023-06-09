import Image from "next/image";
import React from "react";
import imageBg from "../../../public/assets/images/about-image/finish-project.jpg";

function FinishedProjects() {
	return (
		<div className="finish-project relative mb-24 pb-100px pt-100px">
			<Image src={imageBg} fill alt="" />
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-sm-6 mb-lm-30px">
						<div className="single-project text-center">
							<h2 className="counter">1250</h2>
							<span className="counter-heading">Affiliates</span>
						</div>
					</div>

					<div className="col-md-3 col-sm-6 mb-lm-30px">
						<div className="single-project text-center">
							<h2 className="counter">1400</h2>
							<span className="counter-heading">Organizations</span>
						</div>
					</div>

					<div className="col-md-3 col-sm-6 mb-sm-30px">
						<div className="single-project text-center">
							<h2 className="counter">1450</h2>
							<span className="counter-heading">Collections</span>
						</div>
					</div>

					<div className="col-md-3 col-sm-6">
						<div className="single-project text-center">
							<h2 className="counter">1700</h2>
							<span className="counter-heading">Countries</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FinishedProjects;
