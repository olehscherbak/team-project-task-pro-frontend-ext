import styled from 'styled-components';

export const Container = styled.div`
  h4 {
    text-align: start;
    color: var(--whiteColor);
    font-size: var(--fontSize14);
    font-family: var(--poppinsFont);
    font-weight: var(--fontWeight500);
    letter-spacing: var(--letterSpacing28);
    margin: 0px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 14px 0px;
    border-bottom: 1px solid var(--borderBottomColor);
    margin-bottom: 24px;
  }
  li {
    width: 28px;
    height: 28px;
    background-color: rgba(246, 246, 247, 1);
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
`;