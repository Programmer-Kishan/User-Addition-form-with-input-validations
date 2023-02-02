import { useState } from 'react';

import Container from './Components/UI/Container/Container';
import UserForm from './Components/UserForm/UserForm';
import UserData from './Components/UserData/UserData';

import "./App.css";

const INITIAL_DATA = [
  {name: 'Ash', age: 16, id: Math.random()},
  {name: 'Brock', age: 25, id: Math.random()}
]

function App() {

  const [userData, setUserData] = useState(INITIAL_DATA);



  return (
    <>
      <Container>
        <UserForm />
      </Container>
      <Container>
        <UserData data={userData}/>
      </Container>
    </>
  );
}

export default App;
