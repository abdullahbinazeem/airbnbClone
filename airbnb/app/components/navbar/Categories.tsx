"use client";

import Container from "../Container";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    description: "This is the beach category",
    icon: TbBeach,
  },
  {
    label: "Windmill",
    description: "This is the windmill category",
    icon: GiWindmill,
  },
  {
    label: "Villa",
    description: "This is the villa category",
    icon: MdOutlineVilla,
  },
  {
    label: "CountrySide",
    description: "This is the countrySide category",
    icon: TbMountain,
  },
  {
    label: "Pool",
    description: "This is the pool category",
    icon: TbPool,
  },
  {
    label: "Islands",
    description: "This is the island category",
    icon: GiIsland,
  },
  {
    label: "Lake",
    description: "This is the lake category",
    icon: GiBoatFishing,
  },
  {
    label: "Skiing",
    description: "This is the Skiing category",
    icon: FaSkiing,
  },
  {
    label: "Castle",
    description: "This is the castle category",
    icon: GiCastle,
  },
  {
    label: "Camping",
    description: "This is the camping category",
    icon: GiForestCamp,
  },
  {
    label: "Arctic",
    description: "This is the artic category",
    icon: BsSnow,
  },
  {
    label: "Cave",
    description: "This is the cave category",
    icon: GiCaveEntrance,
  },
  {
    label: "Desert",
    description: "This is the desert category",
    icon: GiCactus,
  },
  {
    label: "Barns",
    description: "This is the barn category",
    icon: GiBarn,
  },
  {
    label: "Lux",
    description: "This is the Luxury category",
    icon: IoDiamond,
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto"
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
