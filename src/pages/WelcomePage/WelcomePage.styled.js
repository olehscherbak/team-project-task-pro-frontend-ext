import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyleSectionWelcomePage = styled.section`
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
`;

export const LogoBlock = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Logo = styled.p`
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
`;

export const ImgLogo = styled.img`
  @media screen and (min-width: 768px) {
    width: 162px;
    height: 162px;
  }

  @media screen and (max-width: 767px) {
    width: 124px;
    height: 124px;
  }
`;

export const ImgIcon = styled.svg`
  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }

  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;

export const Content = styled.p`
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
`;
export const Link = styled(NavLink)`
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
`;
