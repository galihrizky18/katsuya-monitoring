/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */


import { PasswordInput, TextInput } from '@mantine/core';
import GlassButton from '../ui/GlassButton';
import { useState } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

const LoginCard = () => {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const csrfToken = (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content;

            const response = await axios.post(
                '/login',
                {
                    username,
                    password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken || '',
                    },
                }
            );

            const result = response.data; // axios otomatis parsing JSON

            if (result.status) {
                await Swal.fire({
                    icon: 'success',
                    title: 'Berhasil!',
                    text: result.message,
                    timer: 1500,
                    showConfirmButton: false,
                });

                // Redirect ke dashboard
                window.location.href = '/dashboard';
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal!',
                    text: result.message,
                });
            }
        } catch (error: unknown) {
            if (
                typeof error === 'object' &&
                error !== null &&
                'response' in error &&
                typeof (error as any).response === 'object' &&
                (error as any).response.data
            ) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: (error as any).response.data.message || 'Terjadi kesalahan',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Tidak bisa menghubungi server.',
                });
            }
        } finally {
            // setLoading(false);
        }
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
                <TextInput label="Username" placeholder="username"
                   value={username}
                    onChange={(e) => setUsername(e.currentTarget.value)}
                />

                <PasswordInput label="Password" placeholder="password"
                     value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />

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

