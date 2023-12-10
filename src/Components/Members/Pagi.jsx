import React from 'react';
import { Link } from 'react-router-dom';



export default function Pagi({limit , offset , setOffset}) {

const nextPage = () => {
    setOffset((prevOffset) => prevOffset + limit);        
    };
   

    const prevPage = () => {
    if (offset >= limit) {
        setOffset((prevOffset) => prevOffset - limit);
    }
    };
          
    // const handleFirstPage = () => {
    //   setOffset(0);
    // };

    
    
    
      
    
    
    


  return (
    <>
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center flex-row-reverse">
      
        <li className="page-item">
          <button className='btn btn-primary' onClick={prevPage} disabled={offset === 0}>
              السابق
          </button>
        </li>
        
        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
        <li className="page-item " aria-current="page">
          <Link className="page-link" to="#">2</Link>
        </li>
        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
        
        <li className="page-item">
          <button className='btn btn-primary' onClick={nextPage}>
              التالي
            </button>
            
        </li>
        
      </ul>
  </nav>
    </>
  )
}

// disabled={offset + limit >= data?.data.totalCount}