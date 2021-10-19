import React, { useState, useCallback } from 'react';
import Modal from './Modal';
import Portal from "./Portal";
import './style.css';

export default function App() {
  const [show, setShow] = useState(false);
  const onClick = useCallback(() => {
    setShow(true);
  }, []);
  const onClose = useCallback(() => {
    setShow(false);
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div class="wrapper">
        <button onClick={onClick}>ShowModal</button>
      </div>
      <Portal id="root"><Modal
        header="Modal Dummy"
        show={show}
        content="This is dummy modal content"
        onClose={onClose}
      /></Portal>
      
    </div>
  );
}
