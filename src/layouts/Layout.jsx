import React from 'react'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Overview from '../components/Overview'
import ProductModal from '../components/ProductModal'
import useShop from '../hooks/useShop'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root');

const Layout = () => {
  const { modal } = useShop();

  return (
    <>
      <div className='md:flex'>
        <Sidebar />

        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
          <Outlet />
        </main>

        <Overview />
      </div>

      <Modal 
        isOpen={modal}
        style={customStyles}
      >
        <ProductModal />
      </Modal>

      <ToastContainer />
    </>
  )
}

export default Layout