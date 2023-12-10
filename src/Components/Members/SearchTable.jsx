import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const SearchTable = ({membershipId  }) => {
  
  const [memberData, setMemberData] = useState(null);
  
  const navigate = useNavigate();
  const handleRowClick = (membershipId) => {
    // Redirect to the member details page based on membershipId
    navigate(`/memberdetails/${membershipId}`);
  };


  const handleSearch = async () => {
    

    try {
      const response = await axios.get(`http://localhost:8081/api/members/membership/${membershipId}`);
      // Handle the received member data, setMemberData(response.data) or use it as needed
      setMemberData(response.data);
      
    } catch (error) {
      // Handle error, maybe setMemberData(null) or show an error message
      console.error('Error fetching member data:', error);
    }
  };

  
  useEffect(() => {
    handleSearch();
  }, [membershipId ]);


  return (
    <>
   

      
      
      {memberData?.filter((_,index)=> index === 0 ).map((x,index)=><div className='w-75 mx-auto my-5' key={index} >
        
        <table className='table table-light cursor-pointer text-center table-hover' >
          <thead >
            <tr className=' text-capitalize'>
            <th className='text-muted'>title</th>
            <th  className='text-muted'>name</th>
            <th  className='text-muted'>memberShip</th>
            <th  className='text-muted'>birthdate</th>
            </tr>
          </thead>

          <tbody>
            <tr onClick={() => handleRowClick(x.membershipId)}>
            <td>{x.title}</td>
            <td>{x.firstName}</td>
            <td >{x.membershipId}</td>
            <td>{x.birthdate}</td>
            </tr>      
          </tbody>

        </table>
      </div> )}

   
  </>  
  );
};

export default SearchTable;






