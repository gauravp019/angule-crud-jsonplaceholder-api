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
  randomid: any = [];
  alluser: any;

  public myForm = new FormGroup({});
  constructor(private router: Router, private apidata: ApiDataService, private route: ActivatedRoute) {
    this.iMet = this.apidata.userdata;

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
    console.log(this.apidata.userdata)

    if (this.apidata.userdata) {
      var obj = this.apidata.userdata.find((o: any) => o.id == Number(this.id));
      if (this.id) {
        console.log(obj)
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
      };
    }
    else {
      this.apidata.getJson().subscribe(r => {
        this.apidata.userdata = r;
        var obj = this.apidata.userdata.find((o: any) => o.id == Number(this.id));
        if (this.id) {
          console.log(obj)
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
        };
      })
    }



    console.log(this.apidata.userdata)
  }

  updatePost(user) {
    let random = {
      id: this.myForm.value.id,
      name: this.myForm.value.name,
      email: this.myForm.value.email,
      username: this.myForm.value.username,
      phone: this.myForm.value.phone,
      company: { name: this.myForm.value.companyname },
      address: { city: this.citys }
    }
    this.randomid = Math.floor(Math.random() * 101);
    let newuser = {
      id: this.randomid,
      name: this.myForm.value.name,
      email: this.myForm.value.email,
      username: this.myForm.value.username,
      phone: this.myForm.value.phone,
      company: { name: this.myForm.value.companyname },
      address: { city: this.citys }
    }
    if (this.id == this.myForm.value.id) {
      console.log(this.apidata.userdata)
      let index: any = this.apidata.userdata.findIndex(x => x.id == this.id);
      this.apidata.userdata[index] = random;
      console.log('update')
      this.router.navigate(['/home']);
    }
    else {
      random = newuser
      this.apidata.userdata.unshift(random)
      console.log('add')
      console.log(this.apidata.userdata)
      this.router.navigate(['/home']);

    }
    console.log(this.apidata.userdata)
  }
}
