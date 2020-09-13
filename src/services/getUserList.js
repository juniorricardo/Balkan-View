const urlUsers =
  'https://raw.githubusercontent.com/juniorricardo/sucursal-bancario/master/src/json/usuarios.json'
// const LoadListUser = async() => {
//   console.log('Cargando usuario en localStorage');
//   await fetch(urlUsers)
//   .then(r => r.json())
//   .then(e => localStorage.setItem('userList',JSON.stringify(e.userList)))
// }

export default () => {
  const users = []
  fetch(urlUsers)
    .then((r) => r.json())
    .then((obj) => obj.userList.map(u => users.push(u)))
  return users
}
