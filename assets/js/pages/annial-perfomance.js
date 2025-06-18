Highcharts.chart('annual-sales', {
    chart: {
        zoomType: 'xy',
        style: {
            fontFamily: '"Poppins", sans-serif'
        }
    },
    title: {
        text: 'Hospital Performance Dashboard 2025',
        align: 'center',
        style: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#023382'
        }
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    xAxis: [{
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    crosshair: true,
    lineWidth: 0,
    tickWidth: 0
}],

    yAxis: [{
        labels: {
            style: {
                color: '#023382'
            },
            formatter: function () {
                return 'ETB ' + (this.value / 1000000).toFixed(1) + 'M';
            }
        },
        title: {
            text: 'Amount (ETB Millions)',
            style: {
                color: '#023382'
            }
        },
        gridLineColor: '#e6e6e6',
        gridLineWidth: 1,
        min: 0
    }, {
        title: {
            text: 'Hospital Visits',
            style: {
                color: '#b03a48'
            }
        },
        labels: {
            style: {
                color: '#b03a48'
            },
            formatter: function () {
                return (this.value / 1000).toFixed(1) + 'K';
            }
        },
        opposite: true,
        gridLineWidth: 0,
        min: 0
    }],
    tooltip: {
        shared: true,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#cccccc',
        borderRadius: 10,
        shadow: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.1,
            borderWidth: 0,
            groupPadding: 0.1,
             borderRadius: 0, // small radius for flatter tops
        },
      
        spline: {
            marker: {
                enabled: true,
                radius: 5
            },
            lineWidth: 3
        }
    },
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: {
            fontWeight: 'normal'
        }
    },
    series: [{
        name: 'Total Premiums Paid',
        type: 'column',
        color: '#023382',
        yAxis: 0,
        data: [45000000, 52000000, 48000000, 55000000, 62000000, 58000000,
            51000000, 49000000, 56000000, 64000000, 59000000, 61000000],
        tooltip: {
            pointFormatter: function () {
                return '<span style="color:' + this.color + '">\u25CF</span> ' +
                    this.series.name + ': <b>ETB ' +
                    Highcharts.numberFormat(this.y, 0, '.', ',') + '</b><br/>';
            }
        }
    }, {
        name: 'Total Claims Settled',
        type: 'column',
        color: '#7faed4', // lighter blue
        yAxis: 0,
        data: [38000000, 42000000, 41000000, 47000000, 53000000, 49000000,
            43000000, 41000000, 48000000, 55000000, 51000000, 52000000],
        tooltip: {
            pointFormatter: function () {
                return '<span style="color:' + this.color + '">\u25CF</span> ' +
                    this.series.name + ': <b>ETB ' +
                    Highcharts.numberFormat(this.y, 0, '.', ',') + '</b><br/>';
            }
        }
    }, {
        name: 'Hospital Visits',
        type: 'spline',
        color: '#b03a48',
        yAxis: 1,
        data: [12500, 14200, 13800, 15600, 17200, 16400,
            14800, 13900, 16100, 18500, 17200, 17800],
        tooltip: {
            pointFormatter: function () {
                return '<span style="color:' + this.color + '">\u25CF</span> ' +
                    this.series.name + ': <b>' +
                    Highcharts.numberFormat(this.y, 0, '.', ',') + ' visits</b><br/>';
            }
        },
        marker: {
            fillColor: '#b03a48',
            lineColor: '#b03a48',
            lineWidth: 2
        }
    }]
});
