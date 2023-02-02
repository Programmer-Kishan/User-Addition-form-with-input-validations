
import styles from './LabelInput.module.css';

const LabelInput = (props) => {
    return (
        <div className={styles["input-label"]}>
            <label htmlFor={props.name}>{props.title}</label>
            <input 
                type={props.type} 
                id={props.name} 
                value={props.value} 
                onChange={(event) => {props.onChange(event)}}
            />
        </div>
    )
}

export default LabelInput;