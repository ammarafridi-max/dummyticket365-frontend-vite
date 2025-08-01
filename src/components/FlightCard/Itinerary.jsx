import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { formatISODuration } from '../../utils/formatISODuration';
import { formatISOTime } from '../../utils/formatISOTime';
import { VIEWTRIP_URL } from '../../config';

export default function Itinerary({ itinerary, airlineInfo }) {
  return (
    <div className="w-full bg-white py-4 flex items-center justify-between md:justify-center gap-6 md:gap-10 nth-of-type-[2]:border-t-1 nth-of-type-[2]:border-t-gray-300">
      <div className="w-[60px] h-[60px] flex flex-col justify-center align-middle">
        <img
          src={`${VIEWTRIP_URL}${airlineInfo.logo}` || ''}
          alt={`${airlineInfo.commonName} Logo`}
          className="object-contain"
        />
      </div>
      <div className="flex items-center justify-between md:justify-center gap-3 md:gap-8 font-nunito">
        <DepartureData itinerary={itinerary} />
        <Duration itinerary={itinerary} />
        <ReturnData itinerary={itinerary} />
      </div>
    </div>
  );
}

function DepartureData({ itinerary }) {
  return (
    <div className="w-[80px] text-left md:text-center text-md md:text-lg font-bold leading-4.5">
      {itinerary?.segments[0].departure.iataCode}
      <br />
      <span className="text-[13px] md:text-[14px] font-light">
        {formatISOTime(itinerary?.segments[0].departure.at).date}
      </span>
      <br />
      <span className="text-[13px] md:text-[14px] font-light">
        {formatISOTime(itinerary?.segments[0].departure.at).time}
      </span>
    </div>
  );
}

function ReturnData({ itinerary }) {
  return (
    <div className="w-[80px] text-right md:text-center text-md md:text-lg font-bold leading-4.5">
      {itinerary.segments[itinerary.segments.length - 1].arrival.iataCode}
      <br />
      <span className="text-[13px] md:text-[14px] font-light">
        {
          formatISOTime(
            itinerary.segments[itinerary.segments.length - 1].arrival.at
          ).date
        }
      </span>
      <br />
      <span className="text-[13px] md:text-[14px] font-light">
        {
          formatISOTime(
            itinerary.segments[itinerary.segments.length - 1].arrival.at
          ).time
        }
      </span>
    </div>
  );
}

function Duration({ itinerary }) {
  return (
    <div className="w-fit h-fit text-center text-gray-400 text-[12px] md:text-sm font-nunito">
      <span>{formatISODuration(itinerary.duration)}</span>
      <p className="flex align-middle justify-center">
        <FaArrowRightLong />
      </p>
      <span>
        {itinerary.segments.length === 1 && 'Non-Stop'}
        {itinerary.segments.length === 2 &&
          `Stops in ${itinerary.segments.at(0).arrival.iataCode}`}
        {itinerary.segments.length >= 3 && 'Multiple Stops'}
      </span>
    </div>
  );
}
