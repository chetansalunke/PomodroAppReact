import React, { useState } from "react";

function Todo() {
  const [inputText, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputText !== "") setItems([...items, inputText]);
    setInput("");
    console.log({ items });
  };
  const removeItem = (index) => {
    const updatedTasks = items.filter((_, i) => i !== index);
    setItems(updatedTasks);
  };

  return (
    <div className="card-pomo">
      <div>
        <input
          type="text"
          value={inputText}
          className="input-field"
          placeholder="Enter Tasks"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        ></input>
      </div>

      <button type="button" class="button" onClick={addItem}>
        ADD
      </button>
      <div>
        {items.map((item, index) => {
          return (
            <div key={index}>
            
            <div className='label-center'>
                {/* div for label */}
              <div>
                <label className="label">{item}</label>
              </div>

              {/* div for label */}
              <div className="delete-btn">
                <button
                  type="button"
                  className="button"
                  onClick={() => removeItem(index)}
                >
                  DELETE
                </button>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;

// {items.map((item, index) => (
//     <li key={index} className='task-list li'>
//         <span key={item } className='task-list li span'>
//             {item}
//         </span>
//         <button onClick={() => removeTask(index)}>Remove</button>
//     </li>
// ))}
