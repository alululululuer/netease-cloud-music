import { BiSearch } from "react-icons/bi";

const HomeSearch = () => {
  return (
    <form className="flex items-center gap-2 bg-slate-900/[.1] max-w-xs rounded-full py-2 px-4">
      <BiSearch className="text-white text-xl" />
      <input
        type="text"
        className="w-full bg-transparent focus:outline-none text-white"
      />
    </form>
  );
};
export default HomeSearch;
