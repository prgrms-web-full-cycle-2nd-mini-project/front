import{m as j,o as r,Q as y,p as b,C as a}from"./index-D-n7Wfmk.js";import{u as g,R as $,B as f}from"./index.esm-D9bder_l.js";import{T as s}from"./Typography-DGkEj0H6.js";import{F as w,a as v,b as n,I as l,S as C,c as F,A as k}from"./StyledComponents-kVngePsG.js";function L(){const{register:t,handleSubmit:d,formState:{errors:e,isValid:c,isSubmitted:i},watch:u}=g({mode:"onChange"}),{userSignup:p,errorMessage:o,verifyEmail:m}=j(),h=S=>{p(S)},x=u("email");return r.jsxs($,{children:[r.jsx(w,{$variant:"title1",children:"회원가입"}),r.jsxs(v,{onSubmit:d(h),children:[r.jsxs(n,{children:[r.jsxs(R,{children:[r.jsx(l,{type:"email",placeholder:"이메일을 입력해주세요",...t("email",{required:!0,pattern:/^\S+@\S+$/i}),$isSubmitted:i,$isValid:!e.email}),r.jsx("button",{type:"button",onClick:()=>m(x),children:"중복확인"})]}),i&&e.email&&r.jsx(s,{$variant:"body1",$color:"error",children:"올바른 이메일을 입력해주세요"})]}),r.jsxs(n,{children:[r.jsx(l,{$isValid:!e.password,type:"password",placeholder:"비밀번호를 입력해주세요",...t("password",{required:!0,minLength:6}),$isSubmitted:i}),i&&e.password?r.jsx(s,{$variant:"body1",$color:"error",children:"비밀번호는 6자 이상이어야 합니다"}):r.jsx(s,{$variant:"body1",$color:"gray50",children:"비밀번호는 6자 이상이어야 합니다"})]}),r.jsx(C,{type:"submit",disabled:!c,children:"가입하기"}),o&&r.jsx(s,{$variant:"body1",$color:"error",children:o})]}),r.jsxs(F,{children:["계정이 없으신가요? ",r.jsx(y,{to:"/login",children:"로그인"})]})]})}const R=b.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  :first-child {
    width: 100%;
  }
  button {
    width: 100px;
    background-color: ${a.secondary};
    color: ${a.white};
    border-radius: 30px;
  }
`;function V(){return r.jsxs(f,{children:[r.jsx(k,{}),r.jsx(L,{})]})}export{V as default};
