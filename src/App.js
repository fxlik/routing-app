import React, { useState } from 'react';
import { 
  Switch, 
  Route, 
  NavLink, 
  Redirect,
  Prompt } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import Category from './pages/Category';
import Post from './pages/Post';
import Login from './pages/Login';
import Member from './pages/Member';
import GuardRoute from './components/GuardRoute';
const Home = React.lazy(() => import('./pages/Home'))

function App() {
  const [isLogin, setLogin] = useState(false)

  const routes = [
    {
      path: "/",
      Component: Home,
      props: {
        exact: true
      }
    },
    {
      path: "/about",
      Component: About,
    },
    {
      path: "/member",
      Component: Member,
      props: {
        auth: true,
        isLogin: isLogin
      }
    },
    {
      path: "/login",
      Component: Login,
      childProps: {setLogin}
    },
    {
      path: "/category",
      Component: Category
    },
    {
      path: "/post/:id",
      Component: Post
    }
  ]

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
    <div className="App">
      <ul className='menu'>
        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li>
          <NavLink to="/member" activeClassName="active">Member</NavLink>
        </li>
        <li>
          <NavLink to="/category" activeClassName="active">Category</NavLink>
        </li>
        <li>
          {isLogin ? <NavLink to="/logout" onClick={(e) => {
            e.preventDefault()
            setLogin(false)
          }} >Logout</NavLink> : 
          <NavLink to="/login" activeClassName="active">Login</NavLink>
          }
        </li>
      </ul>
      <div className='main'>
        <Switch>
          {routes.map((route, i) => {
            const {
              path,
              Component,
              props,
              childProps
            } = route
            return (props && props.auth) 
            ? <GuardRoute key={i} path={path} {...props}>
                <Component {...childProps} />
              </GuardRoute> 
            : <Route ke={i} path={path} {...props}>
                <Component {...childProps} />
              </Route>


          })}
        </Switch>

        {/* <Switch>
          <Route path="/about">
            <About />
            <Prompt message="apakah anda yakin meninggalkan halaman ini?" />
          </Route>
          <GuardRoute path="/member" isLogin={isLogin}>
            <Member />
          </GuardRoute>
          <Route path="/login">
            <Login setLogin={setLogin} />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch> */}
      </div>
    </div>
    </React.Suspense>
  );
}

export default App;
