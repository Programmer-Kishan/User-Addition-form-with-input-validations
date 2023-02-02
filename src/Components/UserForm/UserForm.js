
import LabelInput from './LabelInput';
import Button from '../UI/Button/Button';

const UserForm = () => {
    return(
        <form>
            <LabelInput type='text' name='name' title="Username: "/>
            <LabelInput type='number' name='age' title="Age(in years): "/>
            <Button type="submit">Add User</Button>
        </form>
    );
}

export default UserForm;