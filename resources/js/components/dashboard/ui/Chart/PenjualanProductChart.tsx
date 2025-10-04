import { useChartPenjualanByProduk } from '@/utility/zustand/chartDatas';
import * as Highcharts from 'highcharts';
import { HighchartsReact, HighchartsReactProps } from 'highcharts-react-official';
import { useRef } from 'react';

const PenjualanProductChart = (props: HighchartsReactProps) => {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    const { produk } = useChartPenjualanByProduk();

    const data = produk.map((item) => ({
        name: item.Nama_Produk,
        y: item.Jumlah,
    }));

    const optionPieChart: Highcharts.Options = {
        chart: {
            type: 'pie',
            plotShadow: false,
        },
        title: {
            text: 'Penjualan Produk',
        },
        colors: Highcharts.getOptions().colors!.map((color): Highcharts.GradientColorObject => {
            return {
                radialGradient: {
                    cx: 0.5,
                    cy: 0.3,
                    r: 0.7,
                },
                stops: [[0, color] as [number, string], [1, Highcharts.color(color)!.brighten(-0.3).get('rgb')] as [number, string]],
            };
        }),
        tooltip: {
            valueSuffix: 'Pcs',
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                size: '100%',
                dataLabels: [
                    {
                        enabled: true,
                        distance: 20,
                    },
                    {
                        format: '{point.y} Pcs',
                        style: {
                            fontSize: '.9rem',
                            textOutline: 'none',
                            opacity: 0.7,
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                        },
                        filter: {
                            operator: '>',
                            property: 'y',
                            value: 25,
                        },
                    },
                ],
                showInLegend: true,
            },
        },
        series: [
            {
                type: 'pie',
                name: 'Penjualan Produk',
                data: data,
            },
        ],
        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 500,
                    },
                    chartOptions: {
                        title: {
                            style: {
                                fontSize: '14px',
                            },
                        },
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom',
                        },
                        plotOptions: {
                            pie: {
                                size: '100%', // <-- Koreksi di sini
                                dataLabels: [
                                    {
                                        enabled: false,
                                        distance: 10,
                                        style: {
                                            fontSize: '.7rem',
                                        },
                                    },
                                    {
                                        enabled: true,
                                        distance: -30,
                                        format: '{point.y} Pcs',
                                        style: {
                                            fontSize: '.7rem',
                                            textOutline: 'none',
                                            opacity: 0.7,
                                            color: '#FFFFFF',
                                            fontWeight: 'bold',
                                        },
                                        filter: {
                                            operator: '>',
                                            property: 'y',
                                            value: 25,
                                        },
                                    },
                                ],
                            },
                        },
                    },
                },
            ],
        },
    };

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={optionPieChart}
                ref={chartComponentRef}
                allowChartUpdate={true}
                updateArgs={[true, true, true]}
                {...props}
            />
        </div>
    );
};

export default PenjualanProductChart;
