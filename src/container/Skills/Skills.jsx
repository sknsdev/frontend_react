import React, { useState, useEffect } from "react";
// import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrapper } from "../../wrapper";
import "./Skills.scss";

const Skills = () => {
	const [skills, setskills] = useState([]);
	const [experience, setExperience] = useState([]);

	useEffect(() => {
		const expQuery = '*[_type == "experiences"]';
		const skillsQuery = '*[_type == "skills"]';

		client.fetch(skillsQuery).then((data) => {
			// console.log("skills - ", data);
			setskills(data);
		});

		client.fetch(expQuery).then((data) => {
			// console.log("exp - ", data);
			setExperience(data);
		});
	}, []);

	return (
		<>
			<h2 className='head-text'>
				Skills <span>& </span> Experience
			</h2>

			<div className='app__skills-container'>
				<motion.div className='app__skills-list'>
					{skills?.map((skill, index) => (
						<motion.div
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							className='app__skills-item app__flex'
							key={skill.name}>
							<div
								className='app__flex'
								style={{ backgroundColor: skill.bgColor }}>
								<img src={urlFor(skill.icon)} alt={skill.name} />
							</div>
							<p className='p-text'>{skill.name}</p>
						</motion.div>
					))}
				</motion.div>

				<motion.div className='app__skills-exp'>
					{experience?.map((experience, index) => (
						<>
							<motion.div
								className='app__skills-exp-item'
								key={experience.year + index}>
								<div className='app__skills-exp-year'>
									<p className='bold-text'>{experience.year}</p>
								</div>

								<motion.div className='app__skills-exp-works'>
									{experience?.works?.map((work) => (
										<>
											<motion.div
												whileInView={{ opacity: [0, 1] }}
												transition={{ duration: 0.5 }}
												className='app__skills-exp-work app__flex'
												data-tip
												data-for={work.name}
												key={work.name + index}>
												<h4 className='bold-text'>{work.name}</h4>
												<p className='p-text'>{work.company}</p>
											</motion.div>

											<ReactTooltip
												id={work.name}
												effect='solid'
												arrowColor='#fff'
												className='skills-tooltip'>
												{work.desc}
											</ReactTooltip>
										</>
									))}
								</motion.div>
							</motion.div>
						</>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default AppWrap(MotionWrapper(Skills, 'app__skills'), 'skills', 'app__whitebg');
