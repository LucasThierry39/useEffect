import { useState, useEffect } from 'react';

export function List() {
  const [pokemons, setPokemons] = useState({ results: [] });
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=151s'
        );
        if (!response.ok) {
          throw new Error('Falha ao buscar os dados');
        }
        const data = await response.json();
        console.log(data);
        setPokemons(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemons(); // Aqui está fazendo a busca de fato
  }, []); // Passamos o array vazio para que o useEffect seja executado apenas uma vez

  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png
  return (
    <div>
      <h2>Pokemons de Kanto</h2>
      <ol>
        {pokemons.results.map((pokemon, index) => (
          <li key={index}>
            <span>{pokemon.name}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
