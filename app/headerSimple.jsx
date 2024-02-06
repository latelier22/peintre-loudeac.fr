"use client";
import { useEffect } from "react";
import { menuItems, site } from "./site";
import Title from "./TitleLine";

const HeaderSimple = ({ photos, title }) => {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTE } = await import("tw-elements");
      initTE({ Tooltip });
    };
    init();
  }, []);

  return (
    <header>
      <div className="text-center text-neutral-200 dark:bg-neutral-900 dark:text-neutral-200">
        <div className="flex flex-col  lg:flex-row first-letter:lg:justify-around  justify-center items-center">
          <div className="  md:block lg:self-start">
            <img
              src={site.Logo.url}
              className=" rounded-2xl mx-4 mt-12 p-4 w-40 lg:w-72 h-auto "
              alt=""
            />
          </div>
          <div className="flex-col justify-between">
            {/* <h1 className="mb-6 text-gold-600  text-5xl font-bold"> */}
            <h1 className="font-bold text-transparent mt-8 text-5xl bg-clip-text bg-gradient-to-br from-gold-800 via-gold-400 to-gold-800">
              <br className="hidden md:block"/>
              Tous travaux de peinture extérieure
            </h1>
            <div className="flex flex-col  justify-around items-center">
              <h3 className="my-8 text-gold-200 text-3xl font-bold">
                Loudéac et ses alentours
              </h3>
              <a
                className="md:self-stop rounded-2xl h-16 bg-black px-6  py-3 text-2xl font-medium uppercase leading-normal text-gold-200 shadow-[0_4px_9px_-4px_#FFB200] transition duration-150 ease-in-out hover:text-black hover:bg-gold-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gold-200 focus:shadow-[0_8px_9px_-4px_rgba(59,113,0,0.3),0_4px_18px_0_rgba(59,113,0,0.2)] focus:text-gold-500 focus:outline-none focus:ring-0 active:bg-lime-100 active:shadow-[0_8px_9px_-4px_rgba(59,113,0,0.3),0_4px_18px_0_rgba(59,113,0,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="/contact"
                role="button"
              >
                Nous contacter
              </a>
            </div>
          </div>
          
        </div>
        
        <Title title={title} />
      </div>
      
    </header>
  );
};

export default HeaderSimple;
