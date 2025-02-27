"use client";

import { AlignJustify, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../_components/ui/sheet";
import { Button } from "../../_components/ui/button";
import Logo from "../../_components/logo";
import { useCallback, useEffect, useState } from "react";

const HeaderInvestments = () => {
  const [sheetIsOpen, setSheetIsOpen] = useState<boolean>(false);

  const handleResize = useCallback(() => {
    setSheetIsOpen(window.innerWidth > 768 && false);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handleCloseSheet = () => {
    setSheetIsOpen(false);
  };

  return (
    <header
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      className="fixed z-50 flex justify-between top-0 left-0 py-2 px-4 w-full bg-black bg-opacity-60"
    >
      <div className="flex w-full gap-4 items-center justify-between max-w-6xl mx-auto">
        <Logo />

        <nav className="md:flex hidden  max-w-6xl gap-3 mx-auto justify-center w-full">
          <ul className="flex items-center justify-center gap-5">
            <a href="#home">
              <li className="text-sm text-white cursor-pointer hover:text-color-yellow duration-500 ease-in-out font-medium">
                Início
              </li>
            </a>
            <a href="#our-structure">
              <li className="text-sm text-white cursor-pointer hover:text-color-yellow duration-500 ease-in-out font-medium">
                Nossa estrutura
              </li>
            </a>
            <a href="#about-us">
              <li className="text-sm text-white cursor-pointer hover:text-color-yellow duration-500 ease-in-out font-medium">
                Quem somos
              </li>
            </a>
            <a href="#contact">
              <li className="text-sm text-white cursor-pointer hover:text-color-yellow duration-500 ease-in-out font-medium">
                Contato
              </li>
            </a>
          </ul>
        </nav>

        <a
          href="https://wa.link/l7gq41"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="hidden text-black bg-color-yellow md:block">
            Fale com um especialista
          </Button>
        </a>

        <div className="block md:hidden">
          <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
            <SheetTrigger className="bg-black" asChild>
              <Button className="block md:hidden">
                <AlignJustify color="#FECA49" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black w-full border-none">
              <SheetHeader>
                <SheetTitle className="flex flex-row items-center justify-between w-full">
                  <Logo />
                  <SheetClose asChild>
                    <Button>
                      <X onClick={handleCloseSheet} color="#FECA49" />
                    </Button>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <SheetFooter className="flex h-full flex-col gap-5">
                <nav className="flex h-full flex-col  max-w-6xl gap-3 mx-auto justify-center w-full">
                  <ul className="flex h-full flex-col items-center justify-start pt-40 gap-8">
                    <a onClick={handleCloseSheet} href="#home">
                      <li className="text-white text-lg cursor-pointer hover:text-color-yellow duration-500 ease-in-out font-medium">
                        Início
                      </li>
                    </a>
                    <a onClick={handleCloseSheet} href="#our-structure">
                      <li className="text-white text-lg  cursor-pointer hover:text-color-yellow duration-500 ease-in-out font-medium">
                        Nossa estrutura
                      </li>
                    </a>
                    <a onClick={handleCloseSheet} href="#about-us">
                      <li className=" text-white text-lg  cursor-pointer hover:text-color-yellow duration-500 ease-in-out font-medium">
                        Quem somos
                      </li>
                    </a>
                    <a onClick={handleCloseSheet} href="#contact">
                      <li className="text-white text-lg  cursor-pointer hover:text-color-yellow duration-500 ease-in-out font-medium">
                        Contato
                      </li>
                    </a>
                  </ul>
                </nav>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default HeaderInvestments;
