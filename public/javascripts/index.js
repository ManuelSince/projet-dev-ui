 import Utils from './utils.js';

// import Chart from 'chart.js/auto';
// import {getRelative} from 'chart.js/helpers';

  const u = new Utils()
  u.getByid('signin').addEventListener('click', () => {
    console.log('signing in')
  })
  //--------------------------------------chart type bar --------------------------

  // const { getRelativePosition } = getRelative

  const ctx = u.getByid('graph1')
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];
  console.log(data)

  new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        borderColor: '#36A2EB',
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count),
            backgroundColor: '#FFB1C1'
          }
        ]
      }
    }
  );

