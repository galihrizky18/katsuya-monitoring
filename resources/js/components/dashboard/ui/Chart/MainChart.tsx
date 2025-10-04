import { useChartDatas } from '@/utility/zustand/chartDatas';
import * as Highcharts from 'highcharts';
import { HighchartsReact, HighchartsReactProps } from 'highcharts-react-official';
import { useEffect, useRef } from 'react';

const MainChart = (props: HighchartsReactProps) => {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    const { penjualan, modal, keuntungan, tahun } = useChartDatas();

    const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    const bulanSekarangIndex = new Date().getMonth();

    let maxIndexDesktop = Math.min(11, bulanSekarangIndex + 4);
    let minIndexDesktop = Math.max(0, maxIndexDesktop - 4);

    let minIndexMobile = Math.max(0, bulanSekarangIndex - 1);
    let maxIndexMobile = Math.min(11, bulanSekarangIndex + 1);

    if (bulanSekarangIndex === 0) {
        maxIndexMobile = 2;
    }
    if (bulanSekarangIndex === 11) {
        minIndexMobile = 9;
    }

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
            min: minIndexDesktop,
            max: maxIndexDesktop,
        },
        yAxis: {
            title: {
                text: 'Nominal',
            },
            labels: {
                formatter: function () {
                    return Highcharts.numberFormat(this.value as number, 0, ',', '.');
                },
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
            { type: 'column', name: 'Penjualan', data: Object.values(penjualan) },
            { type: 'column', name: 'Modal', data: Object.values(modal) },
            { type: 'column', name: 'Keuntungan', data: Object.values(keuntungan) },
        ],
        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 500,
                    },
                    chartOptions: {
                        chart: {
                            height: '100%',
                        },
                        title: {
                            style: {
                                fontSize: '1.05rem',
                            },
                        },
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom',
                            itemStyle: {
                                fontSize: '.7rem',
                            },
                        },
                        yAxis: {
                            title: { text: undefined },
                            labels: {
                                style: {
                                    fontSize: '.6rem',
                                },
                                formatter: function () {
                                    return Highcharts.numberFormat(this.value as number, 0, ',', '.');
                                },
                            },
                        },
                        xAxis: {
                            labels: {
                                style: { fontSize: '.7rem' },
                            },
                            min: minIndexMobile,
                            max: maxIndexMobile,
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
