import ChartSection from '@/components/dashboard/ChartSection';
import StaticSection from '@/components/dashboard/StaticSection';
import { getCurrentDateTime } from '@/helper/getCurrentDateTime';
import DashboardLayout from '@/layout/DashboardLayout';
import usePembelianDatas from '@/utility/zustand/pembelianDatas';
import usePenjualanStore from '@/utility/zustand/penjualanDatas';
import React, { useEffect, useState } from 'react';

interface Penjualan {
    Total_Belanja: number;
    Total_Qty: number;
    satuan: string;
}

interface Pembelian {
    Total_Pembelian: number;
}

interface DashboardProps {
    user: {
        nama: string;
        level: string;
    };
    data: {
        penjualan: Penjualan;
        pembelian: Pembelian;
    };
}

const dashboard: React.FC<DashboardProps> = ({ user, data }) => {
    const [currentTime, setCurrentTime] = useState(getCurrentDateTime());

    const { setQty, setUnit, setPrice } = usePenjualanStore();
    const { setTotalPembelian } = usePembelianDatas();

    useEffect(() => {
        const interval = setInterval(() => {
            const newTime = getCurrentDateTime();

            if (newTime.minutes !== currentTime.minutes) {
                setCurrentTime(newTime);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [currentTime.minutes]);

    useEffect(() => {
        setQty(data.penjualan.Total_Qty);
        setPrice(data.penjualan.Total_Belanja);
        setUnit(data.penjualan.satuan);

        setTotalPembelian(data.pembelian.Total_Pembelian);
    }, []);

    return (
        <DashboardLayout>
            <div className="flex h-full w-full flex-col gap-4">
                {/* Header */}
                <div className="grid grid-cols-3 font-sawarabi-mincho">
                    <div className="boder col-span-2 grid grid-cols-3 rounded-xl bg-white px-5 py-5 drop-shadow-md">
                        {/* Grid 1 */}
                        <div className="col-span-2 flex flex-col gap-1">
                            <h1 className="text-3xl font-semibold">Selamat Datang Kembali, </h1>
                            <h2>{user.nama}</h2>
                        </div>

                        {/* Grid 2 */}
                        <div className="flex flex-col items-end justify-center gap-1 text-end text-gray-500">
                            <h1 className="text-md font-semibold">{currentTime.dateFormat}</h1>
                            <h2 className="text-sm">{currentTime.timeFormat}</h2>
                        </div>
                    </div>
                </div>

                {/* Kumpulan Card */}
                <StaticSection />

                {/* Chart Secion */}
                <ChartSection />
            </div>
        </DashboardLayout>
    );
};

export default dashboard;
