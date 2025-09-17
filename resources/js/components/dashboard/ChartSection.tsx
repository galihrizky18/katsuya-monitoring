import * as Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';
import { useRef } from 'react';

const options: Highcharts.Options = {
    title: {
        text: 'My chart',
    },
    series: [
        {
            type: 'line',
            data: [1, 2, 3],
        },
    ],
};

const ChartSection = (props: HighchartsReact.Props) => {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    return (
        <div className="h-[25rem] rounded-lg bg-white px-5 py-3">
            <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} {...props} />
        </div>
    );
};

export default ChartSection;
