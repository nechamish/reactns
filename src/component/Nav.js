// import { Link } from "react-router-dom";

// export default function Nav() {
//   return <>

//   <Link to={'/'}></Link>
//   </>;
// }
// import About_us from "./About_us";
// import Schedule_meeting from "./Schedule_meeting";
import * as React from "react";
import {Link} from "react-router-dom"
import User from "./User";

const Nav = () => {
    return (
        <div className="Nav">
            
            <Link to={`/`}>
              <button>login</button>
            </Link>
            <Link to={`/User`}>
              <button >user</button>
            </Link>
            <Link to={`/Manager`}>
              <button>Manager</button>
            </Link>
        </div>
    )
}
export default Nav;






