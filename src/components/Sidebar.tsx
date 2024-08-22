import user from '../assets/User.svg';
import lock from '../assets/Lock.svg';
import bell from '../assets/BellSimple.svg';
import money from '../assets/Money.svg';
import tag from '../assets/Tag.svg';
import users from '../assets/Users.svg';
import cloud from '../assets/Cloud.svg';
import dashboard from '../assets/Vector.svg';
import { SidebarItem } from './ui/SidebarItem';

function Sidebar() {
  return (
    <div className="flex flex-col justify-between px-2 py-4 bg-white rounded-md lg:w-56 max-sm:hidden">
    
        <h2 className="text-xs font-bold lg:ml-3 max-lg:text-center">Settings</h2>
        <ul className='text-sm text-[#667185]  gap-y-3 flex flex-col mt-2'>
          <SidebarItem icon={user} label="Account" href="#" />
          <SidebarItem icon={lock} label="Security" href="#" />
          <SidebarItem icon={bell} label="Notifications" href="#" />
          <SidebarItem icon={money} label="Pricing" href="#" />
          <SidebarItem icon={tag} label="Sales" href="#" />
          <SidebarItem icon={users} label="Users & Roles" href="#" isActive />
          <SidebarItem icon={cloud} label="Backups" href="#" />
        </ul>
     
      <div className='text-[#475569] border-2 rounded-md border-[#475569] flex p-3 justify-between mt-32'>
        <img src={dashboard} alt="dash-icon" width={15} />
        <p className='text-sm max-lg:hidden'>Back to Dashboard</p>
      </div>
    </div>
  );
}

export default Sidebar;

