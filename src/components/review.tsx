import Image from 'next/image';

export const Review = () => {
  return (
    <div className="grid gap-8 text-white">
      <div className="grid items-center">
        <div className="flex justify-center gap-2">
          <Image src="/coffee.png" width={48} height={48} alt="" />
          <Image src="/coffee.png" width={48} height={48} alt="" />
          <Image src="/coffee.png" width={48} height={48} alt="" />
          <Image src="/coffee.png" width={48} height={48} alt="" />
          <Image src="/coffee.png" width={48} height={48} alt="" />
        </div>
        <span className="mt-2 text-xs font-semibold">Coffee</span>
      </div>
      <div className="grid items-center">
        <div className="flex justify-center gap-2">
          <Image src="/location.png" width={48} height={48} alt="" />
          <Image src="/location.png" width={48} height={48} alt="" />
          <Image src="/location.png" width={48} height={48} alt="" />
          <Image src="/location.png" width={48} height={48} alt="" />
          <Image src="/location.png" width={48} height={48} alt="" />
        </div>
        <span className="mt-2 text-xs font-semibold">Location</span>
      </div>
      <div className="grid items-center">
        <div className="flex justify-center gap-2">
          <Image src="/atmosphere.png" width={48} height={48} alt="" />
          <Image src="/atmosphere.png" width={48} height={48} alt="" />
          <Image src="/atmosphere.png" width={48} height={48} alt="" />
          <Image src="/atmosphere.png" width={48} height={48} alt="" />
          <Image src="/atmosphere.png" width={48} height={48} alt="" />
        </div>
        <span className="mt-2 text-xs font-semibold">Atmosphere</span>
      </div>
      <div className="grid items-center">
        <div className="flex justify-center gap-2">
          <Image src="/service.png" width={48} height={48} alt="" />
          <Image src="/service.png" width={48} height={48} alt="" />
          <Image src="/service.png" width={48} height={48} alt="" />
          <Image src="/service.png" width={48} height={48} alt="" />
          <Image src="/service.png" width={48} height={48} alt="" />
        </div>
        <span className="mt-2 text-xs font-semibold">Service</span>
      </div>
      <div className="grid items-center">
        <div className="flex justify-center gap-2">
          <Image src="/value.png" width={48} height={48} alt="" />
          <Image src="/value.png" width={48} height={48} alt="" />
          <Image src="/value.png" width={48} height={48} alt="" />
          <Image src="/value.png" width={48} height={48} alt="" />
          <Image src="/value.png" width={48} height={48} alt="" />
        </div>
        <span className="mt-2 text-xs font-semibold">Value</span>
      </div>
    </div>
  );
};
