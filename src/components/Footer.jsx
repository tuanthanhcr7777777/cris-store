import { Link , NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="d-flex justify-content-center">

                <div className="nav nav-pills">
                        <NavLink to='/'
                             className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
                        >
                             Home
                        </NavLink>
                        <NavLink to='about'
                             className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
                        >
                             About
                        </NavLink>
                        <NavLink to='products'
                            className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
                        >
                            Products
                        </NavLink>
                        <NavLink to='posts'
                            className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
                        >
                            Posts
                        </NavLink>
                    </div>
                </nav>
                <div className="copyrights">
                    &copy; 2023 <Link to='/'>Cris Store</Link> -All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer