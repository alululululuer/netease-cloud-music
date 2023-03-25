import ExploreTab from "@/components/ExploreTab";

export default function ExploreLayout({ children }) {
  return (
    <div>
      <ExploreTab />
      {children}
    </div>
  );
}
