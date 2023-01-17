import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

// import pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Circuits from "./pages/Circuits";
import Team from "./pages/Team";
import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";
import SinglePost from "./pages/SinglePost";

// import Components
import NavBar from "./components/NavBar"

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/profile">
              <Route path=":username" element={<Profile />} />
              <Route path="" element={<Profile />} />
            </Route>
            <Route 
              path="/post/:id"
              element={<SinglePost />}
            />

            <Route path="/circuits" element={<Circuits/>}/>
            <Route path="*" element={<NoMatch/>}/>
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
