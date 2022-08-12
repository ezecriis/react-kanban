import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = React.memo(({ task, index }) => {
  
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <li
          className="list-item has-text-white"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.content}
          <button className="delete is-pulled-right btn-hover"/>
        </li>
      )}
    </Draggable>
  );
});

export default Task;
