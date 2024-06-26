import NavBar from "../CommonThings/NavBar"
import Fotter from "../CommonThings/Fotter"

function Layout(props) {
  return (
  <>
  
  <NavBar />

{props.children}


  <Fotter /> 
  
  </>
  )
}

export default Layout