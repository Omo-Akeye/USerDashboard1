import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createUser, updateUserAction, User } from '../components/redux/userActions'
import x from '../assets/X.svg';
import avatar from '../assets/Frame 1.svg';

interface UserFormProps {
  currentUser: User | null;
  onClose: () => void;
}

function UserForm({ currentUser, onClose }: UserFormProps) {
  const [formData, setFormData] = useState<User>({ name: '', email: '', role: '' });
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      setFormData(currentUser);
    }
  }, [currentUser]);

  useEffect(() => {
    const { name, email, role } = formData;
    setIsValid(name.trim() !== '' && email.trim() !== '' && role.trim() !== '');
  }, [formData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (currentUser) {
      dispatch<any>(updateUserAction(formData));
    } else {
      dispatch<any>(createUser(formData));
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-3/4 sm:p-8 p-4 bg-white rounded-lg shadow-lg md:w-[40%]">
        <button type="button" onClick={onClose}>
          <img src={x} alt="Close" />
        </button>
        <div className="flex flex-col items-center">
          <img src={avatar} alt="Avatar" className='max-sm:w-12' />
          <h2 className="mb-4 text-xl font-bold sm:text-2xl">{currentUser ? 'Edit User' : 'New User'}</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="New User's Email Address"
              onChange={handleChange}
              className="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
              placeholder="New User's Full name"
              onChange={handleChange}
              className="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
              className="block w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Role</option>
              <option value="Administrator">Administrator</option>
              <option value="Sales Manager">Sales Manager</option>
              <option value="Sales Representative">Sales Representative</option>
            </select>
          </div>
        
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md"
            disabled={!isValid}
          >
            {currentUser ? 'Update' : 'Add'} User
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;