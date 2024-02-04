import React from 'react';
import fbIcon from '../../../Assets/facebook.png'
import instaicon from "../../../Assets/instagram.png"
import twitter from "../../../Assets/twitter.png"
export default function AdminProfile() {
  return (
    <div className="profile">
      <div className="card rounded card-shadow h-auto " style={{height:'auto'}}>
        <div className="image rounded">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/C1ccD-9rzTS._CR0,0,3840,2880_._SL1000_.jpg"
            alt=""
            style={{ width: '100%' }}
          />
        </div>
        <div className='d-flex align-items-center  justify-content-center'>
          <h4 className="userName">User Name</h4>
        </div>
        <div className='icons d-flex justify-content-evenly'>

          <div className="fbIcon"> <img src={fbIcon} alt="" /></div>
          <div className="fbIcon"> <img src={instaicon} alt="" /></div>
          <div className="fbIcon"> <img src={twitter} alt="" /></div>
        </div>
      </div>
      <div className="card bg-dark"></div>
    </div>
  );
}
