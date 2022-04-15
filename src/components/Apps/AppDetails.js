import styles from "./AppsDetails.module.css";

function AppDetails(props) {


    console.log("props data:"+props.data)
    return (
        <div className={styles.container}>
            <button className={styles.button}>
                {props.data.name}
            </button>
            <div className={styles.detaildiv} >
                <p>{props.data.description}</p>
                <h4>Platform: {props.data.platform}</h4>
                <h4>Source Code: <a href={props.data.sourceLink}>{props.data.sourceLink}</a></h4>
                <a href={props.data.downloadLink} className={styles.download}>Download</a>
            </div>
        </div>
    )
}

export default AppDetails;