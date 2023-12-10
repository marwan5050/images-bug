import axios from 'axios';
import React, {  useState } from 'react';
import { useQuery } from 'react-query';
import {  useNavigate } from 'react-router-dom';
import Pagi from './Pagi';
import SearchTable from './SearchTable';



export default function DefaultMember() {

  
  const [offset, setOffset] = useState(0); // Current offset
  const [membershipId , setMembershipId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const limit = 9; // Number of items per page


  const navigate = useNavigate();
  const handleRowClick = (membershipId) => {
    // Redirect to the member details page based on membershipId
    navigate(`/memberdetails/${membershipId}`);
  };

  function getMembers(){
   return axios.get(`http://localhost:8081/api/members?limit=${limit}&offset=${offset}`)
  }

  const {data, refetch } = useQuery(`memberTable` ,getMembers , {
    enabled: false,
  } )


  // Refetch data when offset changes
  React.useEffect(() => {
    refetch();
   
    }, [offset, refetch  ]);



  return (
    <>


<div className='my-5 w-75 mx-auto'>
      <input
        type="text"
        className='form-control'
        placeholder="البحث برقم العضويه"
        value={membershipId}
        onChange={(e)=>{
          setMembershipId(e.target.value);
          // turn value into boolean, false if empty and true if there content 
          setIsSearching(!!e.target.value);
        }}
      />
</div>    


   {isSearching ? (
   <>
< SearchTable membershipId={membershipId}   />
</>) : 
   (<>

  
<div className='w-75 my-5 mx-auto  '>
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
        

        { data?.data.members.map((member, index)=>
        


        <tr key={index} onClick={() => handleRowClick(member.membershipId)}>
        <td>{member.title}</td>
        <td>{member.firstName}</td>
        <td >{member.membershipId}</td>
        <td>{member.birthdate}</td>
      </tr>
        
         )}
        
      </tbody>

    </table>
    </div>
   
   
      

<Pagi  offset={offset} limit={limit} setOffset={setOffset}/>
</>)}



    </>
  )
}


 // total pages 10604
  // next sequance 82
  // const [totalPages, setTotalPages] = useState(1);


  // console.log(data?.data.members.slice(-1)[0] * limit);