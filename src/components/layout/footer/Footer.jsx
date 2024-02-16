import scss from "./Footer.module.scss";
import last_logo from "../../../assets/Group 22 (1).svg";
import first from "../../../assets/logos/Vector.svg";
import second from "../../../assets/logos/Vector (1).svg";
import third from "../../../assets/logos/Vector (2).svg";
import fourth from "../../../assets/logos/Vector (3).svg";
import fifth from "../../../assets/logos/logo-twitch 1.svg";
import sixth from "../../../assets/logos/logo-instagram (1) 1.svg";
import po from "../../../assets/Vector (4).svg";

const Footer = () => {
	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.last_no_first_main}>
						<div className={scss.last_first}>
							<img src={last_logo} alt="" />
							<div className={scss.last_p_text}>
								<p>С другой стороны рамки и место обучения кадров позволяет</p>
								<p>оценить значение направлений прогрессивного развития!</p>
							</div>
						</div>

						<div className={scss.last_no_right_main}>
							<h3>Остались вопросы?</h3>
							<div className={scss.last_btn}>
								<button>
									<img src={po} alt="" />
									Почта
								</button>
							</div>
						</div>
					</div>
					{/* //! 2 */}

					<div className={scss.p_texts_last}>
						<p>Блогерам</p>
						<p>Рекламодателям</p>
						<p>Пользовательское соглашение</p>
						<p>Наши кейсы</p>
						<p>Помощь</p>
					</div>

					{/* //! 3 */}
					<div className={scss.last_last}>
						<div>
							<p>© 2023 ADVUP. All rights reserved.</p>
						</div>
						<div className={scss.last_logos}>
							<img src={first} alt="" />
							<img src={second} alt="" />
							<img src={third} alt="" />
							<img src={fourth} alt="" />
							<img src={fifth} alt="" />
							<img src={sixth} alt="" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
