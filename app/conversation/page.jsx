'use client';

import styles from "./convostyles.module.scss"
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";

const data = {
    Summary: "The earliest forms of transportation were rudimentary, consisting mainly of carts and wagons pulled by animals. However, with the advent of the Industrial Revolution in the 18th century, the landscape of transportation underwent a dramatic transformation. Steam-powered vehicles emerged, offering faster and more efficient modes of travel. The invention of the automobile in the late 19th century revolutionized transportation yet again, paving the way for the mass production of cars and the establishment of the automotive industry. ",
    keyPoints: ["Early transportation: Carts and wagons pulled by animals.","Industrial Revolution: Transformation of transportation.", 'Steam-powered vehicles: Faster and more efficient travel.', "Invention of the automobile: Revolutionized transportation.", "Mass production of cars: Establishment of the automotive industry.", "Invention of the automobile: Revolutionized transportation."]
}

function Convo(){

    const sessionSummaryData = window.sessionStorage.getItem("summary_response");
    const router = useRouter();
    
    if (!sessionSummaryData) {
        router.push("/");
        return;
    };

    const summaryData = JSON.parse(sessionSummaryData);

    const [inputData, updateData] = useState("")

    function handleInputChange(e){
        updateData(e.target.value)
    }

    function handleSubmit(e){

    }

    return <div className={styles.parentContainer}>

        <Navbar/>

        <div className={styles.main}>

            <div id={styles.containers}>
                <h2> 
                    <Image
                        className={styles.inputArrow}
                        src="/img/robotIcoEdit.png"
                        width={50}
                        height={50} 
                        alt="roboIcon"
                    />
                Summary-</h2>
                <p className={styles.summary}>{summaryData.summary}</p>
            </div>

            {/* <div id={styles.containers}>
                <h2>
                    <Image
                        className={styles.inputArrow}
                        src="/img/robotIcoEdit.png"
                        width={50}
                        height={50} 
                    />
                Summary-</h2>
                <p className={styles.summary}>{data.Summary}</p>
            </div> */}

            <div id={styles.containers}>
                <h2>
                    <Image
                        className={styles.inputArrow}
                        src="/img/inputArrow.png"
                        width={50}
                        height={50} 
                        alt="roboIcon"
                    />
                Key Entities-</h2>
                <ul className={styles.keypoints}>
                    {summaryData.key_entities.map((input, index)=>{
                        return <li key={index}>{input}</li>
                    })}
                </ul>
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
                    />
                </div>
            </form>
        </div>
    </div>  


}

export default Convo;