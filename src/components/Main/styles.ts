import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #06092b;
  color: white;
  padding: 3rem;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
  color: white;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 3rem;
`;

export const Illustration = styled.img`
  width: min(30rem, 100%);
`;
