import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Note from "./note.jsx";
import notes from "./notes.jsx";


function App(){
  return <div>
    <Header />
    {notes.map(noteItems=> (<Note  //map adds the data from notes.jsx component all in one go for seperate note. Reducing the hassel of doing it one by one for each note.
      key={noteItems.key}
      title={noteItems.title}
      content={noteItems.content}
    />))};
    <Footer />

    </div>
}
export default App;
