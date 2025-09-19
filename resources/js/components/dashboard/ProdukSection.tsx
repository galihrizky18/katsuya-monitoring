import { ScrollArea } from '@mantine/core';
import CardDetailProduk from './ui/CardDetailProduk';

const ProdukSection = () => {
    return (
        <div className="flex h-full w-full flex-col gap-3 py-2">
            <h1 className="font-sawarabi-mincho text-xl font-semibold">Detail Produk</h1>
            <ScrollArea style={{ height: '34vh' }} className="h-full w-full">
                <CardDetailProduk />
            </ScrollArea>
        </div>
    );
};

export default ProdukSection;
