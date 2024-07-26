
import logo from '../assets/logo.svg';
import searchBar from '../assets/search_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';
import bell from '../assets/BellSimple.svg';
import wallet from '../assets/Wallet.svg';
import question from '../assets/Question.svg';
import settingsIcon from '../assets/Gear.svg';
import user from '../assets/User.svg';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between py-5 bg-white shadow px-9'>
      <div className='flex items-center'>
        <img src={logo} alt="Logo" className='mr-3' width={48}/>
        <div className='flex items-center bg-gray-100 p-2 rounded w-[628px]'>
          <img src={searchBar} alt="Search Icon" className='mr-2' width={20} />
          <input type="text" placeholder="Search here ..." className='bg-transparent outline-none w-[90%] text-sm' />
        </div>
      </div>
      <ul className='flex text-[#647995] text-xs gap-x-2'>
        <li className='flex flex-col items-center'>
          <img src={bell} alt="Notification"  />
          <h3 className=''>Notification</h3>       
        </li>
        <li className='flex flex-col items-center'>
          <img src={wallet} alt="Wallet"  />
          <h3 className=''>Wallet</h3>       
        </li>
        <li className='flex flex-col items-center'>
          <img src={question} alt="Help"  />
          <h3 className=''>Help</h3>       
        </li>
        <li className='flex flex-col items-center'>
          <img src={settingsIcon} alt="Settings"  />
          <h3 className='hidden md:block'>Settings</h3>       
        </li>
        <li className='flex flex-col items-center'>
          <img src={user} alt="User"  />
          <h3 className='hidden md:block'>User</h3>       
        </li>
      </ul>
    </nav>
  );
}
