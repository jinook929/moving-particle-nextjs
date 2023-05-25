import { useRouter } from 'next/router';
import styled from "styled-components";
import Cursor from "./Cursor";
import "../../app/globals.css";

export default function ParticleAnimation() {
  const router = useRouter();
  const changeSlideNumber = () => {
    router.push("/")
  };

  return (
    <Container>
      <Cursor changeSlide={changeSlideNumber} />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
