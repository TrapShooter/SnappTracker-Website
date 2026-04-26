import LegalLayout from "@/components/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use">
      <div className="space-y-8">
        <p className="text-sm italic text-gray-500 dark:text-gray-400">Last Updated: March 25, 2026</p>

        <section>
          <h2 className="text-xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            By accessing or using Snapp Tracker, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">2. Description of Service</h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            Snapp Tracker is a time-tracking application designed for personal and professional use. We provide tools to track intervals, manage projects (trackers), and analyze your time usage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">3. Subscriptions (Pro Plan)</h2>
          <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
            Snapp Tracker offers a premium &quot;Pro&quot; subscription that enables cloud synchronization and additional features.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400">
            <li><strong className="text-gray-900 dark:text-white">Billing:</strong> Subscriptions are managed via the Apple App Store, Google Play Store, or RevenueCat.</li>
            <li><strong className="text-gray-900 dark:text-white">Cancellations:</strong> You can cancel your subscription at any time through your store account settings.</li>
            <li><strong className="text-gray-900 dark:text-white">Refunds:</strong> Refund requests are handled by the respective app stores according to their policies.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">4. User Conduct</h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            You agree to use Snapp Tracker only for lawful purposes. You are responsible for maintaining the confidentiality of your account information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">5. Intellectual Property</h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            The Snapp Tracker application, including its design, logos, and code, is the property of Snapp Tracker and is protected by intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">6. Limitation of Liability</h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            Snapp Tracker is provided &quot;as is&quot; without warranties of any kind. We are not liable for any data loss or damages arising from your use of the application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">7. Changes to Terms</h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            We reserve the right to modify these terms at any time. We will notify users of any significant changes via the application or email.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">8. Contact</h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            For any questions regarding these terms, please contact us at <a href="mailto:support@snapptracker.com" className="text-accent-600 hover:underline">support@snapptracker.com</a>.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
