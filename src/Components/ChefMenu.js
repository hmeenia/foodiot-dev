import React, { Component } from 'react';
import '../App.css';

import Select from 'react-select';
import ReactDataGrid from 'react-data-grid';

class ChefMenu extends Component {
    constructor( props ) {
        super( props );
        
        this.options = [
            { value: 'Daal', qty_prep: '5.2 Kg', wst_sav: '0.4 Kg', label: 'Daal' },
            { value: 'Rice', qty_prep: '5.6 Kg', wst_sav: '1.2 Kg', label: 'Rice' },
            { value: 'Chicken', qty_prep: '15.5 Kg', wst_sav: '0 Kg', label: 'Chicken' },
            { value: 'Roti', qty_prep: '5 kg', wst_sav: '2.1 Kg',  label: 'Roti' },
        ];
        this.columns = [{
            key: 'item',
            name: 'Items'
        }, {
            key: 'qty_prep',
            name: 'Quantity to prepare'
        }, {
            key: 'wst_sav',
            name: 'Wastage Reduction'
        }];
        
        this.rows = []
        this.state = {
            selectedOption: null,
            rows: []
        }

        this.handleChange = this.handleChange.bind( this );
        this.rowGetter = this.rowGetter.bind( this );
    }

    componentWillMount () {
    }

    handleChange ( selectedOption ) {
        this.setState( { selectedOption } );
        console.log( selectedOption);
        let rows = [];
        for ( let i = 0; i < selectedOption.length; i++ ){
            rows.push( {
                item: selectedOption[i].value,
                qty_prep: selectedOption[i].qty_prep,
                wst_sav: selectedOption[i].wst_sav
            });
        }
        this.setState( { selectedOption, rows })
    }    

    rowGetter ( i ) {
        return this.state.rows[i];
    }

    render () {
        let Grid = () => {
            if ( this.state.rows.length ) {
                return <ReactDataGrid
                    columns={this.columns}
                    rowGetter={this.rowGetter}
                    rowsCount={this.state.rows.length}
                    minHeight={250} />
            }
            return null;
        };
        return (
            <div className="chefmenu">
                <h3>Select your menu items to prepare: </h3>
                <div style={{ width: '50%' }}>
                <Select
                    value={this.state.selectedOption}
                    isMulti={true}
                    onChange={this.handleChange}
                    options={this.options}
                    placeholder="Selecet Items..."
                    />
                </div>
                <div style={{ marginTop: '50px' }}>
                    {Grid()}  
                </div>    
            </div>
        );
    }
}

export default ChefMenu;
