import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

function DoubleLinkedList() {

    const [linkedList, setLinkedList] = useState([]);
  
    function addNode(data) {
      const newNode= {
        data: data,
        next: null,
        prev:null,
      };
      if (linkedList.length === 0) {
        setLinkedList([newNode]);
      } else {
        const lastNode = linkedList[linkedList.length - 1];
        lastNode.next = newNode;
        newNode.prev=lastNode;
        setLinkedList([...linkedList, newNode]);
  
      }
    // console.log(list)
      
    }
  
    
    function deleteNode(index) {
      // console.log(index)
      if (index === 0) {
        setLinkedList(linkedList.slice(1));
      } else {
        const prevNode = linkedList[index - 1];
        prevNode.next = linkedList[index].next;
        const nextNode=linkedList[index + 1];
        nextNode.prev=linkedList[index].prev;
        // console.log(list)
        setLinkedList(linkedList.filter((_, i) => i !== index));
      // }
    }
    // console.log(list)
    }
      
  
    function insertNode(index, data) {
      const newNode = {
        data: data,
        next: null,
        prev:null,
      };
      if (index === 0) {
        newNode.next = linkedList[0];
        setLinkedList([newNode, ...linkedList]);
      } else {
        const prevNode = linkedList[index - 1];
        const nextNode = linkedList[index];
        prevNode.next = newNode;
        newNode.prev=prevNode;
        newNode.next = nextNode;
        // nextNode.next=newNode.next;
        setLinkedList([...linkedList.slice(0, index), newNode, ...linkedList.slice(index)]);
  
      }
    }

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
  
export default DoubleLinkedList;
// const id=uniqueId.slice(0,3);