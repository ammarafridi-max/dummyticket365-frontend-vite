export default function Input({
  icon,
  className = '',
  type = 'text',
  ...props
}) {
  return (
    <input
      {...props}
      className={`w-[100%] bg-white font-medium text-[13px] md:text-[14px] py-2.5 px-3 rounded-lg outline-none placeholder:text-gray-400 placeholder:text-[14px] border-[1.5px] border-gray-300 ${className}`}
    />
  );
}
