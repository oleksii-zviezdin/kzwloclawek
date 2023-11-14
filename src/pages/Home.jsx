import {
  H1,
  HeroSection,
  HeroDiv,
  HeroButton,
  BlurBox,
  HeroBoxOfButton,
} from './Home.styled';
import { Location } from '../components/index';

const Home = () => {
  return (
    <main>
      <HeroSection>
        <HeroDiv>
          <BlurBox></BlurBox>
          <H1>Witaj przyjacielu</H1>
          <HeroBoxOfButton>
            <HeroButton href="#Where">Gdzie?</HeroButton>
            <HeroButton href="#When">Kiedy?</HeroButton>
          </HeroBoxOfButton>
        </HeroDiv>
      </HeroSection>
      <Location />
    </main>
  );
};

export default Home;
