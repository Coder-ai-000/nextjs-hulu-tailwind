import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Headeritem from "./Headeritem";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      {/* <h1 className="">This is the header</h1> */}
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Headeritem title="HOME" Icon={HomeIcon} />
        <Headeritem title="TRENDING" Icon={LightningBoltIcon} />
        <Headeritem title="VERFIED" Icon={BadgeCheckIcon} />
        <Headeritem title="COLLECTIONS" Icon={CollectionIcon} />
        <Headeritem title="SEARCH" Icon={SearchIcon} />
        <Headeritem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Link href="/">
        <a>
          <Image
            className="object-contain"
            src="https://links.papareact.com/ua6"
            width={200}
            height={100}
            href="http://localhost:3000/"
          />
        </a>
      </Link>
    </header>
  );
}
