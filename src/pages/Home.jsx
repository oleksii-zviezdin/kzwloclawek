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

import { Location } from '../components/index';
import WhoWeAre from './WhoWeAre';

const Home = () => {
  return (
    <>
      <HomeMain>
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
      </HomeMain>
    </>
  );
};

export default Home;
