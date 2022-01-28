import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {

 const [progress, setProgress] = useState(30);

 const  api="3871592d487947e78778849bdc311675"  ; //not kept api in state because it will not change
  // state = { //states are defined in state object
  //   progress: 30,
   
  // }
  // setProgress = (value) => {
  //   setState({    //change the state usig setState() in a method and state() in constructor
  //     progress: value
  //   })
  // }
  
    return (
      <div style={{ backgroundImage: "linear-gradient(to right, #2c3e50, #4ca1af)" }}>

        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />

          <Navbar />

          <Routes>
            <Route exact path="/" element={<NewsComponent setProgress={setProgress} api={api} key="1" country="in" category="general" />}></Route>
            <Route exact path="/general" element={<NewsComponent setProgress={setProgress} api={api} key="2" country="in" category="general" />}></Route>
            <Route exact path="/entertainment" element={<NewsComponent setProgress={setProgress} api={api} key="3" country="in" category="entertainment" />}></Route>
            <Route exact path="/business" element={<NewsComponent setProgress={setProgress} api={api} key="4" country="in" category="business" />}></Route>
            <Route exact path="/health" element={<NewsComponent setProgress={setProgress} api={api} key="5" country="in" category="health" />}></Route>
            <Route exact path="/science" element={<NewsComponent setProgress={setProgress} api={api} key="6" country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<NewsComponent setProgress={setProgress} api={api} key="7" country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<NewsComponent setProgress={setProgress} api={api} key="8" country="in" category="technology" />}></Route>
            {/* api={api} key is used for re-rendering ...otherwise the type of news will not change
                  Routes is used instead of Switch*/}
          </Routes>
        </Router>
      </div>
    )
  
}
export default App;