export class PersonnalInfo {
    constructor(
    private _civility: string,
    private _email: string,
    private _firstName: string,
    private _lastName: string,
    private _phoneNumber: string
    )
    {}
    get civility(): string{
        return this._civility;
    }
 
    set civility(civility: string){
         this._civility = civility;
    }

    get email(): string{
        return this._email;
    }
 
    set email(email: string){
         this._email = email;
    }
    get firstName(): string{
        return this._firstName;
    }
 
    set firstName(firstName: string){
         this._firstName = this.firstName;
    }
    get lastName(): string{
        return this._lastName;
    }
 
    set lastName(lastName: string){
         this._lastName = lastName;
    }

    get phoneNumber(): string{
        return this._phoneNumber;
    }
 
    set phoneNumber(phoneNumber: string){
         this._phoneNumber = phoneNumber;
    }
}
