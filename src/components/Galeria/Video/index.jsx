import { styled } from "styled-components";
import BotonIcono from "../../BotonIcono";

const Figure = styled.figure`
  width: ${props => props.$expandida ? '100%' : '270px'};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > video {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: 'GandhiSansBold';
    }
    h4 {
      flex-grow: 1;
    }
    h3, h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Pie = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Video = ({ video, expandida = false, alSolicitarZoom, alAlternarFavorito }) => {
  const iconoFavorito = video.favorita ? "/iconos/favorito-activo.png" : "/iconos/favorito.png";

  return (
    <Figure $expandida={expandida} id={`video-${video.id}`}>
      <video controls>
        <source src={video.path} type="video/mp4" />
        Tu búsqueda no dió ningún resultado.
      </video>
      <figcaption>
        <h3>{video.titulo}</h3>
        <Pie>
          <h4>{video.fuente}</h4>
          <BotonIcono onClick={() => alAlternarFavorito(video)}>
            <img src={iconoFavorito} alt="Icono de favorito" />
          </BotonIcono>
          {!expandida && (
            <BotonIcono aria-hidden={expandida} onClick={() => alSolicitarZoom(video)}>
              <img src="/iconos/expandir.png" alt="Icono de expandir" />
            </BotonIcono>
          )}
        </Pie>
      </figcaption>
    </Figure>
  );
};

export default Video;
