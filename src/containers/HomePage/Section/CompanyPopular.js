import React, { Component } from "react";
import { connect } from "react-redux";
import "./CompanyPopular.scss";
import { FormattedMessage } from "react-intl";
class CompanyPopular extends Component {
  render() {
    return (
      <div className="CompanyPopular-container">
        <div className="CompanyPopular-content">
          <div className="CompanyPopular-header">
            <h2>
              <b>Các công ty phổ biến</b>
            </h2>
          </div>
          <div className="CompanyPopular-body">
            <div className="CompanyPopular-product">
              <img src="https://salt.topdev.vn/P7-gseKRLgNCCij_aQiAzJf0Zg4Gc_4RAz8trEC0dXk/fit/200/0/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzAyLzIxL1RvcERldi1WQ0JfTG9nby0xNjc2OTQyODkxLmpwZw/topdev-vcb-logo-1676942891.jpg"></img>
              <span>Chuyên viên chiến lược đổi mới</span>
            </div>
            <div className="CompanyPopular-product">
              <img src="https://salt.topdev.vn/i1H26fXWblPJJcdvGegIM39Re9ZBHSi0xiAWwhCy_Iw/fit/200/0/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzAyLzI3L1RvcERldi1kNDZjYTcwZTM2MjYxOTEzMTFhODc2MTcyMmM1OGJlZC0xNjc3NDg2ODA4LnBuZw/topdev-d46ca70e3626191311a8761722c58bed-1677486808.jpg"></img>
              <span>Front-End Tech Lead</span>
            </div>
            <div className="CompanyPopular-product">
              <img src="https://salt.topdev.vn/Eyb-feL5FKK_LB3zTFGhtaPWvFTUh9fKMJJxkGK8UBM/fit/200/0/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ZpbGVzL2xvZ29zL2Y3OGM5ZGMyNTkyOTg4NzE4MTEzMjVhYmVjYjllZDY4LnBuZw/f78c9dc259298871811325abecb9ed68.jpg"></img>
              <span>Manager Dev SecOps</span>
            </div>
            <div className="CompanyPopular-product">
              <img src="https://salt.topdev.vn/TuMDIAIpU9IJ2RmJnRcUWF4SSZrcDFyCjR95_xI4zvs/fit/200/0/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzA1LzE4L1RvcERldi16bFlJMWswRUpKckppS3k3LTE2ODQ0MDk1NzEucG5n/topdev-zlyi1k0ejjrjiky7-1684409571.jpg"></img>
              <span>Chuyên viên quản trị cơ sở dữ liệu</span>
            </div>
            <div className="CompanyPopular-product">
              <img src="https://salt.topdev.vn/1STPbJHVfyRJ4bXz3oLKBubjwk0qrZwwVrT0zHdZbBs/fit/200/0/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzA5LzI3L1RvcERldi0zYTE0NDFkYzZlZWIzMGE3ZTY3NmM1MzhhOTQzOGNiZi0xNjMyNzI3NTkwLlBORw/topdev-3a1441dc6eeb30a7e676c538a9438cbf-1632727590.jpg"></img>
              <span>Data Engineer</span>
            </div>
            <div className="CompanyPopular-product">
              <img src="https://salt.topdev.vn/KkbIr8g4aBXkZ6U0oaoE2iaPdbz9TCI3V1w9ee2WAE4/fit/200/0/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzEwLzIxL1RvcERldi1sb2dvWG5GNW5nQjZEZlUzc080MEw1ZmVSQUpkdjBoN0pZQ2MtMTYzNDgwNDEzMS5wbmc/topdev-logoxnf5ngb6dfu3so40l5ferajdv0h7jycc-1634804131.jpg"></img>
              <span>Moblie Developer</span>
            </div>
            <div className="CompanyPopular-product">
              <img src="https://salt.topdev.vn/wmxybQk0OGYRJEOPB-X8_n1JyTvjksk4oASuBD0zupU/fit/200/0/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzA0LzA3L1RvcERldi1MR0NOU19sb2dvLS0tUnVUb0hhLWZhbWlseS0xNjgwODM4Njk5LnBuZw/topdev-lgcns-logo-rutoha-family-1680838699.jpg"></img>
              <span>Kỹ sư It hệ thống</span>
            </div>
            <div className="CompanyPopular-product">
              <img src="https://salt.topdev.vn/ythYJQ0eSWD51eJ-5IuUibwumo5nbyFEPDW8K6keorA/fit/200/0/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzEwLzEzL1RvcERldi1hMmUwZTdlMTk4MmYzYzI1NzQ5MjAxZTNhNDY1ODNhZi0xNjM0MTA3NzIyLlBORw/topdev-a2e0e7e1982f3c25749201e3a46583af-1634107722.jpg"></img>
              <span>Securities HTS Mid Developer</span>
            </div>
            <div className="CompanyPopular-product">
              <img src="https://salt.topdev.vn/rWm2rr5KLcpCJo53BhAs00TeP56GWelD-Q2yLO2oEi8/fit/200/0/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIwLzA1LzA0L2dweVBJZHdsTFlBY3RDV0NCQjZKY0hIVHRzQkNpSVZXLnBuZw/gpypidwllyactcwcbb6jchhttsbciivw.jpg"></img>
              <span>UX/UI designer</span>
            </div>
            <div className="CompanyPopular-product">
              <img src="https://salt.topdev.vn/1bpGCp0o3S7QXIU62rvhv8hl_a4RkxBM4UBXiIHuK-s/fit/200/0/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIxLzEwLzExL1RvcERldi1sb2dvVGZNRmpnTjBDNlVtSDlaU1U5M2JacXNPOWtIb0U1NUstMTYzMzkyNjk4Ni5wbmc/topdev-logotfmfjgn0c6umh9zsu93bzqso9khoe55k-1633926986.jpg"></img>
              <span>Specialist/ Supervisor, Java</span>
            </div>
            <div className="CompanyPopular-product">
              <img src="https://salt.topdev.vn/iBMoZKtuOFG4nbtNaPTSAUMQPYTxnSVQoN9O1ezP6Jw/fit/200/0/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIwLzEwLzIwL2xvZ29rczliN3RuTGpXaWIySDRpbHRhaDlPaHJ1SDRhRk9XSy1YSnByUS5wbmc/logoks9b7tnljwib2h4iltah9ohruh4afowk-xjprq.jpg"></img>
              <span>Full stack developer Java</span>
            </div>
            <div className="CompanyPopular-product">
              <img src="https://salt.topdev.vn/EbGV9FM-D2aEUOzc34G_lvT32AFiM_UXf9tr4XujdYE/fit/200/0/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIzLzA0LzA0L1RvcERldi0xVFVPNXU4RXFuMXFTdlhaLTE2ODA1OTgxODMucG5n/topdev-1tuo5u8eqn1qsvxz-1680598183.jpg"></img>
              <span>DevOps Engineer</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyPopular);
