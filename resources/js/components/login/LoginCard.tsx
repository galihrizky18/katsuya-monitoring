/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { PasswordInput, TextInput } from '@mantine/core';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import GlassButton from '../ui/GlassButton';

const LoginCard = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const Logo = import.meta.env.VITE_APP_URL_LOGO;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

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
                },
            );

            const result = response.data;

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
            setLoading(false);
        }
    };

    return (
        <div className="mx-3 flex flex-col gap-3 rounded-xl border border-gray-300 bg-white px-5 py-5 font-poppins drop-shadow-lg md:mx-0 md:px-10 md:py-7">
            {/* Logo */}
            <div className="flex h-28 items-center justify-center overflow-hidden md:h-36">
                <img src={Logo} alt="Logo Katsuya" className="max-h-full max-w-full object-contain" />
            </div>

            {/* Hedaer */}
            <div className="flex flex-col">
                <h1 className="text-xl font-bold text-text-default md:text-3xl">Selamat Datang Kembali,</h1>
                <h2 className="text-xs text-gray-500 md:text-sm">Di Website Katsuya Monitoring</h2>
            </div>

            <form action="" className="md:text-md flex flex-col gap-2 text-sm" onSubmit={handleSubmit}>
                <TextInput label="Username" placeholder="username" value={username} onChange={(e) => setUsername(e.currentTarget.value)} />

                <PasswordInput label="Password" placeholder="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />

                <div className="mt-3 flex w-full items-center justify-center">
                    <GlassButton width="50%" type="submit" disable={loading ? true : false}>
                        Login
                    </GlassButton>
                </div>
            </form>
        </div>
    );
};

export default LoginCard;
