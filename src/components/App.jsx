import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import CreateArea from "./CreateArea"

function App() {

    const [notesList, setNotesList] = useState([])

    // Add a note in the array notesList
    function addNote(note) {
        setNotesList(prevList => { return [...prevList, note] });
    };

    //Delete a note from the array notesList
    function deleteNote(id) {
        setNotesList(prevList => {
            return (prevList.filter(
                (value, index) => index !== id))
        });
    };

    return (
        <div>
            <Header />
            <CreateArea addClick={addNote} />

            {/* Map through the notesList table to render each note */}
            {notesList.map((noteItem, index) => (<Note key={index} id={index} delete={deleteNote} title={noteItem.title} content={noteItem.content} />))}

            <Footer />
        </div>
    );
};

export default App;