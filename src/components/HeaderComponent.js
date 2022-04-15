import styles from './HeaderComponent.module.css';
import  Typist from 'react-typist';
import typistStyle from './Typist.css';

function HeaderComponent() {
    return (
        <>
        <div className={styles.header}>
            <h1>COBROS</h1>
            <div>
                <p>
                <Typist cursor={{show:true}} startDelay={2000} >
                <span>BORN</span> to <span>CODE</span>. 
                <Typist.Delay ms={1000} />
                <span>LIVE</span> to <span>CODE</span>.
                </Typist>
                </p>
            </div>        
        </div>
        </>
    )
}

export default HeaderComponent;