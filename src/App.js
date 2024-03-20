import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Body />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/gallary"
            element={
              <>
                <Header />
                <Gallery />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
