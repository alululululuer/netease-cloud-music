import NavLink from "./NavLink";

const menus = [
  { slug: "explore", display: "发现音乐" },
  { slug: "podcast", display: "播客" },
  { slug: "video", display: "视频" },
];

const Sidebar = () => {
  return (
    <div className="hidden bg-white lg:block w-[15rem] p-2">
      <div className="flex flex-col gap-1">
        {menus.map(({ slug, display }) => (
          <NavLink
            key={slug}
            slug={slug}
            defaultStyle="p-2 hover:bg-slate-100"
            activeStyle="bg-slate-100 font-semibold text-lg"
          >
            {display}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
