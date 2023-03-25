import NavLink from "./NavLink";

const tabs = [
  { slug: "recommend", display: "个性推荐" },
  { slug: "personalized", display: "专属订制" },
  { slug: "playlist", display: "歌单" },
  { slug: "ranking", display: "排行榜" },
  { slug: "artist", display: "歌手" },
  { slug: "newest", display: "最新音乐" },
];

const ExploreTab = () => {
  return (
    <div className="flex gap-4 py-2 items-center flex-wrap bg-white">
      {tabs.map(({ slug, display }) => (
        <NavLink
          key={slug}
          pathname="/explore"
          slug={slug}
          defaultStyle="p-2 text-sm md:text-base"
          activeStyle="font-semibold text-lg"
        >
          {display}
        </NavLink>
      ))}
    </div>
  );
};
export default ExploreTab;
