import './Home.scss';

function Home({ name }) {
  return (
    <div className="home">
      <h2>Olá, meu nome é {name}</h2>
      <h3>E eu sou Dev</h3>
    </div>
  );
}

export default Home;
