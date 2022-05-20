import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div className={`app__container ${classNames}`} id={idName}>
				<SocialMedia />
				<div className='app__wrapper app__flex'>
					<Component />
					<div className='copyright'>
						<p className='p-text'>@2022 All right reserved</p>
					</div>
				</div>
				<NavigationDots active={idName} />
			</div>
		);
	};

export default AppWrap;
