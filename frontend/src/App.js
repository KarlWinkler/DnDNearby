import React, { useState } from "react";
import{
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";

import Home from "./Pages/Home";
import Groups from "./Pages/Groups";
import Profile from "./Pages/Profile";

import Learn from "./Pages/Learn/Learn";
import Topic from "./Pages/Learn/Topic";

import Forums from "./Pages/Forums/Forums";
import Notes from "./Pages/Organization/Notes";
import Characters from "./Pages/Organization/Characters";
import Character from "./Pages/Organization/Character";
import Organization from "./Pages/Organization/Organization";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import MakeNewGroup from './Pages/MakeNewGroup';
import Post from "./Pages/Forums/ViewPost";
import NewPost from "./Pages/Forums/NewPost";

import LogOut from './Pages/LogOut'
import Forgor from './Pages/Forgor'


import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

import { posts as defaultPosts } from './Data/posts.js';
import defaultUsers from './Data/users.json';

import './Styles/Variables.css';
import './Styles/App.css';
import './Styles/Card.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const [characters, setCharacters] = useState([]);
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState(0);
  const [recent, setRecent] = useState([]);
  const [posts, setPosts] = useState(defaultPosts);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(defaultUsers);

  const [colorTheme, setColorTheme] = useState('dark');

  const theme = createTheme({
    palette: {
      primary: {
        main: '#154F7F',
      },
      secondary: {
        main: '#7393B3',
      }
    },
  });
  console.log(user);
  return (
    <div className={`app ${colorTheme}`} >
      <ThemeProvider theme={theme}>
        <Router>
        <Header user={user} setUser={setUser} />
          <div className="content">
            <Sidebar user={user} />
            <Routes>
              <Route path="/" element={<Home user={user} posts={posts} setPosts={setPosts} />} />
              <Route path="/home" element={<Home user={user} posts={posts} setPosts={setPosts} />} />

              <Route path="/signup" element={<SignUp setUser={setUser} users={users} setUsers={setUsers} />} />
              <Route path="/login" element={<SignIn setUser={setUser} users={users} />}/>
              <Route path="/logout" element={<LogOut setUser={setUser} />}/>
              <Route path="/forgot-password" element={<Forgor />} />

              <Route path="/profile" element={<Profile user={user} colorTheme={colorTheme} setColorTheme={setColorTheme} />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/learn" element={<Learn />}/>
              <Route path="/learn/:topic" element={<Topic />} />

              <Route path="/forums" element={<Forums user={user} posts={posts} setPosts={setPosts} />}/>
              <Route path="/forums/post/:id" element={<Post user={user} posts={posts} />} />
              <Route path="/forums/new-post" element={<NewPost posts={posts} setPosts={setPosts} id={id} setId={setId} />} />
              
              <Route path="/organize" element={<Organization characters={characters} setCharacters={setCharacters} notes={notes} setNotes={setNotes} id={id} setId={setId} recent={recent} />} />
              <Route path="/organize/notes" element={<Notes />} />
              <Route path="/organize/notes/:noteId" element={<Notes notes={notes} setNotes={setNotes} id={id} setId={setId} recent={recent} setRecent={setRecent} />} />
              <Route path="/organize/characters" element={<Characters />} />
              <Route path="/organize/character/:id" element={<Character characters={characters} setCharacters={setCharacters} recent={recent} setRecent={setRecent} />} />
              
              <Route path="/create-group" element={<MakeNewGroup />} />

            </Routes>
          </div>
        </Router>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
