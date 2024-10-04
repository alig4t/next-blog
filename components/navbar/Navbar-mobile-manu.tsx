'use client';
import { Menu, X } from 'lucide-react';
import { Session } from 'next-auth';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Logo from './Logo';
import NavbarRoutes from './Navbar-Routes';

type IProps = {
  session: Session | null;
};

const NavbarMobileMenu = ({ session }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <button
        className='rounded-md p-1 hover:bg-gray-200'
        onClick={(e) => {
          e.preventDefault();
          toggleOpen();
        }}
      >
        <Menu className='size-8' />
      </button>
      {isOpen &&
        createPortal(
          <div
            onClick={(e) => e.preventDefault()}
            className='fixed top-0 flex h-full w-64 flex-col gap-y-4 bg-gray-100 p-5 ring-0'
          >
            <div className='flex items-center justify-between'>
              <Logo />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleOpen();
                }}
                className='rounded-md hover:bg-gray-200'
              >
                <X className='size-10' />
              </button>
            </div>
            <div className='border-b'></div>
            <div className='flex'>
              <NavbarRoutes vertical session={session} />
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default NavbarMobileMenu;
