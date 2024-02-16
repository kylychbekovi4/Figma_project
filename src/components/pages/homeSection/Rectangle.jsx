import scss from "./Rectangle.module.scss";
import img1 from "../../../assets/reklama/image 12 (Traced).svg";
import img2 from "../../../assets/reklama/2.svg";
import img3 from "../../../assets/reklama/image 14 (Traced).svg";
import img4 from "../../../assets/reklama/Group 1.svg";
import img5 from "../../../assets/reklama/image 16 (Traced).svg";
import img6 from "../../../assets/reklama/layer1.svg";
import img7 from "../../../assets/reklama/7.svg";
import { useKeenSlider } from "keen-slider/react";

const logos = [
	{
		img: img1,
	},
	{
		img: img2,
	},
	{
		img: img3,
	},
	{
		img: img4,
	},
	{
		img: img5,
	},
	{
		img: img6,
	},
	{
		img: img7,
	},
];

const animation = { duration: 9000, easing: (t) => t };

const Rectangle = () => {
	const [sliderRef] = useKeenSlider({
		loop: true,
		renderMode: "performance",
		drag: false,
		created(s) {
			s.moveToIdx(5, true, animation);
		},
		updated(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
		animationEnded(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
	});
	return (
		<div className={scss.Rectangle}>
			<div className={scss.content}>
				<div className={scss.Parent}>
					<div ref={sliderRef} className={scss.keen_slider}>
						{logos.map((item, index) => (
							<div key={index} className="keen-slider__slide number-slide1">
								<img src={item.img} alt="" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rectangle;
