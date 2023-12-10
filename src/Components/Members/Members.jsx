import React from 'react';
import style from './Member.module.css';
import { NavLink,  useLocation  } from 'react-router-dom';
import Other from './Other'; 
import Family from './Family'; 
import DefaultMember from './DefaultMember';


export default function Members() {
  const location = useLocation(); 
  const { pathname } = location;
  
  
  let content;
  if (pathname === '/family') {
    content = <Family />;
  } else if (pathname === '/other') {
    content = <Other />;
  } else {
    content = (
      <div className='text-center'>
        
        <DefaultMember/>
      </div>
    );
  }

  return (
    <>

    

    <div className="container-flued">
      <div className='row'>
        <div className='col-sm-12 col-md-2 text-center'>
          <div className={style.sidebar}>
            <h2 className='pt-3'> Members</h2>
            <nav className="nav flex-column">
              
              <NavLink className="nav-link text-warning" to="/family">Family</NavLink>
              <NavLink className="nav-link text-warning" to="/other">Other</NavLink>
              
            </nav>
          </div>
          
        </div>
        <div className="col-sm-12 col-md-10">
          
          {content}
        </div>
      </div>
      
    </div>
    
    </>
  )
}



