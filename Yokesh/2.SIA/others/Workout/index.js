const loadScript = (FILE_URL, async = true, type = "text/javascript", integrity = "", crossorigin = "") => {
  return new Promise((resolve, reject) => {
    try {
      const scriptEle = document.createElement("script");
      scriptEle.type = type;
      scriptEle.async = async;
      scriptEle.src = FILE_URL;

      if (integrity) {
        scriptEle.integrity = integrity;
      }

      if (crossorigin) {
        scriptEle.crossOrigin = crossorigin;
      }

      scriptEle.addEventListener("load", () => {
        resolve({ status: true });
      });

      scriptEle.addEventListener("error", () => {
        reject({
          status: false,
          message: `Failed to load the script ${FILE_URL}`
        });
      });

      document.body.appendChild(scriptEle);
    } catch (error) {
      reject(error);
    }
  });
};

loadScript("https://cdn.amcharts.com/lib/5/index.js")
  .then(data => {
    loadScript("https://cdn.amcharts.com/lib/5/map.js")
      .then(data => {
        loadScript("https://cdn.amcharts.com/lib/5/geodata/worldLow.js")
          .then(data => {
            loadScript("https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.49.1/apexcharts.min.js")
              .then((data) => {
                loadScript(
                  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
                  true,
                  "text/javascript",
                  "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz",
                  "anonymous"
                ).then((data) => {
                  loadChart();
                });
              });
          });
      });
  });

function loadChart() { 


    let categories 

    console.log("yoki categories", categories);

     categories = [
      "2024-06-25",
      "2024-06-26",
      "2024-06-27",
      "2024-06-28",
      "2024-07-01",
      "2024-07-02",
      "2024-07-03",
      "2024-07-04"
  ];


    countMap = {
        "2024-07-04": {
            "Completed": 3
        },
        "2024-06-25": {
            "InProgress": 18,
            "Completed": 1
        },
        "2024-06-26": {
            "Completed": 6,
            "InProgress": 93
        },
        "2024-06-27": {
            "InProgress": 12,
            "Completed": 3
        },
        "2024-06-28": {
            "Completed": 6,
            "InProgress": 29
        },
        "2024-07-01": {
            "Completed": 3,
            "InProgress": 37
        },
        "2024-07-02": {
            "Completed": 4,
            "InProgress": 1,
            "null": 3
        },
        "2024-07-03": {
            "Completed": 2,
            "null": 2
        }
    }

    console.log("yoki countMap", countMap);

    seriesData = [
        {
            "name": "Completed",
            "data": [
                3,
                1,
                6,
                3,
                6,
                3,
                4,
                2
            ]
        },
        {
            "name": "InProgress",
            "data": [
                0,
                18,
                93,
                12,
                29,
                37,
                1,
                0
            ]
        },
        {
            "name": "null",
            "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                3,
                2
            ]
        }
    ]

    console.log("yoki seriesData", seriesData);

    new ApexCharts(document.querySelector("#reportsChart"), {
      series: seriesData,
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      markers: {
        size: 4
      },
      colors: ['#4154f1', '#2eca6a', '#ff771d'],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100]
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        type: 'datetime',
        categories: categories
      },
      tooltip: {
        x: {
          format: 'yyyy/MM/dd HH:mm'
        }
      }
    }).render();

}
