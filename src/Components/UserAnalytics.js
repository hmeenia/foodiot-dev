import React, { Component } from 'react';
import '../App.css';
//var PieChart = require("react-chartjs-2").Pie;
// import 'bootstrap/dist/css/bootstrap.css';
import ReactSpeedometer from "react-d3-speedometer";

class UserAnalytics extends Component {
    constructor(props) {
        super(props);
        // this.state = {chartData : {
        //     labels: [
        //         'Dal',
        //         'Gobhi',
        //         'Chicken Lababdar'
        //     ],
        //     datasets: [{
        //         data: [300, 50, 100],
        //         backgroundColor: [
        //         '#FF6384',
        //         '#36A2EB',
        //         '#FFCE56'
        //         ],
        //         hoverBackgroundColor: [
        //         '#FF6384',
        //         '#36A2EB',
        //         '#FFCE56'
        //         ]
        //     }]
        // }}
        // this.state = {columns : [
        //     {
        //       key: 'itemName',
        //       name: 'Item Name',
        //       width: 300,
        //       resizable: true
        //     },
        //     {
        //       key: 'avgMeal',
        //       name: 'Average Meal',
        //       width: 300,
        //       resizable: true
        //     },
        //     {
        //         key: 'avgCalPerMeal',
        //         name: 'Average Calorie/meal(kcal)',
        //         width: 300,
        //         resizable: true
        //     },
        //     {
        //         key: 'suggestedCalPerMean',
        //         name: 'Adviced Calorie/meal (kcal)',
        //         width: 300,
        //         resizable: true
        //     }
        // ], rows: [{
        //     itemName: "Gobhi",
        //     avgMeal: "100gm",
        //     avgCalPerMeal: "500",
        //     suggestedCalPerMean: "350"
        // }]}        
    }

    componentWillMount () {
        // fetch("/getTopItemsData", (err, result) => {
        //     console.log(result);
        //     this.parseData(result);
        // })
    }

    // elementSelect = (elem) => {
    //     console.log(elem)
    // }
    // getRowAt = (index) => {
    //     if (index < 0 || index > this.getSize()) {
    //       return undefined;
    //     }
    
    //     return this.state.rows[index];
    //   };
    
    //   getSize = () => {
    //     return this.state.rows.length;
    // };            

    render() {
        // const { selectedOption } = this.state;

        return (
            // <div className="mrgn-left-30px">
            // <ReactDataGrid 
            // ref={ node => this.grid = node }
            // enableCellSelect={true}
            // columns={this.state.columns}
            // rowGetter={this.getRowAt}
            // rowsCount={this.getSize()}
            // rowHeight={50}
            // minHeight={600}
            // rowScrollTimeout={200}
            // minWidth={1300} /> </div>
            <div>
                <h1>Todays colorie tracker</h1>
                <ReactSpeedometer minValue={0} maxValue={100} value={70}/>
            </div>
        );
    }
}

export default UserAnalytics;
