import Image from 'next/image';

export const Review = () => {
  return (
    <div className="grid gap-4 text-white">
      <div className="grid items-center">
        <span>0</span>
        <div className="flex justify-center gap-1">
          <Image src="/coffee.png" width={24} height={24} alt="" />
          <Image src="/coffee.png" width={24} height={24} alt="" />
          <Image src="/coffee.png" width={24} height={24} alt="" />
          <Image src="/coffee.png" width={24} height={24} alt="" />
          <Image src="/coffee.png" width={24} height={24} alt="" />
        </div>
        <span className="mt-2 text-xs font-semibold">Coffee</span>
      </div>
      <div className="grid items-center">
        <span>0</span>
        <div className="flex justify-center gap-1">
          <Image src="/location.png" width={24} height={24} alt="" />
          <Image src="/location.png" width={24} height={24} alt="" />
          <Image src="/location.png" width={24} height={24} alt="" />
          <Image src="/location.png" width={24} height={24} alt="" />
          <Image src="/location.png" width={24} height={24} alt="" />
        </div>
        <span className="mt-2 text-xs font-semibold">Location</span>
      </div>
      <div className="grid items-center">
        <span>0</span>
        <div className="flex justify-center gap-1">
          <Image src="/atmosphere.png" width={24} height={24} alt="" />
          <Image src="/atmosphere.png" width={24} height={24} alt="" />
          <Image src="/atmosphere.png" width={24} height={24} alt="" />
          <Image src="/atmosphere.png" width={24} height={24} alt="" />
          <Image src="/atmosphere.png" width={24} height={24} alt="" />
        </div>
        <span className="mt-2 text-xs font-semibold">Atmosphere</span>
      </div>
      <div className="grid items-center">
        <span>0</span>
        <div className="flex justify-center gap-1">
          <Image src="/service.png" width={24} height={24} alt="" />
          <Image src="/service.png" width={24} height={24} alt="" />
          <Image src="/service.png" width={24} height={24} alt="" />
          <Image src="/service.png" width={24} height={24} alt="" />
          <Image src="/service.png" width={24} height={24} alt="" />
        </div>
        <span className="mt-2 text-xs font-semibold">Service</span>
      </div>
      <div className="grid items-center">
        <span>0</span>
        <div className="flex justify-center gap-1">
          <Image src="/value.png" width={24} height={24} alt="" />
          <Image src="/value.png" width={24} height={24} alt="" />
          <Image src="/value.png" width={24} height={24} alt="" />
          <Image src="/value.png" width={24} height={24} alt="" />
          <Image src="/value.png" width={24} height={24} alt="" />
        </div>
        <span className="mt-2 text-xs font-semibold">Value</span>
      </div>
    </div>
  );
};
