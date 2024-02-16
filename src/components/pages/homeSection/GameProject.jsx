import scss from "./GameProject.module.scss";
import men from "../../../assets/Rectangle 14.svg";
import black from "../../../assets/Rectangle 15.svg";
import line from "../../../assets/line.svg";
import firstt from "../../../assets/foure_photo/Rectangle 13.svg";
import second from "../../../assets/foure_photo/Rectangle 13 (1).svg";
import third from "../../../assets/foure_photo/Rectangle 13 (2).svg";
import four from "../../../assets/foure_photo/Rectangle 13 (3).svg";
import first_black from "../../../assets/gameProjectBlack/Rectangle 15.svg";
import second_black from "../../../assets/gameProjectBlack/Rectangle 17.svg";
import third_black from "../../../assets/gameProjectBlack/Rectangle 18.svg";
import foutrh_black from "../../../assets/gameProjectBlack/Rectangle 16.svg";
import fifth_black from "../../../assets/gameProjectBlack/Vector 2 (1).svg";

const GameProject = () => {
	return (
		<div className={scss.GameProject}>
			<div className="container">
				<div className={scss.content}>
					<div>
						<h2>Наши кейсы</h2>
						<img src={men} alt="#" />
					</div>

					{/* //! */}
					<div className={scss.parent_2}>
						<div className={scss.btn_img}>
							<button>🔥</button>
							<button>Игры</button>
							<button>Коллабарация</button>
						</div>
						<div className={scss.subjeckt}>
							<h1>Игровой проект</h1>
							<h1>War Thunder X ДУЛО</h1>
						</div>
						<p>
							Разнообразный и богатый опыт консультация с профессионалами из IT
							играет важную роль в формировании всесторонне сбалансированных
							нововведений. Значимость этих проблем настолько очевидна, что
							новая модель организационной.
						</p>
						<button>Подробнее</button>
					</div>
				</div>
				{/* //! */}
				<div className={scss.parent_3}>
					<div className={scss.cards}>
						<img src={black} alt="" />
						<div className={scss.box}>
							<p>Общее кол-во просмотров</p>
							<h2>20.000+</h2>
						</div>
					</div>
					<img src={line} alt="" />

					<div className={scss.cards}>
						<img src={black} alt="" />
						<div className={scss.box}>
							<p>Лайков</p>
							<h2>20.000+</h2>
						</div>
					</div>
					<img src={line} alt="" />

					<div className={scss.cards}>
						<img src={black} alt="" />
						<div className={scss.box}>
							<p>охваты</p>
							<h2>20.000+</h2>
						</div>
					</div>
				</div>
				{/* //!  */}
				<div className={scss.parent_4}>
					<div className={scss.boxy}>
						<div className={scss.boxy_1}>
							<h3>Игровой проект War Thunder </h3>
							<p>Специальный проект с Моргенштерном</p>
							<img src={firstt} alt="" />
						</div>
					</div>
					<div className={scss.boxy}>
						<h3>Казино Stake x Drake </h3>
						<p>Азарт, Рэп, Реклама</p>
						<img src={second} alt="" />
					</div>
					<div className={scss.boxy}>
						<h3>Игровой проект Free Fire</h3>
						<p>Уникальная рекламная компания</p>
						<img src={third} alt="" />
					</div>
					<div className={scss.boxy}>
						<h3>VK Music</h3>
						<p>Музыкальный сервис соц. сети ВКонтакты</p>
						<img src={four} alt="" />
					</div>
				</div>
			</div>
			{/* //! Black Photos */}
			<div className={scss.blacks}>
				<img className={scss.black_first} src={first_black} alt="" />
				<img className={scss.black_second} src={second_black} alt="" />
				<img className={scss.black_third} src={third_black} alt="" />
				<img className={scss.black_fourth} src={foutrh_black} alt="" />
				<img className={scss.black_fifth} src={fifth_black} alt="" />
			</div>
		</div>
	);
};

export default GameProject;
