"use client"
import LandingPageNav from "./components/LandingPageNav";
import Image from 'next/image';
import software from '../public/software.svg';
import web from '../public/web.svg';
import app from '../public/app.svg';
import cloud from '../public/cloud.svg';
import qa from '../public/qa.svg';
import ui from '../public/ui.svg';
import maintain from '../public/maintain.svg';
import dev from '../public/dev.svg';
import block from '../public/block.svg';


export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24  bg-[#001d49]">
    <div className='absolute top-0 right-0 z-20'>
          <LandingPageNav section1Id="section1" section2Id="section2" section3Id="section3" section4Id="section4" section5Id="section5"  />
        </div>

    
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left gap-4 px-3 lg:gap-6 lg:px-1">
      
      
              <a
                className="group rounded-lg px-5 py-4 transition-colors hover:border-gray-300 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black flex gap-4 items-center"
                target="_blank"
                rel="noopener noreferrer">

                <Image height={60} width={60} src={software} loading="eager" alt="logo" className="mb-8"/>                
                <div>
                  <h2 className="mb-3 text-xl font-semibold">
                   Custom Software Development{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-non">
                      -&gt;
                    </span>
                  </h2>
                  <p className="max-w-[30ch] text-sm opacity-50">
                  Tailored software solutions for your needs.</p>
                </div>
              </a>

               {/* Vertical Line */}
    

              <a
                className="group rounded-lg   px-5 py-4 transition-colors hover:border-gray-300 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black flex gap-4 items-center"
                target="_blank"
                rel="noopener noreferrer">

                <Image height={60} width={60} src={web} loading="eager" alt="logo" className="mb-8"/>                
                <div>
                  <h2 className="mb-3 text-xl font-semibold">
                  Web Development{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-non">
                      -&gt;
                    </span>
                  </h2>
                  <p className="max-w-[30ch] text-sm opacity-50">
                  Websites that work on all devices.</p>
                </div>
              </a>

           <a
                className="group rounded-lg   px-5 py-4 transition-colors hover:border-gray-300 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black flex gap-4 items-center"
                target="_blank"
                rel="noopener noreferrer">

                <Image height={60} width={60} src={app} loading="eager" alt="logo" className="mb-8"/>                
                <div>
                  <h2 className="mb-3 text-xl font-semibold">
                  Mobile App Development{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-non">
                      -&gt;
                    </span>
                  </h2>
                  <p className="max-w-[30ch] text-sm opacity-50">
                  Apps for phones and tablets.</p>
                </div>
              </a>

            <a
                className="group rounded-lg   px-5 py-4 transition-colors hover:border-gray-300 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black flex gap-4 items-center"
                target="_blank"
                rel="noopener noreferrer">

                <Image height={60} width={60} src={cloud} loading="eager" alt="logo" className="mb-8"/>                
                <div>
                  <h2 className="mb-3 text-xl font-semibold">
                  Cloud Computing Services{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-non">
                      -&gt;
                    </span>
                  </h2>
                  <p className="max-w-[30ch] text-sm opacity-50">
                  Use the internet to improve your business.</p>
                </div>
              </a>

              <a
                className="group rounded-lg   px-5 py-4 transition-colors hover:border-gray-300 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black flex gap-4 items-center"
                target="_blank"
                rel="noopener noreferrer">

                <Image height={60} width={60} src={qa} loading="eager" alt="logo" className="mb-8"/>                
                <div>
                  <h2 className="mb-3 text-xl font-semibold">
                  Quality Assurance and Testing{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-non">
                      -&gt;
                    </span>
                  </h2>
                  <p className="max-w-[30ch] text-sm opacity-50">
                  Checking software for reliability.</p>
                </div>
              </a>

              <a
                className="group rounded-lg   px-5 py-4 transition-colors hover:border-gray-300 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black flex gap-4 items-center"
                target="_blank"
                rel="noopener noreferrer">

                <Image height={60} width={60} src={ui} loading="eager" alt="logo" className="mb-8"/>                
                <div>
                  <h2 className="mb-3 text-xl font-semibold">
                  UI/UX Designing{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-non">
                      -&gt;
                    </span>
                  </h2>
                  <p className="max-w-[30ch] text-sm opacity-50">
                  Creating user-friendly interfaces.</p>
                </div>
              </a>
              <a
                className="group rounded-lg   px-5 py-4 transition-colors hover:border-gray-300 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black flex gap-4 items-center"
                target="_blank"
                rel="noopener noreferrer">

                <Image height={60} width={60} src={maintain} loading="eager" alt="logo" className="mb-8"/>                
                <div>
                  <h2 className="mb-3 text-xl font-semibold">
                  Maintenance and Support{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-non">
                      -&gt;
                    </span>
                  </h2>
                  <p className="max-w-[30ch] text-sm opacity-50">
                  Keeping your software running smoothly.</p>
                </div>
              </a>
              <a
                className="group rounded-lg   px-5 py-4 transition-colors hover:border-gray-300 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black flex gap-4 items-center"
                target="_blank"
                rel="noopener noreferrer">

                <Image height={60} width={60} src={dev} loading="eager" alt="logo" className="mb-8"/>                
                <div>
                  <h2 className="mb-3 text-xl font-semibold">
                  Dev Ops{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-non">
                      -&gt;
                    </span>
                  </h2>
                  <p className="max-w-[30ch] text-sm opacity-50">
                  Faster and safer software delivery.</p>
                </div>
              </a>
              <a
                className="group rounded-lg   px-5 py-4 transition-colors hover:border-gray-300 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black flex gap-4 items-center"
                target="_blank"
                rel="noopener noreferrer">

                <Image height={60} width={60} src={software} loading="eager" alt="logo" className="mb-8"/>                
                <div>
                  <h2 className="mb-3 text-xl font-semibold">
                  Blockchain Solutions{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-non">
                      -&gt;
                    </span>
                  </h2>
                  <p className="max-w-[30ch] text-sm opacity-50">
                  Secure technology for your business.</p>
                </div>
              </a>
      </div>
    </main>
  );
}
