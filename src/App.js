import "./App.css";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="MainContent">
        <label className="container form-label headLable" id="">
          Harvard Reference Generator
        </label>
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
