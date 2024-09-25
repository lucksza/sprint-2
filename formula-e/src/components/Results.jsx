import { useState, useEffect } from 'react';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults([
      { race: 'New York E-Prix', winner: 'Piloto 1' },
      { race: 'Berlin E-Prix', winner: 'Piloto 2' },
      { race: 'Monaco E-Prix', winner: 'Piloto 3' }
    ]);
  }, []);

  return (
    <section>
      <h2>Resultados Recentes</h2>
      <ul>
        {results.map(result => (
          <li key={result.race}>{result.race} - Vencedor: {result.winner}</li>
        ))}
      </ul>
    </section>
  );
};

export default Results;
