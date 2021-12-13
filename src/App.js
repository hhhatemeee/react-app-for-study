import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainers from './components/Users/UsersContainers';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer className='app-wrapper-header' store={props.store} />
        <Navbar className='app-wrapper-navbar' sidebar={props.store.getState().sidebar} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs*" element={<DialogsContainer store={props.store} />} />
            <Route path="/profile/:userId" element={<ProfileContainer store={props.store} />} />
            <Route path="/users" element={<UsersContainers store={props.store} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
