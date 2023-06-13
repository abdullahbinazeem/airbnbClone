"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";

interface HeartButtonsProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonsProps> = ({
  listingId,
  currentUser,
}) => {
  const hasFavorited = false;
  const toggleFavoirte = () => {};

  return (
    <div
      onClick={toggleFavoirte}
      className="
            relative
            hover:opacity-80
            transition
            cursor-pointer
        "
    >
      <AiOutlineHeart
        size={28}
        className="
            fill-white
            absolute
            -top-[2px]
            -right-[2px]
        "
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;
