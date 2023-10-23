import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { RecapServiceService } from '../recap-service.service';
import { ProjectInfo } from '../classes/project-info';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  constructor(private recapService: RecapServiceService,
              private router: Router){}

  page2Form = new FormGroup({
    isOwner : new FormControl('owner',Validators.required),
    numberOfPerson : new FormControl(null,Validators.min(1)),
    income : new FormControl(null,[Validators.min(10000),Validators.max(100000)]),
    surface : new FormControl(null,Validators.min(1))
  });
  onSubmit() {
    if(this.page2Form.valid)
    {
      const isOwner = this.page2Form.value.isOwner === 'owner';
      const numberOfPerson = this.page2Form.value.numberOfPerson || 0;
      const income = this.page2Form.value.income || 0;
      const surface = this.page2Form.value.surface || 0;
  
      this.recapService.projectInfo = new ProjectInfo(isOwner, numberOfPerson, income, surface);
  
      //this.recapService.projectInfo = (this.page2Form.value as ProjectInfo);
      this.router.navigate(["page3"])
    }  
  }
}
