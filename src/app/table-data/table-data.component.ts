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
  datasource: any = [];
  displayedColumns = ['id', 'name', 'email', 'companyname', 'city', 'actions'];

  constructor(private apidata: ApiDataService) {
  }

  ngOnInit() {
    console.log(this.apidata.userdata)
    if (this.apidata.userdata) {
      this.datasource = this.apidata.userdata
      this.apidata.alldata = this.datasource;
    } else {
      this.getData()
    }
  };

  getData() {
    this.apidata.getJson().subscribe(result => {
      // this.jsonData = result;
      this.apidata.userdata = result;
      this.datasource = result;

    }
    );
  };

  deletepost(data) {
    console.log(data)

    this.apidata.userdata.forEach((value, index) => {
      if (value == data) this.apidata.userdata.splice(index, 1);
      this.datasource = [...this.apidata.userdata];

    });
    console.log(this.apidata.userdata)
  };
  addpost(user) {


  }
}
