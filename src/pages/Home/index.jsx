import styled, { keyframes } from 'styled-components';
import PDP from '../../assets/images/pdp.jpg';
import picto_git from '../../assets/images/github.png';
import picto_insta from '../../assets/images/instagram.png';
import colors from '../../utils/styles/colors';


const slidein = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

const rightSlidein = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  width: 100%;
`;




const RightContainer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  animation: 0.5s ease-in 0.5s reverse both ${rightSlidein};
  margin-right: 2%;
  color : ${colors.quaternary};
`;

const LeftContainer = styled.div`
  padding-top: 3%;
  text-align: center;
  background-color: ${colors.primary};
  width: 500px;
  animation: 0.5s ease-in 0.5s reverse both ${slidein};
  margin-left: 2%;

  h1 {
    color: ${colors.background};
    font-size : 65px;
  }

  

`;

const CircleImage = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
`;

const PictoContainer = styled.div`
  padding: 5px;
  background-color: ${colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PictoLink = styled.a`
  padding: 5px;
`;

const PictoImage = styled.img`
  width: 50px;
  height: 50px;
`;

const Titre1 = styled.h1`
  font-size: 80px;
`;

const Titre2 = styled.h2`
  font-size: 50px;
  margin-top: -50px;
`;

const P = styled.p`
  margin-left: 5px;
  margin-top: -30px;
`;

const Home = () => {
  return (
    <Container>
      <LeftContainer>
        <CircleImage src={PDP} alt="photo de profil" />
        <Titre1>
          GAUDEL
          <br />
          Matthieu
        </Titre1>
        <p>Etudiant</p>
        <PictoContainer>
          <PictoLink href="https://github.com/MMMatth">
            <PictoImage src={picto_git} alt="Github_Img" />
          </PictoLink>
          <PictoLink href="https://www.instagram.com/matth_gdl/">
            <PictoImage src={picto_insta} alt="Instagram_Img" />
          </PictoLink>
        </PictoContainer>
        </LeftContainer>
        <RightContainer>
            <Titre1>Hey !</Titre1>
            <Titre2>Je suis Matthieu, étudiant en informatique.</Titre2>
            <P> Je suis etudiant dans le superieur à la FST de Vandoeuvre en France et je suis passionné d'informatique. </P>
        </RightContainer>
    </Container>
    );
};

export default Home;
