import styled from 'styled-components';

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  background-color: #f8f8f8;

  button {
    background-color: #ff6961;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #d9534f;
    }
  }
`;
