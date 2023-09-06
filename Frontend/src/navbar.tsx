import './navbar.css';

function Navbar() {
    return (
        <div>
            <div className='header'>Games <img className='controller' src="/controller.png"/></div>
            <div className='navbar'>
                <span>Home</span>
                <span>Games</span>
                <span>News</span>
                <span>Reviews</span>
                <span>Shop</span>
            </div>
        </div>
    );
  };

export default Navbar