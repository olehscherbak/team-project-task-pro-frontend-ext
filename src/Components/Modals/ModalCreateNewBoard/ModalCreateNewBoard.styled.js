import styled from 'styled-components';
import { Form, ErrorMessage as FormikError, Field } from 'formik';

export const ModalCard = styled.div`
  width: 350px;
  height: 433px;
  box-shadow: var(--boxShadow);
  border-radius: 8px;
  border: var(----modalBorder);
  background-color: var(--modalBGC);
  position: relative;
  padding: 24px;
`;

export const Title = styled.h2`
  color: var(--titleColor);
  font-size: var(--fontSize18);
  font-family: var(--poppinsFont);
  font-weight: (--fontWeight500);
  letter-spacing: var(--letterSpacing36);
  text-align: start;
  margin-bottom: 24px;
`;

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FormFieldTitle = styled.label`
  color: var(--whiteColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  letter-spacing: -0.28px;
`;

export const ErrorMessage = styled(FormikError)`
  position: absolute;
  top: 120px;
  /* margin-top: 5px; */
  color: red;
  font-size: 10px;
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
`;

export const FieldTitle = styled(Field)`
  width: 302px;
  height: 49px;
  padding: 14px 18px 14px 18px;
  margin-bottom: 24px;
  align-items: center;
  border-radius: var(--borderRadius8);
  border: 1px solid var(--accentColor);
  opacity: 0.4000000059604645;
  background-color: var(--helpBlockColor);
  box-shadow: 0px 4px 16px 0px rgba(var(--borderBottomColor));
  color: var(--whiteColor);

  &:hover,
  &:active {
    opacity: 1;
  }
`;

export const Text = styled.h3`
  color: var(--whiteColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: var(--letterSpacing28);
  text-align: start;
  margin-bottom: 14px;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;

  label {
    cursor: pointer;
    fill: none;
    stroke: var(--iconBoardColor);
    transition-duration: 250ms;

    &:hover {
      stroke: black;
      transition-duration: 250ms;
    }
  }
`;

export const FormikField = styled(Field)`
  opacity: 0;
  position: absolute;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 40px;

  label {
    position: relative;
    display: flex;
    width: 28px;
    height: 28px;
    background-color: rgba(246, 246, 247, 1);
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
`;

export const FormikFieldImage = styled(Field)`
  /* opacity: 0;
  position: absolute; */
  display: none;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 287px;
  height: 49px;
  padding: 10px 0px 11px 0px;
  align-items: center;
  border-radius: var(--borderRadius8);
  border: none;
  background-color: var(--accentColor);
  color: var(--IconCloseColor);
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const ContainerIconButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  background-color: var(--IconCloseColor);
  border-radius: var(--borderRadius8);
`;
