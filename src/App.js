import Navbar from "./components/Navbar";
import classes from './assets/styles/GlobalStyles.module.scss';
import Header from "./components/Header";
import FlowerFilter from "./components/FlowerFilter";
import FindMore from "./components/FindMore";
import BlogPosts from "./components/BlogPosts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={classes.App}>
      <Navbar />
      <Header />
      <FlowerFilter />
      <FindMore />
      <BlogPosts />
      <Footer />
    </div>
  );
}

export default App;
