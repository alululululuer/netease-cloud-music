"use client";

import { useState } from "react";

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

const ExploreArtists = () => {
  //歌手语种
  const [area, setArea] = useState(-1);

  return (
    <div>
      <section className="flex gap-2 text-sm">
        <p>语种：</p>
        <div>
          <input
            type="radio"
            id="area-all"
            name="area"
            value="-1"
            className="hidden peer"
            defaultChecked
          />
          <label
            htmlFor="area-all"
            className="radio peer-checked:radio--active"
            onClick={() => setArea(-1)}
          >
            全部
          </label>
        </div>
        {areas.map((item, index) => (
          <div key={index}>
            <input
              type="radio"
              id={item.id}
              name="area"
              value={item.value}
              className="hidden peer"
            />
            <label
              htmlFor={item.id}
              className="radio peer-checked:radio--active"
              onClick={() => setArea(item.value)}
            >
              {item.label}
            </label>
          </div>
        ))}
        <p>{area}</p>
      </section>
    </div>
  );
};
export default ExploreArtists;
