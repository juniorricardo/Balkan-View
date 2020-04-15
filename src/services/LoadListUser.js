const urlUsers = 'https://raw.githubusercontent.com/juniorricardo/sucursal-bancario/master/src/json/usuarios.json'
const LoadListUser = () => {
  console.log('Cargando usuario en localStorage');
  fetch(urlUsers)
  .then(r => r.json())
  .then(e => localStorage.setItem('userList',JSON.stringify(e.userList)))
}

export default LoadListUser