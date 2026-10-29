import React from 'react';
import { counterItems } from '../constants';
import CountUp from 'react-countup';

const AnimatedCounter = () => {
    const CountUpComponent = CountUp.default || CountUp;
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-500 rounded-lg p-10 flex flex-col justify-center items-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
         <CountUpComponent
            start={0}
            end={Number(item.value)}
            duration={2}
            suffix={item.suffix || ''}
        />
            </div>

            <div className="text-white-50 text-lg text-center my-5">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;