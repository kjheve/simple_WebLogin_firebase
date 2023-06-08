import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const auth = getAuth();

// 비밀번호 기반 계정 만들기
document.getElementById('signUpButton').addEventListener("click", (event) => {
  event.preventDefault(); // 폼 제출 새로고침 방지
  //input 입력값 가져오기
  const signUpEmail = document.getElementById("signUpEmail").value;
  const signUpPassword = document.getElementById("signUpPass").value;

  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      alert('회원가입 성공!');
    })
    .catch((error) => {
      console.log("error"); // 에러 로그 출력
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});

// 로그인
document.getElementById('signInButton').addEventListener("click", (event) => {
  event.preventDefault();

  const signInEmail = document.getElementById('signInEmail').value;
  const signInPassword = document.getElementById('signInPass').value;

  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      alert('로그인 성공!');
    })
    .catch((error) => {
      alert('로그인 실패!');
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
