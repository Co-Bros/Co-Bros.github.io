import AppsList from "../components/Apps/AppsList";
import {useEffect,useState} from 'react';
import ReactLoading from 'react-loading';
import styles from './AppsPage.module.css';

function AppsPage() {

    var [loadedApps,setLoadedApps] = useState([]);
    var [loading,setLoading] = useState(true);

    useEffect( () => {
        fetch("https://cobros-a00ff-default-rtdb.firebaseio.com/apps.json")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            var apps = [];
            for (var key in data){
                apps.push({
                    key:key,
                    ...data[key]
                })
            }

            setLoading(false);
            setLoadedApps(apps);
            console.log("fetched data:",loadedApps);
        })
    },[])

    if (loading) {
        return (
            <div className={styles.loader}>
                <ReactLoading type={'bubbles'} color={'#FFFFFF'} height={100} width={100} />
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <h1>Get your Apps now!</h1>
            <AppsList data={loadedApps}/>
        </div>
    )
}

export default AppsPage;

// e-note-setup -> direct downloadlink
// https://drive.google.com/uc?export=download&id=1WoCltmaU_VY3hD_ct6qoUrYjrHp7j-dP