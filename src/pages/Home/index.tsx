import About from './About';
import CoverPicture from './CoverPicture';
import Projects from './Projects';
import { Container, TopContainer, Wrapper } from './styles';

const Home = () => (
  <Container>
    <Wrapper>
      <TopContainer>
        <CoverPicture />
        <About />
      </TopContainer>
      <Projects />
    </Wrapper>
  </Container>
);

export default Home;
