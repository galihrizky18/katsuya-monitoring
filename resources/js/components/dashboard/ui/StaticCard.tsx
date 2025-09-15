import React from 'react';

interface StaticCardProps {
    ImgUrl: string;
    title: string;
    value?: string | number;
    unit?: string;
    price?: string | number;
}

const StaticCard: React.FC<StaticCardProps> = ({ ImgUrl, title, value = 'nothing', unit, price }) => {
    const formattedPrice = new Intl.NumberFormat('id-ID').format(Number(price));
    const formattedValue = new Intl.NumberFormat('id-ID').format(Number(value));

    return (
        <div className="flex flex-col rounded-lg bg-white px-3 py-3 font-sawarabi-mincho drop-shadow-md">
            {ImgUrl && <img src={ImgUrl} alt={title} className="mb-3 h-12 w-12 object-contain" />}
            <h1 className="text-sm text-gray-500">{title}</h1>

            {value === 'nothing' ? (
                <h1></h1>
            ) : (
                <h2 className="text-2xl font-semibold">
                    {formattedValue} <span className="text-sm">{unit}</span>
                </h2>
            )}

            {value === 'nothing' ? (
                <h2 className="mt-1 text-xl font-semibold">Rp. {formattedPrice}</h2>
            ) : (
                <h2 className="mt-1 text-sm text-gray-500">Rp. {formattedPrice}</h2>
            )}
        </div>
    );
};

export default StaticCard;
