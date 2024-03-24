import styles from '../conversation/convostyles.module.scss'

function TagsComponent ({keys}) {


    const tagsComponentDivStyles = {
        borderRadius : "0 30px 30px 30px",
        listStyleType: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: "15px",
        flexWrap: "wrap",
        paddingLeft: "20px",
        cursor: "default",
        width: "50vw"
    }

    return <div style={tagsComponentDivStyles} className={styles.tagsComponentDiv}> 
        {keys.map((input, index)=>{
            return <div key={index} className={styles.tags}>
                  <span htmlFor={`${"checkTag"}` + index } key ={index}>{input}</span>
            </div> 
        })}
     </div>
}

export default TagsComponent;