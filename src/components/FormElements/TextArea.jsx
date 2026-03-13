import { forwardRef } from 'react';

const TextArea = forwardRef(function TextArea({ className = '', rows = 4, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={`w-full bg-white border border-gray-300 px-3 py-2 rounded-lg font-light text-[14.5px] outline-0 duration-300 placeholder:text-gray-500 ${className}`}
      {...props}
    />
  );
});

export default TextArea;
