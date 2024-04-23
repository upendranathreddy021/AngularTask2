// import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts'
// @Component({
//   selector: 'app-charts',
//   templateUrl: './charts.component.html',
//   styleUrls: ['./charts.component.css']
// })
// export class ChartsComponent implements OnInit {
//   Highcharts:typeof Highcharts=Highcharts;
//   chartOptions:Highcharts.Options={
//     chart:{
//       plotBackgroundColor:null,
//       plotBorderWidth:null,
//       plotShadow:false,
//       type:'pie'
//     },
//     title:{
//       text:'Tasks Progress'
//     },
//     tooltip:{
//       pointFormat:'{series.name}:<b>{point.percentage:.1f}%</b>'
//     },
//     accessibility:{
//       point:{
//         valueSuffix:'%'
//       }
//     },
//     plotOptions:{
//       pie:{
//         allowPointSelect:true,
//         cursor:'pointer',
//         dataLabels:{
//           enabled:true,
//           format:'<b>{point.name}</b>:{point.percentage:.1f}%</b>'
//         }
//       }
//     },
//     // series:[{
//     //   name:"Percentage",colorByPoint:true,
//     //   data:[
//     //     {
//     //       name:'Completed',
//     //       y:61.41,
//     //       sliced:true,
//     //       selected:true
//     //     },
//     //     {
//     //       name:'Pending',
//     //       y:11.84
//     //     }
//     //   ]
//     //}]

   
//     series: [{
//       type: 'pie',  // Explicitly specify the chart type as 'pie'
//       name: 'Percentage',
//       data: [
//         { name: 'Value 1', y: 60 },
//         { name: 'Value 2', y: 40 }
//       ]
//     }]




//   }

//   constructor() { }

//   ngOnInit(): void {
//   }

// }








