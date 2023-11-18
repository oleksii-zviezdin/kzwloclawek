import { Outlet } from 'react-router-dom';
import { AboutH1, AboutMain, AboutList, AboutListItems } from './About.styled';
import { BlurBox } from './Home.styled';

const About = () => {
  return (
    <AboutMain>
      <BlurBox></BlurBox>
      <AboutH1>O nas</AboutH1>
      <AboutList>
        <li>
          <AboutListItems to="our-beliefs">W co wierzymy</AboutListItems>
        </li>
        <li>
          <AboutListItems to="history">
            Historia Ruchu Zielonoświątkowego
          </AboutListItems>
        </li>
        <li>
          <AboutListItems to="legal-acts">Akty Prawne</AboutListItems>
        </li>
      </AboutList>
      <Outlet />
    </AboutMain>
  );
};

export default About;
