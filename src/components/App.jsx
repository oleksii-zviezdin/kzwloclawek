import { About, Home, SupportUs, WhoWeAre } from 'pages/index';
import { Acts, Beliefs, History } from './index';
import { Routes, Route } from 'react-router-dom';
import { Container, Header, Logo, Link } from './App.styled';

import logo from '../img/logo.png';

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img src={logo} width="50px" alt="logo" />
          <div>
            <p>Zbór Chrystusa Zbawiciela</p>
            <p style={{ fontSize: '12px' }}>
              Kościół Zielonoświątkowy we Włocławku
            </p>
          </div>
        </Logo>
        <nav>
          <Link to="/" end>
            Strona Główna
          </Link>
          <Link to="/about">O nas</Link>
          <Link to="/who-we-are">Kim jesteśmy</Link>
          <Link to="/support-us">Wesprzyj nas</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="our-beliefs" element={<Beliefs />} />
          <Route path="history" element={<History />} />
          <Route path="legal-acts" element={<Acts />} />
        </Route>
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/support-us" element={<SupportUs />} />
      </Routes>
    </Container>
  );
};
