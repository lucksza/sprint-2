import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Fórmula E - Apostas e Emoção</h1>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/bets">Apostar</Link></li>
          <li><Link to="/schedule">Corridas</Link></li>
          <li><Link to="/results">Resultados</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/login">Login</Link></li> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;
