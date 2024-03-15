'use client';

import styles from "./convostyles.module.scss"
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";

const chatData = [
    {
        id: 1,
        question: "who was nalini",
        answer: "Nalini, a 28-year-old software engineer, was the victim in this case. She worked for a BPO company in Pune and used to travel to work by company transport or public transport, including autos. On the evening of October 7, 2019, she missed her usual transportation and was offered a lift by Sachin Mishra, one of the accused, near Reliance Mall on Nagar Road. She trusted them and placed herself in their custody, but they took advantage of her vulnerable situation and abducted her, subjecting her to gang rape multiple times, including at various locations such as Hadapsar, Manjari Phata, Abalwadi, Shankar Parvati Mangal Karyalaya, and Dargah at Chandan Nagar. After raping her, they brutally killed her by strangling her with a dupatta and crushing her face and head with heavy stones to conceal her identity and destroy evidence."
    },{
        id: 2,
        question: "did nalini raised her voice after the incident?",
        answer: "There is no information provided in the context you provided to suggest that Nalini raised her voice after the incident. In fact, it is mentioned that she missed her usual transportation and was offered a lift by one of the accused, Sachin Mishra, near Reliance Mall on Nagar Road. She trusted them and placed herself in their custody, which suggests that she may not have been aware of the danger she was in at the time. It is only after the incident that Nalini's parents successfully followed up with the investigation team and registered a complaint against the accused. Therefore, it can be inferred that Nalini did not raise her voice or report the incident to anyone immediately after it occurred."
    },{
        id: 3,
        question: "what are some key aspects of this case i should focus on?",
        answer:`Based on the context you provided, here are some key aspects of the case that you may want to focus on:
        1. Gang Rape and Murder: The case involves a heinous crime of gang rape and murder, which is a serious violation of a person's physical and sexual autonomy. It highlights the need for strict laws and enforcement to protect women from such crimes.
        2. Trust Misused: Nalini trusted the accused, Sachin Mishra, who offered her a lift near Reliance Mall on Nagar Road. This misuse of trust is a common tactic used by criminals to exploit their victims. It emphasizes the importance of being vigilant and aware of one's surroundings, especially when traveling alone at night.
        3. Conspiracy: The case involves a conspiracy among multiple accused to commit the heinous crime. This highlights the need for effective investigation and prosecution to uncover the full extent of criminal activity and bring the perpetrators to justice.
        4. Lack of Evidence Destruction: Despite the efforts of the accused to destroy evidence, the prosecution was able to gather sufficient evidence to prove their guilt beyond reasonable doubt. This underscores the importance of thorough investigation and collection of evidence in ensuring that criminals are brought to justice.`
    }
]

function Convo(){

    if (!window){
        return <div></div>
    }

    const sessionSummaryData = window.sessionStorage.getItem("summary_response");
    const router = useRouter();
    const [summarydataupdate, setsummarydataupdate] = useState("")

    if (!sessionSummaryData) {
        router.push("/");
        return;
    };

    const summaryData = JSON.parse(sessionSummaryData);

    const [inputQuery, updateQuery] = useState("")

    function handleInputChange(e){
        updateQuery(e.target.value)
    }

    function handleSubmit(){
        apifetch(inputQuery)
    }

    const handleKeyPressOnInput = (e) => {
        if(e.key == "Enter" && inputQuery.replace(/\s/g, '').length > 0){
            e.preventDefault();
            QnAData.questions.push(inputQuery)
            document.querySelector("#query").value = "";
            handleSubmit()
        }
    }

    
    let data = ""

    async function apifetch (query) { // 34.29.38.173
      try{
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
        console.log("api not working")
      }

      data = await dataraw.json();
      console.log(data.content)

      }catch(error){
        console.log("got error: \n", error)
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
            </div>

            <div id={styles.containers}>
                <h2>

                <img className={styles.robotIconImg} src="/img/robotIcoEdit.png" alt="roboIcon" />

                Key Entities-</h2>
                <ol className={styles.keypoints}>
                    {summaryData.key_entities.map((input, index)=>{
                        return <li key={index}>{input}</li> 
                    })}
                </ol>   

            </div>

            

            {chatData.map((input)=>{

               return <>
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
               </>
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