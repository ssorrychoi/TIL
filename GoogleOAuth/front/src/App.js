import React from "react";
import { GoogleLogin } from "react-google-login";
import Axios from "axios";
import authAxios from "./authAxios";

export default function App() {
  const responseGoogle = async (res) => {
    const token = res.tokenId;
    const expires = new Date(res.tokenObj.expires_at).toUTCString();

    document.cookie = `Authorization=${token};expires=${expires}`;

    const email = res.profileObj.email;
    const name = res.profileObj.name;
    const checkUser = await Axios.get(
      `http://localhost:3000/user/check?email=${email}`
    );
    if (checkUser.data.result) {
      alert("Success Login");
    } else if (checkUser.data.result === false) {
      // 회원가입 진행
      await Axios.post("http://localhost:3000/user/join", { name, email });
      alert("회원가입 및 로그인 성공");
      // redirect 등 Customizing rksmd
    } else {
      console.log(checkUser.data.error);
    }
  };
  const responseGoogleError = (response) => {
    console.log(response);
  };
  const getUser = async () => {
    const { data } = await authAxios.get("http://localhost:3000/user");
    console.log(data);
  };
  return (
    <div>
      {" "}
      <GoogleLogin
        clientId="318262625800-j8uqi94bakcijbch1um9gbvor1tc1ska.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogleError}
        cookiePolicy={"single_host_origin"}
      />
      <button onClick={getUser}>유저 정보 가져오기</button>
    </div>
  );
}
