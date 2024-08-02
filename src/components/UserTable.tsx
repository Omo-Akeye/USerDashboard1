

import MainTable from './Table'

export default function UserTable() {
  return (
    <div className='w-full'>
      <p className='text-[#667185]'>Settings / Users & Roles Setting</p>
      <h1 className='mt-6 mb-2 text-2xl font-bold'>Users & Roles</h1>
      <p className='text-[#667185]'>Manage all users in your business</p>


      <div className='flex font-medium'>
        <h1 className='text-[#0D6EFD]  p-2 border-b-2 border-[#0D6EFD]'>Users</h1>
        <h2 className='p-2 text-[#98A2B3]'>Roles</h2>
      </div>

      <MainTable/>
    </div>
  )
}
