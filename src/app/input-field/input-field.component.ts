import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiDataService } from '../api-data.service'
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  citys: any;
  id: string;
  iMet: any;
  public myForm = new FormGroup({});
  constructor(private router: Router, private apidata: ApiDataService, private route: ActivatedRoute) {
    this.iMet = () => this.apidata.userdata;
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      id: new FormControl(''),
      username: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      companyname: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl('')
    });

    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.apidata.previousdata())
    this.apidata.getJson().subscribe(result => {
      this.apidata.userdata = result;
      var obj = this.apidata.userdata.find((o: any) => o.id === Number(this.id));
      console.log(obj)
      if (obj) {
        if (obj.id = this.id) {
          this.myForm.patchValue({
            id: obj.id,
            username: obj.username,
            name: obj.name,
            email: obj.email,
            companyname: obj.company.name,
            phone: obj.phone,
            city: obj.address.city
          });
          this.citys = obj.address.city;
        }
      }
    });


  }

  updatePost() {
    // console.log(this.myForm.value.id)
    var random = {
      id: this.myForm.value.id,
      name: this.myForm.value.name,
      email: this.myForm.value.email,
      username: this.myForm.value.username,
      phone: this.myForm.value.phone,
      company: { name: this.myForm.value.companyname },
      address: { city: this.citys }
    }

    if (this.id == this.myForm.value.id) {
      let index: any = this.apidata.userdata.findIndex(x => x.id === this.id);
      this.apidata.userdata[index] = random;
      this.router.navigate(['/home']);
    }
    console.log(this.myForm.value)
    console.log(this.apidata.userdata)
  }
}
