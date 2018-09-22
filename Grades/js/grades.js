var gradesdata = {
    labels: ["高一上期末","高一下开学", "高一下期中", "高一下期末", "高二上开学","高二上月考","高二上期中","高二上期末","高二下期末", "一模","二模","三模","高考"],
    datasets: [
        {
            label: "Grades",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 3,
            pointRadius: 3,
            pointHitRadius: 10,
            data: [640,652, 616, 642, 609.5, 647.5,605,618,635.5,584,638,647,628],
            spanGaps: true,
			
        },
    ]
};

function tabgradesclk(){
	var myLineChart = new Chart(document.getElementById("myChart"), {
    type: 'line',
    data: gradesdata,
    options: {
	title:{
	 text:"My grades in senior high school",
	 display:true},
	 
	}
});
}
function tabCollegeclk(){
	
}
this.onload=tabgradesclk();
