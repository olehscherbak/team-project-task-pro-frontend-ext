import{s as t,F,a as v,E as S,c as I,b as a,d as C,r as s,j as e,e as k,N as d,B as $,f as L,L as P,g as b,h as E}from"./index-510fea52.js";const A=t(F)`
  width: 100%;
  height: 363px;
  padding: 24px;
  justify-content: center;
  flex-direction: column;
  background-color: var(--bgFormColor);
  border-radius: 8px;
  margin: 188px 508px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 424px;
    height: 395px;
    padding: 40px;
  }
`,f=t.div`
  width: 100%;
  margin-bottom: 14px;
  position: relative;
`,R=t.div``,g=t(v)`
  padding: 14px 18px;
  width: 100%;
  height: 49px;
  border: 1px solid #bedbb0;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  background-color: var(--bgInputColor);
  color: var(--activeTextColor);
  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);

  outline: none;

  @media screen and (min-width: 375px) {
    width: 285px;
  }

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  &::placeholder {
    font-size: var(--fontSize14);
  }
`,B=t.span`
  position: absolute;
  top: 16px;
  right: 18px;
  height: 18px;
`,W=t.div`
  margin-top: 24px;
`,Z=t.button`
  width: 100%;
  height: 49px;
  background-color: var(--bgAccentBtnColor);
  border-radius: 8px;
  cursor: pointer;
  color: var(--primaryTextColor);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  border: none;
  transition: var(--transition);

  @media screen and (min-width: 375px) {
    width: 285px;
  }

  @media screen and (min-width: 768px) {
    width: 342px;
  }
  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`,w=t(S)``,u=t.div`
  position: absolute;
  width: 100%;
  color: var(--errorColor);
  font-size: 10px;
  margin-top: 1px;
`,T=t.div`
  height: 27px;
  text-align: start;
  font-family: var(--poppinsFont);
  font-size: var(--fontSize18);
  font-weight: var(--fontWeight500);
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`,q={name:"",email:"",password:""},N=I().shape({name:a().min(4,"Name should be at least 4 characters").max(64,"Name should not exceed 64 characters").matches(/^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)?$/,"Invalid name format").required("name is required"),email:a().email("Invalid email").test("email-format","Invalid email format",i=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(i)).required(),password:a().min(8).max(64).matches(/^[^\s]+$/,"Password should not contain spaces").required()}),V=()=>{const i=C(),[r,p]=s.useState(!1),[l,n]=s.useState(!1),c=()=>{p(o=>!o)},x=async(o,{resetForm:h})=>{n(!0);try{await i(b.register(o))}catch(m){console.log(m)}finally{n(!1)}h()};return e.jsx(e.Fragment,{children:e.jsx(k,{initialValues:q,validationSchema:N,onSubmit:x,children:e.jsxs(A,{children:[e.jsxs(T,{children:[e.jsx(d,{to:"/auth/register",style:{color:"#ffffff"},children:"Registration"}),e.jsx(d,{to:"/auth/login",style:{color:"#ffffff4d"},children:"Log In"})]}),e.jsxs(f,{children:[e.jsx(g,{type:"text",name:"name",placeholder:"Enter your name"}),e.jsx(w,{name:"name",children:o=>e.jsx(u,{children:o})})]}),e.jsxs(f,{children:[e.jsx(g,{type:"email",name:"email",placeholder:"Enter your email"}),e.jsx(w,{name:"email",children:o=>e.jsx(u,{children:o})})]}),e.jsxs(f,{children:[e.jsxs(R,{children:[e.jsx(g,{type:r?"text":"password",name:"password",placeholder:"Create a password"}),e.jsx(B,{onClick:c,children:r?e.jsx($,{color:"#ffffff4d",style:{width:18,height:18}}):e.jsx(L,{color:"#ffffff4d",style:{width:18,height:18}})})]}),e.jsx(w,{name:"password",children:o=>e.jsx(u,{children:o})})]}),e.jsx(W,{children:e.jsx(Z,{type:"submit",children:l?e.jsx(P,{}):"Register Now"})})]})})})},_=t(k)``,M=t(F)`
  width: 100%;
  height: 298px;
  padding: 24px;
  justify-content: center;
  flex-direction: column;
  background-color: var(--bgFormColor);
  border-radius: 8px;
  margin: 219px 508px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 424px;
    height: 332px;
    padding: 40px;
  }
`,j=t.div`
  width: 100%;
  margin-bottom: 14px;
  position: relative;
`,G=t.div``,D=t.span`
  position: absolute;
  top: 16px;
  right: 18px;
  height: 18px;
`,O=t(v)`
  padding: 14px 18px;
  width: 100%;
  height: 49px;
  border: 1px solid #bedbb0;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  background-color: var(--bgInputColor);
  color: var(--activeTextColor);
  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);

  @media screen and (min-width: 375px) {
    width: 285px;
  }

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  &::placeholder {
    font-size: var(--fontSize14);
  }
`,U=t(v)`
  padding: 14px 18px;
  width: 100%;
  height: 49px;
  border: 1px solid #bedbb0;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  background-color: var(--bgInputColor);
  color: var(--activeTextColor);
  font-family: var(--poppinsFont);
  font-size: var(--fontSize14);

  outline: none;

  @media screen and (min-width: 375px) {
    width: 285px;
  }

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  &::placeholder {
    font-size: var(--fontSize14);
  }
`,y=t(S)``,z=t.p`
  position: absolute;
  width: 100%;
  color: red;
  font-size: 10px;
  margin-top: 1px;
`,H=t.div`
  width: 100%;
  margin-top: 24px;
`,J=t.button`
  width: 100%;
  height: 49px;
  background-color: var(--bgAccentBtnColor);
  border-radius: 8px;
  cursor: pointer;
  color: var(--primaryTextColor);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  border: none;
  transition: var(--transition);

  @media screen and (min-width: 375px) {
    width: 285px;
  }

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  &:hover,
  &:focus
   {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`,K=t.div`
  height: 27px;
  text-align: start;
  font-family: var(--poppinsFont);
  font-size: var(--fontSize18);
  font-weight: var(--fontWeight500);
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`,Q={email:"",password:""},X=I().shape({email:a().email("Invalid email").test("email-format","Invalid email format",i=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(i)).required(),password:a().min(8).max(64).matches(/^[^\s]+$/,"Password should not contain spaces").required()});function Y(){const i=C(),[r,p]=s.useState(!1),[l,n]=s.useState(!1),c=async(o,{resetForm:h})=>{n(!0);try{await i(b.logIn(o)),await i(b.refreshCurrentUser(o)),h()}catch(m){console.log(m)}finally{n(!1)}},x=()=>{p(o=>!o)};return e.jsx(e.Fragment,{children:e.jsx(_,{initialValues:Q,validationSchema:X,onSubmit:c,children:e.jsxs(M,{children:[e.jsxs(K,{children:[e.jsx(d,{to:"/auth/register",style:{color:"#ffffff4d"},children:"Registration"}),e.jsx(d,{to:"/auth/login",style:{color:"#ffffff"},children:"Log In"})]}),e.jsxs(j,{children:[e.jsx(O,{type:"email",name:"email",placeholder:"Enter your email"}),e.jsx(y,{name:"email",children:o=>e.jsx(z,{children:o})})]}),e.jsxs(j,{children:[e.jsxs(G,{children:[e.jsx(U,{type:r?"text":"password",name:"password",placeholder:"Confirm a password"}),e.jsx(D,{onClick:x,children:r?e.jsx($,{color:"#ffffff4d",style:{width:18,height:18}}):e.jsx(L,{color:"#ffffff4d",style:{width:18,height:18}})})]}),e.jsx(y,{name:"password",children:o=>e.jsx(z,{children:o})})]}),e.jsx(H,{children:e.jsx(J,{type:"submit",children:l?e.jsx(P,{}):"Log In Now"})})]})})})}const ee=t.section`
  height: 100vh;
`,te=t.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`,ie=()=>{const{id:i}=E();return e.jsx(ee,{children:e.jsxs(te,{children:[i==="login"&&e.jsx(Y,{}),i==="register"&&e.jsx(V,{})]})})};export{ie as default};
