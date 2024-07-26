
import user from '../assets/User.svg'
import lock from '../assets/Lock.svg'
import bell from '../assets/BellSimple.svg'
import money from '../assets/Money.svg'
import tag from '../assets/Tag.svg'
import users from '../assets/Users.svg'
import cloud from '../assets/Cloud.svg'

function Sidebar  (){
  return (
    <div className="w-56 h-[710px] p-4 bg-white">
      <h2 className="text-xs font-bold ">Settings</h2>
      <ul className='text-sm text-[#667185] '>
        <li className='flex gap-2 p-3'>
          <img src={user} alt="user" />
          <a href="#" >Account</a></li>
        <li  className='flex gap-2 p-3'>
          <img src={lock} alt="security" />
          <a href="#">Security</a></li>
        <li  className='flex gap-2 p-3'>
          <img src={bell} alt="notification" />
          <a href="#" >Notifications</a></li>
        <li  className='flex gap-2 p-3'>
          <img src={money} alt="pricing"  />
          <a href="#" >Pricing</a></li>
        <li  className='flex gap-2 p-3'>
          <img src={tag} alt="tag" />
          <a href="#" >Sales</a></li>
        <li  className='flex gap-2 p-3'>
          <img src={users} alt="" />
          <a href="#" >Users & Roles</a></li>
        <li  className='flex gap-2 p-3'>
          <img src={cloud} alt="" />
          <a href="#" >Backups</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
