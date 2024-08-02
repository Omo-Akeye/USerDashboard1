import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import searchBar from '../assets/search_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';
import icon from '../assets/icon (2).svg';
import buttonicon from '../assets/button-icon.svg';
import check from '../assets/Outer Rectangle.svg';
import filter from '../assets/icon.svg';
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { User, fetchUsers, deleteUserAction } from "@/redux/userActions";
import UserForm from "./UserForm";

export function MainTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const users = useSelector((state: RootState) => state.users.users || []);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEdit = (user: User) => {
    setCurrentUser(user);
    setIsOpen(true);
  };

  const handleDelete = (userId: number) => {
    dispatch(deleteUserAction(userId));
  };

  return (
    <div className="w-full mt-6">
      <div className="flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center text-sm gap-x-2 w-[291px]">
          <div className="flex items-center px-3 py-2 border rounded-md gap-x-2">
            <img src={searchBar} alt="Search Icon" width={14} />
            <input
              type="text"
              placeholder="Search here..."
              className="focus:outline-none"
            />
          </div>
          <button className="px-4 py-2 border-[1px] rounded-md flex items-center gap-x-3">
            <img src={filter} alt="Filter Icon" width={14} />
            Filter
          </button>
        </div>
        <button
          className="flex items-center px-4 py-2 text-sm text-white bg-blue-500 rounded-md gap-x-2"
          onClick={() => {
            setCurrentUser(null);
            setIsOpen(true);
          }}
        > <img src={buttonicon} alt="btn-icon" width={16} />
          New User
        </button>
      </div>

      <Table className="bg-white ">
        <TableHeader className="bg-gray-100 ">
          <TableRow className="w-full">
            <TableHead className="px-6 py-3 text-left">
              <div className="flex items-center gap-x-3">
                <img src={check} alt="checkbox" />
                Name
                <img src={icon} alt="icon" width={12} />
              </div>
            </TableHead>
            <TableHead className="px-6 py-3 text-left">
              Email Address
            </TableHead>
            <TableHead className="px-6 py-3 text-left">
              Role
            </TableHead>
            <TableHead className="px-6 py-3 text-left">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y divide-gray-200">
          {users.map((user: User) => (
            <TableRow key={user.id}>
              <TableCell className="flex px-6 py-4 font-medium whitespace-nowrap gap-x-2">
                <img src={check} alt="checkbox" /> {user.name}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                {user.email}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.role === 'Administrator'
                      ? 'bg-blue-100 text-[#0D6EFD]'
                      : user.role === 'Sales Manager'
                      ? 'bg-green-100 text-[#0F973D]'
                      : user.role === ' Sales Representative'
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-orange-100 text-[#F58A07]'
                  }`}
                >
                  {user.role}
                </span>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                <button
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="ml-4 text-[#98A2B3] hover:text-black"
                  onClick={() => handleDelete(user.id!)}
                >
                  Remove
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {isOpen && (
        <UserForm currentUser={currentUser} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}

export default MainTable;
