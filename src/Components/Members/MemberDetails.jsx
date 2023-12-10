import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
// import pic from '../../Assets/Images/500.jpj'
;
export default function MemberDetails() {

  const param = useParams();
  // const [memberImages, setMemberImages] = React.useState({});
  

    function getMember(id){

      return  axios.get(`http://localhost:8081/api/members/membership/${id}`);

    }

   const {data , refetch} =  useQuery(`memberDetail` , ()=>getMember(param.id),{
    enabled: false,
   });

   React.useEffect(() => {
    refetch();
  }, [ refetch]);


  
function handleDelete(){
  
  Swal.fire({
    title: "هل تريد الحذف؟",
    icon: "question",
    iconHtml: "؟",
    confirmButtonText: "نعم",
    cancelButtonText: "لا",
    showCancelButton: true,
    showCloseButton: true
  });
}

  function handleUpdate(){
    Swal.fire({
      title: "هل انتهيت من التعديلات؟",
      icon: "question",
      iconHtml: "؟",
      confirmButtonText: "نعم",
      cancelButtonText: "لا",
      showCancelButton: true,
      showCloseButton: true
    });
  }
  function handleSave(){
    Swal.fire({
      title: "هل تأكدت من صحه البيانات وتريد الحفظ؟",
      icon: "question",
      iconHtml: "؟",
      confirmButtonText: "نعم",
      cancelButtonText: "لا",
      showCancelButton: true,
      showCloseButton: true
    });
  }

   

  return (
    <>
   
      <div className='container my-5   '>
    <table className='table table-light cursor-pointer text-center table-hover ' >
      <thead >
        <tr className=' text-capitalize '>
        <th className='text-muted py-2' >udpate</th>
        <th className='text-muted py-2' >delete</th>
        <th className='text-muted py-2 align-middle'>title</th>
        <th  className='text-muted py-2'>name</th>
        <th  className='text-muted py-2'>memberShip</th>
        <th  className='text-muted py-2'>birthdate</th>
        <th  className='text-muted py-2'>dateBegin</th>
        <th  className='text-muted py-2'>role</th>
        <th  className='text-muted py-2'>type</th>
        <th  className='text-muted py-2'>section</th>
        <th  className='text-muted py-2'>relation</th>
        <th  className='text-muted py-2'>gender</th>
        <th  className='text-muted py-2'>avatar</th>
        </tr>
      </thead>

      <tbody>
        

        { data?.data.map((member , index)=>
        


        <tr key={index}  className='align-middle'>
        <td className='py-2'><button className='btn btn-warning' onClick={handleUpdate}>تعديل</button></td>
        <td className='py-2'><button className='btn btn-danger' onClick={handleDelete}>حذف</button></td>
        <td className='py-2'>{member.title?member.title:'-'}</td>
        <td className='py-2'>{member.firstName}</td>
        <td className='py-2'>{member.membershipId}</td>
        <td className='py-2'>{member.birthdate}</td>
        <td className='py-2'>{member.dateBegin? member.dateBegin :"-"}</td>
        <td className='py-2'>{member.isMain?"اساسي" : "أبناء"}</td>
        <td className='py-2'>{member.memberType.name}</td>
        <td className='py-2'>{member.memberSection?.name?member.memberSection.name:'-'}</td>
        <td className='py-2'>{member.memberRelation?.name?member.memberRelation.name:'-'}</td>        
        <td className='py-2'>{member.gender === 'MALE' ? 'ذكر' : (member.gender === 'FEMALE' ? 'أنثى' : '')}</td>
        
        <td className='py-2'>
        {/* <td className='py-2'><img src={`${member.memberPicture?.fullPathPrimary}${member.memberPicture?.picName}${member.memberPicture?.picExtension}`} /></td> */}
          
          </td>
       
        
      </tr>
        
         )}
        
      </tbody>

    
    </table>

    <div className='text-center my-4'>
    <button type='submit' onClick={handleSave}  className='btn btn-secondary px-5 fs-5'>حفظ</button>
    </div>

    
    </div>


    </>
  );
}


