import Link from "next/link";
import styles from "./convostyles.module.scss"

function Convo(){
    return <div>
        <h1>This is conversation page.</h1>
        {/* an example of link component */}
        <Link className={styles.link} href="/">Transfer me to Home Page.</Link>
    </div>  
}

export default Convo;