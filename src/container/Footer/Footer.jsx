import React, { useState } from "react";
import { images } from "../../constants";

import { client } from "../../client";
import { AppWrap, MotionWrapper } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmited, setIsFormSubmited] = useState(false);
	const [loading, setLoading] = useState(false);
	const { name, email, message } = formData;
	const hangleChangeInput = (event) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: "contact",
			name: name,
			email: email,
			message: message,
		};

		client.create(contact).then(() => {
			setLoading(false);
			setIsFormSubmited(true);
		});
	};

	return (
		<>
			<h2 className='head-text'>
				Take a cofee <span>& </span>chat with me
			</h2>

			<div className='app__footer-cards'>
				<div className='app__footer-card'>
					<img src={images.email} alt='email' />
					<a href='mailto:sketchrhc@yandex.ru' className='p-text'>
						sketchrhc@yandex.ru
					</a>
				</div>
				<div className='app__footer-card'>
					<img src={images.telegram} alt='telegram' />
					<a href='tg://sketchns' className='p-text'>
						@sketchns
					</a>
				</div>
			</div>

			{!isFormSubmited ? (
				<div className='app__footer-form app-flex'>
					<div className='app__flex'>
						<input
							className='p-text'
							name="name"
							type='text'
							placeholder='Your Name'
							value={name}
							onChange={hangleChangeInput}
						/>
					</div>
					<div className='app__flex'>
						<input
							className='p-text'
							name="email"
							type='email'
							placeholder='Your Email'
							value={email}
							onChange={hangleChangeInput}
						/>
					</div>
					<div className='app__flex'>
						<textarea
							value={message}
							name='message'
							onChange={hangleChangeInput}
							placeholder='Your Message'
							className='p-text'
						/>
					</div>
					<button type='button' className='p-text' onClick={handleSubmit}>
						{loading ? "Sending" : "Send message"}
					</button>
				</div>
			) : (
				<div className=''>
					<h3 className='head-text'>Thank you for getting in touch!</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrapper(Footer, "app__footer"),
	"contact",
	"app__whitebg"
);
