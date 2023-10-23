import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { PersonnalInfo } from '../classes/personnal-info';
import { RecapServiceService } from '../recap-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  constructor(private recapService: RecapServiceService,
              private router: Router){
   
  }
  page1Form = new FormGroup({
    civility : new FormControl('',Validators.required),
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required, Validators.email]),
    phoneNumber : new FormControl('',[Validators.required,Validators.pattern(/^\d{10}$/)])
  });
  onSubmit() {
    if(this.page1Form.valid)
    {
     this.recapService.personalInfo = (this.page1Form.value as PersonnalInfo);
     console.log(this.recapService.personalInfo);
     this.router.navigate(["page2"])
    }
  }
}
