import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Profile from "./component/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./component/Music/music";
import News from "./component/News/News";
import Settings from "./component/Settings/Settings";
import Dialogs from "./component/Dialogs/Dialogs";
import {StatePropsType} from "./redux/state";



export type AppPropsType = {
    state: StatePropsType
    addPost: () => void
    newPostTextFunction: (newText: string) => void
}


const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Nav/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs state={props.state.dialogs}/>}/>
                    <Route path={'/profile'} render={() =>
                        <Profile state={props.state.profile}
                                 addPost={props.addPost}
                                 newPostText={props.state.profile.newPostText}
                                 newPostTextFunction={props.newPostTextFunction}
                        />}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
