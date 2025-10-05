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
    let formattedValue = '';
    if (typeof value === 'string') {
        const prefix = value.split(' ')[0];
        const numericValue = Number(value.replace(/[^\d]/g, ''));
        const formatedAngka = new Intl.NumberFormat('id-ID').format(Number(numericValue));
        formattedValue = `${prefix} ${formatedAngka}`;
    } else {
        formattedValue = new Intl.NumberFormat('id-ID').format(Number(value));
    }

    return (
        <div className="flex flex-col rounded-lg bg-white px-3 py-3 font-sawarabi-mincho drop-shadow-md">
            {ImgUrl && <img src={ImgUrl} alt={title} className="mb-3 h-10 w-10 object-contain md:h-12 md:w-12" />}
            <h1 className="text-xs text-gray-500 md:text-sm">{title}</h1>

            {value === 'nothing' ? (
                <h1></h1>
            ) : (
                <h2 className="text-md font-semibold md:text-2xl">
                    {formattedValue} <span className="text-sm">{unit}</span>
                </h2>
            )}

            {value === 'nothing' ? (
                <h2 className="mt-1 text-lg font-semibold md:text-xl">Rp. {formattedPrice}</h2>
            ) : (
                <h2 className="mt-1 text-xs text-gray-500 md:text-sm">Rp. {formattedPrice}</h2>
            )}
        </div>
    );
};

export default StaticCard;
