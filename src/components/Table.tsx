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
import filter from '../assets/icon.svg';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { User, fetchUsers, deleteUser } from "@/redux/userActions";
import UserForm from "./UserForm";

export function MainTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEdit = (user: User) => {
    setCurrentUser(user);
    setIsOpen(true);
  };

  const handleDelete = (userId: number) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center text-sm gap-x-2">
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
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
          onClick={() => {
            setCurrentUser(null);
            setIsOpen(true);
          }}
        >
          New User
        </button>
      </div>

      <Table className="w-[1104px] bg-white">
        <TableHeader>
          <TableRow>
            <TableHead className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Name
            </TableHead>
            <TableHead className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Email Address
            </TableHead>
            <TableHead className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Role
            </TableHead>
            <TableHead className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y divide-gray-200">
          {users.map((user: User) => (
            <TableRow key={user.id}>
              <TableCell className="px-6 py-4 font-medium whitespace-nowrap">
                {user.name}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                {user.email}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.role === 'Administrator'
                      ? 'bg-blue-100 text-blue-800'
                      : user.role === 'Sales Manager'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-orange-100 text-orange-800'
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
                  className="ml-4 text-red-600 hover:text-red-900"
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





















// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import searchBar from '../assets/search_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
// import filter from '../assets/icon.svg'
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
// import { User, fetchUsers, deleteUser } from "@/redux/userActions";
// import UserForm from "./UserForm";


// // const users = [
// //   { name: 'Taiwo Isaac', email: 'taiwoisaac@email.com', role: 'Administrator' },
// //   { name: 'Seun Fagbem', email: 'seunfagbem@email.com', role: 'Sales Manager' },
// //   { name: 'Dare Oyegide', email: 'dareoyegide@email.com', role: 'Sales Manager' },
// //   { name: 'StudiMatch', email: 'studimatch@email.com', role: 'Sales Representative' },
// // ];

// export function MainTable() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentUser, setCurrentUser] = useState<User | null>(null);
//   const users = useSelector((state: RootState) => state.users.users);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleEdit = (user: User) => {
//     setCurrentUser(user);
//     setIsOpen(true);
//   };

//   const handleDelete = (userId: number) => {
//     dispatch(deleteUser(userId));
//   };
//   return (
//     <div className="w-full">
//       <div className="flex items-center justify-between p-4 bg-white border-b">
//         <div className="flex items-center text-sm gap-x-2">
//           <div className="flex items-center px-3 py-2 border rounded-md gap-x-2">
//             <img src={searchBar} alt="" width={14} />
//           <input
//             type="text"
//             placeholder="Search here..."
//             className="focus:outline-none"
//           />
//           </div>
         
//           <button className="px-4 py-2 border-[1px] rounded-md flex items-center gap-x-3">
//             <img src={filter} alt="" width={14}/>
//             Filter</button>
//         </div>
//         <button className="px-4 py-2 text-white bg-blue-500 rounded-md" onClick={() => setIsOpen(true)}>New User</button>
//       </div>
   

          
//             <Table className="w-full bg-white">
//               <TableHeader>
//                 <TableRow>
//                   <TableHead className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
//                     Name
//                   </TableHead>
//                   <TableHead className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
//                     Email Address
//                   </TableHead>
//                   <TableHead className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
//                     Role
//                   </TableHead>
//                   <TableHead className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
//                     Actions
//                   </TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody className="divide-y divide-gray-200">
//                 {users.map((user, index) => (
//                   <TableRow key={index}>
//                     <TableCell className="px-6 py-4 font-medium whitespace-nowrap">{user.name}</TableCell>
//                     <TableCell className="px-6 py-4 whitespace-nowrap">{user.email}</TableCell>
//                     <TableCell className="px-6 py-4 whitespace-nowrap">
//                       <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.role === 'Administrator' ? 'bg-blue-100 text-blue-800' : user.role === 'Sales Manager' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
//                         {user.role}
//                       </span>
//                     </TableCell>
//                     <TableCell className="px-6 py-4 text-sm font-medium whitespace-nowrap">
//                       <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
//                       <a href="#" className="ml-4 text-red-600 hover:text-red-900">Remove</a>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
          
     
//             {isOpen && (
//         <UserForm currentUser={currentUser} onClose={() => setIsOpen(false)} />
//       )}
//     </div>
//   );
// }

// export default MainTable;
