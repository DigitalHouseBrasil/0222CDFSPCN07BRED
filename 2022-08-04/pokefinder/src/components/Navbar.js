import styled from 'styled-components';

import { FaSearch } from 'react-icons/fa';

export const Navbar = ({ onSubmit }) => {
  const Container = styled.div`
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 0;
  `;

  const Title = styled.h1`
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
  `;

  const Form = styled.form`
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const InputText = styled.input`
    height: 2rem;
    padding: 0 0.4rem;
    font-size: 1rem;
    border: 1px solid #888;
    border-radius: 0.4rem;

    &:focus {
      outline: none;
    }
  `;

  const Button = styled.button`
    font-size: 1.2rem;
    background: none;
    border: none;
    color: #0a2c55;
    margin: 0 0.6rem;

    &:hover {
      cursor: pointer;
      font-size: 1.4rem;
      transition: all 300ms ease-in-out;
    }
  `;
  return (
    <Container>
      <Title>Encontre Pokemons</Title>
      <Form onSubmit={onSubmit}>
        <InputText type="text" placeholder="Digite o nome..." required />
        <Button type="submit">
          <FaSearch />
        </Button>
      </Form>
    </Container>
  );
};
