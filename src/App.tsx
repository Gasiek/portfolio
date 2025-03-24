import Home from '@Pages/Home';
import Project from '@Pages/Project';
import Footer from '@Templates/Footer';
import Navbar from '@Templates/Navbar';
import ScrollToTop from '@Templates/ScrollToTop';
import GlobalStyles from '@Utils/styles/GlobalStyles';
import theme from '@Utils/styles/theme';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  </ThemeProvider>
);

export default App;
