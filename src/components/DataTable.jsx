import React, { Component } from 'react';
import data from '../jsonTableData/tableData';
import MUIDataTable from "mui-datatables";
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core'; 
import Button from "@material-ui/core/Button";



class Datatable extends React.Component {

    constructor(props){
        super(props);
        this.state={rowData:{},leftMargin:10,rightMargin:10};
        this.LeftmarginSet=this.LeftmarginSet.bind(this);
        this.RightMarginSet=this.RightMarginSet.bind(this);
        this.PrintData=this.PrintData.bind(this);
    }
    LeftmarginSet(val){
        this.setState({leftMargin:val})
    }
    RightMarginSet(val){
        this.setState({rightMargin:val})
    }

    PrintData(ev,val,rowData){
        // alert(rowdata);
        console.log({ev,rowData});
        this.setState({rowData:rowData});
    }

    render() {
        const columns = [
            {
                name: "Action",
                options: {
                  empty: true,
                  customBodyRender: (value, tableMeta, updateValue) =>
                      <Button variant="outlined" color="secondary" onClick={(e)=>this.PrintData(e,value,tableMeta.rowData)}>
                        {`Add`}
                      </Button>
                }
            },
            {
                name: "Items",
                options: {
                  hint: "?",
                  customBodyRender: val => {
                    let parentStyle = {
                      position: "absolute",
                      top: 0,
                      right: "2px",
                      bottom: 0,
                      left: "4px",
                      boxSizing: "border-box",
                      display: "block",
                      width: "100%"
                    };
                    let cellStyle = {
                      boxSizing: "border-box",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    };
                    return (
                      <div style={{ position: "relative", height: "20px" }}>
                        <div style={parentStyle}>
                          <div style={cellStyle}>{val}</div>
                        </div>
                      </div>
                    );
                  }
                }
            },
            {
                name: "Value",
                options: {
                    sort: true,
                    hint: "?",
                }
            }
            ];

        
        const options = {
            filter: true,
            filterType: "dropdown",
            selectableRows: "none",
            draggableColumns: {
                enabled: true
            },
            responsive: "standard",
            print:false,
            responsive: "scroll",
            // selectableRows: true,
            selectableRows: "none",
            };


        return (
            <React.Fragment>
                <FormControl>
                    <TextField
                        label="Left Margin"
                        type="number"
                        value={this.state.leftMargin}
                        onChange={e => this.LeftmarginSet(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <TextField
                        label="Right Margin"
                        type="number"
                        value={this.state.rightMargin}
                        onChange={e => this.RightMarginSet(e.target.value)}
                    />
                </FormControl>
                <div style={{ marginLeft: this.state.leftMargin + "px" , marginRight: this.state.rightMargin + "px" }}>
                    <MUIDataTable
                        title={"Mudidar Data"}
                        data={data}
                        options={options}
                        columns={columns}
                    />
                </div>
            </React.Fragment>
    );
  }
}
  

export default Datatable
