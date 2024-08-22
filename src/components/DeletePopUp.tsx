import deleteBtn from '../assets/button-icon.png';

interface ConfirmationPopupProps {
    isOpenpop: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export default function DeletePopUp({ isOpenpop, onClose, onConfirm }: ConfirmationPopupProps) {
    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isOpenpop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <div
                className={`bg-white rounded-lg shadow-lg sm:w-[400px] w-[280px] py-8 transform transition-transform duration-300 ${isOpenpop ? 'scale-100' : 'scale-90'}`}
            >
                <h2 className="sm:text-2xl text-xl font-bold text-center">Delete this user</h2>
                <p className="my-3 text-[#667185] text-center max-sm:text-sm">
                    This user and all associated data will be permanently removed. Do you wish to continue?
                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={onClose}
                        className="max-sm:text-sm sm:px-4 px-2 sm:py-2 py-1 bg-gray-200 rounded font-bold border-[#475367] border-[1px] hover:bg-[#b8b8b8]"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="sm:px-3 max-sm:text-sm px-2 py-2 text-red-500 bg-[#FBEAE9] border-red-500 border-[1px] rounded flex gap-2 font-bold hover:bg-[#f7c7c5]"
                    >
                        <img src={deleteBtn} alt="deletebtn" />
                        Yes, Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
