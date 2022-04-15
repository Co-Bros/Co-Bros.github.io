import styles from './AboutData.module.css';
import Typist from 'react-typist';
import typistStyle from '../Typist.css';
import image from '../img/cobrain.png';

function AboutData() {
    console.log("We are a SECRET INTERNATIONAL ORGANIZATION aimed at providing OPEN-SOURCE applications for CODERS as well as NON-CODERS".length)
    return (
    <div className={styles.container}>
        <div className={styles.mission}>
        <h1>
            <Typist cursor={{show:true,blink:true,element:'|'}} startDelay={1000}>
            "We are an ORGANIZATION
            <Typist.Backspace count={15} delay={600} />
             an INTERNATIONAL ORGANIZATION
             <Typist.Delay ms={500} /> aimed 
            at providing free HOSTING for developers, 
            <Typist.Delay ms={500} />
            who like us,
            <Typist.Delay ms={500} />
            want to DEPLOY their applications
            <Typist.Backspace count={12} delay={600} />
            OPEN-SOURCE applications"
            </Typist>
        </h1>
        </div>
        <div className={styles.img}>
            <img src={image} width='90%' height='90%' alt='Something'/>
            <h2>Eat.Sleep.Code.Repeat.</h2>
        </div>
    </div>
    )
}

export default AboutData;