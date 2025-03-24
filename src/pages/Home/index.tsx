import About from './About';
import CoverPicture from './CoverPicture';
import Projects from './Projects';
import { Container } from './styles';

const Home = () => (
  <Container>
    <CoverPicture />
    <About />
    <Projects />
  </Container>
);

export default Home;
