export default function Container({ children, className }) {
  return (
    <div className={`max-w-7xl w-[90%] md:w-[85%] lg:w-[80%] mx-auto ${className}`}>{children}</div>
  );
}
