import React from "react";
import Link from "next/link";

function Header() {
	return (
		<>
			<header className="header-wrapper border-b">
				<div className="header-nav bg-theme d-lg-block d-none">
					<div className="container">
						<div className="row">
							<div className="col-md-5 col-lg-5 col-xl-6 align-self-center justify-content-center">
								<div className="follow d-flex">
									<label>Follow Us:</label>
									<ul className="link-follow">
										<li>
											<a
												className="facebook fa fa-facebook"
												title="Facebook"
												href="#"
											></a>
										</li>
										<li>
											<a
												className="twitter fa fa-twitter"
												title="Twitter"
												href="#"
											></a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-7 col-lg-7 col-xl-6 align-self-center text-end">
								<div className="call-to-action">
									<nav>
										<ul>
											<li>
												<a href="mailto:ourmail@domain.com">
													<i className="fa fa-envelope" aria-hidden="true"></i>{" "}
													Email: yourmail@domain.com
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="header-menu sticky-nav bg-white d-lg-block d-none ptb-10px">
					<div className="container">
						<div className="row">
							<div className="col-md-3 d-flex">
								<div className="logo align-self-center">
									<Link href="/">Logo</Link>
								</div>
							</div>
							<div className="col-md-7  d-flex">
								<div className="header-horizontal-menu align-self-center">
									<ul className="menu-content">
										<li className="active menu-dropdown">
											<Link href="/">Home</Link>
										</li>
										<li>
											<Link href="/about">About</Link>
										</li>
										<li className="menu-dropdown">
											<Link href="/orgs">ONGS</Link>
										</li>

										<li className="menu-dropdown">
											<a href="#">FAQ</a>
											<ul className="main-sub-menu">
												<li className="menu-dropdown position-static">
													<a href="#">
														Blog Grid <i className="fa fa-angle-right"></i>
													</a>
													<ul className="main-sub-menu main-sub-menu-2">
														<li>
															<a href="blog-grid-left-sidebar.html">
																Blog Grid Left Sidebar
															</a>
														</li>
														<li>
															<a href="blog-grid-right-sidebar.html">
																Blog Grid Right Sidebar
															</a>
														</li>
													</ul>
												</li>
												<li className="menu-dropdown position-static">
													<a href="#">
														Blog List <i className="fa fa-angle-right"></i>
													</a>
													<ul className="main-sub-menu main-sub-menu-2">
														<li>
															<a href="blog-list-left-sidebar.html">
																Blog List Left Sidebar
															</a>
														</li>
														<li>
															<a href="blog-list-right-sidebar.html">
																Blog List Right Sidebar
															</a>
														</li>
													</ul>
												</li>
												<li className="menu-dropdown position-static">
													<a href="#">
														Blog Single <i className="fa fa-angle-right"></i>
													</a>
													<ul className="main-sub-menu main-sub-menu-2">
														<li>
															<a href="blog-single-left-sidebar.html">
																Blog Single Left Sidebar
															</a>
														</li>
														<li>
															<a href="blog-single-right-sidebar.html">
																Blog Single Right Sidbar
															</a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li>
											<Link href="/contact">Contact</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-2 align-self-center">
								<div className="header-right-element d-flex justify-content-end">
									<Link
										className="btn btn-primary btn-hover-dark"
										href="/donate"
									>
										Donate
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className="mobile-header d-lg-none sticky-nav bg-white border-b ptb-10px">
				<div className="container">
					<div className="row align-items-center">
						<div className="col">
							<div className="header-logo">
								<a href="index.html">Logo</a>
							</div>
						</div>

						<div className="col-auto">
							<div className="header-tools justify-content-end">
								<div className="mobile-menu-toggle align-self-center">
									<a
										href="#offcanvas-mobile-menu"
										className="offcanvas-toggle nav-icon"
									>
										<span></span>
										<span></span>
										<span></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
