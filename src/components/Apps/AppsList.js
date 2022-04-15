import AppDetails from './AppDetails';
import styles from './AppsList.module.css';
function AppsList(props) {

    return (
        <div className={styles.container}>
            {props.data.map((app) => {
                return <AppDetails data={app} key={app.id} />
            })}
        </div>
    )
}

export default AppsList;