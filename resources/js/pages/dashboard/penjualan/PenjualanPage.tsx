import DashboardLayout from '@/layout/DashboardLayout';

const PenjualanPage = () => {
    return (
        <DashboardLayout>
            <div className="flex h-full w-full flex-col">
                {/* Header */}
                <div className="rounded-lg bg-white p-4 drop-shadow-lg">
                    <h1 className="font-sawarabi-mincho text-2xl font-semibold">Detail Penjualan</h1>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default PenjualanPage;
