import React, { useState, useEffect } from 'react';
import './App.scss';
import { AccountPage } from './pages/account/account.component';

function App() {

  const [users, setUsers] = useState(null);

  const getData = async () => {
    await fetch('./users.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then((res) => {
        console.log(res)
        return res.json();
      })
      .then((usersJson) => {
        setUsers(usersJson.users)
      });
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
        <AccountPage users={users} />
    </div>
  );
}

export default App;
