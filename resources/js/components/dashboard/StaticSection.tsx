import usePembelianDatas from '@/utility/zustand/pembelianDatas';
import usePenjualanStore from '@/utility/zustand/penjualanDatas';
import StaticCard from './ui/StaticCard';

const StaticSection = () => {
    const SellIcon = `${import.meta.env.VITE_URL_ICONS}/icon-shopping-bags.png`;

    const { qty, unit, price } = usePenjualanStore();
    const { Total_Pembelian } = usePembelianDatas();

    return (
        <div className="grid grid-cols-6 gap-4 px-5">
            <StaticCard ImgUrl={SellIcon} title="Penjualan" value={qty} unit={unit} price={price} />
            <StaticCard ImgUrl={SellIcon} title="Pembelian" price={Total_Pembelian} />
            {/* <StaticCard ImgUrl={SellIcon} title="Penjualan" value="2" unit="Pcs" price="25000" /> */}
        </div>
    );
};

export default StaticSection;
