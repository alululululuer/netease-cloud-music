import Link from "next/link";
import Image from "next/image";

const Card = ({ url, imgUrl, name, className }) => {
  return (
    <Link href={url}>
      <Image src={imgUrl} width={300} height={300} className={className} alt={name} />
    </Link>
  );
};
export default Card;
