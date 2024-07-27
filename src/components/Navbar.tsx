import logo from '../assets/logo.svg';
import bell from '../assets/BellSimple.svg';
import wallet from '../assets/Wallet.svg';
import question from '../assets/Question.svg';
import settingsIcon from '../assets/Gear.svg';
import user from '../assets/Ellipse 775.svg';
import carouseldown from '../assets/CaretDown.svg';
import { SearchBar, NavbarItem } from './ui/NavItem';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between py-5 bg-white shadow px-9'>
      <div className='flex items-center'>
        <img src={logo} alt="Logo" className='mr-3' width={48}/>
        <SearchBar />
      </div>
      <ul className='flex text-[#647995] text-xs gap-x-2'>
        <NavbarItem icon={bell} label="Notification" />
        <NavbarItem icon={wallet} label="Wallet" />
        <NavbarItem icon={question} label="Help" />
        <NavbarItem icon={settingsIcon} label="Settings" showLabel={false} />
        <li className='flex gap-x-3'>
          <img src={user} alt="User" />
          <img src={carouseldown} alt="" width={36} />
        </li>
      </ul>
    </nav>
  );
}
