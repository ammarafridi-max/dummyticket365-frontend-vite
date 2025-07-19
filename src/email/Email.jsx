import { render } from '@react-email/components';
import nodemailer from 'nodemailer';

const senderEmail = import.meta.env.SENDER_EMAIL;
const senderPassword = import.meta.env.SENDER_PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: senderEmail,
    pass: senderPassword,
  },
});

const emailHtml = await render(<Email />);

const options = {
  from: 'info@dummyticket365.com',
  to: 'info@dummyticket365.com',
  subject: 'Hello',
  html: emailHtml,
};

await transporter.sendMail(options);

export default function Email(data) {
  return (
    <div class="bg-gray-100">
      <div class="w-full max-w-[700px] my-10 mx-auto px-5 md:p-0">
        <div class="box rounded-lg">
          <h3>Important Information</h3>
          <div class="flex items-center justify-between mb-1">
            <p class="w-[50%] md:w-[40%] text-md font-normal">Type:</p>
            <p class="w-[50%] md:w-[60%] text-md font-light">${type}</p>
          </div>
          <div class="flex items-center justify-between mb-1">
            <p class="w-[50%] md:w-[40%] text-md md:text-lg font-normal">
              Submission Date:
            </p>
            <p class="w-[50%] md:w-[60%] text-md md:text-lg font-light">
              ${formatDate(submittedOn)}
            </p>
          </div>
          <div class="flex items-center justify-between mb-1">
            <p class="w-[50%] md:w-[40%] text-md md:text-lg font-normal">
              Submission Time:
            </p>
            <p class="w-[50%] md:w-[60%] text-md md:text-lg font-light">
              ${formatDubaiTime(submittedOn)}
            </p>
          </div>
          <div class="flex items-center justify-between mb-1">
            <p class="w-[50%] md:w-[40%] text-md md:text-lg font-normal">
              Lead Traveler:
            </p>
            <p class="w-[50%] md:w-[60%] text-md md:text-lg font-light">
              ${passengers[0].title} ${passengers[0].firstName}$
              {passengers[0].lastName}
            </p>
          </div>
          <div class="flex items-center justify-between mb-1">
            <p class="w-[50%] md:w-[40%] text-md md:text-lg font-normal">
              Email:
            </p>
            <p class="w-[50%] md:w-[60%] text-md md:text-lg font-light">
              ${email}
            </p>
          </div>
          <div class="flex items-center justify-between mb-1">
            <p class="w-[50%] md:w-[40%] text-md md:text-lg font-normal">
              Number:
            </p>
            <p class="w-[50%] md:w-[60%] text-md md:text-lg font-light">
              ${number}
            </p>
          </div>
          <div class="flex items-center justify-between mb-1">
            <p class="w-[50%] md:w-[40%] text-md md:text-lg font-normal">
              Delivery Preference:
            </p>
            <p class="w-[50%] md:w-[60%] text-md md:text-lg font-light">
              $
              {ticketAvailability
                ? 'Immediate'
                : formatDate(ticketAvailabilityDate)}
            </p>
          </div>
          <div class="flex items-center justify-between mb-1">
            <p class="w-[50%] md:w-[40%] text-md md:text-lg font-normal">
              Validity:
            </p>
            <p class="w-[50%] md:w-[60%] text-md md:text-lg font-light">
              ${ticketValidity}
            </p>
          </div>
          <div class="flex items-center justify-between mb-1">
            <p class="w-[50%] md:w-[40%] text-md md:text-lg font-normal">
              Message:
            </p>
            <p class="w-[50%] md:w-[60%] text-md md:text-lg font-light">
              ${message ? message : ''}
            </p>
          </div>
        </div>

        <div class="box">
          <h3>Routes & Dates</h3>
          <div class="flex items-center justify-between mb-1">
            <p class="w-[50%] md:w-[40%] text-md md:text-lg font-normal">
              From:
            </p>
            <p class="w-[50%] md:w-[60%] text-md md:text-lg font-light">
              ${from}
            </p>
          </div>
          <div class="flex items-center justify-between mb-1">
            <p class="w-[50%] md:w-[40%] text-md md:text-lg font-normal">To:</p>
            <p class="w-[50%] md:w-[60%] text-md md:text-lg font-light">
              ${to}
            </p>
          </div>
          <div class="flex items-center justify-between mb-1">
            <p class="w-[50%] md:w-[40%] text-md md:text-lg font-normal">
              Departure:
            </p>
            <p class="w-[50%] md:w-[60%] text-md md:text-lg font-light">
              ${formatDate(departureDate)}
            </p>
          </div>
          <div class="flex items-center justify-between mb-1">
            <p class="w-[50%] md:w-[40%] text-md md:text-lg font-normal">
              Return:
            </p>
            <p class="w-[50%] md:w-[60%] text-md md:text-lg font-light">
              ${formatDate(returnDate)}
            </p>
          </div>
        </div>

        <div class="box">
          <h3>Travelers</h3>
          <div class="block md:grid md:grid-cols-2">
            <div class="flex gap-3">
              <p class="w-fit font-semibold text-md md:text-lg">(Adult)</p>
              <p class="w-fit font-light text-md md:text-lg">
                Mr. Ammar Afridi
              </p>
            </div>
            <div class="flex gap-3">
              <p class="w-fit font-semibold text-md md:text-lg">(Adult)</p>
              <p class="w-fit font-light text-md md:text-lg">Mr. Omar Afridi</p>
            </div>
          </div>
        </div>

        <div class="block md:grid md:grid-cols-2 md:gap-5">
          <div class="box">
            <h3>Departure Flight</h3>
            <div class="w-full">
              <div class="flex gap-5 items-center mb-3">
                <img
                  class="w-[70px] h-[70px] object-contain"
                  src="http://localhost:3002/uploads/EK.png"
                />
                <div class="leading-6">
                  <p class="font-semibold mb-[-2px]">Emirates</p>
                  <p class="font-light">EK 17</p>
                </div>
              </div>
              <div class="flex">
                <p class="w-[30%] text-md md:text-lg font-medium">From:</p>
                <p class="w-fit text-md md:text-lg font-light">DXB</p>
              </div>
              <div class="flex">
                <p class="w-[30%] text-md md:text-lg font-medium">To:</p>
                <p class="w-fit text-md md:text-lg font-light">LHR</p>
              </div>
              <div class="flex">
                <p class="w-[30%] text-md md:text-lg font-medium">Date:</p>
                <p class="w-fit text-md md:text-lg font-light">14 September</p>
              </div>
              <div class="flex">
                <p class="w-[30%] text-md md:text-lg font-medium">Stops:</p>
                <p class="w-fit text-md md:text-lg font-light">Non-stop</p>
              </div>
            </div>
          </div>

          <div class="box">
            <h3>Return Flight</h3>
            <div class="w-full">
              <div class="flex gap-5 items-center mb-3">
                <img
                  class="w-[70px] h-[70px] object-contain"
                  src="http://localhost:3002/uploads/EK.png"
                />
                <div class="leading-6">
                  <p class="font-semibold mb-[-2px]">Emirates</p>
                  <p class="font-light">EK 17</p>
                </div>
              </div>
              <div class="flex">
                <p class="w-[30%] text-md md:text-lg font-medium">From:</p>
                <p class="w-fit text-md md:text-lg font-light">DXB</p>
              </div>
              <div class="flex">
                <p class="w-[30%] text-md md:text-lg font-medium">To:</p>
                <p class="w-fit text-md md:text-lg font-light">LHR</p>
              </div>
              <div class="flex">
                <p class="w-[30%] text-md md:text-lg font-medium">Date:</p>
                <p class="w-fit text-md md:text-lg font-light">14 September</p>
              </div>
              <div class="flex">
                <p class="w-[30%] text-md md:text-lg font-medium">Stops:</p>
                <p class="w-fit text-md md:text-lg font-light">Non-stop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
