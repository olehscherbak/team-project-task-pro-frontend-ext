import styled from 'styled-components';

export const ListBoard = styled.ul`
  margin-top: 40px;
  height: 130px;
  overflow-y: auto;
`;

export const ItemBoard = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 22px 14px;
  background-color: ${({ isSelected }) =>
    isSelected ? 'var(--activeItemBoard)' : 'transparent'};
  ::after {
    position: absolute;
    top: 0;
    right: 0px;
    bottom: 0;
    width: 4px;
    content: '';
    background: var(--accentColor);
    border-radius: 4px 0px 0px 4px;
    display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
  }
  @media screen and (min-width: 1280px) {
    padding-left: 24px;
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  gap: 6px;
`;

export const IconProject = styled.span`
  display: block;
  width: 18px;
  height: 18px;
  background-color: var(--whiteColor);
`;

export const TitleBoard = styled.p`
  font-family: var(--poppinsFont);

  font-weight: var(--fontWeight500);
  font-size: var(--fontSize14);
  line-height: 1.43em;

  letter-spacing: -0.02em;

  color: var(--whiteColor);
`;

export const WrapIcons = styled.div`
  display: ${({ isSelected }) => (isSelected ? 'flex' : 'none')};
  gap: 12px;

  color: var(--opacityWhite2);
`;