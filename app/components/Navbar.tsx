
'use client';
import Link from 'next/link';
import '@/app/globals.css';

const Navbar = () => {
    let darkMode = false; 
  
    const toggleDarkMode = () => {
      darkMode = !darkMode;
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    
  
    const links = [
      { href: '/about', label: 'about' },
      { href: '/history', label: 'history' },
      { href: '/login', label: 'login' }
    ];
  
    return (
      <>
        <nav className="flex items-center justify-between p-4 font-semibold container">
          <div className="flex items-center space-x-2 container">
            <Link href="/">
              <p className="text-2xl font-bold ">ReMe</p>
            </Link>
            <ul className="flex items-center space-x-4">
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`} className='capitalize border border-stone-700 border-solid bg-stone-600 rounded-lg px-2 shadow-sm  shadow-stone-700 '>
                  <Link href={href}>
                    <p>{label}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode}
  className="inline-block cursor-pointer rounded-md bg-gray-800 px-2 py-2 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900 m-2">
  moon
</button>
          </div>
        </nav>
      </>
    );
  };
  
  export default Navbar;