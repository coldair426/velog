const user ={
    name ='Irena',
    age =25
}

function greet() {
    console.log(`hello, ${user.name}`);
  }
  function getBirthYear() {
    return new Date().getFullYear() - user.age;
  }