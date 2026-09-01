import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../packages/shadcn/src/base/accordion';

const faqs = [
  {
    value: 'shipping',
    q: 'How long does shipping take?',
    a: 'Standard orders arrive in 3-5 business days. Express shipping cuts that down to 1-2 days for an extra fee.',
  },
  {
    value: 'returns',
    q: 'What is your return policy?',
    a: 'You can return any unused item within 30 days of delivery for a full refund, no questions asked.',
  },
  {
    value: 'support',
    q: 'How do I contact support?',
    a: 'Reach our team any time at support@example.com or through the chat widget in the bottom-right corner.',
  },
];

export function Default() {
  return (
    <Accordion defaultValue={['shipping']} style={{ maxWidth: 480 }}>
      {faqs.map((f) => (
        <AccordionItem key={f.value} value={f.value}>
          <AccordionTrigger>{f.q}</AccordionTrigger>
          <AccordionContent>{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function AllClosed() {
  return (
    <Accordion style={{ maxWidth: 480 }}>
      {faqs.map((f) => (
        <AccordionItem key={f.value} value={f.value}>
          <AccordionTrigger>{f.q}</AccordionTrigger>
          <AccordionContent>{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
