import React from "react";
import { bgImg } from "../../style";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  }

  const inputStyle =
    `p-2 rounded-full w-full border-2 border-gray-300/10 bg-MypaleBlue/70 border-MylightApricot/20
    placeholder:text-MylightApricot/60 text-MylightSkyBlue text-sm outline-none`;
  const buttonStyle =
    "w-full p-2 bg-MypaleBlue rounded-full border-2 border-MylightApricot/20 text-MylightApricot text-center text-sm mt-4 cursor-pointer";
  const formStyle =
    "flex w-96 h-full flex-col items-center justify-center my-auto gap-2 p-10 bg-MypaleBlue/50 border-2 border-MylightApricot/10 backdrop-blur-3xl";

  return (
    <div
      className="w-full h-full flex"
      style={bgImg({ img: "src/assets/composition-with-question-mark-urban-landscape.jpg" })}
    >
      <form action="post" onSubmit={(e) => handelSubmit(e)} className={formStyle}>
        <input type="email" placeholder="Email" className={inputStyle} />
        <input type="password" placeholder="Password" className={inputStyle} />
        <div className="w-full flex flex-col">
          <input type="submit" value="Sign in" className={buttonStyle} />
          <Link
            to={"/fogotpassword"}
            className="text-xs hover:underline text-MylightSkyBlue ml-3"
          >
            Forgot password
          </Link>
        </div>
        <Link to={"/signup"} className={`${buttonStyle} mt-10`}>
          Sign up
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
