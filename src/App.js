import Navbar from "./components/Navbar";
import classes from './assets/styles/GlobalStyles.module.scss';
import Header from "./components/Header";
import FlowerFilter from "./components/FlowerFilter";
import FindMore from "./components/FindMore";
import BlogPosts from "./components/BlogPosts";
// import { DATA } from './mockdata/index'
import { useEffect, useState } from 'react';
const test = require('./mockdata/test.json');

function App() {
  const [ state, setState ] = useState([]);

  useEffect(() => {
    console.log(test);
    fetch('./')
      .then((data) => data.json())
      .then((data) => {
        console.log('====================================');
        console.log('====================================');
      })
  }, []);

  return (
    <div className={classes.App}>
      <Navbar />
      <Header />
      <FlowerFilter />
      <FindMore />
      <BlogPosts />
    </div>
  );
}

export default App;
