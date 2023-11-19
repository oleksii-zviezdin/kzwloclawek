import { Outlet } from 'react-router-dom';
import {
  AboutH1,
  AboutMain,
  AboutList,
  AboutListItems,
  AboutLisLi,
} from './About.styled';
import { BlurBox } from './Home.styled';

const About = () => {
  return (
    <AboutMain>
      <BlurBox></BlurBox>
      <AboutH1>O nas</AboutH1>
      <AboutList>
        <AboutLisLi>
          <AboutListItems to="our-beliefs">W co wierzymy</AboutListItems>
        </AboutLisLi>
        <AboutLisLi>
          <AboutListItems to="history">
            Historia Ruchu Zielonoświątkowego
          </AboutListItems>
        </AboutLisLi>
        <AboutLisLi>
          <AboutListItems to="legal-acts">Akty Prawne</AboutListItems>
        </AboutLisLi>
      </AboutList>
      <Outlet />
    </AboutMain>
  );
};

export default About;
