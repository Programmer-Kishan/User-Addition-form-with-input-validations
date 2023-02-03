import { useState } from 'react';

import LabelInput from './LabelInput';
import Button from '../UI/Button/Button';
import ErrorBox from '../ErrorBox/ErrorBox';

const UserForm = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [isValidName, setIsValidName] = useState(true);
    const [isValidAge, setIsValidAge] = useState(true);


    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }

    const handleNameClick = () => {
        setIsValidName(true);
    }

    const handleAgeClick = () => {
        setIsValidAge(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim().length === 0) {
            setIsValidName(false);
            return;
        } else if (age < 0) {
            setIsValidAge(false);
            return;
        }
        
        props.onAddData(name, age);
        setName('')
        setAge(0)
    }

    return(
        <form onSubmit={handleSubmit}>
            {!isValidName && <ErrorBox title="Username" handleClick={handleNameClick}/>}
            {!isValidAge && <ErrorBox title="Age" handleClick={handleAgeClick}/>}
            <LabelInput 
                type='text' 
                name='name' 
                title="Username: "
                value={name}
                onChange={handleNameChange}
            />
            <LabelInput 
                type='number' 
                name='age' 
                title="Age(in years): "
                value={age}
                onChange={handleAgeChange}
            />
            <Button type="submit" onButtonClick={()=>{}}>Add User</Button>
        </form>
    );
}

export default UserForm;