import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store"
// import CurrentHero from "./CurrentHero/CurrentHero";
import HomePage from "./HomePage/HomePage";
import Navigation from "./Navigation/Navigation";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/hero/:id' element={<CurrentHero />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
