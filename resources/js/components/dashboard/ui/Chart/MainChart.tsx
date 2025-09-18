import { useChartDatas } from '@/utility/zustand/chartDatas';
import * as Highcharts from 'highcharts';
import { HighchartsReact, HighchartsReactProps } from 'highcharts-react-official';
import { useEffect, useRef } from 'react';

const MainChart = (props: HighchartsReactProps) => {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    const { penjualan, modal, keuntungan, tahun } = useChartDatas();

    const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    const optionsMainChart: Highcharts.Options = {
        chart: {
            type: 'column',
            height: '25%',
        },
        title: {
            text: `Data Penjualan ${tahun}`,
        },
        credits: {
            enabled: false,
        },
        xAxis: {
            categories: namaBulan,
            crosshair: true,
        },
        yAxis: {
            title: {
                text: 'Nominal',
            },
        },
        tooltip: {
            valuePrefix: 'Rp. ',
        },
        plotOptions: {
            column: {
                groupPadding: 0.15,
                pointPadding: 0.05,
                borderWidth: 0,
            },
        },
        series: [
            {
                type: 'column',
                name: 'Penjualan',
                data: Object.values(penjualan),
            },
            {
                type: 'column',
                name: 'Modal',
                data: Object.values(modal),
            },
            {
                type: 'column',
                name: 'Keuntungan',
                data: Object.values(keuntungan),
            },
        ],
        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 500,
                    },
                    chartOptions: {
                        legend: {
                            align: 'center',
                            verticalAlign: 'bottom',
                            layout: 'horizontal',
                        },
                    },
                },
            ],
        },
    };

    useEffect(() => {
        // console.log(Object.values(penjualan));
    }, []);

    return (
        <div className="h-full w-full">
            <HighchartsReact
                highcharts={Highcharts}
                options={optionsMainChart}
                ref={chartComponentRef}
                allowChartUpdate={true}
                updateArgs={[true, true, true]}
                {...props}
            />
        </div>
    );
};

export default MainChart;
