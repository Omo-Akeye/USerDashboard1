

import MainTable from './Table'

export default function UserTable() {
  return (
    <div>
      <p className='text-[#667185]'>Settings / Users & Roles Setting</p>
      <h1 className='mt-6 mb-2 text-2xl font-bold'>Users & Roles</h1>
      <p className='text-[#667185]'>Manage all users in your business</p>


      <div className='flex'>
        <h1>Users</h1>
        <h2>Roles</h2>
      </div>

      <MainTable/>
    </div>
  )
}
