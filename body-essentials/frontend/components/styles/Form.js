import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  border-radius: 1.5rem;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1.5rem;
    border: 1px solid black;
    border-radius: 1.5rem;
    &:focus {
      outline: 0;
      border-color: var(--pink);
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: var(--pink);
    border-radius: 2rem;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 400;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        var(--pink) 0%,
        #e5e7e6 50%,
        var(--pink) 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;