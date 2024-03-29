import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { companyData } from "../../admin/Slice/companySlice";
export default function RegisterCompany() {
  const schema = yup.object().shape({
    userName: yup.string().email().required(),
    name: yup.string().required(),
    password: yup.string().min(4).max(20).required(),
    rePassword: yup.string().oneOf([yup.ref("password"), null]),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const banner =
    "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/10/p-1-these-are-the-secrets-from-best-places-to-work-any-company-can-use.jpg";
  const avatar =
    "https://www.designevo.com/res/templates/thumb_small/hexagon-and-bar-graph.webp";
  const address = "Hà Nội";
  const dispatch = useDispatch();
  const history = useHistory();
  const actionResult = async () => {
    await dispatch(companyData());
  };

  const onSubmit = (data) => {
    const dataCompany = {
      address,
      banner,
      avatar,
      name: data.name,
      email: data.userName,
      password: data.password,
      status: 0,
    };
    const link = "http://localhost:777/companys";
    axios
      .post(link, dataCompany)
      .then((ok) => {
        if (ok.data.data === "email đã tồn tại!") {
          message.info("Email đã được đăng ký!");
        } else {
          message.success("Đăng ký tài khoản thành công!");
          setTimeout(() => {
            actionResult();
          }, 700);
          history.push("/login");
        }
      })
      .catch((er) => {
        console.log(er);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="register__box__left__title">Email công ty</div>
        <input type="text" {...register("userName")} placeholder="Email" />
        <p className="text-danger">
          {errors.userName ? "Email không đúng định dạng" : ""}
        </p>
        <div className="register__box__left__title">Tên công ty</div>
        <input type="text" {...register("name")} placeholder="Tên công ty" />
        <p className="text-danger">
          {errors.name ? "Tên côn ty không phù hợp" : ""}
        </p>
        <div className="register__box__left__title">Mật khẩu</div>
        <input
          type="password"
          {...register("password")}
          placeholder="Mật khẩu"
        />
        <p className="text-danger">
          {errors.password
            ? "Mật khẩu ít nhất 4 ký tự và không quá 20 ký tự"
            : ""}
        </p>
        <div className="register__box__left__title">Nhập lại mật khẩu</div>
        <input
          type="password"
          {...register("rePassword")}
          placeholder="Mật khẩu"
        />
        <p className="text-danger">
          {errors.rePassword ? "Mật khẩu không trùng khớp" : ""}
        </p>
        <div className="register__box__left__button">
          <input type="submit" value="Đăng ký" />
        </div>
      </form>
    </>
  );
}
