import { Component, OnInit } from '@angular/core';
import { Column, GridOption, Formatters } from 'angular-slickgrid';

const NB_ITEMS = 995;
const defaultPageSize = 20;

@Component({
  selector: 'app-gridDemo',
  templateUrl: './gridDemo.component.html',
  styleUrls: ['./gridDemo.component.css']
})
export class GridDemoComponent implements OnInit {

  columnDefinitions1: Column[];
  columnDefinitions2: Column[];
  gridOptions1: GridOption;
  gridOptions2: GridOption;
  dataset1: any[];
  dataset2: any[];
  title = 'angular-slickgrid';

  constructor() { }

  ngOnInit() {
    // this.columnDefinitions1 = [
    //   { id: 'title', name: 'Title', field: 'title', sortable: true },
    //   { id: 'duration', name: 'Duration (days)', field: 'duration', sortable: true },
    //   { id: '%', name: '% Complete', field: 'percentComplete', sortable: true },
    //   { id: 'start', name: 'Start', field: 'start', formatter: Formatters.dateIso },
    //   { id: 'finish', name: 'Finish', field: 'finish', formatter: Formatters.dateIso },
    //   { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', sortable: true }
    // ];
    this.columnDefinitions1 = [
      { id: 'title', name: 'Title', field: 'title', sortable: true,excludeFromHeaderMenu: true },
      { id: 'duration', name: 'Duration (days)', field: 'duration', sortable: true,excludeFromHeaderMenu: true },
      { id: '%', name: '% Complete', field: 'percentComplete', sortable: true,excludeFromHeaderMenu: true },
      { id: 'start', name: 'Start', field: 'start', formatter: Formatters.dateIso,excludeFromHeaderMenu: true },
      { id: 'finish', name: 'Finish', field: 'finish', formatter: Formatters.dateIso,excludeFromHeaderMenu: true },
      { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', sortable: true,excludeFromHeaderMenu: true }
    ];
    this.gridOptions1 = {
      enableAutoResize: false,
      enableSorting: true,
      enableExcelExport:false,
      enableHeaderButton:false,
      enableGridMenu: false,
      // autoResize: {
      //   containerId: 'demo-container',
      //   sidePadding: 10
      // },
      // enableCellNavigation: true,
      // enableColumnReorder: false,
      // multiColumnSort: false
      enablePagination: true, // you could optionally disable the Pagination
      pagination: {
        // pageNumber: 5,
        pageSizes: [10, 15, 20, 25, 30, 40, 50, 75, 100],
        pageSize: defaultPageSize,
        totalItems: 0
      },
    };

    // copy the same Grid Options and Column Definitions to 2nd grid
    // but also add Pagination in this grid
    // this.columnDefinitions2 = this.columnDefinitions1;
    // this.gridOptions2 = {
    //   ...this.gridOptions1,
    //   ...{
    //     enablePagination: true,
    //     pagination: {
    //       pageSizes: [5, 10, 20, 25, 50],
    //       pageSize: 5
    //     },
    //   }
    // };

    // mock some data (different in each dataset)
    this.dataset1 = this.mockData(NB_ITEMS);
    // this.dataset2 = this.mockData(NB_ITEMS);
  }

  mockData(count: number) {
    // mock a dataset
    const mockDataset = [];
    for (let i = 0; i < count; i++) {
      const randomYear = 2000 + Math.floor(Math.random() * 10);
      const randomMonth = Math.floor(Math.random() * 11);
      const randomDay = Math.floor((Math.random() * 29));
      const randomPercent = Math.round(Math.random() * 100);

      mockDataset[i] = {
        id: i,
        title: 'Task ' + i,
        duration: Math.round(Math.random() * 100) + '',
        percentComplete: randomPercent,
        start: new Date(randomYear, randomMonth + 1, randomDay),
        finish: new Date(randomYear + 1, randomMonth + 1, randomDay),
        effortDriven: (i % 5 === 0)
      };
    }

    return mockDataset;
  }
}
