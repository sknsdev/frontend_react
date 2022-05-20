import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { images } from "../../constants/";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav>
			<div className='app__navbar'>
				<img className='app__navbar-logo' src={images.logo} alt='logo' />

				<ul className='app__navbar-links'>
					{["home", "about", "work", "skills", "contact"].map((menu_item) => (
						<li className='app__flex p-text' key={`link-${menu_item}`}>
							<div />
							<a href={`#${menu_item}`}>{menu_item}</a>
						</li>
					))}
				</ul>
				<div className='app__navbar-menu'>
					<HiMenuAlt4 onClick={() => setToggle(true)} />
					{toggle && (
						<motion.div
							whileInView={{ x: [300, 0] }}
							transition={{ duration: 0.85, ease: "easeInOut" }}>
							<HiX onClick={() => setToggle(false)} />
							<ul>
								{["home", "about", "work", "skills", "contact"].map(
									(menu_item) => (
										<li key={menu_item}>
											<a href={`#${menu_item}`}>{menu_item}</a>
										</li>
									)
								)}
							</ul>
						</motion.div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
