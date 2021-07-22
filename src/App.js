import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Author from "./Author";
import Category from "./Category";
import BooksList from "./BooksList";
import MyNavbar from "./component/MyNavbar";
import PublicRoute from "./Utils/PublicRoute";
import PrivateRoute from "./Utils/PrivateRoute";
import { getUser, removeUserSession } from "./Utils/Common";
import Avatar from "./component/Avatar";

function App(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser() ? setUser(getUser()) : setUser(null);
  }, [user]);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="headers">
          <MyNavbar></MyNavbar>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <PrivateRoute
              path="/bookslist"
              component={BooksList}
            ></PrivateRoute>
            <PublicRoute path="/login" component={Login}></PublicRoute>
            <PublicRoute path="/register" component={Register}></PublicRoute>
            <PrivateRoute path="/author" component={Author}></PrivateRoute>
            <PrivateRoute path="/category" component={Category}></PrivateRoute>

            {/* <Route path="*" component={page404} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
