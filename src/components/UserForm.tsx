import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createUser, updateUserAction, User } from '../redux/userActions';
import x from '../assets/X.svg';
import avatar from '../assets/Frame 1.svg';

interface UserFormProps {
  currentUser: User | null;
  onClose: () => void;
}

function UserForm({ currentUser, onClose }: UserFormProps) {
  const [formData, setFormData] = useState<User>({ id: 0, name: '', email: '', role: '' });
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
      dispatch(updateUserAction(formData));
    } else {
      dispatch(createUser(formData));
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[588px] p-8">
        <button type="button" onClick={onClose}>
          <img src={x} alt="Close" />
        </button>
        <div className="flex flex-col items-center">
          <img src={avatar} alt="Avatar" />
          <h2 className="mb-4 text-2xl font-bold">{currentUser ? 'Edit User' : 'New User'}</h2>
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
              placeholder="New User's Full name"
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
              <option value="">Select Role</option>
              <option value="Administrator">Administrator</option>
              <option value="Sales Manager">Sales Manager</option>
              <option value="Sales Representative">Sales Representative</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Create Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a Password for new User"
              onChange={handleChange}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
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
