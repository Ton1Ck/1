import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


const App = (props) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div class='app-wrapper-content'>
                <Router>
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                        {/*<Route path="/news" element={<News />} />*/}
                        {/*<Route path="/music" element={<Music />} />*/}
                        {/*<Route path="/settings" element={<Settings />} />*/}
                    </Routes>
                </Router>
            </div>

        </div>
    )
}


export default App;
