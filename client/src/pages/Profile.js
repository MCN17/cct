// import React from 'react';

// Import Post Form component
// import PostForm from '../components/PostForm';

//import material ui
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';


import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
// import FriendList from '../components/FriendList';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';

const Profile = (props) => {
  const { username: userParam } = useParams();

//   const [addFriend] = useMutation(ADD_FRIEND);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile:username" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
        
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }



  return (
    <Container>
        <CssBaseline />
              {!userParam && <PostForm />}
          
              <h2>
                Viewing {userParam ? `${user.username}'s` : 'your'} profile.
              </h2>

             
            
                <PostList
                  posts={user.posts}
                  title={`${user.username}'s posts...`}
                />

              
    </Container>
  );
};

export default Profile;