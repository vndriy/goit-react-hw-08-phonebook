import styled from 'styled-components';
import { Form as StyledForm, Field as StyledField } from 'formik';

export const SectionInput = styled.div`
  margin: 50px auto;
  width: 200px;
  border: 0px black solid;
  padding: 5px;
`;

export const Form = styled(StyledForm)`
  background-color: #f5f5f5;
  border-radius: 8px;
  width: 200px;
`;

export const Field = styled(StyledField)`
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
