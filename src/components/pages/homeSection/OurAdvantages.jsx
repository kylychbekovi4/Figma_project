import scss from "./OurAdvantages.module.scss";
import first_photo from "../../../assets/cards/advantages-1.png";
import second_photo from "../../../assets/cards/advantages-2.png";
import third_photo from "../../../assets/cards/advantages-3.png";
import four_photo from "../../../assets/cards/advantages-4.png";

const OurAdvantages = () => {
	return (
		<div className={scss.OurAdvantages}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.main_text}>
						<h2>Наши преимущества</h2>
					</div>
					<div className={scss.main_card}>
						{/* //! 1 */}
						<div className={scss.first_card}>
							<div>
								<img src={first_photo} alt="" />

								<div className={scss.card_first_text}>
									<h2>Всегда выполняем</h2>
									<h2>ваши запросы</h2>
								</div>
								<div className={scss.card_first_p_text}>
									<p>Разнообразный и богатый опыт консультация с </p>
									<p>профессионалами из IT играет важную роль в формировании</p>
								</div>
							</div>
							{/* // 2 */}
							<div>
								<img src={second_photo} alt="" />
								<div className={scss.second_card_text}>
									<h2>Профессиональный</h2>
									<h2>подход:</h2>
								</div>

								<div className={scss.second_card_p_text}>
									<p>Рекламные агентства имеют опыт работы в разных отраслях</p>
									<p>и знают, как эффективно привлекать целевую аудиторию.</p>
								</div>
							</div>
						</div>
						{/* //! 2 */}
						<div className={scss.second_card}>
							<div>
								<img src={third_photo} alt="" />
								<div className={scss.third_card_text}>
									<h2>Креативность</h2>
								</div>
							</div>
							<div>
								<img src={four_photo} alt="" />
								<div className={scss.fourth_card_text}>
									<h2>Доступ к новейшим технологиям</h2>
								</div>

								<div className={scss.fourth_card_p_text}>
									<p>Рекламные агентства обычно имеют доступ к самым </p>
									<p>передовым инструментам и технологиям в области</p>
									<p>маркетинга и рекламы.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurAdvantages;
