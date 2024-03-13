'use client';

import styles from "./convostyles.module.scss"
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { Content } from "next/font/google";

// const data = {
//     Summary: "The earliest forms of transportation were rudimentary, consisting mainly of carts and wagons pulled by animals. However, with the advent of the Industrial Revolution in the 18th century, the landscape of transportation underwent a dramatic transformation. Steam-powered vehicles emerged, offering faster and more efficient modes of travel. The invention of the automobile in the late 19th century revolutionized transportation yet again, paving the way for the mass production of cars and the establishment of the automotive industry. ",
//     keyPoints: ["Early transportation: Carts and wagons pulled by animals.","Industrial Revolution: Transformation of transportation.", 'Steam-powered vehicles: Faster and more efficient travel.', "Invention of the automobile: Revolutionized transportation.", "Mass production of cars: Establishment of the automotive industry.", "Invention of the automobile: Revolutionized transportation."],
//     Q: "What is this case about?",
//     A: "This case is about xyz"
// }

function Convo(){

    const sessionSummaryData = window.sessionStorage.getItem("summary_response");
    const router = useRouter();
    const [summarydataupdate, setsummarydataupdate] = useState("")

    if (!sessionSummaryData) {
        router.push("/");
        return;
    };

    // console.log()
    const summaryData = JSON.parse(sessionSummaryData);
    
    const [inputData, updateData] = useState("")

    function handleInputChange(e){
        updateData(e.target.value)
    }

    function handleSubmit(e){

    }

    
//   useEffect(()=>{

    // let data = ""

    const query = "what is going on?"

    async function apifetch (query) {
      try{
        const dataraw = await fetch("http://34.29.38.173:8000/chat/session1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: "This is the summary of a legal document: " + summaryData.summary + " Now this is my query on this data: " + query
      })
    });
    
      if(!dataraw.ok){
        console.log("api not working")
      } 

      data = await dataraw.json();
      console.log(data.content)

      }catch(error){
        console.log("got error: \n", error)
      }
    }

    apifetch(query)

//   },[])

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
                <p className={styles.summary}>{summaryData.summary}</p>
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
                    {summaryData.key_entities.map((input, index)=>{
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
                <p className={styles.que}> This is the question </p>
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
                <p className={styles.ans}> This is the question </p>
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