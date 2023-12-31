import { Beliefs, History, Loader } from './index';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import {
  Container,
  Header,
  Logo,
  Link,
  HeaderNav,
  LogoLink,
  LogoTitle,
  LogoDescription,
  Footer,
  Contact,
  ContactList,
  ContactListItems,
  Address,
  Mail,
} from './App.styled';

import logo from '../img/logo.webp';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const SupportUs = lazy(() => import('../pages/SupportUs'));
const WhoWeAre = lazy(() => import('../pages/WhoWeAre'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <Header id="top">
          <Logo>
            <LogoLink to="/" end>
              <img src={logo} width="50px" alt="logo" />
            </LogoLink>
            <LogoTitle>
              <LogoDescription>
                Zbór Chrystusa{' '}
                <span
                  style={{
                    color: '#bb0000',
                    textShadow: 'none',
                  }}
                >
                  Zbawiciela
                </span>
              </LogoDescription>
              <LogoDescription style={{ fontSize: '12px' }}>
                Kościół Zielonoświątkowy we{' '}
                <span
                  style={{
                    color: '#bb0000',
                    textShadow: 'none',
                  }}
                >
                  Włocławku
                </span>
              </LogoDescription>
            </LogoTitle>
          </Logo>
          <HeaderNav>
            <Link to="/" end>
              Strona Główna
            </Link>
            <Link to="/about">O nas</Link>
            <Link to="/support-us">Wesprzyj nas</Link>
          </HeaderNav>
        </Header>

        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="who-we-are" element={<WhoWeAre />} />
          </Route>
          <Route path="/about" element={<About />}>
            <Route path="our-beliefs" element={<Beliefs />} />
            <Route path="history" element={<History />} />
          </Route>
          <Route path="/support-us" element={<SupportUs />} />
        </Routes>

        <Footer>
          <Logo>
            <LogoLink to="/" end>
              <img src={logo} width="50px" alt="logo" />
            </LogoLink>
            <Contact>
              <ContactList>
                <ContactListItems>
                  <Address
                    href="https://www.google.com/maps/place/Ko%C5%9Bci%C3%B3%C5%82+Zielono%C5%9Bwi%C4%85tkowy+Zb%C3%B3r+Chrystusa+Zbawiciela+we+W%C5%82oc%C5%82awku/@52.6531439,19.0616214,108m/data=!3m1!1e3!4m6!3m5!1s0x471c993b3fbeb913:0x33e36b7338978991!8m2!3d52.6531508!4d19.0617886!16s%2Fg%2F11ty4t33n4?entry=ttu"
                    target="_blank"
                    rel="noopener nofollow noreferrer"
                  >
                    <span class="material-symbols-outlined">location_on</span>
                    Kościuszki 26, Włocławek, Poland, 87-800
                  </Address>
                </ContactListItems>
                <ContactListItems>
                  <Mail href="mailto:administrator@kzwloclawek.pl">
                    <i class="material-icons">email</i>{' '}
                    administrator@kzwloclawek.pl
                  </Mail>
                </ContactListItems>
              </ContactList>
            </Contact>
          </Logo>
          <p>
            © 2023 Zbór Chrystusa Zbawiciela |{' '}
            <a
              href="https://github.com/oleksii-zviezdin"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              Oleksii Zviezdin
            </a>
          </p>
        </Footer>
      </Container>
    </Suspense>
  );
};
