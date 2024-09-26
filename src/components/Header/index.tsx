import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemMenu } from "./itemMenu";

export function Header() {
  return (
    <header className="sticky w-full h-20 top-0 z-50 bg-white border border-b-gray-100 flex items-center">
      <GridContainer className="flex items-center justify-between gap-10">
        <div className="w-full xl:w-auto flex items-center justify-between gap-10">
          <Image
            src="logo.svg"
            width={142}
            height={32}
            alt="Logo Untitled UI"
          />
        </div>
        <nav className="hidden xl:flex items-center gap-8">
          <ItemMenu url="/" title="Home" />
          <ItemMenu url="#" title="Products" hasDropdown />
          <ItemMenu url="#" title="Resources" hasDropdown />
          <ItemMenu url="#" title="Pricing" />
        </nav>
        <button>
          <Image
            src="/menu.svg"
            width={40}
            height={40}
            alt="Menu Hambúrguer"
            className="block xl:hidden"
          />
        </button>
        <div>
          <Image
            src="/avatar.svg"
            width={40}
            height={40}
            alt="Avatar"
            className="hidden xl:block"
          />
        </div>
      </GridContainer>
    </header>
  );
}
