import React from 'react';
import '../styles/App.css';
import jwt from 'jwt-simple';

const BASE_URL = 'http://localhost:3000/api/v1'
const all_users = BASE_URL + '/users'
const single_user = all_users + '/8'

const decode = (message) => {
  const secret = process.env.REACT_APP_SUPER_SECRET_USER_KEY
  message.then(msg => {
    const token = msg.message
    const data = jwt.decode(token,secret)
    console.log(data)
  })
}

const getReq = () => {
  return fetch(single_user)
  .then(res => res.json())
  .catch(err => console.log(err))
}

const postReq = () => {
  const user = {
    user: {
      username: 'Shivang',
      password: 'test',
      email: 's@s.com',
      profile_name: 'shivang',
      location: 's'
    }
  }

  return fetch(all_users,{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
}

const delReq = () => {
  return fetch(single_user,{
    method: 'DELETE'
  })
  .then(res => res.json())
}

const App = (props) => {

  decode(postReq())

  return (
    <div className="App">
    </div>
  );
}

export default App;
