import React from 'react';
import { Link } from 'react-router-dom';

//import material ui
// import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

//import Font Awesome icons
import { FaRegComment } from "react-icons/fa";

// import CommentForm from '../../components/CommentForm';
// import CommentList from '../../components/CommentList';

// import PostList css
import "./PostList.css"

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

const PostList = ({ posts, title }) => {

  // const [expanded, setExpanded] = React.useState(-1);

 

  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }
  

  return (
      <Grid>
        <CssBaseline />
      {/* <h3>{title}</h3> */}
      {posts &&
        posts.map((post, _id) => (
          <Card className="post-list" item key={post._id} sx={{ bgcolor: "#eeeeee", margin: 4, padding: 0.5, borderRadius: "0.3rem"}}>
            <CardContent className="cardContentTop">
            <p className="card-header">
              <Link className="username"
                to={`/profile/${post.username}`}
              >
                {post.username}
              </Link>
              posted on {post.createdAt}
            </p>
            <p className="comment-count">{post.commentCount} Comments</p>
            </CardContent>
            <CardContent className="cardContent">
              <p className="post-text">{post.postText}</p>
            </CardContent>
                
                <CardContent className="cardContentBottom" sx={{ padding: 0 }}>
                {/* <ExpandMore
                  expand={expanded}
                  onClick={() => setExpanded(expanded === _id ? -1 : _id)}
                  aria-expanded={expanded}
                  aria-label="show more"
                > */}
                <Link
                to={`/post/${post._id}`}>
                  <p className="comment-link"><FaRegComment className="comment-icon" /> Comment</p>
                  </Link>
                {/* </ExpandMore> */}
                </CardContent>
                {/* <Collapse className="collapsed-section" in={expanded === _id} timeout="auto" unmountOnExit> */}
                  {/* <CommentForm/>
                  <CommentList/> */}
                {/* </Collapse> */}
          </Card>
        ))}
        </Grid>
  );
};

export default PostList;