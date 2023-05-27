import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./TableManageSeeker.scss";
import * as actions from "../../../store/actions";
import { dispatch } from "../../../redux";

class TableManageSeeker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRedux: [],
    };
  }

  componentDidMount() {
    this.props.fetchUserRedux();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.users !== this.props.users) {
      this.setState({
        userRedux: this.props.users,
      });
    }
  }
  handleDeleteSeeker = (user) => {
    this.props.deleteSeekerRedux(user.id);
  };

  handleEditSeeker = (user) => {
    this.props.handleEditUserFromParent(user);
  };

  render() {
    console.log("check all users: ", this.props.users);
    console.log("check all state: ", this.state.userRedux);
    let arrUsers = this.state.userRedux;
    return (
      <div className="seeker-table-container">
        <div className="seeker-table-manage">
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            {arrUsers &&
              arrUsers.length > 0 &&
              arrUsers.map((item, index) => {
                return (
                  <thead>
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button
                          className="btn-edit"
                          onClick={() => this.handleEditSeeker(item)}
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button
                          className="btn-delete"
                          onClick={() => this.handleDeleteSeeker(item)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </thead>
                );
              })}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
    deleteSeekerRedux: (id) => dispatch(actions.deleteSeeker(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageSeeker);
