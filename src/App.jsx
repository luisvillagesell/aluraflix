import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import videos from "./videos.json"; // Asegúrate de que la ruta sea correcta
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Pie from "./components/Pie";

const FondoGradiente = styled.div`
  background: linear-gradient(174.61deg, #16498b 4.16%, #c1cecd 96.76%);
  width: 100%;
  margin-right: 10px;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const FondoBarra = styled.div`
  background: linear-gradient(to right, #ff7e5f, #308bc7);
  width: 20%;
`;

const App = () => {
  const [videosDeGaleria, setVideosDeGaleria] = useState(videos);
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);

  const alAlternarFavorito = (video) => {
    if (video.id === videoSeleccionado?.id) {
      setVideoSeleccionado({
        ...videoSeleccionado,
        favorita: !videoSeleccionado.favorita
      });
    }

    setVideosDeGaleria(videosDeGaleria.map(videoDeGaleria => {
      return {
        ...videoDeGaleria,
        favorita: videoDeGaleria.id === video.id ? !video.favorita : videoDeGaleria.favorita
      };
    }));
  };

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera />
          <MainContainer>
            <FondoBarra>
              <BarraLateral />
            </FondoBarra>
            <ContenidoGaleria>
              <Banner texto="ALURAFLIX" backgroundImage={banner} />
              <Galeria 
                alSeleccionarVideo={video => setVideoSeleccionado(video)} 
                videos={videosDeGaleria} 
                alAlternarFavorito={alAlternarFavorito} 
              />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom 
          video={videoSeleccionado}
          alCerrar={() => setVideoSeleccionado(null)}
          alAlternarFavorito={alAlternarFavorito} 
        />
        <Pie />
      </FondoGradiente>
    </>
  );
};

export default App;
