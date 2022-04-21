import Navbar from "./components/Navbar";
import classes from './assets/styles/GlobalStyles.module.scss';
import Header from "./components/Header";

function App() {
  return (
    <div className={classes.App}>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
