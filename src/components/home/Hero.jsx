import BirthdayBanner from "./BirthdayBanner";
import Greeting from "./Greeting";
import SeasonBanner from "./SeasonBanner";

function Hero() {
  return (
    <>
      <Greeting />
      <SeasonBanner />
      <BirthdayBanner />
    </>
  );
}

export default Hero;