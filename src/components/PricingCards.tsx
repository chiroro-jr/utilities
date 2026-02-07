import { useState } from "react";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  ctaText: string;
  ctaLink: string;
  ctaVariant: "primary" | "secondary";
  isPopular?: boolean;
  isCustom?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    description: "For small teams getting started",
    monthlyPrice: 29,
    annualPrice: 23,
    features: [
      "Up to 5 team members",
      "Basic analytics dashboard",
      "Email support",
      "1GB storage",
      "API access",
    ],
    ctaText: "Get Started",
    ctaLink: "#trial",
    ctaVariant: "secondary",
  },
  {
    name: "Professional",
    description: "For growing teams and operations",
    monthlyPrice: 79,
    annualPrice: 63,
    features: [
      "Up to 25 team members",
      "Advanced analytics & reporting",
      "Priority support",
      "50GB storage",
      "API access & webhooks",
      "Custom integrations",
      "SSO authentication",
    ],
    ctaText: "Start Free Trial",
    ctaLink: "#trial",
    ctaVariant: "primary",
    isPopular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "Unlimited team members",
      "Custom analytics solutions",
      "24/7 dedicated support",
      "Unlimited storage",
      "Full API access",
      "On-premise deployment",
      "Custom SLA",
    ],
    ctaText: "Contact Sales",
    ctaLink: "#contact",
    ctaVariant: "secondary",
    isCustom: true,
  },
];

export default function PricingCards() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex flex-col gap-12">
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4">
        <span
          className={`text-sm font-medium font-secondary ${
            !isAnnual ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Monthly
        </span>
        <button
          type="button"
          onClick={() => setIsAnnual(!isAnnual)}
          className="relative w-12 h-6 rounded-full bg-foreground transition-colors"
          aria-label={isAnnual ? "Switch to monthly billing" : "Switch to annual billing"}
        >
          <span
            className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-primary transition-transform ${
              isAnnual ? "translate-x-6" : ""
            }`}
          />
        </button>
        <span
          className={`text-sm font-normal font-secondary ${
            isAnnual ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Annual (Save 20%)
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col p-8 rounded-2xl ${
              plan.isPopular
                ? "bg-foreground border-2 border-primary relative"
                : "bg-card border border-secondary"
            }`}
          >
            {/* Popular Badge */}
            {plan.isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold font-primary px-4 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
            )}

            {/* Header */}
            <div className="mb-6">
              <h3
                className={`text-lg font-bold font-primary mb-2 ${
                  plan.isPopular ? "text-white" : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm font-secondary ${
                  plan.isPopular ? "text-[#B8B9B6]" : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>
            </div>

            {/* Price */}
            <div className="mb-8">
              {plan.isCustom ? (
                <span
                  className={`text-4xl font-bold font-primary ${
                    plan.isPopular ? "text-white" : "text-foreground"
                  }`}
                >
                  Custom
                </span>
              ) : (
                <>
                  <span
                    className={`text-4xl font-bold font-primary ${
                      plan.isPopular ? "text-white" : "text-foreground"
                    }`}
                  >
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span
                    className={`text-sm font-secondary ${
                      plan.isPopular ? "text-[#B8B9B6]" : "text-muted-foreground"
                    }`}
                  >
                    /month
                  </span>
                </>
              )}
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className={`flex items-start gap-3 text-sm font-secondary ${
                    plan.isPopular ? "text-[#B8B9B6]" : "text-muted-foreground"
                  }`}
                >
                  <Check
                    className={`w-5 h-5 shrink-0 mt-0.5 ${
                      plan.isPopular ? "text-primary" : "text-primary"
                    }`}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href={plan.ctaLink}
              className={`w-full py-3 text-center rounded-lg text-sm font-semibold font-secondary transition-colors ${
                plan.ctaVariant === "primary"
                  ? "bg-primary text-primary-foreground hover:bg-primary/85"
                  : `border ${
                      plan.isPopular
                        ? "border-[#2E2E2E] text-white hover:border-[#888]"
                        : "border-border text-foreground hover:bg-secondary"
                    }`
              }`}
            >
              {plan.ctaText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
