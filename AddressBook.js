//UC1
class Contact
{
  constructor(  firstname ,lastname ,address,city,state, zip,phone,email)
  {
    this.firstname=firstname;
    this.lastname=lastname;
    this.address=address;
    this.city=city;
    this.state=state;
    this.zip=zip;
    this.phone=phone;
    this.email=email;
  }
  get firstname(){ return this._firstname}
  set firstname(firstname){
    let Name_Reg= RegExp('^[A-Z]{1}[a-z]{2,}');
    if(Name_Reg.test(firstname))
      this._firstname=firstname;
      else throw 'Name is Invalid';
  }
  get lastname(){ return this._lastname}
  set lastname(lastname){
    let Name_Reg= RegExp('^[A-Z]{1}[a-z]{2,}');
    if(Name_Reg.test(lastname))
      this._lastname=lastname;
      else throw 'Name is Invalid';
  }
  get address(){ return this._address}
  set address(address){
    let Add_Reg= RegExp('^[0-9A-Za-z]{4,}');
    if(Add_Reg.test(address))
      this._address=address;
      else throw 'Address is Invalid';
  }
  get city(){ return this._city}
  set city(city){
    let City_Reg= RegExp('^[0-9A-Za-z]{4,}');
    if(City_Reg.test(city))
      this._city=city;
      else throw 'City is Invalid';
  }
  get state(){ return this._state}
  set state(state){
    let State_Reg= RegExp('^[0-9A-Za-z]{4,}');
    if(State_Reg.test(state))
      this._state=state;
      else throw 'State is Invalid';
  }
  get zip(){ return this._zip}
  set zip(zip){
    let Zip_Reg= RegExp('^[0-9]{6,6}');
    if(Zip_Reg.test(zip))
      this._zip=zip;
      else throw 'Zip is Invalid';
  }
  get phone(){ return this._phone}
  set phone(phone){
    let Phone_Reg= RegExp('^[0-9]{10,10}');
    if(Phone_Reg.test(phone))
      this._phone=phone;
      else throw 'Phone is Invalid';
  }
  get email(){ return this._email}
  set email(email){
    let Email_Reg= RegExp('^[0-9a-zA-Z]+[.+-_]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}');
    if(Email_Reg.test(email))
      this._email=email;
      else throw 'email is Invalid';
  }
  tostring()
  {
    return "Firstname = "+this.firstname +"\n"+"Lasttname = "+this.lastname +"\n"+"Address = "+this.address +"\n"+"City = "+this.city +"\n"+"State = "+this.state +"\n"+"ZipCode = "+this.zip +"\n"+"Phone Number = "+this.phone + "\n"+"Email = "+this.email;
  }
}
let contactArray = new Array();
try{
    contact = new Contact("Soma","Shekar","KGFS","RCBFan","RCBFan","343012","8987545565","somu@gmail.com");
    //console.log(contact.tostring());
    contactArray.push(contact);
    contact = new Contact("Anil","Kumar","KOLar","RCBFan","RCBFan","343012","9887545565","anil@gmail.com");
    contactArray.push(contact);
    console.log(contactArray);
    Delete();
    function Edit() {
        let EditingName = "Soma";
        for (let item of contactArray) {
            if (item._firstname == EditingName) {
                item._firstname = "Raju";
            }
        }
        console.log("After Editing Contact----->");
        console.log(contactArray);
    }
    function Delete() {
        let DeleteName = "Soma";
        for (let item of contactArray) {
            if (item._firstname == DeleteName) {
                contactArray.splice(contactArray.indexOf(item), 1);
            }
        }
        console.log("After Deleting Contact----->");
        console.log(contactArray);
    }
    function GetCount()
    {
        const getContact = contactArray.reduce((total, next) => {

            total[next] = (total[next] || 0) + 1 ;
          
            return +total;
          }, {});
          console.log(getContact);
    }
}
catch(e)
{
    console.error(e);
}