"use client";

import { useState } from "react";
import useSWR from "swr";
import Link from "next/link";

import RadioButton from "@/components/RadioButton";
import { fetcher } from "@/api/fetcher";
import Card from "@/components/Card";
import AccountLink from "@/components/AccountLink";

const areas = [
  {
    id: "CHN",
    value: "7",
    label: "华语",
  },
  {
    id: "US",
    value: "96",
    label: "欧美",
  },
  {
    id: "JP",
    value: "8",
    label: "日本",
  },
  {
    id: "KP",
    value: "16",
    label: "韩国",
  },
  {
    id: "other-area",
    value: "0",
    label: "其他",
  },
];

const types = [
  {
    id: "man",
    value: "1",
    label: "男歌手",
  },
  {
    id: "female",
    value: "2",
    label: "女歌手",
  },
  {
    id: "band",
    value: "3",
    label: "乐队组合",
  },
];

const letters = Array.from(new Array(26), (element, index) => {
  const letter = String.fromCharCode(97 + index);

  return {
    id: `initial-${letter}`,
    value: letter,
    label: letter.toUpperCase(),
  };
});

const initials = [
  ...letters,
  {
    id: "initial-#",
    value: "0",
    label: "#",
  },
];

const ExploreArtists = ({ searchParams }) => {
  //歌手语种
  const [area, setArea] = useState(-1);
  //歌手分类
  const [type, setType] = useState(-1);
  //歌手字母索引
  const [initial, setInitial] = useState(-1);

  console.log(`area=${area} type=${type} initial=${initial}`);

  const { data, error, isLoading } = useSWR(
    `https://music-api.alululululuer.com/artist/list?type=${type}&area=${area}&initial=${initial}`,
    fetcher
  );

  if (data) {
    console.log(data);
  }

  return (
    <section className="grid gap-4 container">
      <div className="flex gap-2 flex-wrap text-sm">
        <p>语种：</p>
        <RadioButton
          id="area-all"
          name="area"
          value="-1"
          label="全部"
          onSelect={setArea}
          defaultChecked={true}
        />

        {areas.map((item, index) => (
          <RadioButton
            key={index}
            id={item.id}
            name="area"
            value={item.value}
            label={item.label}
            onSelect={setArea}
          />
        ))}
      </div>
      <div className="flex gap-2 flex-wrap text-sm">
        <p>分类：</p>
        <RadioButton
          id="type-all"
          name="type"
          value="-1"
          label="全部"
          onSelect={setType}
          defaultChecked={true}
        />

        {types.map((item, index) => (
          <RadioButton
            key={index}
            id={item.id}
            name="type"
            value={item.value}
            label={item.label}
            onSelect={setType}
          />
        ))}
      </div>
      <div className="flex gap-2 flex-wrap text-sm">
        <p>筛选：</p>
        <RadioButton
          id="initial-hot"
          name="initial"
          value="-1"
          label="热门"
          onSelect={setInitial}
          defaultChecked={true}
        />

        {initials.map((item, index) => (
          <RadioButton
            key={index}
            id={item.id}
            name="initial"
            value={item.value}
            label={item.label}
            onSelect={setInitial}
          />
        ))}
      </div>

      {isLoading && <div>loading...</div>}
      {error && <div>failed to load</div>}
      <div className="grid grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-4">
        {data?.artists?.map((item) => (
          <article key={item.id} className="space-y-2">
            <Card
              imgUrl={item.img1v1Url}
              url={`/artist/${item.id}`}
              name={item.name}
              className="rounded-lg"
            />

            <div className="flex justify-between items-center">
              <Link href={`/artist/${item.id}`}>
                <h2 className="truncate">{item.name}</h2>
              </Link>
              {item.accountId && <AccountLink id={item.accountId} />}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default ExploreArtists;
