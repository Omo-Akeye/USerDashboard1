import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser, User } from '../redux/userReducer';
import x from '../assets/X.svg'
import avatar from '../assets/Frame 1.svg'

interface UserFormProps {
  currentUser: User | null;
  onClose: () => void;
}

function UserForm ({ currentUser, onClose }: UserFormProps) {
  const [formData, setFormData] = useState<User>({ id: 0, name: '', email: '', role: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      setFormData(currentUser);
    }
  }, [currentUser]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (currentUser) {
      dispatch(updateUser(formData));
    } else {
      dispatch(addUser(formData));
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
         
      <div className="bg-white rounded-lg shadow-lg w-[588px] p-8">
             <button
              type="button"
              onClick={onClose}
            >
              <img src={x} alt="" />
            </button>
            <div className='flex flex-col items-center'>
                <img src={avatar} alt="" />
            <h2 className="mb-4 text-2xl font-bold">{currentUser ? 'Edit User' : 'New User'}</h2>
            </div>
        
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
             Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
      
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option>Administrator</option>
              <option>Sales Manager</option>
              <option>Sales Representative</option>
            </select>
          </div>
          
           
            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md">
              {currentUser ? 'Update' : 'Create'}
            </button>
          
        </form>
      </div>
    </div>
  );
}

export default UserForm;

