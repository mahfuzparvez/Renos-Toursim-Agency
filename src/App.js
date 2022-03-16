import { Route } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Head from './components/Head/Head'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Service from './components/Service/Service';
import Booking from './components/Booking/Booking/Booking';
import Review from './components/Review/Review';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
import Order from './components/Order/Order';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Head></Head>
          <Switch>
            <Route exact path="/">
              <Header></Header>
            </Route>
            <Route path="/home">
              <Header></Header>
            </Route>
            <Route path="/service">
              <Service></Service>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
