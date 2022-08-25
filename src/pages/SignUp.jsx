import React from "react";
import SignupForm from "../commponent/signupform/SignupForm";

const SignUp = () => {
  return (
    <div>
      <SignupForm />
    </div>
  );
};

export default SignUp;

// 미디어_타입 : 어떤 미디어에서 미디어쿼리 사용할지 정해준다 ex)screen
// 조건에 대한 물음 : 미디어의 조건,속성값 지정
// ex) max-width:800px : 스크린의 크기가 최대 800px이므로 800px 이하일 경우의 정의된 스타일을 추가 적용 할거임

// @media 미디어_타입 and (조건에_대한_물음){
//   미디어 타입과 조건
//   모두 만족할 때 덮어씌울
//   스타일 선언문
// }

// @media 미디어_타입 and (max-width:768px){
//   화면 (screen)의
//   너비가 768px 이하일 경우에
//   여기에 정의된 스타을 선언물을
//   추가 적용할 것이다
// }
