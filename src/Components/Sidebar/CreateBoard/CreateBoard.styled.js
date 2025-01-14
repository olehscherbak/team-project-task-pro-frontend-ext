import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  padding: 0 14px;

  @media screen and (min-width: 768px) {
    padding: 0 24px;
    margin-top: 40px;
  }
`;

export const Desc = styled.p`
  padding-bottom: 8px;
  border-bottom: 1px solid var(--borderSidebarColor);

  font-family: var(--poppinsFont);

  font-size: var(--fontSize12);
  line-height: 1.5em;

  letter-spacing: -0.02em;

  color: var(--secondarySidebarColor);
`;

export const WrapTitleContent = styled.div`
  display: flex;
  gap: 77px;

  padding-bottom: 17px;
  border-bottom: 1px solid var(--borderSidebarColor);

  margin-top: 14px;
`;

export const Title = styled.h2`
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize14);
  line-height: 1.5em;
  letter-spacing: -0.28px;

  color: var(--primarySidebarColor);
`;

export const BtnCreateBoard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 46px;
  height: 36px;
  background: var(--iconPlusBgColor);
  border-radius: 6px;
  border: none;
  font-size: var(--fontSize20);
  cursor: pointer;
`;

export const IconStyled = styled.svg`
  stroke: var(--iconPlusColor);
`;
