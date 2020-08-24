let orientationChart = false;
// Chart Options
const options = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "#f4f4f4",
    foreColor: "#333",
  },
  series: [
    {
      name: "Population",
      data: [
        8550405,
        3971883,
        2720546,
        2296224,
        1567442,
        1563025,
        1469845,
        1394928,
        1300092,
        1026908,
      ],
    },
  ],
  xaxis: {
    categories: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Philadelphia",
      "Phoenix",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose",
    ],
  },
  plotOptions: {
    bar: {
      horizontal: orientationChart,
    },
  },
  fill: {
    colors: ["#f44336"],
  },
  dataLabels: {
    enabled: false,
  },
  title: {
    text: "American largets cities by population",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: { fontSize: "25px" },
  },
};

// Init Chart
const chartElement = document.querySelector("#chart");
const chart = new ApexCharts(chartElement, options);

//Render Chart
chart.render();

//button event
document.querySelector("#btn").addEventListener("click", () => {
  if (orientationChart) {
    orientationChart = false;
    chart.updateOptions({
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
    });
  } else {
    orientationChart = true;
    chart.updateOptions({
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
    });
  }
});
