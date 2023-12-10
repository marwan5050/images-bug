import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
<>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark special-nav ">
      <div className="container">
        <span className='text-white'>Logo</span>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse "  id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 fs-5 flex-md-row-reverse">
            
            
            <li className="nav-item">
              <NavLink className="nav-link" to="">الأعضاء</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/codes">أكواد</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/prints">المطبوعات</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/reports">تقارير</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">خدمات</NavLink>
            </li>
            
          </ul>
          
        </div>
      </div>
</nav>

    
</>
  )
}
