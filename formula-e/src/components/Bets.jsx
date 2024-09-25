import { useState } from 'react';

const Bets = () => {
  const [race, setRace] = useState('newYork');
  const [driver, setDriver] = useState('driver1');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount < 10) {
      alert('O valor mínimo para aposta é R$10');
    } else {
      alert(`Aposta de R$${amount} no piloto ${driver} para a corrida ${race} registrada com sucesso!`);
    }
  };

  return (
    <section>
      <h2>Faça Suas Apostas</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="race">Escolha a corrida:</label>
        <select id="race" value={race} onChange={(e) => setRace(e.target.value)}>
          <option value="newYork">New York E-Prix</option>
          <option value="berlin">Berlin E-Prix</option>
          <option value="monaco">Monaco E-Prix</option>
        </select>

        <label htmlFor="driver">Escolha o piloto:</label>
        <select id="driver" value={driver} onChange={(e) => setDriver(e.target.value)}>
          <option value="driver1">Piloto 1</option>
          <option value="driver2">Piloto 2</option>
          <option value="driver3">Piloto 3</option>
        </select>

        <label htmlFor="amount">Valor da Aposta (R$):</label>
        <input
          type="number"
          id="amount"
          value={amount}
          min="10"
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        />

        <button type="submit">Apostar</button>
      </form>
    </section>
  );
};

export default Bets;
