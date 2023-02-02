
import User from './User';

const UserData = (props) => {
    return (
        <div>
            {props.data.map(curData => <User
                key={curData.id}
                name={curData.name}
                age={curData.age}
            />)}
        </div>
    );
}

export default UserData;