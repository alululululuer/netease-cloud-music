"use client";

import useSWR from "swr";

import { fetcher } from "@/api/fetcher";
import RankingCardSpecific from "@/components/RankingCardSpecific";
import RankingCardSimple from "@/components/RankingCardSimple";

const ExploreRanking = () => {
  const { data, error, isLoading } = useSWR(
    "https://music-api.alululululuer.com/toplist",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="container">
      <section className="py-6">
        <h2 className="text-xl font-bold py-2">官方榜</h2>
        <div className="grid gap-4">
          {data.list?.slice(0, 4).map((item) => (
            <RankingCardSpecific
              key={item.id}
              id={item.id}
              name={item.name}
              updateFrequency={item.updateFrequency}
              coverImgUrl={item.coverImgUrl}
              updateTime={item.updateTime}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold py-2">全球榜</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.list?.slice(4).map((item) => (
            <RankingCardSimple
              key={item.id}
              id={item.id}
              name={item.name}
              coverImgUrl={item.coverImgUrl}
              playCount={item.playCount}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
export default ExploreRanking;
