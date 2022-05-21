import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {

	return (
		<div className='app__social'>
			<div className=''>
				<BsTwitter
					onClick={() => {
						window.open("https://twitter.com/SketchNS");
					}}
				/>
			</div>
			<div className=''>
				<BsInstagram
					onClick={() => {
						window.open("https://www.instagram.com/sketch.ns");
					}}
				/>
			</div>
			<div className=''>
				<FaFacebookF
					onClick={() => {
						window.open("https://www.facebook.com/sketchrhc");
					}}
				/>
			</div>
		</div>
	);
};

export default SocialMedia;
