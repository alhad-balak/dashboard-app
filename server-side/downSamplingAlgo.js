function downsampleLTTBYearly(data, threshold) {
    if (threshold >= data.length || threshold === 0) {
        return data;
    }

    const dataByYear = data.reduce((acc, point) => {
        const year = new Date(point.Timestamp).getFullYear();
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(point);
        return acc;
    }, {});

    let sampledData = [];

    Object.keys(dataByYear).forEach(year => {
        const yearlyData = dataByYear[year];
        const yearlySampled = lttb(yearlyData, Math.min(threshold, yearlyData.length));
        sampledData.push(...yearlySampled);
    });

    return sampledData;
}

function lttb(data, threshold) {
    let sampledData = [data[0]];

    let every = (data.length - 2) / (threshold - 2);
    let a = 0;
    let maxAreaPoint;
    let maxArea, area;

    for (let i = 0; i < threshold - 2; i++) {
        let avgX = 0;
        let avgY = 0;
        let avgRangeStart = Math.floor((i + 1) * every) + 1;
        let avgRangeEnd = Math.floor((i + 2) * every) + 1;
        avgRangeEnd = avgRangeEnd < data.length ? avgRangeEnd : data.length;

        let avgRangeLength = avgRangeEnd - avgRangeStart;

        for (; avgRangeStart < avgRangeEnd; avgRangeStart++) {
            avgX += new Date(data[avgRangeStart].Timestamp).getTime();
            avgY += parseFloat(data[avgRangeStart].ProfitPercentage);
        }

        avgX /= avgRangeLength;
        avgY /= avgRangeLength;

        let rangeOffs = Math.floor((i + 0) * every) + 1;
        let rangeTo = Math.floor((i + 1) * every) + 1;

        let pointAX = new Date(data[a].Timestamp).getTime();
        let pointAY = parseFloat(data[a].ProfitPercentage);

        maxArea = area = -1;

        for (; rangeOffs < rangeTo; rangeOffs++) {
            let pointBX = new Date(data[rangeOffs].Timestamp).getTime();
            let pointBY = parseFloat(data[rangeOffs].ProfitPercentage);
            area = Math.abs((pointAX - avgX) * (pointBY - pointAY) -
                (pointAX - pointBX) * (avgY - pointAY)) * 0.5;
            if (area > maxArea) {
                maxArea = area;
                maxAreaPoint = data[rangeOffs];
            }
        }

        if (maxAreaPoint) {
            sampledData.push(maxAreaPoint);
        }
        a = rangeTo - 1;
    }

    sampledData.push(data[data.length - 1]);

    return sampledData;
}

function downsampleLTTBMonthly(data, threshold) {
    if (threshold >= data.length || threshold === 0) {
        return data;
    }
    const dataByMonth = data.reduce((acc, point) => {
        const date = new Date(point.Timestamp);
        const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;
        if (!acc[monthYear]) {
            acc[monthYear] = [];
        }
        acc[monthYear].push(point);
        return acc;
    }, {});

    let sampledData = [];

    Object.keys(dataByMonth).forEach(monthYear => {
        const monthlyData = dataByMonth[monthYear];
        const monthlySampled = lttb2(monthlyData, Math.min(threshold, monthlyData.length));
        sampledData.push(...monthlySampled);
    });

    return sampledData;
}

function lttb2(data, threshold) {
    let sampledData = [data[0]];

    let every = (data.length - 2) / (threshold - 2);
    let a = 0;
    let maxAreaPoint;
    let maxArea, area;

    for (let i = 0; i < threshold - 2; i++) {
        let avgX = 0;
        let avgY = 0;
        let avgRangeStart = Math.floor((i + 1) * every) + 1;
        let avgRangeEnd = Math.floor((i + 2) * every) + 1;
        avgRangeEnd = avgRangeEnd < data.length ? avgRangeEnd : data.length;

        let avgRangeLength = avgRangeEnd - avgRangeStart;

        for (; avgRangeStart < avgRangeEnd; avgRangeStart++) {
            avgX += new Date(data[avgRangeStart].Timestamp).getTime();
            avgY += parseFloat(data[avgRangeStart].ProfitPercentage);
        }

        avgX /= avgRangeLength;
        avgY /= avgRangeLength;

        let rangeOffs = Math.floor((i + 0) * every) + 1;
        let rangeTo = Math.floor((i + 1) * every) + 1;

        let pointAX = new Date(data[a].Timestamp).getTime();
        let pointAY = parseFloat(data[a].ProfitPercentage);

        maxArea = area = -1;

        for (; rangeOffs < rangeTo; rangeOffs++) {
            let pointBX = new Date(data[rangeOffs].Timestamp).getTime();
            let pointBY = parseFloat(data[rangeOffs].ProfitPercentage);
            area = Math.abs((pointAX - avgX) * (pointBY - pointAY) -
                (pointAX - pointBX) * (avgY - pointAY)) * 0.5;
            if (area > maxArea) {
                maxArea = area;
                maxAreaPoint = data[rangeOffs];
            }
        }

        if (maxAreaPoint) {
            sampledData.push(maxAreaPoint);
        }
        a = rangeTo - 1;
    }

    sampledData.push(data[data.length - 1]);

    return sampledData;
}
module.exports = { downsampleLTTBYearly, downsampleLTTBMonthly };
