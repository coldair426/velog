const element = <h1>Hello, world!</h1>;

const name = 'Minsu Park';
const element = <h1>Hello, {name}</h1>;

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Harper',
  lastName: 'Kim',
};
const element = <h1>Hello, {formatName(user)}!</h1>;

const element = <img src={user.avatarUrl}></img>;
