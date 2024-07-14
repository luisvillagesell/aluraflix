import { styled } from "styled-components";

const FigureEstilizada = styled.figure`
  background-image: ${props => `url(${props.$backgroundImage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  min-height: 32px;
  margin: 0;
  margin-right: 20px;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
`;

const TituloEstilizado = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center; /* Centra horizontalmente el contenido interno */
  font-weight: bold;
  font-size: 150px;
  line-height: 80px;
  color: green;
  background: wheat;
  background-clip: text;
  -webkit-background-clip: text;
  max-width: 100%;
  padding: 10px 10px;
  text-shadow: 
    0 0 5px rgba(0, 255, 255, 0.5), 
    0 0 15px rgba(0, 255, 255, 0.5), 
    0 0 25px rgba(0, 255, 255, 0.5), 
    0 0 45px rgba(0, 255, 255, 0.5), 
    0 0px 90px rgba(0, 255, 255, 0.5);
`;

const Banner = ({ texto, backgroundImage }) => {
  return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>
  );
};

export default Banner;
