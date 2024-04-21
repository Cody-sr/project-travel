import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg fixed-top">
					<div className="container">
						<Link to="/" className="navbar-brand">
							Offcanvas navbar
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasNavbar"
							aria-controls="offcanvasNavbar"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="offcanvas offcanvas-start navbar-collapse w-auto"
							tabIndex="-1"
							id="offcanvasNavbar"
							aria-labelledby="offcanvasNavbarLabel"
						>
							<div className="offcanvas-header">
								<h5 className="offcanvas-title" id="offcanvasNavbarLabel">
									Offcanvas
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="offcanvas"
									aria-label="Close"
								></button>
							</div>
							<div className="offcanvas-body ms-lg-auto mb-2 mb-lg-0">
								<NavMenu />
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}

export default Navbar;

function NavMenu() {
	const menu = [
		{ lable: "Home", href: "/" },
		{ lable: "About us", href: "/about-us" },
		{ lable: "Why Tripy Treks", href: "/why-tripy-treks" },
		{ lable: "Popular Destinations", href: "/popular-destinations" },
		{ lable: "Contact us", href: "/contact-us" },
	];

	return (
		<>
			<ul className="navbar-nav">
				{menu.map((items) => (
					<li className="nav-item" key={items.lable}>
						<NavLink to={items.href} className="nav-link">
							{items.lable}
						</NavLink>
					</li>
				))}
			</ul>
		</>
	);
}
