import { Link as RouterLink } from "react-router-dom";
import Link from '@mui/material/Link';
import { Button } from "@mui/material";


const Header = () => {
    return(
<>            
       <Button>
       <Link underline="none" component={RouterLink} to="/">Home</Link>
       </Button>
       <Button>
       <Link underline="none" component={RouterLink} to="/Blogs">Blogs</Link>
       </Button>
      <Button>
      <Link underline="none" component={RouterLink} to="/About">About Us</Link>
      </Button>
      <Button>
      <Link underline="none" component={RouterLink} to="/Contact" >Contact Us</Link>
      </Button>
</>
    )
  
}


export default Header;