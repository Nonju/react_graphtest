const defBackgroundColor = [
'rgba(255, 99, 132, 0.2)',
'rgba(54, 162, 235, 0.2)',
'rgba(255, 206, 86, 0.2)',
'rgba(75, 192, 192, 0.2)',
'rgba(153, 102, 255, 0.2)',
'rgba(255, 159, 64, 0.2)'
];

const defBorderColor = [
  'rgba(255,99,132,1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)'
];

const barData = {
  type: 'bar',
  data: {
    labels: ["Red", "Blue", "Yellow", "Banana", "Purple", "Orange"],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [...defBackgroundColor],
        borderColor: [...defBorderColor],
        borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero:true
          }
      }]
    }
  }
};

const pieData = {
  type: 'pie',
  data: {
    labels: ['Apple: 10', 'Pear: 20', 'Banana: 30'],
    datasets: [{
      data: [10,20,30],
      backgroundColor: [...defBackgroundColor],
      borderColor: [...defBorderColor]
    }]
  },
  options: {

  }
};

export {barData, pieData};