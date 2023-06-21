import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./TableManageSeeker.scss";
import * as actions from "../../../store/actions";
import { dispatch } from "../../../redux";
import { changeLanguageApp } from "../../../store/actions";

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

  changeLanguage = (language) => {
    this.props.changeLanguageApp(language);
  };

  handleDeleteUsers = (user) => {
    this.props.deleteUsersRedux(user.id);
  };

  handleEditUsers = (user) => {
    this.props.handleEditUserFromParent(user);
  };

  render() {
    let arrUsers = this.state.userRedux;
    return (
      <div className="Users-table-container">
        <div className="Users-table-manage">
          <table>
            <thead>
              <tr>
                <th>
                  {" "}
                  <FormattedMessage id="manage-user.email" />
                </th>
                <th>
                  {" "}
                  <FormattedMessage id="manage-user.firstname" />
                </th>
                <th>
                  {" "}
                  <FormattedMessage id="manage-user.lastname" />
                </th>
                <th>
                  {" "}
                  <FormattedMessage id="manage-user.address" />
                </th>
                <th>
                  {" "}
                  <FormattedMessage id="manage-user.phone" />
                </th>
                <th>
                  {" "}
                  <FormattedMessage id="manage-user.action" />
                </th>
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
                      <td>{item.phoneNumber}</td>

                      <td>
                        <button
                          className="btn-edit"
                          onClick={() => this.handleEditUsers(item)}
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button
                          className="btn-delete"
                          onClick={() => this.handleDeleteUsers(item)}
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
    fetchUserRedux: () => dispatch(actions.fetchAllSeekerStart()),
    deleteUsersRedux: (id) => dispatch(actions.deleteUsers(id)),
    changeLanguageApp: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageSeeker);
