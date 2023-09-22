import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './TheatreCard.module.css';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const TheatreCard=()=>{
    return (
     <div className={classes.card}>
        <div className={classes.cardbody}>
            <h2 className={classes.title}>PVR Cinemas</h2>
             <div className={classes.specifications}>
             <p>4k</p>
             <p><FontAwesomeIcon icon={faCheck} style={{color: "#46d312",}} /> Snacks</p>
             <p className={classes.type}>A/c</p>
             </div>
             <p className={classes.description}>The theatre is Located in mid city of Vijayawada with well furnished interiors and good sound system installed for better experience of the cinema</p>
            <h5>Dolby Atmos</h5>
        </div>
     </div>
     );
}

export default TheatreCard;