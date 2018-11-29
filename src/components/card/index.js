import React from "react";
import { PropTypes } from 'prop-types';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt'
import MyModal from '../Modal';

export const MyCard = (props) => {
  // Destructure props parameter into individual items
  const {
    label,
    title,
    buttonText,
    content,
    toggleModal,
    modalOpen,
  } = props;

  return (
    <Card raised="true" square="true">
       <CardContent>
         <Typography color="inherit">
           { label }
         </Typography>
         <Typography variant="h2" gutterBottom="true">
          { title }
         </Typography>
         <Typography color="inherit" noWrap="true" paragraph
            style={{
                whiteSpace: "normal",
                wordWrap: "break-word"
                 }}>
         { content }
         </Typography>
       </CardContent>
       <CardActions>
         <Button
          onClick={toggleModal}
          variant="contained"
          size="small"
          color="primary">
          { buttonText }
          </Button>
          <Button
           variant="contained"
           size="small"
           color="primary">
           Edit
           </Button>
           <Button
           style={{marginLeft: 100}}
            >
            <ThumbUpAlt />
            </Button>
            <Button
            >
             <ThumbDownAlt />
             </Button>
             <MyModal
              toggleModal={toggleModal}
              modalOpen={modalOpen}
              title={ label }
              content={ content } />
       </CardActions>
     </Card>
  );
}

// Enable type-checking
MyCard.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string,
};
