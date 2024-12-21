import Header from "../components/Header";
import { Outlet } from 'react-router-dom'

function GenericLayout () {

  return (
    <>
      <Header />
      <Outlet />
      <footer>
        <p>�� 2021 Your Company. All rights reserved.</p>
      </footer>
    </>
  )
}

export default GenericLayout;