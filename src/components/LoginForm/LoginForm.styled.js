import styled from 'styled-components';

export const Form = styled.form`
  background-color: #f5f5f5;
  border-radius: 8px;
  width: 200px;
`;

export const Field = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const Wrapper = styled.div`
  margin: -20px auto;
  border: 1px grey dashed;
  width: 300px;
  padding: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  align-items: center;

  form {
    width: 100%;
  }
`;
