"use client";

import { useState } from "react";
import Icon from "./Icon";
import Button from "./Button";

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const faqs: FAQItem[] = [
  // Getting Started
  {
    category: "Getting Started",
    question: "What is SnappTracker and how does it work?",
    answer:
      "SnappTracker is a flexible time tracking app designed to help you understand where your time goes without the administrative overhead. You create Trackers for your activities, group them into projects, and use different timer modes like Stopwatch, Countdown, and Pomodoro to log your work. Your entries are organized into Sessions that you can 'Cut' to mark milestones, study blocks, or billing cycles.",
  },
  {
    category: "Getting Started",
    question: "Is SnappTracker free to use?",
    answer:
      "Yes! SnappTracker has a generous free tier that includes unlimited trackers, all three timer modes (Stopwatch, Countdown, and Pomodoro), and manual entries. Pro unlocks advanced analytics, cloud sync across all your devices, CSV/JSON export, and more.",
  },
  {
    category: "Getting Started",
    question: "Can I group my time entries into billing cycles or project phases?",
    answer:
      "You can use Sessions to organize your entries into logical sets. By using the Cut feature, you can 'close' a period of time — like a work week, a billing cycle, or a project milestone — and start a fresh one. This helps you track progress against specific session goals and keeps your history organized into meaningful blocks.",
  },
  {
    category: "Getting Started",
    question: "Does SnappTracker support the Pomodoro technique?",
    answer:
      "Absolutely. SnappTracker includes a fully customizable Pomodoro mode with configurable focus and break intervals, automatic cycling, and session tracking to help you stay productive during deep work sessions.",
  },
  {
    category: "Getting Started",
    question: "Can I track billable hours and export my data?",
    answer:
      "Yes. You can organize trackers into groups (like 'Clients' or 'Projects') to keep track of billable time. Pro users can export their history as a CSV file for invoicing and reporting. We also provide a JSON export specifically for creating full backups of your data.",
  },
  {
    category: "Getting Started",
    question: "Is my data private and does it work offline?",
    answer:
      "Privacy is a core feature. All your data is stored locally on your device by default, meaning SnappTracker works 100% offline. Pro users can opt-in to secure cloud sync to keep their data consistent across all devices.",
  },

  // Usage & Organization
  {
    category: "Usage & Organization",
    question: "What are the three tracking modes?",
    answer:
      "Stopwatch mode is for standard open-ended tracking. Countdown mode runs down from a set time and auto-stops when it reaches zero, which is great for timed tasks. Pomodoro mode gives you configurable focus and break intervals with automatic cycling, ideal for deep work sessions.",
  },
  {
    category: "Usage & Organization",
    question: "Can I organize my time by project or client?",
    answer:
      "Yes. You can create unlimited trackers and organize them into customizable Groups. This makes it easy to separate work, personal projects, fitness, or specific client work.",
  },
  {
    category: "Usage & Organization",
    question: "Can I log time I forgot to track?",
    answer:
      "Yes. You can easily add manual entries for any tracker at any time by selecting a start and end time. Your history and streaks will stay accurate even if you missed the live tracking.",
  },

  // Experience & Platforms
  {
    category: "Experience & Platforms",
    question: "What platforms is SnappTracker available on?",
    answer:
      "SnappTracker is available on iOS, Android, and as a web app. With a Pro subscription, your data stays in sync across all your devices automatically so you can start a session on your phone and continue it on your laptop.",
  },
  {
    category: "Experience & Platforms",
    question: "Does SnappTracker support dark mode?",
    answer:
      "Yes. The app and website both feature a premium dark mode that respects your system settings automatically.",
  },
  {
    category: "Experience & Platforms",
    question: "Can I use SnappTracker for team collaboration?",
    answer:
      "Currently, SnappTracker is designed as a powerful personal productivity tool. While you can't share trackers with a team yet, many users export their data as CSV to share reports with managers or clients.",
  },

  // Account & Privacy
  {
    category: "Account & Privacy",
    question: "How do I reset my password?",
    answer:
      "If you're signed in with an email account, you can reset your password from the Settings menu in the app. If you use Magic Link or Social Sign-in, you don't need a password to access your account.",
  },
  {
    category: "Account & Privacy",
    question: "Can I delete my account and data?",
    answer:
      "You have full control over your data. You can delete individual entries, trackers, or your entire account directly from the Settings menu. Deleting your account permanently removes all your data from our servers.",
  },

  // Data & Subscriptions
  {
    category: "Data & Subscriptions",
    question: "Can I import data from other time trackers?",
    answer:
      "We don't have a direct 'one-click' import from other apps yet. However, you can reformat your existing data to match our import structure (available in the app settings) to effectively import your history from other platforms.",
  },
  {
    category: "Data & Subscriptions",
    question: "How does cloud sync work?",
    answer:
      "Cloud sync is a Pro feature powered by Supabase. Your trackers, sessions, and settings are automatically synced in real time across all your devices. You can also export your complete data as a CSV or JSON file at any time.",
  },
  {
    category: "Data & Subscriptions",
    question: "What happens to my data if I cancel my Pro subscription?",
    answer:
      "You never lose your data. If you cancel Pro, your existing entries stay on your device. You'll just lose access to cloud sync and advanced analytics until you resubscribe.",
  },
];

function FAQRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden transition-shadow duration-200 hover:shadow-md dark:hover:shadow-none">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-gray-900 dark:text-white transition-colors duration-200 group"
      >
        <span className="text-base font-semibold leading-snug">
          {item.question}
        </span>
        <span
          className={`shrink-0 transition-all duration-300 ${isOpen
              ? "rotate-180 text-accent-600 dark:text-accent-400"
              : "text-gray-400 dark:text-gray-500"
            }`}
        >
          <Icon name="expand_more" size={24} />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-gray-500 dark:text-gray-400 leading-relaxed text-[15px]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ({
  limit,
  isPage = false,
  disableTopPadding = false,
  disableBottomPadding = false,
}: {
  limit?: number;
  isPage?: boolean;
  disableTopPadding?: boolean;
  disableBottomPadding?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: displayFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Group by category if we are on a full page
  const categories = isPage
    ? Array.from(new Set(displayFaqs.map((f) => f.category)))
    : [];

  return (
    <section
      className={`px-6 md:px-12 ${isPage
          ? "bg-gray-100 dark:bg-gray-900 pt-40 pb-24"
          : `bg-gray-50 dark:bg-gray-950 ${disableTopPadding ? 'pt-0' : 'pt-24'} ${disableBottomPadding ? 'pb-0' : 'pb-24'}`
        }`}
    >
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className={`text-center ${isPage ? "mb-16" : "mb-12"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Content Render */}
        {isPage ? (
          <div className="flex flex-col gap-12">
            {categories.map((cat) => (
              <div key={cat}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 ml-1">
                  {cat}
                </h3>
                <div className="flex flex-col gap-3">
                  {displayFaqs
                    .map((item, originalIndex) => ({ item, originalIndex }))
                    .filter(({ item }) => item.category === cat)
                    .map(({ item, originalIndex }) => (
                      <FAQRow
                        key={originalIndex}
                        item={item}
                        isOpen={openIndex === originalIndex}
                        onToggle={() => toggle(originalIndex)}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Simple list for homepage */
          <div className="flex flex-col gap-3">
            {displayFaqs.map((item, i) => (
              <FAQRow
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        )}

        {limit && limit < faqs.length && (
          <div className="mt-10 text-center">
            <Button href="/faq" variant="ghost" className="px-4 py-2 group">
              View All Questions
              <Icon
                name="arrow_forward"
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>
          </div>
        )}

        {/* Contact CTA Box - Only shown on the dedicated FAQ page */}
        {isPage && (
          <div className="mt-12 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 text-center shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Reach out to
              our team and we&apos;ll help you out.
            </p>
            <Button
              href="mailto:support@snapptracker.com"
              variant="primary"
              icon="mail"
            >
              Contact Support
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
