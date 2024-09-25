import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('#slideshow img');
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    };

    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="home-section">
      <h2>Explore o Mundo da Fórmula E</h2>
      <p>
        A Fórmula E é o futuro do automobilismo, unindo velocidade, tecnologia
        e sustentabilidade. Com as corridas acontecendo em cidades icônicas ao
        redor do mundo, é o momento ideal para você se envolver com o esporte
        elétrico e apostar em seus pilotos favoritos.
      </p>
      <div id="slideshow">
        <img src="/src/assets/slide1.png" alt="slide1" className="active" />
        <img src="/src/assets/slide2.png" alt="slide2" />
        <img src="/src/assets/slide3.png" alt="slide3" />
      </div>
    </section>
  );
};

export default Home;
