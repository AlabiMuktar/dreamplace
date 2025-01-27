import dreamlogo from "/public/bxs-plane-alt 1.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-[80px]">
      <div className="grid grid-cols-5">
        <div className="flex gap-x-[4px] col-span-1">
          <div className="">
            <Image
              src={dreamlogo}
              width={24}
              height={24}
              alt="dream place logo"
            />
          </div>
          <div className="flex flex-col gap-y-[6px]">
            <p className="text-[18px] font-semibold text-[#1B1F2D]">
              my Dream Place
            </p>
            <p className="text-[#4F4F4F]">
              Your next goto companion for travel
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <p className="text-[18px] font-semibold text-[#1B1F2D]">Company</p>
          <ul className="flex flex-col gap-y-[10px] text-[#4F4F4F] mt-[20px]">
            <li>About</li>
            <li>Jobs</li>
            <li>Newsroom</li>
            <li>Advertising</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="col-span-1">
          <p className="text-[18px] font-semibold text-[#1B1F2D]">Explore</p>
          <ul className="flex flex-col gap-y-[10px] text-[#4F4F4F] mt-[20px]">
            <li>Australia</li>
            <li>New Zealand</li>
            <li>USA</li>
            <li>Greece</li>
            <li>Maldives</li>
            <li>Singapore</li>
            <li className="text-[#2F80ED] cursor-pointer">See more</li>
          </ul>
        </div>
        <div className="col-span-1">
          <p className="text-[18px] font-semibold text-[#1B1F2D]">
            Terms and Policies
          </p>
          <ul className="flex flex-col gap-y-[10px] text-[#4F4F4F] mt-[20px]">
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Accessibility</li>
            <li>Reward system policy</li>
          </ul>
        </div>
        <div className="col-span-1">
        <p className="text-[18px] font-semibold text-[#1B1F2D]">Help</p>
          <ul className="flex flex-col gap-y-[10px] text-[#4F4F4F] mt-[20px]">
            <li>Support</li>
            <li>Cancel your bookings</li>
            <li>Use Coupon</li>
            <li>Refund Policies</li>
            <li>International Travel Documents</li>
          </ul>
        </div>
      </div>
      <div className="absolute flex items-center justify-center gap-x-[6px] left-0 right-0 h-[40px] bg-[#EBEBEB] mt-[60px] text-[#4F4F4F]">
      <p className="">©</p>
      <p>my Dream Place 2025</p>
      </div>
    </div>
  );
};

export default Footer;
