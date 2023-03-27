"use client";

import { useState } from "react";

import RadioButton from "@/components/RadioButton";

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

const ExploreArtists = () => {
  //歌手语种
  const [area, setArea] = useState(-1);
  //歌手分类
  const [type, setType] = useState(-1);
  //歌手字母索引
  const [initial, setInitial] = useState(-1);

  console.log(`area=${area} type=${type} initial=${initial}`);

  return (
    <section className="grid gap-4">
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
    </section>
  );
};
export default ExploreArtists;
