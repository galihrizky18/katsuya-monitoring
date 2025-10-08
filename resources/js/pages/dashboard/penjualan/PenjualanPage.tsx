import DashboardLayout from '@/layout/DashboardLayout';
import { Head } from '@inertiajs/react';

const PenjualanPage = () => {
    return (
        <DashboardLayout>
            <Head title="Detail Penjualan" />
            <div className="flex h-full w-full flex-col">
                {/* Header */}
                <div className="rounded-lg bg-white p-4 drop-shadow-lg">
                    <h1 className="font-sawarabi-mincho text-2xl font-semibold">Detail Penjualan</h1>
                </div>

                {/* Top Sales */}
            </div>
        </DashboardLayout>
    );
};

export default PenjualanPage;
