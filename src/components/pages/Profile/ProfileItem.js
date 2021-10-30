import React from 'react';
import './ProfileItem..css'
const ProfileItem = (props) => {

    const{travelName,date,img,_id,status}=props.Events
    return (
        
        <div className="col-lg-4">
        <div className="hover hover-3 text-white rounded"><img src={img} alt=""/>
          <div className="hover-overlay"></div>
          <div className="hover-3-content px-5 py-4">
            <h3 className="hover-3-title text-uppercase font-weight-bold mb-1"><span className="font-weight-light">{travelName} </span></h3>
            <p className="hover-3-title mb-1 text-light">{status}</p>
            <p className="hover-3-description small text-uppercase mb-0">{date}</p>
            
            <button type="button" onClick={()=>props.handleDelete(_id)} className=" btn-outline-danger hover-3-description ">Cancel Your Tour</button>

            
          </div>
        </div>
      </div>
    
    );
};

export default ProfileItem;