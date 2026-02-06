import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does implementation typically take?",
    answer:
      "Most utilities can go live within 4-6 weeks. Our implementation team handles data migration, system configuration, and staff training. Complex enterprise deployments may take 8-12 weeks depending on integration requirements.",
  },
  {
    question: "Can I integrate with my existing billing system?",
    answer:
      "Yes. Utilities offers a comprehensive REST API and pre-built connectors for all major billing platforms including SAP, Oracle, and custom in-house systems. Our team will work with you to ensure seamless data flow.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include email support with 24-hour response times. Professional plans get priority phone and chat support during business hours. Enterprise customers receive a dedicated account manager and 24/7 emergency support.",
  },
  {
    question: "Is my data secure and compliant?",
    answer:
      "Absolutely. We maintain SOC 2 Type II, ISO 27001, and NERC CIP compliance. All data is encrypted at rest and in transit. We undergo annual third-party security audits and offer data residency options.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. If you upgrade mid-cycle, we prorate the difference.",
  },
];

export default function FaqSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={faq.question}
          value={`item-${i}`}
          className="border-b border-[#2E2E2E] last:border-b-0"
        >
          <AccordionTrigger className="py-6 text-base lg:text-lg font-medium text-white hover:no-underline [&>svg]:text-[#888]">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-[#888] text-sm lg:text-base leading-relaxed pb-6">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
