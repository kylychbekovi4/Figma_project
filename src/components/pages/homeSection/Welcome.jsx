import scss from "./Welcome.module.scss";
import right_photo from "../../../assets/Rectangle 5.svg";
import ParentLogo from "../../../assets/Frame 25.svg";

const Welcome = () => {
	return (
		<section className={scss.Welcome}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.parent}>
						<div>
							<p>Рекламное агенство ADVUP</p>
							<div className={scss.h1_text}>
								<h2>Новый поток клиентов</h2>
								<h2>Вашему продукту</h2>
							</div>
						</div>
						<div className={scss.button_img}>
							<img src={right_photo} alt="#" />
							<div className={scss.button}>
								<button>Приступим</button>
							</div>
						</div>
					</div>
					{/* //! */}
					<div>
						<div className={scss.parent_photo}>
							<img src={ParentLogo} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
