import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainers from './components/Users/UsersContainers';
import ProfileMatch from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginConatiner from './components/Login/LoginConatiner';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloader';

function App(props) {

  useEffect(() => {
    props.initializeApp();
    console.log(props.initialized)
    console.log('update')
  })



  return (
    < BrowserRouter >
      <div className="app-wrapper">
        <HeaderContainer className='app-wrapper-header' store={props.store} />
        <Navbar className='app-wrapper-navbar' sidebar={props.store.getState().sidebar} />
        <div className='app-wrapper-content'>
          {!props.initialized ? <Preloader /> :
            <Routes>
              <Route path="/dialogs*" element={<DialogsContainer store={props.store} />} />
              <Route exact path="/profile/*" element={<ProfileMatch store={props.store} />} />
              <Route path="/users" element={<UsersContainers store={props.store} />} />
              <Route path="/login" element={<LoginConatiner store={props.store} />} />
            </Routes>
          }
        </div>
      </div>
    </BrowserRouter >
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
