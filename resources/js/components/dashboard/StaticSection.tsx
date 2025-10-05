import useKeuntungan from '@/utility/zustand/keuntunganDatas';
import useModal from '@/utility/zustand/modalDatas';
import usePembelianDatas from '@/utility/zustand/pembelianDatas';
import usePenjualanStore from '@/utility/zustand/penjualanDatas';
import StaticCard from './ui/StaticCard';

const StaticSection = () => {
    const SellIcon = `${import.meta.env.VITE_APP_URL_ICONS}/icon-shopping-bags.png`;
    const PurchaseIcon = `${import.meta.env.VITE_APP_URL_ICONS}/icon-belanja.png`;
    const CapitaleIcon = `${import.meta.env.VITE_APP_URL_ICONS}/icon-modal.png`;
    const ProfitIcon = `${import.meta.env.VITE_APP_URL_ICONS}/icon-profit.png`;

    const { qty, unit, price } = usePenjualanStore();
    const { Total_Pembelian } = usePembelianDatas();
    const { Tot_Modal, Omzet_Modal } = useModal();
    const { Tot_Keuntungan, Omzet_Untung } = useKeuntungan();

    return (
        <div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-6 md:gap-4 md:px-5">
            <StaticCard ImgUrl={SellIcon} title="Penjualan" value={qty} unit={unit} price={price} />
            <StaticCard ImgUrl={PurchaseIcon} title="Pembelian" price={Total_Pembelian} />
            <StaticCard ImgUrl={CapitaleIcon} title="Modal" value={'Rp. ' + Tot_Modal} price={Omzet_Modal} />
            <StaticCard ImgUrl={ProfitIcon} title="Keuntungan" value={'Rp. ' + Tot_Keuntungan} price={Omzet_Untung} />
        </div>
    );
};

export default StaticSection;
