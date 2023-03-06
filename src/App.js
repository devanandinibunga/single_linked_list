import React, { useState } from 'react';
import './App.css';
// import DoubleLinkedList from './components/DoubleLinkedList/DoubleLinkedList';
import SingleLinkedList from './components/SingleLinkedList/SingleLinkedList';

function App() {

  const [linkedList, setLinkedList] = useState([]);
  
  function addNode(data) {
    const newNode= {
      data: data,
      next: null,
    };
    if (linkedList.length === 0) {
      setLinkedList([newNode]);
    } else {
      const lastNode = linkedList[linkedList.length - 1];
      lastNode.next = newNode;
      setLinkedList([...linkedList, newNode]);

    }
  }

  
  function deleteNode(index) {
    // console.log(index)
    if (index === 0) {
      setLinkedList(linkedList.slice(1));
    } else {
      const prevNode = linkedList[index - 1];
      prevNode.next = linkedList[index].next;
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
    };
    if (index === 0) {
      newNode.next = linkedList[0];
      setLinkedList([newNode, ...linkedList]);
    } else {
      const prevNode = linkedList[index - 1];
      const nextNode = linkedList[index];
      prevNode.next = newNode;
      newNode.next = nextNode;
      setLinkedList([...linkedList.slice(0, index), newNode, ...linkedList.slice(index)]);

    }
  }

  return (
    <>
      <SingleLinkedList addNode={addNode} insertNode={insertNode} deleteNode={deleteNode} linkedList={linkedList}/>
      {/* <DoubleLinkedList/> */}
    </>
  );
}

export default App;
