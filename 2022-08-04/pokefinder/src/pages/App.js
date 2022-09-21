import axios from 'axios';
import styled from 'styled-components';
import image from '../assets/img/background.png';

import { Navbar } from '../components/Navbar';
import { Card } from '../components/Card';
import { Error } from '../components/Error';
import { useState } from 'react';

export const App = () => {
  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  `;

  const PokemonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `;

  const [pokemonInfo, setPokemonInfo] = useState({});
  const [renderCard, setRenderCard] = useState(false);
  const [errorCard, setErrorCard] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const typedWord = event.target[0].value;
    const baseUrl = `https://pokeapi.co/api/v2/pokemon/${typedWord.toLowerCase()}`;

    axios
      .get(baseUrl)
      .then((response) => {
        setPokemonInfo(response.data);
        setRenderCard(true);
        setErrorCard(false);
      })
      .catch((error) => {
        console.error(error);
        setRenderCard(false);
        setErrorCard(true);
      });
  };

  return (
    <Container>
      <Navbar onSubmit={handleSubmit} />
      <PokemonContainer>
        {renderCard ? (
          <Card
            name={pokemonInfo.name}
            image={pokemonInfo.sprites.other['official-artwork'].front_default}
          />
        ) : errorCard ? (
          <Error />
        ) : (
          ''
        )}
      </PokemonContainer>
    </Container>
  );
};
