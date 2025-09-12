import { PasswordInput, TextInput } from '@mantine/core';
import GlassButton from '../ui/GlassButton';

const LoginCard = () => {
    return (
        <div className="flex flex-col gap-3 rounded-lg border border-gray-300 bg-white px-10 py-7 font-poppins drop-shadow-lg">
            {/* Hedaer */}
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold text-text-default">Selamat Datang Kembali,</h1>
                <h2 className="text-md">Di Website Katsuya Monitoring</h2>
            </div>

            <form action="" className="flex flex-col gap-2">
                <TextInput label="Username" placeholder="username" />

                <PasswordInput label="Password" placeholder="password" />

                <div className="mt-3 flex w-full items-center justify-center">
                    <GlassButton width="50%">Login</GlassButton>
                </div>
            </form>
        </div>
    );
};

export default LoginCard;
