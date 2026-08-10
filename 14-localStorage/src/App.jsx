import React from 'react';

const App = () => {

  // localStorage.clear();
  // sessionStorage.clear();

  // Store primitive values
  localStorage.setItem('user', 'Vighnesh');
  localStorage.setItem('age', '25');

  const user = localStorage.getItem('user');
  const age = localStorage.getItem('age');

  console.log(user, age);

  // Remove one item
  localStorage.removeItem('user');

  // Object
  const users = {
    username: 'Vighnesh',
    age: 25,
    city: 'Mumbai',
  };

  // Store object
  localStorage.setItem('users',JSON.stringify(users));

  // Get string
  const usersget1 = localStorage.getItem('users');
  console.log(usersget1); // String
  console.log(typeof(usersget1)); // String

  // Convert back to object
  const usersget2 = JSON.parse(usersget1);
  console.log(usersget2); // Object
  console.log(typeof(usersget2)); // Object

  return (
    <div>
      App
    </div>
  );
};

export default App;