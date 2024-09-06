import React, {createRef, useEffect,useRef } from 'react'
import Note from './Note'

const  Notes=({notes=[],setnotes=()=>{}})=> {
    const determinerandompostion=()=>{
        const maxX=window.innerWidth-250;
        const maxY=window.innerHeight-250; 
        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY),
          };      
    }
    useEffect(()=>{
     //localstorage logic
     const savednotes= JSON.parse(localStorage.getItem('notes'))||[];

     const updatednotes=notes.map((note)=>{
        const savednote=savednotes.find((n)=>n.id===note.id);
        if(savednote){
        return {...note,position:savednote.position};
        }else{
            const position=determinerandompostion();
            return {...note,position};
        } 
     });
 setnotes(updatednotes);
 localStorage.setItem('notes',JSON.stringify(updatednotes));
    },[notes.length]);


    const noteRefs = useRef([]);

    const handleDragStart = (note, e) => {
        const {id} = note;
        const noteRef = noteRefs.current[id].current;
        const rect = noteRef.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
    
        const startPos = note.position;
    
        const handleMouseMove = (e) => {
          const newX = e.clientX - offsetX;
          const newY = e.clientY - offsetY;
    
          noteRef.style.left = `${newX}px`;
          noteRef.style.top = `${newY}px`;
        };
    
        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
    
          const finalRect = noteRef.getBoundingClientRect();
          const newPosition = {x: finalRect.left, y: finalRect.top};
    
          if (checkForOverlap(id)) {
            // check for overlap
            noteRef.style.left = `${startPos.x}px`;
            noteRef.style.top = `${startPos.y}px`;
          } else {
            updateNotePosition(id, newPosition);
          }
        };
    
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);  
    }

    
  const checkForOverlap = (id) => {
    const currentNoteRef = noteRefs.current[id].current;
    const currentRect = currentNoteRef.getBoundingClientRect();

    return notes.some((note) => {
      if (note.id === id) return false;

      const otherNoteRef = noteRefs.current[note.id].current;
      const otherRect = otherNoteRef.getBoundingClientRect();

      const overlap = !(
        currentRect.right < otherRect.left ||
        currentRect.left > otherRect.right ||
        currentRect.bottom < otherRect.top ||
        currentRect.top > otherRect.bottom
      );

      return overlap;
    });
  };

  const updateNotePosition = (id, newPosition) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? {...note, position: newPosition} : note
    );
    setnotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div>
        {notes.map((note)=>{
            return <Note key={note.id}  
            initialPos={note.position} 
            ref={
                noteRefs.current[note.id]
                  ? noteRefs.current[note.id]
                  : (noteRefs.current[note.id] = createRef())
              }
            content={note.content}
            onMouseDown={(e) => handleDragStart(note, e)}/>
        })}
    </div>
  )
}

export default Notes