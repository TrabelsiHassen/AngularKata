import { Component } from '@angular/core';
import { RecapServiceService } from '../recap-service.service';
import { PersonnalInfo } from '../classes/personnal-info';
import { ProjectInfo } from '../classes/project-info';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
  personalInfo?: PersonnalInfo;
  projectInfo?: ProjectInfo;
  show : boolean= false;
  civility = this.personalInfo?.civility;
constructor(private recapService:RecapServiceService){
  this.personalInfo= this.recapService.personalInfo;
  this.projectInfo= this.recapService.projectInfo;
}
costOfProject()
  { 
    if(this.projectInfo)
    return this.projectInfo.surfaceBien * 80;
  else return 0
  }
  EiffyAid() {
    if (this.projectInfo) {
      const costOfProject = this.projectInfo.surfaceBien * 80;
      const income = this.projectInfo.revenusFoyer;
      const numberOfPersons = this.projectInfo.nombrePersonnesFoyer;
  
      const aid = (costOfProject * 0.75) - (income / numberOfPersons) * 0.15;
      return Math.ceil(aid * 100) / 100;
    } else {
      return 0;
    }
  }
  
 eligibiliteMessage(){
  if (this.projectInfo?.proprietaire) {
    if (this.EiffyAid() > 0) {
      return  `Félicitations, vous êtes éligible à notre programme d'aides et d'accompagnement. Montant de l'aide Effy : ${this.EiffyAid} euros.`;
    } else {
      return  "Désolé, vous ne répondez pas aux critères d'éligibilité.";
    }
  } else {
    return  "Désolé, vous ne répondez pas aux critères d'éligibilité car vous n'êtes pas propriétaire.";
  }
 }
  
}
