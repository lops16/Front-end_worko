import workoLogo from "../../images/Logo-Worköholics.png";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import "./Header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import "animate.css";

export default function Header() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<header>
				<div className="logo">
					<img src={workoLogo} alt="Workoholics" />
				</div>
				<nav className="desktop-nav">
					<ul>
						<li>
							<Link>Productos</Link>
						</li>
						<li>
							<Link>Novedades</Link>
						</li>
						<li>
							<Link>About</Link>
						</li>
					</ul>
				</nav>
				<div className="menu-icons">
					<IconButton className="cart">
						<ShoppingBasketOutlinedIcon />
					</IconButton>
					<IconButton className="user">
						<PersonIcon />
					</IconButton>
				</div>

				<div className="mobile-nav">
					{!isMobileMenuOpen && (
						<IconButton className="burger-menu" onClick={toggleMobileMenu}>
							<MenuIcon />
						</IconButton>
					)}
					{isMobileMenuOpen && (
						<IconButton className="close-menu" onClick={toggleMobileMenu}>
							<CloseIcon />
						</IconButton>
					)}

					{isMobileMenuOpen && (
						<div className="mobile-menu animate__animated animate__fadeInRightBig">
							<div className="menu-list animate__animated animate__slideInLeft animate__delay-1s">
								<ul>
									<li>
										<Link>Productos</Link>
									</li>
									<li>
										<Link>Novedades</Link>
									</li>
									<li>
										<Link>About</Link>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</header>
		</>
	);
}
