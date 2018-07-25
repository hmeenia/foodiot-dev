import React, { Component } from 'react';
const ReactDataGrid = require('react-data-grid')

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns : [
                {
                    key: 'itemName',
                    name: 'Item Name',
                    width: 300,
                    resizable: true
                },
                {
                    key: 'quantity',
                    name: 'Remaining Quantity',
                    width: 300,
                    resizable: true
                }
            ], rows: [
                {
                    itemName: "Dal",
                    quantity: "50Kg",
                },
                {
                    itemName: "Rice",
                    quantity: "33Kg",
                },
                {
                    itemName: "Chicken",
                    quantity: "02Kg",
                },
                {
                    itemName: "Roti",
                    quantity: "40Kg",
                }
            ]
        }       

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

    render () {

        return (
            <div>
               <ReactDataGrid 
                    ref={ node => this.grid = node }
                    enableCellSelect={true}
                    columns={this.state.columns}
                    rowGetter={this.getRowAt}
                    rowsCount={this.getSize()}
                    rowHeight={50}
                    minHeight={600}
                    rowScrollTimeout={200}
                    minWidth={600} />
            </div>
        );
    }
}

export default Dashboard;