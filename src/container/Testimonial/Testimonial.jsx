import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { urlFor, client } from "../../client";
import { AppWrap, MotionWrapper } from "../../wrapper";
import "./Testimonial.scss";

const Testimonial = () => {
	const [brands, setBrands] = useState([]);
	const [testimonials, setTestimonials] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const currentReview = testimonials[currentIndex];

	const handleClick = (index) => setCurrentIndex(index);

	useEffect(() => {
		const brandQuery = '*[_type == "brands"]';
		const testimonialsQuery = '*[_type == "testimonials"]';

		client.fetch(brandQuery).then((data) => {
			setBrands(data);
		});

		client.fetch(testimonialsQuery).then((data) => {
			setTestimonials(data);
		});
	}, []);

	return (
		<>
			{testimonials.length && (
				<>
					{console.log("testimonials - ", testimonials)}
					<div className='app__testimonial-item app__flex	'>
						<img src={urlFor(currentReview.imageurl)} alt='testimonial' />
						<div className='app__testimonial-content'>
							<p className='p-text'>{currentReview.feedback}</p>
							<h4 className='bold-text'>
								{currentReview.name}
								<h5 className='p-text'>{currentReview.company}</h5>
							</h4>
						</div>
					</div>

					<div className='app__testimonial-btns app__flex'>
						<div
							className='app__flex'
							onClick={() =>
								handleClick(
									currentIndex === 0
										? testimonials.length - 1
										: currentIndex - 1
								)
							}>
							<HiChevronLeft />
						</div>

						<div
							className='app__flex'
							onClick={() =>
								handleClick(
									currentIndex === testimonials.length - 1
										? 0
										: currentIndex + 1
								)
							}>
							<HiChevronRight />
						</div>
					</div>
				</>
			)}

			{/* <div className='app__testimonial-brands app__flex'>
				{console.log("brad", brands)}
				{brands.map((brand) => (
					<motion.div
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, type: "tween" }}
						key={brand._id}>
						<img src={urlFor(brand.imgUrl)} alt={brand.name} />
					</motion.div>
				))}
			</div> */}
		</>
	);
};

export default AppWrap(
	MotionWrapper(Testimonial, "app__testimonial"),
	"testimonial",
	"app__primarybg"
);
