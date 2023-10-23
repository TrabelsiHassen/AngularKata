import { Injectable } from '@angular/core';
import { PersonnalInfo } from './classes/personnal-info';
import { ProjectInfo } from './classes/project-info';

@Injectable({
  providedIn: 'root'
})
export class RecapServiceService {
  personalInfo?: PersonnalInfo;
  projectInfo?: ProjectInfo;
  constructor(
 
  ){}
}
