"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ExplorePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/explore/recommend");
  }, []);
  return <div>ExplorePage</div>;
};
export default ExplorePage;
