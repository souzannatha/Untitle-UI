import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemNav } from "./item-nav";
import {
  menuCompany,
  menuLegal,
  menuProducts,
  menuResources,
  menuSocial,
  menuUseCases,
} from "@/app/utils/data";

export function Footer() {
  return (
    <footer className="py-12 xl:pt-16">
      <GridContainer>
        <div className="grid grid-cols-2 gap-8 xl:gap-0 xl:flex items-start justify-between pb-2 xl:pb-16">
          <ItemNav title="Product" itemsMenu={menuProducts} />
          <ItemNav title="Company" itemsMenu={menuCompany} />
          <ItemNav title="Resources" itemsMenu={menuResources} />
          <ItemNav title="Use cases" itemsMenu={menuUseCases} />
          <ItemNav title="Social" itemsMenu={menuSocial} />
          <ItemNav title="Legal" itemsMenu={menuLegal} />
        </div>
        <div className="flex flex-col xl:flex-row items-start justify-between xl:items-center gap-6 xl:gap-0 border-t border-gray-200 pt-8">
          <Image src="logo.svg" width={142} height={32} alt="logo" />
          <p className="text-gray-500">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </GridContainer>
    </footer>
  );
}
