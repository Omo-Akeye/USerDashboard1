
import Sidebar from './Sidebar'
import UserTable from './UserTable'



export default function UserSettings() {
  return (
    <div className='flex mt-5 lg:gap-x-14 gap-x-6 w-[95%] mx-auto'>
        <Sidebar/>
        <UserTable/>
        
  
    </div>
  )
}
