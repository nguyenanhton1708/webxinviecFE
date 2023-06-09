import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ModalEditUser.scss";
import { emitter } from "../../utils/emitter";
import _ from "lodash";

class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
    this.listenToEmitter();
  }

  listenToEmitter() {
    emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
      this.setState({
        id: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
      });
    });
  }
  componentDidMount() {
    let user = this.props.currentUser;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        password: "11111111",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
      });
    }
  }

  toggle = () => {
    this.props.toggleFromParent();
  };
  handleOnChangeInput = (event, id) => {
    let coppyState = { ...this.state };
    coppyState[id] = event.target.value;
    this.setState({ ...coppyState }, () => {});
  };

  checkValideInput = () => {
    let isValid = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter:" + arrInput[i]);
        break;
      }
    }
    return isValid;
  };
  handleSaveUser = () => {
    let isValid = this.checkValideInput();
    if (isValid === true) {
      this.props.editUser(this.state);
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        centered
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Edit User
        </ModalHeader>
        <ModalBody>
          <div className="container-create-user">
            <div class="form-group col-md-12 ">
              <label for="inputEmail">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="Email"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "email");
                }}
                value={this.state.email}
                disabled
              />
            </div>

            <div class="form-group col-md-12">
              <label for="inputPassword">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "password");
                }}
                value={this.state.password}
                disabled
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="inputFirstName">FirstName</label>
                <input
                  type="text"
                  class="form-control"
                  name="firstName"
                  placeholder="FirstName"
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "firstName");
                  }}
                  value={this.state.firstName}
                />
              </div>
              <div class="form-group col-md-12">
                <label for="inputLastName">LastName</label>
                <input
                  type="text"
                  class="form-control"
                  name="lastName"
                  placeholder="LastName"
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "lastName");
                  }}
                  value={this.state.lastName}
                />
              </div>
            </div>
            <div class="form-group col-md-12">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                class="form-control"
                name="address"
                placeholder="Address"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "address");
                }}
                value={this.state.address}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="save-button"
            color="primary"
            onClick={() => {
              this.handleSaveUser();
            }}
          >
            Save changes
          </Button>{" "}
          <Button
            className="cancel-button"
            color="secondary"
            onClick={() => {
              this.toggle();
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
