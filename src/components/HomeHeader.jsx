import Link from "next/link";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

import HomeSearch from "./HomeSearch";
import HistoryButtons from "./HistoryButtons";

const HomeHeader = () => {
  return (
    <header className="bg-red-500 py-4 px-4 flex items-center justify-between gap-4">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-1 text-white lg:w-[15rem]">
        <RiNeteaseCloudMusicFill className="text-3xl" />
        <h1 className="hidden md:block text-xl">网易云音乐</h1>
      </Link>

      {/* SearchBox */}
      <div className="flex-grow flex gap-2 items-center ">
        <HistoryButtons />
        <HomeSearch />
      </div>

      {/* Mobile Menu */}
      <FiMenu className="text-3xl text-white md:hidden" />
    </header>
  );
};
export default HomeHeader;
