class Auth{
  constructor(){
    this.authenticated = false
  }

  login(cb){
    console.log('Logged')
    this.authenticated = true
    cb()
  }

  logout(cb){
    console.log('Logouted')
    sessionStorage.removeItem('user')
    this.authenticated = false
    cb()
  }

  isAuthenticated(){
    return this.authenticated
  }

}
export default new Auth()