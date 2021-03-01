import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { useFetch } from '../customHooks/useFetch';
import randomColor from "randomcolor";

import { FaAngleDoubleLeft } from 'react-icons/fa';


const url = "https://restcountries.eu/rest/v2/all";



const Mychart = () => {
  const [clicked, setClicked] = useState(false);
  const [chartData, setChartData] = useState({
    labels: ["Asia", "Europe", "Africa", "Oceania", "Americas", "Polar"],
    datasets: [
      {
        label: "Clients",
        barThickness: 66,
        data: [23, 33, 44, 60, 42, 33],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(55, 159, 64, 1)",
            ],
        hoverBorderWidth:10,
        borderWidth: 0,
      },
    ],
  });
  const [apiInfo, setApiInfo] = useState([]);
    const { products } = useFetch(url);
    console.log({ products });
  const ApiData = async () => {
    const response = await fetch(url);
    const data =  response.json();
      setApiInfo(data); 
  };
  const [size, setSize] = useState(window.innerWidth);
  
  
  
  React.useEffect(() => {
    ApiData();
  }, []);
  let chartAspectRatio ;
  const checkSize = () => {
    setSize(window.innerWidth);
    console.log(size);
    console.log(size < 388 ? false : true);
  };

  React.useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
    
  console.log(apiInfo);
  chartAspectRatio = (size < 388 ? false : true);
  let randomNum = Math.round(Math.random() * 100);
  return (
    <div
      className="chart"
      style={{
        border: "3px solid black",
        borderRadius: "25px",
        alignItems: "center",
        padding: "5%",
        margin: "5% 4% 5% 5%",
        backgroundColor: "white",
      }}
    >
      {!clicked && (
        <div>
          <h1>New Clients</h1>
          <br />
          <br />
          <br />
          <h3>+{randomNum}</h3>
          <h4>{Math.round(randomNum * 2.3)}%</h4>
          <Doughnut
            data={chartData}
            options={{
              responsive: true,
              aspectRatio: 1,
              title: {
                display: true,
                text: "",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
                labels: { fontSize: 10 },
                fullWidth: false,
              },
              layout: {
                padding: {
                  left: 0,
                  right: 0,
                },
              },
              maintainAspectRatio: chartAspectRatio,
              cutoutPercentage: 90,

              onClick: (evt, item) => {
                console.log(evt);
                if (item.length > 0) {
                  setClicked(true);
                  let newArr = [];
                  console.log(item[0]._index);
                  console.log(item[0]._chart.config.data);
                  switch (item[0]._index) {
                    case 0:
                      newArr = products.filter((con) => con.region === "Asia");
                      setApiInfo(newArr);
                    
                      
                      break;
                    case 1:
                      newArr = products.filter(
                        (con) => con.region === "Europe"
                      );
                      setApiInfo(newArr);
                      
                      break;
                    case 2:
                      newArr = products.filter(
                        (con) => con.region === "Africa"
                      );
                      setApiInfo(newArr);
                      
                      break;
                    case 3:
                      newArr = products.filter(
                        (con) => con.region === "Oceania"
                      );
                      setApiInfo(newArr);
                      
                      break;
                    case 4:
                      newArr = products.filter(
                        (con) => con.region === "Americas"
                      );
                      setApiInfo(newArr);
                      
                      break;
                    case 5:
                      newArr = products.filter((con) => con.region === "Polar");
                      setApiInfo(newArr);
                      
                      break;
                    default:
                      return
                  }
                } else {
                  alert("Hi, Click on Doughnut slice to get the data !!");
                }
                
              },
            }}
          />
        </div>
      )}

      {clicked && (
        <div>
          <button
            type="button"
            className="back-btn"
            onClick={() => setClicked(false)}
          >
            <FaAngleDoubleLeft size={20} />
          </button>
          <InfoChart
            chartData={chartData}
            apiInfo={apiInfo}
            setClicked={setClicked}
            chartRatio={chartAspectRatio}
            
          />
        </div>
      )}
    </div>
  );
};

const InfoChart = ({ chartData, apiInfo=[] , setClicked, chartRatio}) => {
  console.log("Bar region");
    let colorArr = Object.entries(apiInfo).slice(0,20).map((con) => {
              return randomColor();
            })
  let rgn = Object.entries(apiInfo)
    .slice(0, 1)
    .map((con) => {
      return con[1].region;
    });
  console.log(rgn)
    let d_n = Object.entries(apiInfo)
      .slice(0, 20)
      .map((con) => {
        return con[1].name;
      });
    console.log(colorArr);
    console.log(d_n);
    function getRandomColor() {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      return "rgb(" + r + "," + g + "," + b + ")";
    }
    const [dataSet, setDataSet] = useState({});
  console.log(typeof (apiInfo))
  React.useEffect(() => {
    
        setDataSet({
          labels: Object.entries(apiInfo)
            .slice(0, 20)
            .map((con) => {
              return con[1].name;
            }),
          datasets: [
            {
              label: "Clients",

              barThickness: 26,
              data: Object.entries(apiInfo)
                .slice(0, 20)
                .map((con) => {
                  return Math.round(con[1].population / 10000);
                }),
              backgroundColor: Object.entries(apiInfo)
                .slice(0, 20)
                .map((con) => {
                  return getRandomColor();
                }),
              hoverBorderWidth: 10,
              borderWidth: 0,
            },
          ],
        });
    },[apiInfo])
  return (
    <div className="bar">
      <Bar
        data={dataSet}
        options={{
          responsive: true,
          title: {
            display: true,
            text:
              "New Clients of " +
              rgn[0] +
              "  +" +
              Math.round(Math.random() * 100),
            fontSize: 20,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  sampleSize: 0,
                  autoSkip: false,
                  maxRotation: 90,
                  minRotation: 90,
                },
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                },

                barPercentage: 1.0,
                maintainAspectRatio: chartRatio,
                categoryPercentage: 0.1,
              },
            ],
          },
          legend: {
            display: true,
            position: "right",
          },
          cutoutPercentage: 90,
        }}
      ></Bar>
    </div>
  );
};

export default Mychart;
