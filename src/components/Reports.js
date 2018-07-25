import React, { Component } from 'react';
import '../styles/Reports.css';
    
class Reports extends Component {
    render () {
        return (
            <div class="table">
                <div class="table-row table-header">
                    <div class="table-row-item">Header1</div>
                    <div class="table-row-item">Header2</div>
                    <div class="table-row-item">Header3</div>
                    <div class="table-row-item">Header4</div>
                </div>
                <div class="table-row">
                    <div class="table-row-item" data-header="Header1">row1 col1</div>
                    <div class="table-row-item" data-header="Header2">row1 col2</div>
                    <div class="table-row-item" data-header="Header3">row1 col3</div>
                    <div class="table-row-item" data-header="Header4">row1 col4</div>
                </div>
                <div class="table-row">
                    <div class="table-row-item" data-header="Header1">row2 col1</div>
                    <div class="table-row-item" data-header="Header2">row2 col2</div>
                    <div class="table-row-item" data-header="Header3">row2 col3</div>
                    <div class="table-row-item" data-header="Header4">row2 col4</div>
                </div>
            </div>
        );
    }
}

export default Reports;
