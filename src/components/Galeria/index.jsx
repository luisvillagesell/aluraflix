import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tag from "./Tags"
import Video from "./Video"

const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
`

const SeccionFluida = styled.section`
flex-grow: 1;
`
const VideosContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Mas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    width: 30%;
`


const Galeria = ({ videos = [], alSeleccionarVideo, alAlternarFavorito }) => {
    return (
      <>
        <Tag />
        <GaleriaContainer>
          <SeccionFluida>
            <Titulo>Descubre</Titulo>
            <VideosContainer>
              {videos.map(video => (
                <Video
                  alAlternarFavorito={alAlternarFavorito}
                  alSolicitarZoom={alSeleccionarVideo}
                  key={video.id}
                  video={video}
                />
              ))}
            </VideosContainer>
          </SeccionFluida>
          <Mas>
            <Populares />
          </Mas>
        </GaleriaContainer>
      </>
    );
  };
  
  export default Galeria;