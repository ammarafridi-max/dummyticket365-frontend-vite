export default function InputWithIcon({ icon, className = '', type = 'text', ...props }) {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute inset-y-0 left-4 md:left-3 flex items-center text-gray-800 ">
          <span className="text-lg">{icon}</span>
        </div>
      )}
      <input
        className="w-[100%] bg-white text-[13px] md:text-[14px] py-3 px-3 pl-12 md:pl-10 outline-none placeholder:text-gray-400 placeholder:text-[14px] rounded-lg border-[1.5px] border-gray-300"
        {...props}
      />
    </div>
  );
}
