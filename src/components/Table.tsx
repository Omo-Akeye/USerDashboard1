import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import icon from '../assets/icon (2).svg';
import check from '../assets/Outer Rectangle.svg';
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/components/redux/store";
import { User, fetchUsers, deleteUserAction } from "@/components/redux/userActions";
import UserForm from "./UserForm";
import DeletePopUp from "./DeletePopUp";
import Loader from "./ui/Loader";
import  SearchAndAddUser  from "./SeachAndUser";

export function MainTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const users = useSelector((state: RootState) => state.users.users || []);
  const loading = useSelector((state: RootState) => state.users.loading); 
  const dispatch: AppDispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [filterCriteria, setFilterCriteria] = useState<string>("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEdit = (user: User) => {
    setCurrentUser(user);
    setIsOpen(true);
  };

  const handleRemoveClick = (userId: string) => {
    setUserToDelete(userId);
    setIsPopupOpen(true);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      handleDelete(userToDelete);
      setIsPopupOpen(false);
      setUserToDelete(null);
    }
  };

  const handleDelete = (userId: string) => {
    dispatch(deleteUserAction(userId));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleFilterClick = (criteria: string) => {
    setFilterCriteria(criteria);
  };

  const filteredUsers = users
    .filter(user =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter(user => {
      if (!filterCriteria) return true;
      return user.role === filterCriteria;
    });

  return (
    <div className="w-full mt-6">
      <SearchAndAddUser
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onAddUserClick={() => {
          setCurrentUser(null);
          setIsOpen(true);
        }}
        onFilterClick={handleFilterClick}
      />

      <Table className="z-10 bg-white">
        <TableHeader className="bg-gray-100">
          <TableRow className="max-w-full">
            <TableHead className="px-3 py-3 text-left lg:px-6">
              <div className="flex items-center gap-x-3">
                <img src={check} alt="checkbox" className="max-md:w-3" />
                Name
                <img src={icon} alt="icon" className="w-2 md:w-3" />
              </div>
            </TableHead>
            <TableHead className="px-3 py-3 text-left lg:px-6">
              Email Address
            </TableHead>
            <TableHead className="px-3 py-3 text-left lg:px-6">
              Role
            </TableHead>
            <TableHead className="px-3 py-3 text-left lg:px-6">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y divide-gray-200 max-sm:text-sm">
          {loading ? (
            <TableRow>
              <TableCell className="px-3 lg:px-6 lg:py-4 whitespace-nowrap">
                <Loader />
              </TableCell>
              <TableCell className="px-3 lg:px-6 lg:py-4 whitespace-nowrap">
                <Loader />
              </TableCell>
              <TableCell className="px-3 lg:px-6 lg:py-4 whitespace-nowrap">
                <Loader />
              </TableCell>
              <TableCell className="px-3 lg:px-6 lg:py-4 whitespace-nowrap">
                <Loader />
              </TableCell>
            </TableRow>
          ) : (
            filteredUsers.map((user: User) => (
              <TableRow key={user._id}>
                <TableCell className="flex px-3 font-medium lg:px-6 lg:py-4 whitespace-nowrap gap-x-2">
                  <img src={check} alt="checkbox" className="max-md:w-3" /> {user.name}
                </TableCell>
                <TableCell className="px-3 lg:px-6 lg:py-4 whitespace-nowrap">
                  {user.email}
                </TableCell>
                <TableCell className="px-3 lg:px-6 lg:py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.role === 'Administrator'
                        ? 'bg-blue-100 text-[#0D6EFD]'
                        : user.role === 'Sales Manager'
                        ? 'bg-green-100 text-[#0F973D]'
                        : user.role === 'Sales Representative'
                        ?  'bg-orange-100 text-[#F58A07]' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {user.role}
                  </span>
                </TableCell>
                <TableCell className="px-3 text-sm font-medium lg:px-6 lg:py-4 whitespace-nowrap">
                  <button
                    className="text-indigo-600 hover:text-indigo-900"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="ml-4 text-[#98A2B3] hover:text-black"
                    onClick={() => handleRemoveClick(user._id)}
                  >
                    Remove
                  </button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {isOpen && (
        <UserForm currentUser={currentUser} onClose={() => setIsOpen(false)} />
      )}

      <DeletePopUp
        isOpenpop={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}

export default MainTable;
