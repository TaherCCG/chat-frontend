import styles from './App.module.css';
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './pages/home/LandingPage';
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import './api/axiosDefault';
import MyProfile from './pages/profile/MyProfile';
import EditProfile from './pages/profile/EditProfile';
import ChatGptRequest from './components/ChatGptRequest';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
        <Container className={styles.Main}>
          <Switch>
            <Route exact path="/" render={() => <LandingPage />}/>
            <Route exact path="/signin" render={() => <SignInForm />} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route exact path="/myprofile" render={() => <MyProfile />} />
            <Route exact path="/editprofile" render={() => <EditProfile />} />
            <Route exact path="/chatgptrequest" render={() => <ChatGptRequest />} />
          </Switch>     
      </Container>

    </div>
  );
}

export default App;
