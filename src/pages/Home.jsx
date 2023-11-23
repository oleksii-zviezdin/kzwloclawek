import {
  H1,
  HeroSection,
  HeroDiv,
  HeroButtonWhere,
  HeroButtonWhen,
  BlurBox,
  HeroBoxOfButton,
  HomeMain,
} from './Home.styled';
import ButtonUp from 'components/ButtonUp/ButtonUp';

import { Location, When } from '../components/index';
import WhoWeAre from './WhoWeAre';

const Home = () => {
  return (
    <>
      <HomeMain id="home">
        <BlurBox></BlurBox>
        <HeroSection>
          <HeroDiv>
            <BlurBox></BlurBox>
            <H1>Witaj przyjacielu</H1>
            <HeroBoxOfButton>
              <HeroButtonWhere
                to="where"
                smooth={true}
                duration={500}
                offset={-150}
              >
                Gdzie?
              </HeroButtonWhere>
              <HeroButtonWhen to="when" smooth={true} duration={500}>
                Kiedy?
              </HeroButtonWhen>
            </HeroBoxOfButton>
          </HeroDiv>
        </HeroSection>
        <WhoWeAre />
        <Location />
        <When />
      </HomeMain>
      <ButtonUp />
    </>
  );
};

export default Home;
