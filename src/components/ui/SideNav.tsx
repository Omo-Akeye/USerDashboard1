import user from '/src/assets/User.svg';
import lock from '/src/assets/Lock.svg';
import bell from '/src/assets/BellSimple.svg';
import money from '/src/assets/Money.svg';
import tag from '/src/assets/Tag.svg';
import users from '/src/assets/Users.svg';
import cloud from '/src/assets/Cloud.svg';
import { SidebarItem } from './SidebarItem';
import x from '/src/assets/X.svg';

interface props{
    isOpen: boolean,
    setIsOpen: any
}

export default function SideNav({ isOpen, setIsOpen }: props) {
  return (
    <>  {isOpen && (
      <div
        className="fixed inset-0 z-40 bg-black opacity-50"
        onClick={() => setIsOpen(false)}
      ></div>
    )}

    
     { <div
        className={`fixed top-0 right-0 bg-white h-full w-[50%] pt-[15%] px-1 sm:hidden transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-start px-5">
          <img
            src={x}
            alt="close"
            width={14}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <ul className="text-sm text-[#667185] gap-y-3 flex flex-col mt-2">
          <SidebarItem icon={user} label="Account" href="#" />
          <SidebarItem icon={lock} label="Security" href="#" />
          <SidebarItem icon={bell} label="Notifications" href="#" />
          <SidebarItem icon={money} label="Pricing" href="#" />
          <SidebarItem icon={tag} label="Sales" href="#" />
          <SidebarItem icon={users} label="Users & Roles" href="#" isActive />
          <SidebarItem icon={cloud} label="Backups" href="#" />
        </ul>
      </div>}
    </>
  );
}

