import React from 'react'
import {FaHome} from 'react-icons/fa'
import {AiFillBank} from 'react-icons/ai'

const Sidebar = props => {
  return (
    <div className='col-xl-1 col-md-2 px-0 w-100 bg-light border-right rounded-right'>
      <div className='list-group'>
        <a href='#' class='list-group-item list-group-item-action d-flex align-items-center'>
          <FaHome /> Inicio
        </a>
        <a href='#' class='list-group-item list-group-item-action d-flex align-items-center'>
          <AiFillBank/> Sucursales
        </a>
      </div>
    </div>
  )
}

export default Sidebar
