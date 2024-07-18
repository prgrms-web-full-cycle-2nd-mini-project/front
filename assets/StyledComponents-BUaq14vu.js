import{o as t,p as o}from"./index-CftijzgA.js";import{L as i}from"./index.esm-B0z0KLed.js";import{T as r}from"./Typography-BEr4wqNE.js";function m(){return t.jsxs(i,{children:[t.jsxs(s,{children:[t.jsx(a,{children:"TRIP PLAN"}),t.jsx(c,{children:"여행 투두 리스트를 만들어볼까요?"})]}),t.jsx(d,{src:"/src/assets/airplane.png"})]})}const s=o.div`
  text-align: center;
`,a=o.div`
  font-size: 2rem;
  font-weight: 700;
`,c=o.div`
  font-size: 1.2rem;
  margin-top: 20px;
`,d=o.img`
  width: 250px;
  height: 250px;
  margin-top: 80px;
`,f=o(r)`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`,g=o.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,b=o.fieldset`
  border: none;
  margin: 10px;
  width: 80%;
`,u=o.button`
  width: 50%;
  padding: 10px;
  background-color: black;
  border: none;
  border-radius: 100px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`,h=o.input`
  width: 100%;
  padding: 10px;
  border: none;
  margin-bottom: 5px;
  background-color: inherit;
  border-bottom: ${({$isValid:e,$isSubmitted:n})=>n&&!e?"1px solid crimson":"1px solid #ccc"};
  font-size: 16px;
  transition: border-bottom 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({$isValid:e,$isSubmitted:n})=>n&&!e?"crimson":"#333"};
  }
`,v=o.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #888;

  a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;export{m as A,f as F,h as I,u as S,g as a,b,v as c};
