import { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

const ws = new WebSocket('ws://localhost:3001/MAX30102');

const ROOT_PATH = 'https://echarts.apache.org/examples';
const animationDuration = 1000;
const animationDurationUpdate = 1000;
const animationEasingUpdate = 'quarticInOut';
const valOnRadianMax = 200;
const outerRadius = 70;
const innerRadius = 40;
const pointerInnerRadius = 100;
const insidePanelRadius = 50;

function OxygenationChart() {
  const chartRef = useRef(null);
  const [oxygenation, setOxygenation] = useState(0);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    function updateChart(newOxygenation) {
      setOxygenation(newOxygenation);

      const option = {
        series: [
          {
            data: [1, newOxygenation],
            animationEasing: animationEasingUpdate,
            animationDurationUpdate,
            style: {
              color: 'rgba(0, 136, 34, 1)', 
              fill: 'rgba(0, 136, 34, 1)',
            }
          }
        ]
      };

      myChart.setOption(option);
    }

    ws.onmessage = (event) => {
      const newOxygenation = parseInt(event.data, 10);
      updateChart(newOxygenation);
    };

    function renderItem(params, api) {
      var valOnRadian = api.value(1);
      var coords = api.coord([api.value(0), valOnRadian]);
      var polarEndRadian = coords[3];
      var imageStyle = {
        image: ROOT_PATH + '/data/asset/img/custom-gauge-panel.png',
        x: params.coordSys.cx - outerRadius,
        y: params.coordSys.cy - outerRadius,
        width: outerRadius * 2,
        height: outerRadius * 2
      };
      return {
        type: 'group',
        children: [
          {
            type: 'image',
            style: imageStyle,
            clipPath: {
              type: 'sector',
              shape: {
                cx: params.coordSys.cx,
                cy: params.coordSys.cy,
                r: outerRadius,
                r0: innerRadius,
                startAngle: 0,
                endAngle: -polarEndRadian,
                transition: 'endAngle',
                enterFrom: { endAngle: 0 }
              }
            }
          },
          {
            type: 'image',
            style: imageStyle,
            clipPath: {
              type: 'polygon',
              shape: {
                points: makePionterPoints(params, polarEndRadian)
              },
              extra: {
                polarEndRadian: polarEndRadian,
                transition: 'polarEndRadian',
                enterFrom: { polarEndRadian: 0 }
              },
              during: function (apiDuring) {
                apiDuring.setShape(
                  'points',
                  makePionterPoints(params, apiDuring.getExtra('polarEndRadian'))
                );
              }
            }
          },
          {
            type: 'circle',
            shape: {
              cx: params.coordSys.cx,
              cy: params.coordSys.cy,
              r: insidePanelRadius
            },
            style: {
              fill: '#fff',
              shadowBlur: 25,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: 'rgba(0, 136, 34, 1)'
            }
          },
          {
            type: 'text',
            extra: {
              valOnRadian: valOnRadian,
              transition: 'valOnRadian',
              enterFrom: { valOnRadian: 0 }
            },
            style: {
              text: makeText(valOnRadian),
              fontSize: 25,
              fontWeight: 700,
              x: params.coordSys.cx,
              y: params.coordSys.cy,
              fill: 'rgba(0, 136, 34, 1)',
              align: 'center',
              verticalAlign: 'middle',
              enterFrom: { opacity: 0 }
            },
            during: function (apiDuring) {
              apiDuring.setStyle(
                'text',
                makeText(apiDuring.getExtra('valOnRadian'))
              );
            }
          },
          {
            type: 'text',
            style: {
              text: 'SpO2',
              fontSize: 12,
              fontWeight: 400,
              x: params.coordSys.cx,
              y: params.coordSys.cy + innerRadius - 5,
              fill: 'rgba(0, 136, 34, 1)',
              align: 'center',
              verticalAlign: 'top'
            }
          }
        ]
      };
    }

    function convertToPolarPoint(renderItemParams, radius, radian) {
      return [
        Math.cos(radian) * radius + renderItemParams.coordSys.cx,
        -Math.sin(radian) * radius + renderItemParams.coordSys.cy
      ];
    }

    function makePionterPoints(renderItemParams, polarEndRadian) {
      return [
        convertToPolarPoint(renderItemParams, outerRadius, polarEndRadian),
        convertToPolarPoint(
          renderItemParams,
          outerRadius,
          polarEndRadian + Math.PI * 0.03
        ),
        convertToPolarPoint(renderItemParams, pointerInnerRadius, polarEndRadian)
      ];
    }

    function makeText(valOnRadian) {
      if (valOnRadian < -10) {
        alert('illegal during val: ' + valOnRadian);
      }
      return Math.round(valOnRadian).toString();
    }

    const option = {
      animationEasing: animationEasingUpdate,
      animationDuration,
      animationDurationUpdate,
      animationEasingUpdate,
      dataset: {
        source: [[1, oxygenation]]
      },
      tooltip: {},
      angleAxis: {
        type: 'value',
        startAngle: 0,
        show: false,
        min: 0,
        max: valOnRadianMax
      },
      radiusAxis: {
        type: 'value',
        show: false
      },
      polar: {},
      series: [
        {
          type: 'custom',
          coordinateSystem: 'polar',
          renderItem: renderItem,
          color: 'rgba(0, 136, 34, 1)'
        }
      ]
    };

    option && myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [oxygenation]);

  return <div ref={chartRef} style={{ width: '100%', height: '500px' }} />;
}

export default OxygenationChart;
