import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <main>
      <h1>O nas</h1>
      <p>
        Tu się dowiesz <strong>W co wierzymy</strong>, o{' '}
        <strong>Histori Ruchu Zielonoświątkowego</strong> oraz możesz zapoznać
        się z <strong>Actami Prawnymi</strong>.
      </p>
      <ul>
        <li>
          <Link to="our-beliefs">W co wierzymy</Link>
        </li>
        <li>
          <Link to="history">Historia Ruchu Zielonoświątkowego</Link>
        </li>
        <li>
          <Link to="legal-acts">Akty Prawne</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default About;
