var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	backgroundColor: "#F7F9FB",
	// title:{
	// 	text: "Site Traffic"
	// },
	axisX:{
		valueFormatString: "MMM",
		crosshair: {
			enabled: true,
			snapToDataPoint: true,
		}
	},
	axisY: {
        suffix: 'k',
		// title: "Number of Visits",
		includeZero: true,
		gridThickness: 0,
		stripLines: [
			{
				value: 0,
				showOnTop: true,
				color: "gray",
				thickness: 2
			}
		],
		crosshair: {
			enabled: true
		},
	},
	toolTip:{
		shared:true,
        cornerRadius: 20
	},  
	legend:{
		verticalAlign: "top",
		horizontalAlign: "right",
		dockInsidePlotArea: false,
	},
	data: [{
		type: "spline",
		showInLegend: false,
		name: "This year",
		legendMarkerType: "circle",
		markerType: "none",
		xValueFormatString: "MMM",
		color: "#1C1C1C70",
		dataPoints: [
			{ x: new Date(2017, 0, 3), y: 10 },
			{ x: new Date(2017, 1, 4), y: 11 },
			{ x: new Date(2017, 2, 5), y: 9 },
			{ x: new Date(2017, 3, 6), y: 23 },
			{ x: new Date(2017, 4, 7), y: 25 },
			{ x: new Date(2017, 5, 8), y: 12 },
			{ x: new Date(2017, 6, 9), y: 13 },
			{ x: new Date(2017, 7, 10), y: 13 },
			{ x: new Date(2017, 8, 11), y: 22 },
			{ x: new Date(2017, 9, 12), y: 11 },
			{ x: new Date(2017, 10, 13), y: 1 },
			{ x: new Date(2017, 11, 14), y: 21 },
			{ x: new Date(2017, 12, 15), y: 22 }
		]
	},
	{
		type: "spline",
		showInLegend: false,
        markerType: "none",
		legendMarkerType: "circle",
		name: "Last year",
		lineDashType: "dash",
		color: "#A8C5DA",
		dataPoints: [
			{ x: new Date(2017, 0, 3), y: 22 },
			{ x: new Date(2017, 1, 4), y: 23 },
			{ x: new Date(2017, 2, 5), y: 24 },
			{ x: new Date(2017, 3, 6), y: 25 },
			{ x: new Date(2017, 4, 7), y: 26 },
			{ x: new Date(2017, 5, 8), y: 1 },
			{ x: new Date(2017, 6, 9), y: 12 },
			{ x: new Date(2017, 7, 10), y: 11 },
			{ x: new Date(2017, 8, 11), y: 13 },
			{ x: new Date(2017, 9, 12), y: 13 },
			{ x: new Date(2017, 10, 13), y: 25 },
			{ x: new Date(2017, 11, 14), y: 25 },
			{ x: new Date(2017, 12, 15), y: 25 }
		]
	}]
});
chart.render();


var barChart = new CanvasJS.Chart("barchartContainer", {
	animationEnabled: true,
	theme: "light2",
	backgroundColor: "#F7F9FB",
	axisX:{
		crosshair: {
			enabled: true,
			snapToDataPoint: true,
		}
	},
	axisY: {
        suffix: 'k',
		includeZero: true,
		gridThickness: 0,
		stripLines: [
			{
				value: 0,
				showOnTop: true,
				color: "gray",
				thickness: 2
			}
		],
		crosshair: {
			enabled: true
		},
	},
	toolTip:{
		shared:true,
        cornerRadius: 20
	},  
	legend:{
		verticalAlign: "top",
		horizontalAlign: "right",
		dockInsidePlotArea: false,
	},
	data: [{
		type: "column",
		showInLegend: false,
		name: "Traffic by Device",
		legendMarkerType: "circle",
		markerType: "none",
		dataPoints: [      
			{ y: 5, label: "Linux",  },
			{ y: 10,  label: "Mac" },
			{ y: 25,  label: "iOS" },
			{ y: 20,  label: "Windows" },
			{ y: 11,  label: "Android" },
			{ y: 4, label: "Other" }
		]
	}]
});
barChart.render();

var piechart = new CanvasJS.Chart("piechartContainer", {
	animationEnabled: true,
	backgroundColor: "#F7F9FB",
	title:{
		horizontalAlign: "left"
	},
	data: [{
		type: "doughnut",
		startAngle: 60,
		indexLabelFontSize: 17,
		indexLabel: " ",
		toolTipContent: "<b>{label}:</b> (#percent%)",
      	 indexLabelPlacement: "inside",
		dataPoints: [
			{ y: 22 ,label: "India"},
			{ y: 22, label: "Canada"},
			{ y: 10 , label: "Mexico"},
			{ y: 7, label: "Other"}
		]
	}]
});
piechart.render();