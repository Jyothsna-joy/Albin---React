import React from 'react'
import "./SideBarSample.css";

function SideBarSample() {
  return (
    <>
      <div className='sidebar-top-title'>
        <label>Expense Buddy</label>
      </div>
      <div className='sidebar-menu-wrapper'>
        <ul className='sidebar-menu-list'>
          <li className='menu-items'>Dasboard</li>
          <li className='menu-items'>Expense Management</li>
          <li className='menu-items'>Expense Summary</li>
          <li className='menu-items'>Budget</li>
          <li className='menu-items'>Reports</li>
        </ul>
      </div>
      <div className='sidebar-bottom-wrapper'>
        <div className='change-password-outer'>
          <label>Change Password</label>
        </div>
        <div className='logout-outer'>
          <labe>LogOut</labe>
        </div>
      </div>
    </>
  )
}

export default SideBarSample