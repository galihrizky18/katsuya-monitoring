/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from '@inertiajs/react';
import { PasswordInput, TextInput } from '@mantine/core';
import GlassButton from '../ui/GlassButton';

const LoginCard = () => {
    const { data, setData, post, processing, errors } = useForm({
        username: '',
        password: '',
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Login');
    };

    return (
        <div className="flex flex-col gap-3 rounded-lg border border-gray-300 bg-white px-10 py-7 font-poppins drop-shadow-lg">
            {/* Logo */}
            <div className="flex h-36 items-center justify-center overflow-hidden">
                <img
                    src="http://101.128.76.179:4071/storage/images/Logo_Katsuya_Ganurashi.png"
                    alt="Logo Katsuya"
                    className="max-h-full max-w-full object-contain"
                />
            </div>

            {/* Hedaer */}
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold text-text-default">Selamat Datang Kembali,</h1>
                <h2 className="text-sm text-gray-500">Di Website Katsuya Monitoring</h2>
            </div>

            <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <TextInput label="Username" placeholder="username" />

                <PasswordInput label="Password" placeholder="password" />

                <div className="mt-3 flex w-full items-center justify-center">
                    <GlassButton width="50%" type="submit">
                        Login
                    </GlassButton>
                </div>
            </form>
        </div>
    );
};

export default LoginCard;
