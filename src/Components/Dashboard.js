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
                    quantity: "80Kg",
                },
                {
                    itemName: "Rice",
                    quantity: "100Kg",
                },
                {
                    itemName: "Chicken",
                    quantity: "50Kg",
                },
                {
                    itemName: "Roti",
                    quantity: "60Kg",
                }
            ]
        }       

    }

    componentWillMount(){
        var counter = 0
        setInterval( () => {
            this.setState(
                {
                    rows: [
                        {
                            itemName: "Dal",
                            quantity: (80 - counter*4) + "Kg",
                        },
                        {
                            itemName: "Rice",
                            quantity: (100 - counter*5) + "Kg",
                        },
                        {
                            itemName: "Chicken",
                            quantity: (50 - counter*2) + "Kg",
                        },
                        {
                            itemName: "Roti",
                            quantity: (60 - counter*2) + "Kg",
                        }
                    ]
                })
            counter++;
            this.state.rows.forEach( rowValue => {
                if(parseInt(rowValue.quantity) <= 46) {
                    alert(`${rowValue.itemName} is low on quantity, kidnly refill or prepare more`)
                }
            })
        } , 5000)
        
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