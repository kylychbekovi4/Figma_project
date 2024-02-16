import Welcome from "./homeSection/Welcome";
import Rectangle from "./homeSection/Rectangle";
import GameProject from "./homeSection/GameProject";
import OurAdvantages from "./homeSection/OurAdvantages";
import Application from "./homeSection/Application";

const HomePage = () => {
	return (
		<>
			<Welcome />
			<Rectangle />
			<GameProject />
			<OurAdvantages/>
			<Application/>
		</>
	);
};

export default HomePage;
