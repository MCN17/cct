import React from 'react';
import { Link } from 'react-router-dom';

// import material ui
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';

const FriendList = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return <p className="bg-dark text-light p-3">{username}, make some friends!</p>;
  }

  return (
    <Grid>
      <h5>
        {username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
      </h5>
      {friends.map(friend => (
        <Button className="btn w-100 display-block mb-2" key={friend._id}>
          <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
        </Button>
      ))}
    </Grid>
  );
};

export default FriendList;