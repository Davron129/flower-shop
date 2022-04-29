import Navbar from "./components/Navbar";
import classes from './assets/styles/GlobalStyles.module.scss';
import Header from "./components/Header";
import FlowerFilter from "./components/FlowerFilter";
import FindMore from "./components/FindMore";

function App() {
  return (
    <div className={classes.App}>
      <Navbar />
      <Header />
      <FlowerFilter />
      <FindMore />
    </div>
  );
}

export default App;
