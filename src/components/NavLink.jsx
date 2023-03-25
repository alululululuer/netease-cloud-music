"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const NavLink = ({ children, pathname, slug, defaultStyle, activeStyle }) => {
  const segment = useSelectedLayoutSegment();
  const isActive = slug === segment;
  const className = isActive ? defaultStyle + " " + activeStyle : defaultStyle;

  return (
    <Link href={`${pathname ? pathname + "/" + slug : `/${slug}`}`} className={className}>
      {children}
    </Link>
  );
};
export default NavLink;
