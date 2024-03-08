import React from "react";
import Link from "next/link";
import styles from "./page.module.scss";
import DragDrop from "./components/Drag&Drop";
// import Card, { DraggableCardWrapper } from './components/Drag&Drop'

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

        <DragDrop/> {/* componenet containing drag & drop functionality*/}

      <Link className={styles.link} href="/conversatoin">
          <button id={styles.analysisbutton}>Analysis Results</button>
      </Link>

      </main>
      
    
    </div>
  );
}