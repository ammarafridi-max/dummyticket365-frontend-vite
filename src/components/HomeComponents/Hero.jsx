import { motion } from 'framer-motion';
import TicketForm from './TicketForm';
import Container from '../Container';
import PrimarySection from '../PrimarySection';

export default function Hero({
  title = 'Dummy Ticket For Visas & Onward Travel From $13.',
  subtitle = 'Get a verifiable dummy ticket for visa applications, onward travel and immigration checks. Includes a valid PNR that works for airlines and border control.',
}) {
  return (
    <PrimarySection className="bg-gray-50 py-7 md:py-12" id="form">
      <Container className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 text-left"
        >
          <h1 className="text-[28px] lg:text-[40px] leading-10 lg:leading-14 font-semibold font-outfit text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-[16px] lg:text-[18px] text-gray-900/60 font-outfit font-light leading-7">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[45%]"
        >
          <TicketForm />
        </motion.div>
      </Container>
    </PrimarySection>
  );
}
