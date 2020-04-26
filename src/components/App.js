import React from 'react';
import '../styles/App.css';
import jwt from 'jwt-simple';

const BASE_URL = 'http://localhost:3000/api/v1'
const all_users = BASE_URL + '/users'
const single_user = all_users + '/5'
const secret = process.env.REACT_APP_SUPER_SECRET_USER_KEY

const App = (props) => {
  decode(getAllReq())
  return (
    <div className="App">
    </div>
  );
}

const decode = (message) => {
  message
  .then(msg => {
    const token = msg.message
    const data = jwt.decode(token, secret)
    console.log(data)
  })
  .catch(_ => console.log("API out of reach.."))
}

const getReq = () => {
  return fetch(single_user)
  .then(res => res.json())
  .catch(err => console.log(err))
}

const getAllReq = () => {
  return fetch(all_users)
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
    body: JSON.stringify(jwt.encode(user,secret))
  })
  .then(res => res.json())
}

const delReq = () => {
  return fetch(single_user,{
    method: 'DELETE'
  })
  .then(res => res.json())
}


export default App;
