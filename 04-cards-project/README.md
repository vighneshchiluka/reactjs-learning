# Mini project using props.

# 1) BookMark Size we have to put in size = {10}

# 2) After creating cards component import in App.jsx and call component <Card/>

# 3) Now create User.jsx and set user color in object <div style={{color:'white'}}>User</div>

# 4) Now use props method in User.jsx to call all names in App.jsx

===> for eg in User.jsx use props

const User = (props) => {
return (
<div style={{color:'white'}}>{props.name}</div>  
 )
}

===> And in App.jsx call like this

   <User name ='Vighnesh'/>
   <User name ='Vinesh'/>
   <User name ='Vamshi'/>

# 5) Now we use Array method for doing this same

===> For eg we write like this

const App = () => {

const arr = [11,22,33];
return (
<div className="parent">
<User name = {arr[0]}/> write arrays in object in javascript
<User name = {arr[1]}/>
<User name = {arr[2]}/>
</div>
);
};

# 6) Now we dont want to write these repeatative lines so we will use array map method

===> For eg we use map method like this see below

const App = () => {

const arr = [11,22,33]; array length is 3

return (
<div className="parent">
{arr.map(function(){
return 'hello' ===> (so we return hello hello hello 3times in output)
return 10 ===> (so we return 10 10 10 3times in output)
})}
</div>
);
};

# 7) Now we want to return all array values pass parameter in function like elem and return elem

===> for eg :-

      {arr.map(function(elem){
        return elem              ===> output will be 11 22 33
      })}

# 8) Now we will use Array of objects to return user name and age which is stored in array of objects.

===> for eg:-

const App = () => {

const arr = [
{user:'Vighnesh', age:25},
{user:'Vinesh',age:24},
{user:'Vamshi',age:26}
];

return (
<div className="parent">
{arr.map(function(elem){
return elem.user ===> Vighnesh Vinesh Vamshi we return
})}
</div>
);
};

# 9) Now create array of objects of cards use prompt like this

===> for eg:-

     make a array of 10 objects of job openings, I want properties brandLogo, name of company, date   posted (like 5 days ago, 10 weeks ago), post, tag1 (like part time or full time), tag2 (like junior level or senior level), pay (in dollars per hour), location (like mumbai, india),

     make sure these companies are maang or faang or some big tech giants.

# ===> Before that see this example below.

# In App.jsx we use like this (Parent is sending data to child User.jsx)

const App = () => {

const arr = [
{user:'Vighnesh', age:25},
{user:'Vinesh',age:24},
{user:'Vamshi',age:26}
];

return (
<div className="parent">
{arr.map(function(elem){
return <User name={elem.user} age={elem.age}/>
})}
</div>
);
};

# ===> In User.jsx props receive data

const User = (props) => {
console.log(props)
return (
<div style={{color:'white'}}>{props.name},{props.age}</div>  
 )
}

# ===> Now we use that in App.jsx array of objects data, key id is used to give unique id to each card.

    {jobOpenings.map(function (elem,idx) {
        return <div key={idx}>
          <Card
            brandLogo={elem.brandLogo}
            company={elem.company}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        </div>
      })}

# ===> Now pass that array of objects data into Card.jsx

for eg :-

   <img src={props.brandLogo} /> we get image now

