import PrimarySection from '../components/PrimarySection';
import Container from '../components/Container';

const Title = ({ children }) => {
  return <h2 className="font-outfit text-2xl mt-5 mb-5 ">{children}</h2>;
};

export default function TermsAndConditions() {
  return (
    <PrimarySection className="py-10">
      <Container>
        <h1 className="text-3xl mb-5 font-outfit">Terms And Conditions</h1>

        <p className="font-extralight text-md">
          Welcome to Dummy Ticket 365! By using our website (https://www.dummyticket365.com), you
          agree to comply with and be bound by the following terms and conditions. Please read them
          carefully before using our services.
        </p>

        <Title>General Information</Title>

        <p className="font-extralight text-md">
          <ol className="list-inside list-disc">
            <li className="list-item">
              Dummy Ticket 365 provides travel-related services, including the provision of dummy
              tickets for visa applications and travel planning purposes.
            </li>
            <li>
              Our services are intended for legitimate use only. Misuse of our services for
              fraudulent activities is strictly prohibited and may result in legal action.
            </li>
          </ol>
        </p>

        <Title fontSize="small" mt="50px" mb="20px" fontWeight="400">
          Use Of Services
        </Title>

        <p className="font-extralight text-md">
          <ol className="list-inside list-disc">
            <li>
              By accessing or using our website, you warrant that you are at least 18 years old or
              have obtained parental consent to use the site.
            </li>
            <li>
              You agree to use our services only for lawful purposes and in accordance with these
              Terms and Conditions.
            </li>
            <li>
              You acknowledge that the dummy tickets provided are not actual tickets and cannot be
              used for boarding or any other purpose beyond their intended use.
            </li>
          </ol>
        </p>

        <Title fontSize="small" mt="50px" mb="20px" fontWeight="400">
          Payments and Refunds
        </Title>

        <p className="font-extralight text-md">
          <ol className="list-inside list-disc">
            <li>
              All payments for services must be made via the payment methods available on our
              website.
            </li>
            <li>
              Payments are non-refundable except in cases of system errors where the service was not
              delivered as described.
            </li>
            <li>
              If you encounter any issues with your order, you must contact us within 24 hours of
              purchase.
            </li>
          </ol>
        </p>

        <Title fontSize="small" mt="50px" mb="20px" fontWeight="400">
          User Responsibilities
        </Title>

        <p className="font-extralight text-md">
          <ol className="list-inside list-disc">
            <li>
              You are responsible for providing accurate and complete information when placing an
              order.
            </li>
            <li>
              Dummy Ticket 365 is not responsible for any consequences arising from incorrect or
              incomplete information provided by you.
            </li>
            <li>
              You agree not to misuse our services, including but not limited to using our dummy
              tickets for illegal purposes.
            </li>
          </ol>
        </p>

        <Title fontSize="small" mt="50px" mb="20px" fontWeight="400">
          Intellectual Property
        </Title>

        <p className="font-extralight text-md">
          <ol className="list-inside list-disc">
            <li>
              All content on the Dummy Ticket 365 website, including text, graphics, logos, and
              software, is the property of Dummy Ticket 365 and protected by copyright laws.
            </li>
            <li>
              You may not copy, distribute, modify, or create derivative works from our website
              content without prior written consent.
            </li>
          </ol>
        </p>

        <Title fontSize="small" mt="50px" mb="20px" fontWeight="400">
          Disclaimer of Liability
        </Title>

        <p className="font-extralight text-md">
          <ol className="list-inside list-disc">
            <li>
              Dummy Ticket 365 does not guarantee visa approval or any specific outcomes from the
              use of our services.
            </li>
            <li>
              We are not liable for any direct, indirect, incidental, or consequential damages
              arising from your use of our services.
            </li>
            <li>
              It is your responsibility to ensure that the dummy ticket meets the requirements of
              the relevant authorities or agencies.
            </li>
          </ol>
        </p>

        <Title fontSize="small" mt="50px" mb="20px" fontWeight="400">
          Privacy Policy
        </Title>

        <p className="font-extralight text-md">
          <ol className="list-inside list-disc">
            <li>
              Your privacy is important to us. Please refer to our Privacy Policy for details on how
              we collect, use, and protect your personal information.
            </li>
          </ol>
        </p>

        <Title fontSize="small" mt="50px" mb="20px" fontWeight="400">
          Amendments to Terms
        </Title>

        <p className="font-extralight text-md">
          <ol className="list-inside list-disc">
            <li>
              We reserve the right to update or modify these Terms and Conditions at any time
              without prior notice.
            </li>
            <li>
              Continued use of the website following any changes indicates your acceptance of the
              new Terms and Conditions.
            </li>
          </ol>
        </p>

        <Title fontSize="small" mt="50px" mb="20px" fontWeight="400">
          Governing Law
        </Title>

        <p className="font-extralight text-md">
          <ol className="list-inside list-disc">
            <li>
              These Terms and Conditions are governed by and construed in accordance with the laws
              of the United Arab Emirates.
            </li>
            <li>
              Any disputes arising under these Terms and Conditions shall be subject to the
              exclusive jurisdiction of the courts of the UAE.
            </li>
          </ol>
        </p>
      </Container>
    </PrimarySection>
  );
}
