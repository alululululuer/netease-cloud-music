import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const HistoryButtons = () => {
  return (
    <div className="hidden text-white lg:flex gap-2">
      <Link
        href="/"
        className="w-7 h-7 bg-slate-900/[.2] rounded-full bordered flex items-center justify-center"
      >
        <MdKeyboardArrowLeft />
      </Link>
      <Link
        href="/"
        className="w-7 h-7 bg-slate-900/[.2] rounded-full bordered flex items-center justify-center"
      >
        <MdKeyboardArrowRight />
      </Link>
    </div>
  );
};
export default HistoryButtons;
