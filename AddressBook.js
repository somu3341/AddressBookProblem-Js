//UC1
class Contact
{
  firstname ;
  lastname ;
  address;
  city;
  state;
  zip;
  phone;
  email;
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
  tostring()
  {
    return "Firstname = "+this.firstname +"\n"+"Lasttname = "+this.lastname +"\n"+"Address = "+this.address +"\n"+"City = "+this.city +"\n"+"State = "+this.state +"\n"+"ZipCode = "+this.zip +"\n"+"Phone Number = "+this.phone + "\n"+"Email = "+this.email;
  }
}
contact = new Contact("Soma","Shekar","KGF","RCB","RCB","343012","8987545565","somu@gmail.com");
console.log(contact.tostring());