/* eslint-disable array-callback-return */
import React, { Component } from "react";
import "./App.css";
import Modal from "./component/modal";
// import {
//   validateName,
//   validateAddress,
//   validateMobile,
//   validateCity,
//   validateStates,
//   validateZip,
// } from "./component/validation";

class Home extends Component {
  show_personal = true;
  show = false;
  personal = [
    {
      name: "Sample",
      mobile: "1234567890",
      addrss: "a a a",
      city: "Chennai",
      states: "Tamil Nadu",
      zip: "123456",
      type: "Present",
    },
  ];
  business = [
    {
      name: "cool",
      mobile: "1234567890",
      addrss: "a a a",
      city: "Chennai",
      states: "Tamil Nadu",
      zip: "123456",
      type: "Present",
    },
  ];
  state = {
    checked: "",
    show: false,
    show_personal: true,
    name: "",
    mobile: "",
    addrs: "",
    city: "",
    states: "",
    type: "",
    zip: "",
    name_error: "",
    mobile_error: "",
    addrs_error: "",
    city_error: "",
    states_error: "",
    zip_error: "",
    personal: [
      {
        name: "Sample",
        mobile: "1234567890",
        addrss: "a a a",
        city: "Chennai",
        states: "Tamil Nadu",
        zip: "123456",
        type: "Present",
      },
    ],
    business: [
      {
        name: "cool",
        mobile: "1234567890",
        addrss: "a a a",
        city: "Chennai",
        states: "Tamil Nadu",
        zip: "123456",
        type: "Present",
      },
    ],
  };
  componentDidMount = () => {
    this.handleBorder();
  };

  onClose = () => {
    //write code for Modal close
  };

  handleChange = (e) => {
    //write code to handle onchange event for input fields
  };

  handleSave = () => {
    //write code for saving data into personal or business
  };

  handleClear = () => {
    //write code for clearning input fields
  };

  handleBorder = () => {
    this.setState({
      borderBottom1: "hidden",
      borderBottom: "3px solid rgb(71, 68, 206)",
      show_personal: true,
    });
  };

  handleBorder1 = () => {
    this.setState({
      borderBottom: "hidden",
      borderBottom1: "3px solid rgb(71, 68, 206)",
      show_personal: false,
    });
  };

  showPersonal = () => {
    this.setState((state) => {
      return { ...state, show_personal: true };
    });
  };

  showBusiness = (event) => {
    this.setState({ show_personal: false });
  };

  updateShow() {
    this.setState((state) => {
      return { show: true };
    });
  }
  add = () => {
    this.setState({
      show: true
    });
  };
  showModal = () => {
    this.updateShow();
    this.setState((state) => {
      return { ...state, show: true };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Address Book</h2>
        </div>

        <button onClick={this.add} className="add" type="button">
          ADD
        </button>

        <div>
          <Modal>
            {console.log(this.show)}
            {this.show && (
              <div className="bg">
                <div className="pop">
                  <h3>Fill Address Details</h3>
                  <div className="close"></div>
                  <div className="radio">
                    <input type="radio" value="personal" name="personal" />
                    <label htmlFor="personal">Personal</label>
                    <input type="radio" value="business" name="personal" />
                    <label htmlFor="business">Business</label>
                  </div>
                  <div className="fields">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" />

                    <label htmlFor="mobile">Mobile No.</label>
                    <input className="fields" name="mobile" type="tel" />

                    <label htmlFor="addrs">address</label>
                    <input className="fields" name="addrs" type="textarea" />

                    <label htmlFor="city">City</label>
                    <input name="city" type="text" />

                    <label htmlFor="states">State</label>
                    <input name="states" type="text" />

                    <label htmlFor="zip">Postal Code/Zip Code</label>
                    <input name="zip" type="text" />
                  </div>
                  <div className="radio">
                    <input type="radio" value="Present" name="both" />
                    <label htmlFor="personal">Present</label>
                    <input type="radio" value="Permanent" name="both" />
                    <label htmlFor="business">Permanent</label>
                    <input type="radio" value="Both" name="both" />
                    <label htmlFor="business">Both</label>
                  </div>
                  <div className="btns">
                    <button type="submit" className="save">
                      Save
                    </button>
                    <button type="button" className="clear">
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Modal>
        </div>

        <table>
          <tbody>
            <tr>
              <th className="buttons" onClick={this.showPersonal}>
                Personal
              </th>
              <th className="buttons" onClick={this.showBusiness}>
                Business
              </th>
            </tr>
            <tr>
              <td>Name</td>
              <td>Moblie No.</td>
              <td>Address</td>
              <td>City</td>
              <td>State</td>
              <td>Zip</td>
              <td>Pesent/Perment Address</td>
            </tr>

            {this.show_personal &&
              this.personal.map((obj) => {
                return (
                  <tr key={obj.mobile}>
                    <td>{obj.name}</td>
                    <td>{obj.mobile}</td>
                    <td>{obj.addrss}</td>
                    <td>{obj.city}</td>
                    <td>{obj.states}</td>
                    <td>{obj.zip}</td>
                    <td>{obj.type}</td>
                  </tr>
                );
              })}

            {!this.show_personal &&
              this.business.map((obj) => {
                return (
                  <tr key={obj.mobile}>
                    <td>{obj.name}</td>
                    <td>{obj.mobile}</td>
                    <td>{obj.addrss}</td>
                    <td>{obj.city}</td>
                    <td>{obj.states}</td>
                    <td>{obj.zip}</td>
                    <td>{obj.type}</td>
                  </tr>
                );
              })}
            {this.show_personal && this.personal.length === 0 && (
              <h3>No personal recordes to display</h3>
            )}
            {!this.show_personal && this.business.length === 0 && (
              <h3>No business recordes to display</h3>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
