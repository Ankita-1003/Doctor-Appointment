import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const {aToken, setAToken} = useContext(AdminContext)

  const navigate = useNavigate()

  //   adding logout function 
  const logout = () => {
     navigate('/')
     aToken && setAToken('')
     aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b border-gray-200 bg-white'>
        <div className='flex items-center gap-2 text-xs'>
            <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
            <p className='border border-gray-500 px-2.5 py-0.5 rounded-full text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
        </div>
        <button onClick={logout} className='bg-primary px-10 py-2.5 text-sm text-white rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar