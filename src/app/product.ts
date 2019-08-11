export class Product
{
  id:string;
  name:string;
  price:string;
  description:string; 
  constructor(_name:string,_price:string,_description:string)
  {

   this.name=_name
   this.price=_price
   this.description=_description
  }
  setName(_name:string)
  {
   this.name=_name
  }
 
}