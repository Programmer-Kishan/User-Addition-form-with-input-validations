
import Button from '../UI/Button/Button';

import styles from './ErrorBox.module.css';

const ErrorBox = (props) => {

    return (
        <div className={styles['error-background']}>
            <div className={styles['error-box']}>
                <div>
                    <h3>Invalid {props.title}</h3>
                    <p>The given credentional for {props.title} is incorrect, please provide valid input.</p>
                    <Button type='button' onButtonClick={props.handleClick}>Ok</Button>
                </div>
            </div>
        </div>
    )
}

export default ErrorBox;