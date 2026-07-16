1) IN props we have to change data of cards 
2) WE change from parents to child data APP -> Card how we change data
3) We keep data in APP and it reflects in card
4) from card to APP data will not allowed to send

function abc(a){
    console.log('Hello',a);
}

abc(a)

===> Hello 10

const App = () => {
  return (
    <div className='parent'>
      <Card user='Vamshi' age={25}/> - we used brackets for age to avoid printing in string format
    </div>
  )
}

===> {user: 'Vamshi', age: 25}

5) For Printing both name and age in props

console.log(props.user,props.age)

===> Vamshi 25 we got this