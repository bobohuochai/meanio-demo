import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'datatable',  // <home></home>
  templateUrl: './datatable.component.html'
})
export class DatatableComponent implements OnInit {
    public rows: any[];
    public columns: any[];
    public ngOnInit() {
        this.rows = [
            { name: 'Austin', gender: 'Male', company: 'Swimlane' },
            { name: 'Dany', gender: 'Male', company: 'KFC' },
            { name: 'Molly', gender: 'Female', company: 'Burger King' },
          ];
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
          ];
        this.rows[0]['gender'] = 'Female';
        // this.rows=[... this.rows];
    }

}
