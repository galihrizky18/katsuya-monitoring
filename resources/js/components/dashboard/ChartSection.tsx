import { ResponsiveLine } from '@nivo/line';

const ChartSection = () => {
    const data = [
        {
            id: 'japan',
            data: [
                {
                    x: 'plane',
                    y: 5,
                },
                {
                    x: 'helicopter',
                    y: 100,
                },
                {
                    x: 'boat',
                    y: 90,
                },
            ],
        },
        {
            id: 'france',
            data: [
                {
                    x: 'plane',
                    y: 43,
                },
                {
                    x: 'helicopter',
                    y: 75,
                },
                {
                    x: 'boat',
                    y: 23,
                },
            ],
        },
        {
            id: 'us',
            data: [
                {
                    x: 'plane',
                    y: 41,
                },
                {
                    x: 'helicopter',
                    y: 75,
                },
                {
                    x: 'boat',
                    y: 29,
                },
            ],
        },
        {
            id: 'germany',
            data: [
                {
                    x: 'plane',
                    y: 291,
                },
                {
                    x: 'helicopter',
                    y: 263,
                },
            ],
        },
        {
            id: 'norway',
            data: [
                {
                    x: 'plane',
                    y: 243,
                },
                {
                    x: 'helicopter',
                    y: 122,
                },
            ],
        },
    ];
    return (
        <div className="h-[25rem] rounded-lg bg-white px-5 py-3">
            <ResponsiveLine /* or Line for fixed dimensions */
                data={data}
                margin={{ top: 30, right: 110, bottom: 50, left: 50 }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                curve="catmullRom"
                axisBottom={{ legend: 'Bulan', legendOffset: 36 }}
                axisLeft={{ legend: 'Nominal', legendOffset: -40 }}
                lineWidth={3}
                pointSize={7}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'seriesColor', modifiers: [] }}
                pointLabelYOffset={-12}
                enableArea={true}
                enableTouchCrosshair={true}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        translateX: 100,
                        itemWidth: 80,
                        itemHeight: 22,
                        symbolShape: 'circle',
                    },
                ]}
            />
        </div>
    );
};

export default ChartSection;
