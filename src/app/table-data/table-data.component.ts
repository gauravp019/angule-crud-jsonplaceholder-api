import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service'

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  sMet: any;
  deletedData: any;
  displayedColumns = ['id', 'name', 'email', 'actions'];

  constructor(private apidata: ApiDataService) {
    this.sMet = () => this.apidata.userdata;
  }

  ngOnInit() {
    console.log(this.apidata.userdata)
    if (this.apidata.userdata) {
      this.apidata.userdata
    } else {
      this.getData()
    }
    // this.deletepost(this.sMet.data)
  };

  getData() {
    this.apidata.getJson().subscribe(result => {
      // this.jsonData = result;
      this.apidata.userdata = result;

    }
    );
  };

  deletepost(data) {
    console.log(data)

    this.apidata.userdata.forEach((value, index) => {
      if (value == data) this.apidata.userdata.splice(index, 1);
      // this.jsonData = this.apidata.userdata;
      this.deletedData = this.apidata.userdata;
    });
    console.log(this.apidata.userdata)
  };

}
