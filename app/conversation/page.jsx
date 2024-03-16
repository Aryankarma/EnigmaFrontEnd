'use client';

import styles from "./convostyles.module.scss"
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import React from "react";

const chatData = []

function Convo(){

  
    if (!window){
        return <div></div>
    }

    const sessionSummaryData = window.sessionStorage.getItem("summary_response");
    const router = useRouter();

    if (!sessionSummaryData) {
        router.push("/");
        return null;
    }

    const summaryData = JSON.parse(sessionSummaryData);

    const [inputQuery, setInputQuery] = useState("");
    const [chatData, setChatData] = useState([]);

    function handleInputChange(e){
        setInputQuery(e.target.value);
    }

    async function handleSubmit(){
        if (inputQuery.trim() === "") return;

        const dataTemplate = {
            id: chatData.length + 1,
            question: inputQuery,
            answer: ""
        };

        setChatData(prevChatData => [...prevChatData, dataTemplate]); 
        document.querySelector("#query").value = "";

        apifetch(inputQuery);
    }

    const handleKeyPressOnInput = (e) => {
        if(e.key === "Enter" && inputQuery.trim() !== ""){
            e.preventDefault();
            handleSubmit();
        }
    }

    async function apifetch(query) {
        try {
            const dataraw = await fetch("http://localhost:8000/chat/" + summaryData.session_id, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    content: query
                })
            });

            if(!dataraw.ok){
                console.log("API not working");
                return;
            }

            const data = await dataraw.json();

            setChatData(prevChatData => {
                const updatedChatData = [...prevChatData];
                updatedChatData[updatedChatData.length - 1].answer = data.content;
                console.log(chatData)
                return updatedChatData;
            });


        } catch(error) {
            console.log("Got error:", error);
        }
    }

    return <div className={styles.parentContainer}>

        <Navbar/>

        <div className={styles.main}>

            <div id={styles.containers}>
                <h2> 

                    <img className={styles.robotIconImg} src="/img/robotIcoEdit.png" alt="roboIcon" />

                    Summary-</h2>

                <p className={styles.summary}>{summaryData.summary}</p>

                <h2 className={styles.secondhead}>Key Entities-</h2>

                <ul className={styles.keypoints}>
                    {summaryData.key_entities.map((input, index)=>{
                        return <li key={index}>{input}</li> 
                    })}
                </ul> 

            </div>


            {chatData.map((input, index)=>{
               return <React.Fragment key={index}>
                    <div id={styles.containers}>
                    <h2 className={styles.marginTop1rem}>
                        <img className={styles.youLogo} src="/img/youLogo.png" alt="user logo" />
                    You</h2>
                    <p key={input.id} className={styles.que}> {input.question} </p>
                    </div>

                    <div id={styles.containers}>
                    <h2> 
                        <img className={styles.robotIconImg} src="/img/robotIcoEdit.png" alt="roboIcon" />
                    Enigma</h2>
                    <p key={input.id} className={styles.ans}> {input.answer} </p>
                    </div>
               </React.Fragment>
            })}

        </div>  

        <div className={styles.inputbox}>
            
            <form action="" method="post">

                <textarea 
                    onChange={(e)=>handleInputChange(e)}   
                    onKeyDown={(e)=>handleKeyPressOnInput(e)}
                    type="text" 
                    name="query" 
                    id="query" 
                    placeholder="Ask more on it" >
                </textarea>

                <div onClick={(e)=>handleSubmit(e)} className={styles.imageContainer}>
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