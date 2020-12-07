import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import Login from './screens/Login';
import ManageProfile from './screens/ManageProfile';
import PostForm from './screens/PostForm';
import PostPage from './screens/PostPage';
import Register from './screens/Register';
import UserPage from './screens/UserPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' exact component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={ManageProfile} />
        <Route path='/user/:id' component={UserPage} />
        <Route path='/new-post' component={PostForm} />
        <Route path='/post/:id' component={PostPage} />
      </main>
    </Router>
  );
};

export default App;
