import Image from "next/image";
import docker from "../../../public/docker.svg";
import appWrite from "../../../public/appWrite.svg";
import digitalOcean from "../../../public/digitalOcean.svg";

export default function PresentedBy() {
  return (
    <div className="flex max-sm:flex-col opacity-80 gap-[26px] items-end max-sm:items-center mt-4">
      <div className="text-white/60 sm:text-2xl font-medium uppercase leading-tight mb-[-4px]">
        Presented by
      </div>
      <div className="flex gap-[25px] items-end flex-wrap max-sm:flex-col max-sm:items-center">
        <Image src={digitalOcean} alt="docker" />
        <Image src={appWrite} alt="docker" />
        <Image src={docker} alt="docker" />
      </div>
    </div>
  );
}
