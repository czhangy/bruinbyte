// import React from "react";
// //import PropTypes from "prop-types";
// //import { withStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";

// export default function TextFieldsFunc() {
//   return (
//     <TextField
//       id="standard-multiline-flexible"
//       variant="outlined"
//       label="Add Comment"
//       multiline
//       rowsMax={14}
//       //helperText="!"
//       fullWidth
//       margin="normal"
//       //value={this.state.value}
//       //onChange={this.handleChange}
//       //value={value}
//       //onChange={handleChange}
//     />
//   );
// }
// import React from "react";

// import TextField from "@material-ui/core/TextField";

// class TestBox extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       rating: 0,
//     };
//     this.changeRating = this.changeRating.bind(this);
//   }
//   changeRating(newRating) {
//     this.setState({
//       rating: newRating,
//     });
//     alert(newRating);
//   }

//   render() {
//     // rating = 2;
//     return (
//       <StarRatings
//         rating={this.state.rating}
//         starRatedColor="blue"
//         changeRating={this.changeRating}
//         numberOfStars={5}
//         name="rating"
//       />
//     );
//   }
// }

// export default TestBox;

import React, { useState } from "react";
//import PropTypes from "prop-types";
//import { withStyles } from "@material-ui/core/styles";
//import "./styles.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import ListFunc from "components/CommentBox/ListFunc.js";
//import { List } from "@material-ui/core";

export default function TextFieldsFunc() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    //console.log("Typed => ${e.target.value}");
    setValue(e.target.value);
  };
  return (
    <div className="TextFieldsFunc">
      <TextField
        id="standard-multiline-flexible"
        variant="outlined"
        label="Add Comment"
        multiline
        rowsMax={14}
        //helperText="!"
        fullWidth
        margin="normal"
        //value={this.state.value}
        onChange={handleChange}
        //value={ListFunc(value)}
        value={value}
        //onChange={handleChange}
      />
      <Button
        //aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={() => alert(value)}
        //onClick={() => ListFunc(value)}
      >
        Submit!
      </Button>
    </div>
  );
}
