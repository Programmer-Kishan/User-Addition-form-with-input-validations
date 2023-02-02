
import styles from './LabelInput.module.css';

const LabelInput = (props) => {
    return (
        <div className={styles["input-label"]}>
            <label htmlFor={props.name}>{props.title}</label>
            <input type={props.type} id={props.name}/>
        </div>
    )
}

export default LabelInput;