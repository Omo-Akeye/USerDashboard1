import React, { useState } from 'react';
import searchBar from '../assets/search_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';
import buttonicon from '../assets/button-icon.svg';

interface SearchAndAddUserProps {
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddUserClick: () => void;
  onFilterClick: (criteria: string) => void;
}

export default function SearchAndAddUser ({ searchValue, onSearchChange, onAddUserClick, onFilterClick }:SearchAndAddUserProps)  {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedFilter(value);
    onFilterClick(value);
  };

  return (
    <div className="flex items-center justify-between p-2 bg-white border-b md:p-4">
      <div className="flex items-center text-sm xs:gap-x-2 gap-x-1 w-[60%]">
        <div className="flex items-center px-[2px] py-2 border rounded-md xs:px-3 xs:gap-x-2 gap-x-[2px]">
          <img src={searchBar} alt="Search Icon" width={14} />
          <input
            type="text"
            value={searchValue}
            onChange={onSearchChange}
            placeholder="Search here..."
            className="focus:outline-none xs:w-full w-[90%]"
          />
        </div>
        <div className="relative">
          <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="xs:px-1 px-[2px] py-2 border-[1px] rounded-md text-sm max-xs:w-[80%]"
          >
            <option value="">Filter by Role</option>
            <option value="Administrator">Administrator</option>
            <option value="Sales Manager">Sales Manager</option>
            <option value="Sales Representative">Sales Representative</option>
          </select>
        </div>
      </div>
      <button
        className="flex items-center px-2 py-2 text-sm text-white bg-blue-500 rounded-md xs:px-4 gap-x-1"
        onClick={onAddUserClick}
      >
        <img src={buttonicon} alt="btn-icon" width={16} />
        New User
      </button>
    </div>
  );
};
