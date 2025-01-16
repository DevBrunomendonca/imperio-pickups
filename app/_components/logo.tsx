import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo-imperio.png"
        alt="Logo império das pickups"
        width={245}
        height={65}
      />
    </Link>
  );
};

export default Logo;
