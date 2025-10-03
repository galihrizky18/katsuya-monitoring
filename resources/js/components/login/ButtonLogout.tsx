import axios from 'axios';
import { LogOut } from 'lucide-react';

const ButtonLogout = () => {
    const handleLogout = async () => {
        try {
            await axios.post('/logout');
            window.location.href = '/';
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <div
            className="flex w-full items-center gap-3 rounded-md p-2 text-[.8rem] transition-colors duration-200 select-none hover:cursor-pointer hover:bg-hover hover:font-semibold md:text-[.95rem]"
            onClick={handleLogout}
        >
            <LogOut />
            Logout
        </div>
    );
};

export default ButtonLogout;
