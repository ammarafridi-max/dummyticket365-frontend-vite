export const faqArray = [
  {
    question: 'What is a {keyword}?',
    answer:
      'A {keyword} is a temporary and verifiable flight reservation that shows your planned onward or return travel. It is commonly used when airlines or immigration authorities ask for proof that you intend to leave the destination country within the allowed period.',
  },
  {
    question: 'What is a {keyword} used for?',
    answer:
      'A {keyword} is typically used as proof of onward or return travel during airline check-in or immigration screening. Travelers often use it when they are required to show travel plans without committing to a full-priced airline ticket.',
  },
  {
    question: 'Does a {keyword} include a verifiable PNR?',
    answer:
      'Yes, every {keyword} comes with a valid PNR (Passenger Name Record) that can usually be verified on the airline’s official website or reservation system, depending on the airline’s verification method.',
  },
  {
    question: 'How can I verify my {keyword}?',
    answer:
      'You can verify your {keyword} by entering the PNR code along with the passenger’s last name on the airline’s website. In some cases, verification may only be possible through the airline’s customer support.',
  },
  {
    question: 'How much does a {keyword} cost?',
    answer:
      'The cost of a {keyword} starts from USD 13 and may vary based on the itinerary type, validity duration, and availability selected at the time of booking.',
  },
  {
    question: 'How long is a {keyword} valid for?',
    answer:
      'You can choose a {keyword} validity of 48 hours, 7 days, or 14 days. The validity period should match the timeframe in which you need to present proof of onward travel.',
  },
  {
    question: 'How long does it take to receive my {keyword}?',
    answer:
      'Most {keyword}s are generated automatically and delivered by email within 10 to 15 minutes after successful payment, making it suitable for urgent travel needs.',
  },
  {
    question: 'Can I use a {keyword} for airline check-in?',
    answer:
      'Yes, many travelers use a {keyword} during airline check-in when asked to show proof of onward or return travel. Acceptance ultimately depends on the airline’s policies.',
  },
  {
    question: 'Is a {keyword} suitable for immigration checks?',
    answer:
      'A {keyword} is commonly used when immigration officers request proof of onward travel. However, final acceptance is always at the discretion of immigration authorities.',
  },
  {
    question: 'Do I need to buy an actual flight ticket?',
    answer:
      'No, a {keyword} allows you to demonstrate onward travel plans without purchasing an actual airline ticket, helping you avoid unnecessary costs.',
  },
  {
    question: 'Can I book a one-way or return {keyword}?',
    answer:
      'Yes, you can choose between one-way or return {keyword} options based on your travel route and the requirements of the airline or immigration authority.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept secure online payments through Stripe, allowing you to pay using major credit and debit cards in a safe and encrypted checkout environment.',
  },
  {
    question: 'Is there a refund or money-back guarantee?',
    answer:
      'No, once a {keyword} has been issued and delivered, it is non-refundable, as the reservation is generated specifically for your travel details.',
  },
];

export function formatFaqArray(arr, keyword) {
  const newFaqs = arr.map(arr => {
    const question = arr.question.replaceAll('{keyword}', keyword);
    const answer = arr.answer.replaceAll('{keyword}', keyword);
    return { question, answer };
  });

  return newFaqs;
}
