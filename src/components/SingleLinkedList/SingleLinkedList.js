import React from 'react';
import {v4 as uuid} from 'uuid';

function SingleLinkedList({addNode,deleteNode,insertNode,linkedList}) {

  console.log(linkedList,"Linked List")
    return (
      <>
      <div>
        <button onClick={() => addNode(uuid().slice(0,5))}>Add Node</button>
        <button onClick={() => insertNode(0,uuid().slice(0,5))}>Insert Node at Start</button>
        <button onClick={() => insertNode(linkedList.length,uuid().slice(0,5))}>Insert Node at End</button>
        <form onSubmit={(e) => {
            e.preventDefault();
            const index=e.target.elements.data.value;
            insertNode(index>0 && index<linkedList.length?index:linkedList.length,uuid().slice(0,5))
            e.target.reset();
          }}>
          <input type="text" name="data"/>
          <button type="submit">Add Node</button>
        </form>        
      </div>
      {linkedList.map((node, index) => 
        <div key={index}>
          <span>{`Data - ${node.data}`} </span>
          <button onClick={()=>deleteNode(index)}>Delete</button>
        </div>
      )}
      </>
    );
  }
  
export default SingleLinkedList;
// const id=uniqueId.slice(0,3);