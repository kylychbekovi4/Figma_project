import scss from "./Application.module.scss";
import group_first from "../../../assets/application/Group 31.svg";
import group_second from "../../../assets/application/Group 30.svg";
import group_third from "../../../assets/application/Vector 3 (2).svg";
import right_black from "../../../assets/application/Vector 4.svg";
import bottom_black_photo from "../../../assets/application/Vector 2.svg"
import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const url = import.meta.env.VITE_BACKEND_URL;
const url1 = import.meta.env.VITE_BACKEND_URL1;

const Application = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [comments, setComments] = useState("");

	const [twoButton, setTwoButton] = useState(false);

	const value = name === "" || email === "" || phone === "" || comments === "";

	const Request = async () => {
		if (value) {
			toast.error("Пожалуйста, заполните все поля");
			return;
		}

		const newData = {
			name,
			email,
			phone,
			comments,
		};

		try {
			const response = await axios.post(twoButton ? url : url1, newData);
			console.log(response.data);
			toast.success("Success");
			setName("");
			setEmail("");
			setPhone("");
			setComments("");
		} catch (error) {
			console.error(error);
			toast.error("Произошла ошибка при отправке данных");
		}
	};

	// !

	const BlogerAdd = async () => {
		setTwoButton(true);
	};

	// !
	const AdvertiserAdd = async () => {
		setTwoButton(false);
	};

	return (
		<div className={scss.Application}>
			<div className={scss.container}>
				<div className={scss.content}>
					<div className={scss.main_text}>
						<div className={scss.h11}>
							<h1>Оставить заявку</h1>
						</div>
						<div className={scss.p11}>
							<p>Рекламные агентства имеют опыт работы в разных отраслях и </p>
							<p>и знают, как эффективно привлекать целевую аудиторию.</p>
						</div>
					</div>

					{/* //! INPUTS */}
					<div className={scss.master}>
						<div className={scss.cardinal}>
							<p>Кто по жизни?</p>
							<div className={scss.button_btn}>
								<button
									className={twoButton ? scss.selected : scss.default}
									onClick={BlogerAdd}>
									Блогер
								</button>
								<button
									className={!twoButton ? scss.selected : scss.default}
									onClick={AdvertiserAdd}>
									Рекламодатель
								</button>
							</div>
							{/* //! Input */}
							<div >
								<div className={scss.three_input}>
									<div className={scss.first_input}>
										<p>Ваше имя</p>
										<input
											value={name}
											onChange={(e) => setName(e.target.value)}
											type="text"
											placeholder="Введите ваше имя"
										/>
									</div>

									<div className={scss.second_input}>
										<p>Почта</p>
										<input
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											type="text"
											placeholder="Введите электронную почту"
										/>
									</div>

									<div className={scss.third_input}>
										<p>Телефон</p>
										<input
											value={phone}
											onChange={(e) => setPhone(e.target.value)}
											type="number"
											placeholder="Введите ваш номер телефона"
										/>
									</div>
								</div>
								<div className={scss.text_area}>
									<p>Комментарий</p>
									<textarea
										value={comments}
										onChange={(e) => setComments(e.target.value)}
										name=""
										id=""
										cols="30"
										rows="10"
										placeholder="Введите ваш номер телефона"></textarea>
								</div>
							</div>

							{/* //! last */}
							<div className={scss.last}>
								<div className={scss.last_button}>
									<button
										onClick={() => {
											Request();
										}}>
										Отправить
									</button>
									<ToastContainer />
								</div>

								<div className={scss.last_p_text}>
									<p>
										<span>Нажав на кнопку, вы соглашаетесь</span>
									</p>
									<p>
										<span>на</span> обработку персональных данных
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={scss.nones}>
			<img className={scss.blacks} src={group_third} alt="" />
			<img className={scss.blacks_2} src={group_third} alt="" />

			<img className={scss.right_black_photo} src={right_black} alt="" />
			<img className={scss.bottom_black} src={bottom_black_photo} alt="" />

			<img className={scss.email_1} src={group_first} alt="" />
			<img className={scss.email_2} src={group_second} alt="" />

			</div>
		</div>
	);
};

export default Application;
