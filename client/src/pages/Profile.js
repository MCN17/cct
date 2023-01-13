import React from 'react';


//import material ui
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid'
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// import css
import "./homeStyle.css";

import { Navigate, useParams } from 'react-router-dom';

// Import components
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import FriendList from '../components/FriendList';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';

const Profile = (props) => {
  const { username: userParam } = useParams();

  const [addFriend] = useMutation(ADD_FRIEND);
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

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container maxWidth="xxl" sx={{ }}>
      <CssBaseline>
        <Grid container spacing={1} sx={{justifyContent:"center", margin: 0}}>
          <Grid item xs={12} sx={{ml: 1, justifyContent: "space-between" }}>
            <h2 className="profile-view">
              {user.username}
            </h2>
            <FriendList
              username={user.username}
              friendCount={user.friendCount}
              friends={user.friends}
                />
          </Grid>
          <Grid item xs={4} sx={{}}>
              {!userParam && <PostForm />}
              </Grid>
              <Grid item xs={6} sx={{}}>
                <PostList
                  posts={user.posts}
                  title={`${user.username}'s posts...`}
                />
          </Grid>

          <Grid item xs={12}>
            {userParam && (
              <Button sx={{ mt: 3, mb: 2, bgcolor: "#b71c1c" }} onClick={handleClick}>
                Add Friend
              </Button>
              )}
          </Grid>
        </Grid>
      </CssBaseline>
    </Container>
  );
};

export default Profile;