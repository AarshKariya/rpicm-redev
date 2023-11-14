import Link from "next/link";
import React from "react";
import Image from "next/image";
import RpicmLogo from "@/images/logos/rpicmlogo.svg";
import KantiBhatt from "@/images/logos/kantibhatttest.svg";
import RandomJPG from "@/images/logos/random.jpg";

const Logo = () => {
  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vw",
        }}
      >
        <Image
          priority
          src={RandomJPG}
          alt="RPICM Website Logo"
          layout="fill"
          objectFit="cover"
          // width={1404}
          // height={922}
          // style={{ background: "black" }}
        />
      </div>
      <Link href="/">
        <Image
          priority
          src={RpicmLogo}
          alt="RPICM Website Logo"
          width={76}
          height={55}
          // style={{ background: "black" }}
        />
      </Link>
    </>
  );
};

export default Logo;
