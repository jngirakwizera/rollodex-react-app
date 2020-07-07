import React, {Component} from 'react';


class Rollodex extends Component {
  constructor(props) {
    super(props);
    
}

    

    

    render() {

        let data = this.props.data;
        let name = this.props.data.name;
        let firstname = name.first;
        let lastname = name.last;
        let pic = this.props.data.picture;
        let gender = data.gender;
        let dob = data.dob;
        let date = dob.date;
        let age = dob.age;
        let phone = data.phone;
        let cell = data.cell;
        let email = data.email;
        let location = data.location;
        let street = location.street;
        let number = street.number;
        let streetname = street.name;
        let city = location.city;
        let state = location.state;
        let country = location.country;
        let postcode = location.postcode
        
      return (
        <div>
            <div>
              <img src={pic.medium} alt="img"/>
              <div>Name- {firstname} {lastname}</div>
              <div>Gender- {gender}</div>
              <div>DOB- {date}</div>
              <div>Age- {age}</div>
              <div>Phone- {phone}</div>
              <div>Cell- {cell}</div>
              <div>Email- {email}</div>
              <div>Address- {number} {streetname}</div>
            <div>Postcode- {postcode}</div>
            <div>City- {city} State- {state}</div>
            <div>State- {state}</div>
            <div>Country- {country}</div>
            </div>
            


       <hr></hr>
        </div>
            
      )
    }
  }

export default Rollodex;
