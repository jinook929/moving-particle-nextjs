import styled from 'styled-components';
import NextArrow from './NextArrow';

export default function BackToHome({
  clickFunction,
}: {
  clickFunction: Function
}) {
  return (
    <Button onClick={() => clickFunction()}>
      Back to Home <NextArrow />
    </Button>
  );
}

const Button = styled.button`
  align-items: center;
  border: 0;
  border-bottom: 3px solid black;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  line-height: 1;
  display: flex;
  gap: 0.5rem;
  padding: 0 0 3px;  
`