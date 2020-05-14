import React from 'react'
import { Container,Row, Col, Card, Form, Button } from 'react-bootstrap'
import { FaSignInAlt } from 'react-icons/fa'
import './login.css'
import imgLogin from './../../images/formPicture.jpg'
import Auth from './../../services/Auth'

const Login = props => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  /*
-Client
clarissa.wallner@correo.com
dO6DNdgGbRmojdq
-Account-manager
jean.zeidler12@correo.com
i0cd62wD5_PCUeY
-Admin
leni.wiegelmann@correo.com
Kh5RPDNjPWl4E_i

*/
  const handleSubmit = ev => {
    ev.preventDefault()
    // Validar con base de datos. -> Https.status.OK
    console.log(`Logueando con: ${email} + ${password}`)

    const userLog = JSON.parse(localStorage.getItem('userList')).filter(
      u => u.login.email === email && u.login.password === password
    )
    if (userLog[0]) {
      Auth.login(() => {
        var userType = ''
        sessionStorage.setItem('user', JSON.stringify(userLog[0]))
        switch (userLog[0].userType) {
          case 'client':
            userType = '/client'
            break
          case 'account-manager':
            userType = '/account-manager'
            break
          case 'admin':
            userType = '/admin'
            break
          default:
            break
        }
        props.history.push(userType)
      })
    } else {
      console.log('Login. ERROR')
    }
    setEmail('')
    setPassword('')
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant='top' src={imgLogin} alt='Login' />
            <Card.Body>
              <Card.Title>Iniciar sesion</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Correo electronico</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Ingrese su correo'
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Form.Group>
  
                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Contraseña'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant='dark' type='submit' size='lg' block>
                  Ingresar <FaSignInAlt />
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
