"use client"
import Link from 'next/link';
import { useState, useEffect} from 'react';
import metalogo from "../../public/metalogo.png";
import Image from 'next/image';
import styles from '../Line.module.css';
import { MdArrowOutward } from "react-icons/md";

interface NavbarProps {
  section1Id: string;
  section2Id: string;
  section3Id: string;
  section4Id: string;
  section5Id: string;
  
}

const LandingPageNav: React.FC<NavbarProps> = ({ section1Id, section2Id, section3Id , section4Id, section5Id }) => {
  const [navbar, setNavbar] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY); // Add this line to debug
      if (window.scrollY >= 90) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className='z-50 w-[100vw] lg:px-20 px-4 border-b-2 border-blue-950 text-white'>
       <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex py-1 ">
          <div>
            <div className="flex items-center justify-between">
              <div className=' md:pl-0 flex'>
                <Link href="/" prefetch={false} >
                  <Image height={60} width={60} src={metalogo} loading="eager" alt="logo" className='py-2'/>
                </Link>
                <p className='p-4 text-3xl'>MetaLogic</p>
              </div>
              <div className="lg:hidden">
                <button
                  type='button'
                  className="p-2 text-gray-700 rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'}`}>
              <ul className="items-center text-sm font-semibold tracking-[2px] space-y-8 p-3 pr-0 md:flex md:space-x-8 md:space-y-0 justify-end ">
                <li className="pl-4">
                  <div className='mr-1 '>
                    <Link href={`#${section1Id}`} prefetch={false} className={styles.link}>
                      Home
                    </Link>
                  </div>
                </li>
                <li className="pr-2 pl-4 md:pl-0 ">
                  <Link href={`#${section2Id}`} prefetch={false} className={styles.link} >
                    Services
                  </Link>
                </li>
                <li className="pr-3 pl-4 md:pl-0" >
                  <Link href={`#${section3Id}`} prefetch={false} className={styles.link}>
                    Career
                  </Link>
                </li>
                <li className="pr-3 pl-4 md:pl-0" >
                  <Link href={`#${section4Id}`} prefetch={false} className={styles.link}>
                    Blogs
                  </Link>
                </li>
                <li className="pr-3 pl-4 md:pl-0" >
                  <Link href={`#${section5Id}`} prefetch={false} className={styles.link}>
                    About Us
                  </Link>
                </li>
                
                <button className="flex tracking-[1px] items-center border bg-[#cc3434] cursor-pointer border-transparent text-white rounded-lg px-3 py-2 font-bold hover:bg-white hover:text-black">
                  <Link href="">
                    <span className="flex items-center ">
                      Get in touch
                      <span className="text-2xl pl-1"><MdArrowOutward /></span>
                    </span>
                  </Link>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default LandingPageNav;
