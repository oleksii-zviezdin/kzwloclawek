import { Outlet } from 'react-router-dom';
import {
  // AboutH1,
  AboutMain,
  AboutList,
  AboutListItems,
  AboutLisLi,
} from './About.styled';
import { BlurBox } from './Home.styled';
import ButtonUp from 'components/ButtonUp/ButtonUp';

const About = () => {
  return (
    <>
      <AboutMain id="home">
        <BlurBox></BlurBox>
        <AboutList>
          <AboutLisLi>
            <AboutListItems to="our-beliefs">W co wierzymy</AboutListItems>
          </AboutLisLi>
          <AboutLisLi>
            <AboutListItems to="history">
              Historia Ruchu Zielonoświątkowego
            </AboutListItems>
          </AboutLisLi>
          <AboutLisLi></AboutLisLi>
        </AboutList>
        <Outlet />
      </AboutMain>
      <ButtonUp />
    </>
  );
};

export default About;
