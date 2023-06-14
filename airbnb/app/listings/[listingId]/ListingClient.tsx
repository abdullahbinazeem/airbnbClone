import { useMemo } from "react";

import { Reservation } from "@prisma/client";

import { SafeListing } from "@/app/types";
import { SafeUser } from "@/app/types";
import { categories } from "@/app/components/navbar/Categories";

interface ListingClientProps {
  reservation?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing]);

  return <div>Listing Client</div>;
};

export default ListingClient;
