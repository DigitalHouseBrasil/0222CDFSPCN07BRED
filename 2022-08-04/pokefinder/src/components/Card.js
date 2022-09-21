import styled from 'styled-components';

export const Card = ({ name, image }) => {
  const CardContainer = styled.div`
    margin: 25rem 0 0 0;
  `;

  const PokemonInfo = styled.div`
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.4rem;
    text-align: center;
  `;

  const PokemonImage = styled.img`
    width: 10rem;
  `;

  return (
    <CardContainer>
      <PokemonInfo>{name}</PokemonInfo>
      <PokemonImage src={image} alt={name} />
    </CardContainer>
  );
};
