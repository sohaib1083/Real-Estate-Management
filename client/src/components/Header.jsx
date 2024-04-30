import { FaSearch, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMenu, setShowMenu] = useState(false); // State to control visibility of mobile menu
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
              <span className='text-slate-500'>SE </span>
              <span className='text-slate-700'>Properties</span>
            </h1>
          </Link>
          {/* Search form */}
          <div className='flex items-center justify-center flex-grow'>
            <form onSubmit={handleSubmit} className='search-form bg-slate-100 p-3 rounded-lg flex items-center'>
              <input
                type='text'
                placeholder='Search...'
                className='bg-transparent focus:outline-none w-24 sm:w-64'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button>
                <FaSearch className='text-slate-600' />
              </button>
            </form>
          </div>

          {/* Hamburger menu icon for small screens */}
          <div className='block sm:hidden'>
            <FaBars className='text-slate-700 text-2xl' onClick={() => setShowMenu(!showMenu)} />
          </div>
          {/* Navigation links for larger screens */}
          <ul className={`sm:flex ${showMenu ? 'block' : 'hidden'} items-center gap-6 ml-auto`}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/profile'>
                {currentUser ? (
                  <img
                    className='rounded-full h-7 w-7 object-cover'
                    src={currentUser.avatar}
                    alt='profile'
                  />
                ) : (
                  <span>Sign in</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
