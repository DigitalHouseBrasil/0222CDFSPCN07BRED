import styled from 'styled-components';

export const Error = () => {
  const ErrorContainer = styled.div`
    background-color: #ae2012;
    padding: 0.8rem;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    box-shadow: 1px 1px 2px #000;
  `;
  return <ErrorContainer>Pokémon não encontrado</ErrorContainer>;
};
