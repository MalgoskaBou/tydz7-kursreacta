import React from "react";

function Timebox({ title, totalTimeInMinutes, onDelete, onEdit, onUpdate }) {
  return (
    <div className="Timebox">
      <h3>
        {title} - {totalTimeInMinutes} min.
      </h3>
      <button onClick={onDelete}>Usuń</button>
      <button onClick={onEdit}>Zmień</button>
      <button onClick={onUpdate}>Updatuj :P</button>
    </div>
  );
}

export default Timebox;
