import React from 'react';

interface TopSalesCardMenuProps {
    ImgUrl: string;
    altImage: string;
    judul: string;
    qtyPenjulan: string | number;
    harga: string;
}

const TopSalesCardMenu: React.FC<TopSalesCardMenuProps> = ({ ImgUrl, altImage, judul, qtyPenjulan, harga }) => {
    return (
        <div className="m-3 flex w-[200px] flex-col overflow-hidden rounded-lg bg-white drop-shadow-lg">
            <img src={ImgUrl} alt={altImage} className="h-[200px] w-[200px] object-cover shadow-md" />
            <div className="flex flex-col gap-1 p-2 select-none">
                <h1 className="line-clamp-2 text-center font-sawarabi-mincho text-xl font-semibold">{judul}</h1>

                <div className="flex flex-row justify-between px-1">
                    <h2 className="text-[.9rem] font-semibold">{qtyPenjulan}</h2>

                    <h2 className="text-[.9rem] font-semibold text-[#de833b]">
                        Rp.<span className="text-[1rem]">{harga}</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default TopSalesCardMenu;
