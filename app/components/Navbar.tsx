
'use client';
import Link from 'next/link';
import '@/app/globals.css';

const Navbar = () => {
    let darkMode = false; 
  
    const toggleDarkMode = () => {
      darkMode = !darkMode;
      document.documentElement.classList.toggle('dark', darkMode);
    };
    
  
    const links = [
      { href: '/about', label: 'about' },
      { href: '/history', label: 'history' },
      { href: '/login', label: 'login' }
    ];
  
    return (
      <>
        <nav className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <p className="text-2xl font-bold">RemindMe</p>
            </Link>
            <ul className="flex items-center space-x-4">
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`} className='capitalize'>
                  <Link href={href}>
                    <p>{label}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleDarkMode}
            >Dark Mode</button>
          </div>
        </nav>
      </>
    );
  };
  
  export default Navbar;