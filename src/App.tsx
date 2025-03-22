import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@Utils/styles/GlobalStyles';
import theme from '@Utils/styles/theme';
import Home from '@Pages/Home';
import Project from '@Pages/Project';
import Navbar from '@Templates/Navbar';
import Footer from '@Templates/Footer';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
