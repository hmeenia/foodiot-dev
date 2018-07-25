import React, { Component } from 'react';
import '../App.css';
import ReactDataGrid from 'react-data-grid'
//var PieChart = require("react-chartjs-2").Pie;
// import 'bootstrap/dist/css/bootstrap.css';
import ReactSpeedometer from "react-d3-speedometer";

class UserAnalytics extends Component {
    constructor(props) {
        super(props);
        this.state = {chartData : {
            labels: [
                'Dal',
                'Gobhi',
                'Chicken Lababdar'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        }}
        this.state = {columns : [
            {
              key: 'itemName',
              name: 'Dish',
              width: 300,
              resizable: true
            },
            {
              key: 'avgMeal',
              name: 'Portion (gms)',
              width: 300,
              resizable: true
            },
            {
                key: 'suggestion',
                name: 'Fit Tip' ,
                width: 400,
                resizable: true
            }
        ], rows: [{
            itemName: "Gobhi",
            avgMeal: "100",
            suggestion: "High carb. 20% less than an fit person"
        },
        {
            itemName: "Rice",
            avgMeal: "200",
            suggestion: "High carb. 34% greater than an fit person"
        },
        {
            itemName: "Yellow Dal",
            avgMeal: "100",
            suggestion: "High protein. 10% more than an fit person"
        }]}        
    }

    componentWillMount () {
        fetch("/getTopItemsData", (err, result) => {
            console.log(result);
            this.parseData(result);
        })
    }

    parseData () {
        //
    }

    elementSelect = (elem) => {
        console.log(elem)
    }
    getRowAt = (index) => {
        if (index < 0 || index > this.getSize()) {
          return undefined;
        }
    
        return this.state.rows[index];
      };
    
      getSize = () => {
        return this.state.rows.length;
    };            

    render() {
        return (
            <div>
                <h1>Todays colorie tracker</h1>
                <ReactSpeedometer width={500} currentValueText="${value}% of Required Daily Average (700/1000kcal)"
 minValue={0} maxValue={100} value={70}/>
                <h1> Last meal analysis
                </h1>
             <ReactDataGrid 
                ref={ node => this.grid = node }
                enableCellSelect={true}
                columns={this.state.columns}
                rowGetter={this.getRowAt}
                rowsCount={this.getSize()}
                rowHeight={50}
                rowScrollTimeout={200}
                minWidth={1000} /> 
            </div>
        );
    }
}

export default UserAnalytics;
