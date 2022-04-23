import Navbar from "./components/Navbar";
import classes from './assets/styles/GlobalStyles.module.scss';
import Header from "./components/Header";
import FlowerFilter from "./components/FlowerFilter";

function App() {
  return (
    <div className={classes.App}>
      <Navbar />
      <Header />
      <FlowerFilter />
    </div>
  );
}

export default App;
