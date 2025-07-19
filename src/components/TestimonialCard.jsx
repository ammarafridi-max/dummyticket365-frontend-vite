export default function TestimonialCard({ title, name, src, children, type }) {
  return (
    <div className="w-full bg-gray-100 rounded-lg overflow-hidden relative p-7.5">
      <h3 className="text-xl text-center font-bold font-merriweather">
        {title}
      </h3>
      <p className="text-center font-light text-md my-5">{children}</p>
      <p className="text-center text-gray-700 my-2.5 font-semibold">{name}</p>
      <div className="w-full flex justify-center">
        <img
          src={src}
          alt={`Testimonial by ${name} about My Dummy Ticket`}
          title={`Testimonial by ${name} about My Dummy Ticket`}
          className="w-15 h-15 rounded-full object-cover object-center mx-auto"
        />
      </div>
    </div>
  );
}
