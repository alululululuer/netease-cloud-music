import Link from "next/link";
import Image from "next/image";

import { formatPlayCount } from "@/util/util";

const RankingCardSimple = ({ id, name, coverImgUrl, playCount }) => {
  return (
    <div className="">
      <Link href={`/playlist/${id}`} className="relative">
        <Image src={coverImgUrl} width={300} height={300} alt={name} />
        <p className="absolute right-2 top-2 text-white">{formatPlayCount(playCount)}</p>
      </Link>
      <Link href={`/playlist/${id}`}>
        <h3 className="truncate">{name}</h3>
      </Link>
    </div>
  );
};
export default RankingCardSimple;
