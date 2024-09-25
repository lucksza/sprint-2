const Home = () => {
  return (
    <section>
      <h2>Explore o Mundo da Fórmula E</h2>
      <p>Descubra a emoção das corridas elétricas e envolva-se com o dinamismo do automobilismo moderno.</p>
      <div id="slideshow">
        <img src="/src/assets/slide1.png" alt="slide1" />
        <img src="/src/assets/slide2.png" alt="slide2" style={{ display: 'none' }} />
        <img src="/src/assets/slide3.png" alt="slide3" style={{ display: 'none' }} />
      </div>
    </section>
  );
};

export default Home;
