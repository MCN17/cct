import React from 'react';


//import material ui
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
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
    <Container component="main" maxWidth="xl">
      <CssBaseline/>
        <Box>
        <Grid container spacing={1} sx={{ mb: 5, mt: 2}}>
          <Grid item lg={2} xs={12} sx={{ }}>
            <Card className="profile-view">
              <h2 className="username-profile">
                {user.username}
              </h2>
              <h2>
              <FriendList
                username={user.username}
                friendCount={user.friendCount}
                friends={user.friends}
                  />
              </h2>
            </Card>
          </Grid>
          <Grid className="addFriend" item xs={12}  sx={{ }}>
            {userParam && (
              <Button sx={{ mt: 3, mb: 2, bgcolor: "hsl(210,79%,46%)", color: "white" }} onClick={handleClick}>
                Add Friend
              </Button>
              )}
          </Grid>
          </Grid>
          <Grid container sx={{ justifyContent: "center"}}>
          <Grid className="postForm-list-profile" item xs={12} lg={6} sx={{}}>
          {!userParam && <PostForm />}
            <Card>
                  <PostList
                  posts={user.posts}
                  title={`${user.username}'s posts...`}
                />
                </Card>
          </Grid>

          
          </Grid>
        </Box>
        </Container>
  );
};

export default Profile;