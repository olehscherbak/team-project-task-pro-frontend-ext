import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import authOperation from '../../../redux/auth/authOperation';

import { Container, BtnLogOut, IconLogOut } from './LogOut.styled';

import url from '../../../images/icons/sprite/icons.svg';

const LogOut = () => {
  const dispatch = useDispatch();

  const handleClickLogOut = () => {
    Notiflix.Confirm.init({
      width: '260px',
      position: 'center-top',
      fontFamily: 'Poppins',
      titleColor: '#bedbb0',
      okButtonBackground: '#bedbb0',
    });
    Notiflix.Confirm.show(
      'Confirmation',
      'Are you sure you want to log out?',
      'Yes',
      'No',
      async () => {
        try {
          await dispatch(authOperation.logOut());
          location.reload();
        } catch (error) {
          console.log(error);
        }
      },
      () => {}
    );
  };

  return (
    <Container>
      <BtnLogOut onClick={handleClickLogOut} type="button">
        <IconLogOut width="32" height="32">
          <use xlinkHref={`${url}#icon-login`} />
        </IconLogOut>
        <span> Log out</span>
      </BtnLogOut>
    </Container>
  );
};

export default LogOut;
