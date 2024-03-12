'use client';

import styles from "./convostyles.module.scss"
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { Content } from "next/font/google";

const data = {
    Summary: "The earliest forms of transportation were rudimentary, consisting mainly of carts and wagons pulled by animals. However, with the advent of the Industrial Revolution in the 18th century, the landscape of transportation underwent a dramatic transformation. Steam-powered vehicles emerged, offering faster and more efficient modes of travel. The invention of the automobile in the late 19th century revolutionized transportation yet again, paving the way for the mass production of cars and the establishment of the automotive industry. ",
    keyPoints: ["Early transportation: Carts and wagons pulled by animals.","Industrial Revolution: Transformation of transportation.", 'Steam-powered vehicles: Faster and more efficient travel.', "Invention of the automobile: Revolutionized transportation.", "Mass production of cars: Establishment of the automotive industry.", "Invention of the automobile: Revolutionized transportation."],
    Q: "What is this case about?",
    A: "This case is about xyz"
}

function Convo(){

    // const sessionSummaryData = window.sessionStorage.getItem("summary_response");
    // const router = useRouter();
    // const [summarydataupdate, setsummarydataupdate] = useState("")

    // if (!sessionSummaryData) {
    //     router.push("/");
    //     return;
    // };

    // console.log()
    // const summaryData = JSON.parse(sessionSummaryData);
    
    const [inputData, updateData] = useState("")

    function handleInputChange(e){
        updateData(e.target.value)
    }

    function handleSubmit(e){

    }

    
//   useEffect(()=>{

    // let data = ""

    async function apifetch () {
      try{
        const dataraw = await fetch("http://localhost:8000/chat/faksdjfa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: "what is going on?"
      })
    });
    
      if(!dataraw.ok){
        console.log("aip not working")
      }

    //   data = await dataraw.json();
      console.log(data.content)

      }catch(error){
        console.log("got error: \n", error)
      }
    }
    // apifetch()

//   },[])

    // console.log(summaryData)
    // console.log("original text: \n" + summaryData.original_text)
    // console.log("summary: \n" + summaryData.summary)
    // console.log("key entities: \n" + summaryData.key_entities)

    return <div className={styles.parentContainer}>

        <Navbar/>

        <div className={styles.main}>

            <div id={styles.containers}>
                <h2> 
                    {/* <Image
                        className={styles.robotIconImg}
                        src="/img/robotIcoEdit.png"
                        width={50}
                        height={50} 
                        alt="roboIcon"
                    /> */}

                    <img className={styles.robotIconImg} src="/img/robotIcoEdit.png" alt="roboIcon" />

                Summary-</h2>
                <p className={styles.summary}>{data.Summary}</p>
            </div>

            <div id={styles.containers}>
                <h2>
                {/* <Image
                        className={styles.robotIconImg}
                        src="/img/robotIcoEdit.png"
                        width={50}
                        height={50} 
                        alt="roboIcon"
                    /> */}

                <img className={styles.robotIconImg} src="/img/robotIcoEdit.png" alt="roboIcon" />


                Key Entities-</h2>
                <ol className={styles.keypoints}>
                    {console.log(data)}
                    {data.keyPoints.map((input, index)=>{
                        return <li key={index}>{input}</li> 
                    })}
                </ol>   

            </div>

            
            <div id={styles.containers}>
                <h2 className={styles.marginTop1rem}> 
                    {/* <Image
                        className={styles.robotIconImg}
                        src="/img/youLogo.png"
                        width={40}
                        height={40} 
                        alt="roboIcon"
                    /> */}

                    <img className={styles.youLogo} src="/img/youLogo.png" alt="user logo" />

                You</h2>
                <p className={styles.que}>{data.Q}</p>
            </div>
            
            <div id={styles.containers}>
                <h2> 
                    {/* <Image
                        className={styles.robotIconImg}
                        src="/img/robotIcoEdit.png"
                        width={50}
                        height={50} 
                        alt="roboIcon"
                    /> */}

                    <img className={styles.robotIconImg} src="/img/robotIcoEdit.png" alt="roboIcon" />

                Enigma</h2>
                <p className={styles.ans}>{data.A}</p>
            </div>

        </div>  

        <div className={styles.inputbox}>
            
            <form action="" method="post">
                {/* <input type="text" name="query" id="query" placeholder="Ask more on it" /> */}
                <textarea onChange={(event)=>handleInputChange(event)} type="text" name="query" id="query" placeholder="Ask more on it" ></textarea>
                <div onClick={(event)=>handleSubmit(event)} className={styles.imageContainer}>
                    <Image
                        className={styles.inputArrow}
                        src="/img/inputArrow.png"
                        width={22}
                        height={15} 
                        alt="input arrow"
                    />
                </div>
            </form>
        </div>
    </div>  


}

export default Convo;