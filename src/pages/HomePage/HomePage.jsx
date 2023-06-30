import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { openModal } from '../../redux/modal/modalSlice';

import authSelector from '../../redux/auth/authSelector';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';
import BoardScreen from '../../Components/BoardScreen/BoardScreen';

// import { ContainerHome, BoxHome } from './HomePage.styled';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const theme = useSelector(authSelector.getTheme);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!theme) {
      document.body.setAttribute('data-theme', 'light');
    } else {
      document.body.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleOpenModal = () => {
    dispatch(openModal({ name: 'craeteModalBoard' }));
  };

  return (
    <>
      {/* <ContainerHome> */}
      <Sidebar isSidebarOpen={isSidebarOpen} />
      {/* <BoxHome> */}
      <Header openSideBar={toggleSidebar} />
      <BoardScreen closeSidebar={closeSidebar} />
      {/* </BoxHome> */}
      <Sidebar
        handleOpenModal={handleOpenModal}
        isSidebarOpen={isSidebarOpen}
      />
      <Header openSideBar={toggleSidebar} />
      <BoardScreen
        handleOpenModal={handleOpenModal}
        closeSidebar={closeSidebar}
      />
      {/* </ContainerHome> */}
    </>
  );
};

export default HomePage;
