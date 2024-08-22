


import searchBar from '/src/assets/search_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
export  function SearchBar (){
  return (
    <div className='flex items-center bg-gray-100 p-2 rounded w-[100%]'>
      <img src={searchBar} alt="Search Icon" className='mr-2' width={20} />
      <input type="text" placeholder="Search here ..." className='bg-transparent outline-none w-[90%] text-sm' />
    </div>
  );
};

