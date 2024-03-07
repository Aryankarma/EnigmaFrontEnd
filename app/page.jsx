import React from "react";
import Link from "next/link";
import styles from "./page.module.scss";
import TakeInput from "./components/inputFile";

export default function Home() {
  return (
    <div className={styles.parentContainer}>
      
      <nav className={styles.nav}>
        <h1 className={styles.enigma}>ENIGMA</h1>
      </nav>

      <main className={styles.main}>

        <div>
          <h1>Are you exhausted with lengthy documents?</h1>
          <h1>ENIGMA can help you!</h1>
        </div>
        
        <div className={styles.card}>

          <div className={styles.dragAndDrop}>
            <img className={styles.uploadLogo} src="/img/uploadLogo.png" alt="" />
            <h1>Drag & Drop files</h1>
          </div>

          <div className={styles.or}>
            <p style={{color:"#999", fontSize:"27px", fontWeight:"200"}}>--------------<span style={{fontWeight:"500"}}>&nbsp; or &nbsp; </span>--------------</p> 
          </div>

          <div className={styles.selectFileContainer}>
            <label for="upload-file">
                <span className={styles.selectFileBtn}>Select File</span>
                <input type="file" id="upload-file" accept=".pdf,.doc,.docx" style={{display:"none"}}/>
            </label>
          </div>

        </div>


      <Link className={styles.link} href="/conversatoin">
          <button id={styles.resetbutton}>Analysis Results</button>
      </Link>

      </main>
      
    
    </div>
  );
}
