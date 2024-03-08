'use client'
import { useState, useRef } from "react";
import styles from '../page.module.scss'

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const DragOver = (event) => {
    event.preventDefault();
  };

  const Drop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };
  
  const Upload = () => {
    
  };

  if (files) return (
    <div className={styles.card}>
      <h2>{files[0].name}</h2>      
      <button className={styles.selectFileBtn} onClick={() => setFiles(null)}>Cancel</button>
    </div>
            
  )

  return (
    <>
        <div 
          className={styles.card}
          onDragOver={DragOver}
          onDrop={Drop}
        >
          <div className={styles.dragAndDrop}>
            <img className={styles.uploadLogo} src="/img/uploadLogo.png" alt="" />
            <h1>Drag & Drop document</h1>
          </div>

          <div className={styles.or}>
            <p style={{color:"#999", fontSize:"27px", fontWeight:"200"}}>--------------<span style={{fontWeight:"500"}}>&nbsp; or &nbsp; </span>--------------</p> 
          </div>

          <div className={styles.selectFileContainer}>
            <label for="upload-file">
                <button className={styles.selectFileBtn} onClick={() => inputRef.current.click()}>Select file</button>
                <input 
                  onChange={(event) => setFiles(event.target.files)}
                  hidden
                  ref={inputRef}
                  type="file" 
                  id="upload-file"
                  accept=".pdf,.doc,.docx"
                  style={{display:"none"}}/>
            </label>
          </div>

        </div>
    </>
  );
};

export default DragDropFiles;