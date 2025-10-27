import { IoIosRemove, IoIosAdd } from 'react-icons/io';

export default function Counter({ ageGroup, age, onAdd, onSubtract, value }) {
  return (
    <div className="w-full flex items-center mt-3 md:w-[33%] md:block md:mt-1">
      <div className="w-[55%] md:w-full text-left md:text-center text-[14px] md:text-[14px]  p-0 m-0 mb-1.25 font-semibold font-nunito">
        {ageGroup}
        <span className="text-gray-500 font-medium text-[14px] ml-1">
          {age}
        </span>
      </div>
      <div className="w-[45%] md:w-full flex justify-between items-center py-2.5 px-3 bg-white rounded-lg border-[1.5px] border-gray-300">
        <IoIosRemove
          onClick={onSubtract}
          className="text-[20px] cursor-pointer"
        />
        <p className="m-0 p-0 text-[13px] md:text-[14px]">{value}</p>
        <IoIosAdd onClick={onAdd} className="text-[20px] cursor-pointer" />
      </div>
    </div>
  );
}
