import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";

const AccountLink = ({ id }) => {
  return (
    <Link
      href={`/user/${id}`}
      className="rounded-full w-4 h-4 bg-red-500 text-white flex justify-center items-center"
    >
      <AiOutlineUser />
    </Link>
  );
};
export default AccountLink;
