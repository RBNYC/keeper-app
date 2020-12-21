import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpand] = useState(false);

  // Create the new note while the user is typing
  function handleChange(event) {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
  };

  // On submit, send the note to the addNote function to store it in the notesList table and render it (App.jsx)
  function handleClick(event) {
    event.preventDefault();
    return [props.addClick(note), setNote({ ...note, title: "", content: "" })];
  }

  function appear() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} hidden={isExpanded ? false : true}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." value={note.content} onClick={appear} rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded && true}>
        <Fab
          onClick={handleClick}
        ><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
