import Link from "next/link";

const RankingTracks = ({ tracks, trackIds }) => {
  return (
    <div className="grid grid-rows-5 text-sm text-gray-400">
      {tracks.map((track, index) => (
        <div
          key={track.id}
          className="px-2 odd:bg-zinc-100 flex items-center  gap-2 [&:nth-child(-n+3)>span]:text-red-500 truncate"
        >
          <span>{index + 1}</span>
          <div className="hidden md:block text-xs">
            {trackIds[index]?.ratio ? trackIds[index]?.ratio + "%" : "-"}
          </div>
          <h4 className="text-neutral-800 md:flex-1 truncate">
            {track.name}{" "}
            <span className="text-gray-400 hidden md:inline">{track.alia[0]}</span>
          </h4>
          <div className="md:hidden">-</div>
          <p className="space-x-1 truncate">
            {track.ar.map((artist) => (
              <Link
                key={artist.id}
                href={`/artist/${artist.id}`}
                className="hover:text-neutral-800 after:content-['/'] last:after:content-['']"
              >
                {artist.name}
              </Link>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};
export default RankingTracks;
