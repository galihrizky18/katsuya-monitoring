import MainChart from './ui/Chart/MainChart';
import PenjualanProductChart from './ui/Chart/PenjualanProductChart';

const ChartSection = () => {
    return (
        <div className="flex flex-col gap-3">
            <div className="w-full overflow-hidden rounded-lg bg-white py-3 pr-5 pl-2 drop-shadow-lg">
                <MainChart />
            </div>

            <div className="grid grid-cols-2 gap-10">
                <div className="rounded-lg bg-white px-5 py-2 drop-shadow-lg">
                    <PenjualanProductChart />
                </div>
                <div className="border border-black">Grid 2</div>
            </div>
        </div>
    );
};

export default ChartSection;
