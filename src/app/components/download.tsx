import Image from "next/image";

const Download = () => {
  return (
    <div>
      <div className="relative mt-[60px] h-[280px]">
        <Image
          src={"/Rectangle 18.png"}
          alt="download image"
          className="w-full h-[280px]"
          width={1240}
          height={280}
        />

        <div className="absolute top-0 flex items-center justify-between">
          <div className="ml-[60px]">
            <p className="font-semibold text-[28px] text-[#FFFFFF]">
              Download the mobile application for bonus
              <br />
              coupons and travel codes
            </p>
            <button className="mt-[30px] text-[#FFF] rounded-[6px] px-[18px] py-[12px] bg-[#2F80ED]">
              Download mobile app
            </button>
          </div>
          <Image
            src={"/Isolated_right_hand_with_smartphone 1.png"}
            className=""
            width={828}
            height={684}
            alt="smartphone"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-[16px] mt-[80px]">
        <p className="text-[28px]">Explore the world with My Dream place</p>
        <p className="text-[#2F80ED]">Discover new places and experiences</p>
      </div>
    </div>
  );
};

export default Download;
