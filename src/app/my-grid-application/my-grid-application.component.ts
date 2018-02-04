import {Component} from "@angular/core";
import { Http } from '@angular/http';
import {RedComponentComponent} from "../red-component/red-component.component";

import {GridOptions} from "ag-grid/main";
import { HttpService } from "../shared/services/http.service";
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent {
    gridOptions: GridOptions;
    columnDefs: any[] = [];
    rowData: any[];
    private gridApi;
    private customCols = [];


    constructor(private _http: HttpService) {
        this.gridOptions = <GridOptions>{};
    }

    ngOnInit(){
        this._http.getJSON().subscribe(
            data => {
                    //for headers row
                    for (var key in data[0]) {
                        if (this.customCols.indexOf(key) === -1) {
                            this.customCols.push({headerName : data[0][key], field : key});
                        }
                    }
                    this.columnDefs = this.customCols;

                    //for other than header rows -> removed first object from the json, as it was used for header only.
                    this.rowData = data.slice(1)
            }
        );
    }

    onGridReady(params) {
            this.gridApi = params.api;
            this.gridApi.sizeColumnsToFit();
        
    }

    selectAllRows() {
        this.gridOptions.api.selectAll();
    }

    sizeToFit() {
        this.gridApi.sizeColumnsToFit();
      }
    
}

