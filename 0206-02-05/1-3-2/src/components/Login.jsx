import React from "react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [isUnique, setIsUnique] = useState(false);
  const [isClear, setIsClear] = useState(false);
  const [pw, setPw] = useState("");
  const [samePw, setSamePw] = useState("");
  const [errorAgree, setErrorAgree] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length <= 0) return setIsUnique(false);
    if (e.target.value.includes("@")) {
      setIsClear(true);
    } else {
      setIsClear(false);
      setIsUnique(false);
    }
  };

  const handleCheck = (e) => {
    e.preventDefault();
    if (!isClear) return;
    if (email === "user@test.com") {
      return alert("사용중인 이메일 입니다.");
    }
    return setIsUnique(true);
  };

  const handlePw = (e) => {
    setPw(e.target.value);
  };
  const handleSamePw = (e) => {
    setSamePw(e.target.value);
  };
  const checkPw = pw !== samePw;

  const handelAgree = (e) => {
    setAgree(e.target.checked);
    if (e.target.checked) {
      setErrorAgree(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isUnique) return;
    if (!isClear) return;
    if (checkPw) return;
    if (!agree) {
      setErrorAgree(true);
      return;
    }
    setErrorAgree(false);
    alert("가입 성공");
  };

  return (
    <>
      <div className="login-container">
        <h2 style={{ color: "#fafafa" }}>회원가입</h2>
        <form onSubmit={handleSubmit}>
          <div className="id-box">
            <input
              type="text"
              value={email}
              onChange={handleEmail}
              placeholder="test@example.com"
              style={{
                width: "300px",
                height: "50px",
                marginRight: "10px",
                borderRadius: "20px",
                fontSize: "18px",
                fontWeight: "700",
                letterSpacing: "3px",
              }}
            />
            <button
              type="button"
              style={{ width: "80px", height: "55px", borderRadius: "20px", fontWeight: "700" }}
              onClick={handleCheck}
            >
              중복 확인
            </button>
            {isUnique && isClear && <p style={{ color: "#75C661" }}>사용 가능한 이메일 입니다.</p>}
            {!isClear && email.length >= 1 && <p style={{ color: "red" }}>이메일 형식을 확인해주세요.</p>}
          </div>
          <div className="pw-box">
            <input
              type="password"
              value={pw}
              onChange={handlePw}
              placeholder="password"
              style={{
                width: "390px",
                height: "50px",
                borderRadius: "20px",
                fontSize: "18px",
                fontWeight: "700",
                letterSpacing: "5px",
              }}
            />
            <input
              type="password"
              value={samePw}
              onChange={handleSamePw}
              placeholder="password"
              style={{
                width: "390px",
                height: "50px",
                borderRadius: "20px",
                fontSize: "18px",
                fontWeight: "700",
                letterSpacing: "5px",
              }}
            />
            {checkPw && <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>}
          </div>
          <div className="agree-box">
            <input type="checkbox" checked={agree} onChange={handelAgree} style={{ width: "20px", height: "20px" }} />
            <p style={{ color: "#fafafa" }}>이용 약관에 동의합니다.</p>
            {errorAgree && <p style={{ color: "red", marginLeft: "20px" }}>약관 동의가 필요합니다.</p>}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            style={{ width: "390px", height: "50px", borderRadius: "20px", fontSize: "18px", fontWeight: "700" }}
          >
            가입하기
          </button>
        </form>
      </div>
    </>
  );
}
