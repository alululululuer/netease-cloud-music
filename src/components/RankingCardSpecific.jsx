"use client";

import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

import { fetcher } from "@/api/fetcher";
import RankingTracks from "./RankingTracks";

const RankingCardSpecific = ({ id, name, updateFrequency, coverImgUrl, updateTime }) => {
  const { data, error, isLoading } = useSWR(
    `https://music-api.alululululuer.com/playlist/detail?id=${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const date = format(updateTime, "MM月dd日更新");

  return (
    <article className="bg-white rounded-lg p-4 grid gap-2">
      <div className="flex justify-between items-center sm:hidden">
        <h3 className="font-bold text-lg">{name}</h3>
        <p>{updateFrequency}</p>
      </div>
      <div className="grid grid-cols-[auto_1fr] md:grid-rows-[auto_auto] gap-x-2 md:gap-x-6 gap-y-2">
        <div className="relative w-28 sm:w-36 md:w-40 xl:w-48">
          <Image
            src={coverImgUrl}
            alt={name}
            width={240}
            height={240}
            className="h-full "
          />
          <p className="absolute left-1/2 -translate-x-1/2 bottom-1/4 text-sm text-white truncate">
            {date}
          </p>
        </div>

        <RankingTracks
          tracks={data?.playlist?.tracks.slice(0, 5)}
          trackIds={data?.playlist?.trackIds.slice(0, 5)}
        />

        <Link href={`/playlist/${id}`} className="hidden md:block col-start-2">
          查看全部
        </Link>
      </div>
    </article>
  );
};
export default RankingCardSpecific;
