import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Buscador from "./components/Buscador/Buscador";
import CommentsPost from "./components/CommentsPost/CommentsPost";
import UserPosts from "./components/UserPosts/UserPosts";
import Users from "./components/Users/Users";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route path="/filter/posts" component={""} />
      <Route exact path="/" component={""} />
      <Route exact path="/users/:id/posts" component={""} />
      <Route path="/user/:userid/post/:id/coments" component={""} />
    </React.Fragment>
  );
}

export default App;
