'use client'
import styles from "./page.module.scss";
import DragDropAnalysis from "./components/Drag&Drop";
// import Card, { DraggableCardWrapper } from './components/Drag&Drop'
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import axios from 'axios';

export default function Home() {

  const dataMain = [
    {
      data1 : "data coming from frontend 1"
    },{
      data2 : "data coming from frontend 2"
    }
  ]

  useEffect(()=>{
    // requesting data from server
    axios.get("http://localhost:3001/api/data")
    .then((datat)=>{
      console.log(datat)
    }).catch((error)=>{
      console.log(error)
    })

    // sending data to the server
    axios.post("http://localhost:3001/api/getdata", dataMain)
    .then((okayrequest)=>{
      console.log("data sent")
      console.log(okayrequest)
    }).catch((error)=>{
      console.log(error)
    })

  },[])

  return (
    <div className={styles.parentContainer}>

      <Navbar/>

      <main className={styles.main}>

        <div>
          <h1>Are you exhausted with lengthy documents?</h1>
          <h1>ENIGMA can help you!</h1>
        </div>

        <DragDropAnalysis/> {/* componenet containing drag & drop functionality */}

        {/* <Link className={styles.link} href="/conversation">
          <button id={styles.analysisbutton}>Analysis Results</button>
        </Link> */}

      </main>

    </div>
  );
}