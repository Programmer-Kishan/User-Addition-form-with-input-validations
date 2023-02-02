import { useState } from 'react';

import LabelInput from './LabelInput';
import Button from '../UI/Button/Button';

const UserForm = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, age);
        setName('')
        setAge(0)
    }

    return(
        <form onSubmit={handleSubmit}>
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
            <Button type="submit">Add User</Button>
        </form>
    );
}

export default UserForm;