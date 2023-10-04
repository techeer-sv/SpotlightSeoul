import Lottie from 'lottie-react';

import lottie from '../assets/lottie';

function Banner() {
  return (
    <div className="bg-[#FFDB59] ">
      <div className="flex h-60">
        <div className="mx-auto ml-6 sm:ml-20 ">
          {/* 배너 텍스트 */}
          <p className="mt-8 font-LexendDeca font-bold text-zinc-800 sm:mt-14 lg:text-3xl xl:text-4xl ">
            서울 축제, 공연 정보는 모두 여기에!
          </p>
          <p className="sm:text-md mr-10 mt-6 shrink-0 font-LexendDeca font-bold text-stone-800 md:text-lg lg:text-xl xl:text-2xl">
            원하는 공연을 “Spotlight Seoul”에서 찾아보세요
          </p>
        </div>
        {/* 로띠 애니메이션 */}
        <Lottie
          className="mx-auto hidden bg-subbanner pb-20 sm:block sm:h-80 sm:min-h-56 sm:w-80"
          animationData={lottie}
          data-testid="lottie-animation"
        />
      </div>
    </div>
  );
}

export default Banner;
