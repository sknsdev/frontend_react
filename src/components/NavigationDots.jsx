/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const NavigationDots = ({ active }) => {
	return (
		<div className='app__navigation'>
			{["home", "about", "work", "skills", "testimonials", "contact"].map(
				(menu_item, index) => (
					<a
						href={`#${menu_item}`}
						key={menu_item + index}
						className='app__navigation-dot'
						style={active === menu_item ? { backgroundColor: "#00cccc" } : {}}
					/>
				)
			)}
		</div>
	);
};

export default NavigationDots;
