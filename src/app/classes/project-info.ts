export class ProjectInfo {
    constructor(
        private _proprietaire: boolean,
        private _nombrePersonnesFoyer: number,
        private _revenusFoyer: number,
        private _surfaceBien: number

    
    ){}
   
    get proprietaire(): boolean{
        return this._proprietaire;
    }
 
    set proprietaire(proprietaire: boolean){
         this._proprietaire = proprietaire;
    }

    get nombrePersonnesFoyer(): number{
        return this._nombrePersonnesFoyer;
    }
 
    set nombrePersonnesFoyer(nombrePersonnesFoyer: number){
         this._nombrePersonnesFoyer = nombrePersonnesFoyer;
    }

    get revenusFoyer(): number{
        return this._revenusFoyer;
    }
 
    set revenusFoyer(revenusFoyer: number){
         this._revenusFoyer = revenusFoyer;
    }

    get surfaceBien(): number{
        return this._surfaceBien;
    }
 
    set surfaceBien(surfaceBien: number){
         this._surfaceBien = surfaceBien;
    }

}
