import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DataService } from '../service/data.service';
import Tabulator from 'tabulator-tables';
import { TodoData } from '../models/todo.model';
import { columns } from '../models/utilities.model';

@Directive({
  selector: '[appTable]'
})
export class TableDirective implements OnInit{
  importedData: TodoData[] = []; // Array Data - JSON
  importedHeadersColumns: any[] = columns; // Array columns headers names
  heightTable: string = "100%";

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private dataService: DataService // Data service from Placeholder TODO's
  ) { }

  ngOnInit() {
    const div = this.renderer.createElement('div');
    const title = this.renderer.createText('Sample Table from Directive');
    this.renderer.appendChild(div,title); // Create Table title
    this.getTodos(); // Build table and with data
  }

  getTodos() {
    this.dataService.getData() // get Data from Services
      .subscribe(
        (response: TodoData[]) => {
          console.log('Load Data Successful');
          console.log(response);
          this.importedData = response.body;
          this.drawTable(); // write Tabulator table
        }
      )
  }

  drawTable() { // Tabulator function table
    const tab = this.renderer.createElement('div');
    new Tabulator(tab, {
      data: this.importedData,
      dataTree: true,
      columns: this.importedHeadersColumns,
      layout: 'fitData',
      height: this.heightTable,
      placeholder: 'No Data Available...',
      pagination: 'local',
      paginationSize: 5,
    });
    this.renderer.appendChild(this.el.nativeElement,tab);
  }

}
