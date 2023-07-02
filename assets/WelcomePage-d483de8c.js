import{s as t,N as n,j as e,u as o}from"./index-510fea52.js";const a=t.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  flex-shrink: 0;
  margin: 0 auto;

  > nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 473px;
  }

  @media screen and (max-width: 374px) {
    padding: 0 20px;
  }
`,r=t.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`,s=t.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;

  color: var(--logoColor);
  font-weight: var(--fontWeight600);
  font-family: var(--poppinsFont);

  @media screen and (max-width: 767px) {
    font-size: var(--fontSize28);
    letter-spacing: -1.12px;
  }

  @media screen and (min-width: 768px) {
    font-size: var(--fontSize40);
    letter-spacing: -1.6px;
  }
`,d=t.img`
  @media screen and (min-width: 768px) {
    width: 162px;
    height: 162px;
  }

  @media screen and (max-width: 767px) {
    width: 124px;
    height: 124px;
  }
`,p=t.svg`
  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }

  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`,c=t.p`
  display: flex;

  flex-direction: column;
  flex-shrink: 0;
  margin-bottom: 48px;

  color: var(--primaryTextColor);
  text-align: center;
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 473px;
  }
  @media screen and (max-width: 374px) {
    width: 100%;
  }
`,i=t(n)`
  display: flex;

  width: 344px;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;

  color: var(--primaryTextColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;
  border-radius: 8px;
  transition-property: background, color;
  transition-duration: var(--transition);

  &:hover,
  &:focus {
    background: var(--bgActiveBtnColor);

    color: var(--activeTextColor);
    text-align: center;
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (max-width: 374px) {
    width: 280px;
  }
`,x="/team-project-task-pro-frontend/assets/menLaptopBig-92469159.png",h=()=>e.jsxs(a,{children:[e.jsxs(r,{children:[e.jsx(d,{src:x,alt:"Boy with laptop"}),e.jsxs(s,{children:[e.jsx(p,{children:e.jsx("use",{href:`${o}#icon-iconLogo`})}),"Task Pro"]})]}),e.jsx(c,{children:"Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!"}),e.jsxs("nav",{children:[e.jsx(i,{to:"/auth/register",children:"Register"}),e.jsx(i,{to:"/auth/login",children:"Log In"})]})]});export{h as default};
