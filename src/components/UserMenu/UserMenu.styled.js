import styled from 'styled-components';

export const UserBtn = styled.button`
  width: 120px;
  background-color: #ff6961;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  font-size: 16px;
  font-weight: 700;

  &:hover,
  &:focus {
    color: white;
    background-color: #d9534f;
    cursor: pointer;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  color: black;
  font-size: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
