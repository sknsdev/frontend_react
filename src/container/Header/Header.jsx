import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

const Header = () => {
	return (
		<div id='home' className='app__header app__flex'>
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className='app__header-info'>
				<div className='app__header-badge'>
					<div className='badge-cmp app__flex'>
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className='p-text'>Hello, I am</p>
							<h1 className='head-text'>Alexey</h1>
						</div>
					</div>

					<div className='tag-cmp app__flex'>
						<p className='p-text'>Frontend Developer</p>
						<p className='p-text'>Falling cat</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className='app__header-img'>
				<img src={images.profile} alt='profile alt' />
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					className='overlay-circle'
					src={images.circle}
				/>
			</motion.div>
			<motion.div
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className='app__header-circles'>
				{[images.vue, images.react, images.sass].map((circle, index) => (
					<div className='circle-smp app__flex' key={`circle-${index}`}>
						<img src={circle} alt='circle' />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, 'home');
