import TopSalesCardMenu from './ui/TopSalesCardMenu';

const TopSalesSection = () => {
    const bentoImg = `${import.meta.env.VITE_APP_URL_STORAGE}/menus/menu-bento.png`;

    return (
        <div className="grid grid-cols-3">
            <TopSalesCardMenu ImgUrl={bentoImg} altImage="Bento" judul="Bento" qtyPenjulan="200 Pcs" harga="15.000" />
        </div>
    );
};

export default TopSalesSection;
