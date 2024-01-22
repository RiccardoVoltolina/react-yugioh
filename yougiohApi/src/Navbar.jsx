import logo from './assets/react.svg'



function Navbar() {
    return (
        <nav class="navbar bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand ms-2 text-white" href="#">
                    <img className='ms-5 me-2' src={logo} alt="" />
                    Yu-gi-oh!
                </a>
            </div>
        </nav>);
}

export default Navbar;