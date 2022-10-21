import {Link, useMatch, useResolvedPath} from 'react-router-dom'
export default function Navbar() {
    return  <nav className='nav'>
        <Link to='/' className='site-title'>LOGO</Link>
        <ul>
            <CustomLink to='/about'>About</CustomLink>
            <CustomLink to='/contact'>Contact</CustomLink>
        </ul>
        </nav>
}

function CustomLink({to, children, ...props}){
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({path:resolvedPath.pathname})
    
    return(
        <li><Link className={isActive ? 'active':''} to={to} {...props} >{children}</Link></li>
    )
}