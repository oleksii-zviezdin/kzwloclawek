import heroImg from '../img/hero-01.jpg';
import { H1, HeroSection, ImgHero, HeroDiv } from './Home.styled';
// import { Location } from '../components/index';

const Home = () => {
  return (
    <main>
      <HeroSection>
        <HeroDiv>
          <H1>Witaj przyjacielu</H1>
          <div>
            <a href="#Where">Gdzie?</a>
            <a href="#When">Kiedy?</a>
          </div>
        </HeroDiv>
        <ImgHero width={100} src={heroImg} alt="hero" />
      </HeroSection>
      {/* <Location /> */}
    </main>
  );
};

export default Home;
