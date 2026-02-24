const isValidPassword = require("./password");

describe("isVaildPassword", () => {
  test("유효한 비밀번호", () => {
    expect(isValidPassword("@qwer12345")).toBe(true);
  });

  test("8자 미만 비밀번호", () => {
    expect(isValidPassword("qwer123")).toBe(false);
  });

  test("숫자로 이루어진 비밀번호", () => {
    expect(isValidPassword("123456789")).toBe(false);
  });

  test("영어로 이루어진 비밀번호", () => {
    expect(isValidPassword("qwertyuiop")).toBe(false);
  });

  test("특수문자 미포함 비밀번호", () => {
    expect(isValidPassword("qwer12345")).toBe(false);
  });
});
