import Layout from "@/layout";
import Link from "next/link";
import React from "react";

function NotFoundPage() {
	return (
		<Layout>
			<div className="blank-page-area d-flex height-section">
				<div className="container align-self-center">
					<div className="row">
						<div className="col-md-12 ">
							<div className="text-content text-center">
								<h2 className="title">
									4<span>0</span>4
								</h2>
								<h3 className="title-2">
									Oops! <span>Page Not Found</span>
								</h3>
								<p>The page you were looking for could not be found.</p>
								<Link href="/" className="btn btn-primary btn-hover-dark">
									Rturn Home
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default NotFoundPage;
