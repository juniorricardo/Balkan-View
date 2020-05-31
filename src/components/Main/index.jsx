import React from 'react'
import Sidebar from './Sidebar'
import ContentPage from './ContentPage'

const Main = () => {
  return (
    <div className='row min-vh-100'>
      <Sidebar />
      <ContentPage />
    </div>
  )
}

export default Main
