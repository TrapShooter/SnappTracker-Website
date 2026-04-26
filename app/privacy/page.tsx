import LegalLayout from "@/components/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <div className="space-y-8">
        <p className="text-sm italic text-gray-500 dark:text-gray-400">Last Updated: March 25, 2026</p>

        <section>
          <p className="leading-relaxed">
            At Snapp Tracker, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">1. Data Storage and Handling</h2>
          <p className="mb-4 leading-relaxed">
            Snapp Tracker handles your data differently based on your user status:
          </p>
          <div className="space-y-6">
            <div className="p-5 bg-gray-100 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h3 className="font-bold mb-2">Guest & Registered Free Users</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Your tracking data is stored <strong>locally on your device</strong> (using secure native storage). We do not have access to this data unless you explicitly sync it or upgrade to a Pro account. Clearing your app data will permanently delete this information.
              </p>
            </div>
            <div className="p-5 bg-accent-50/50 dark:bg-accent-500/5 rounded-2xl border border-accent-100 dark:border-accent-500/20">
              <h3 className="font-bold text-accent-700 dark:text-accent-400 mb-2">Pro Users</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                For Pro users, data is actively synchronized with our secure cloud backend (Supabase). This allows you to access your trackers across multiple devices and ensures your data is backed up.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">2. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400">
            <li><strong className="text-gray-900 dark:text-white">Account Information:</strong> If you register, we collect your email address and any profile information you provide (e.g., name, profession).</li>
            <li><strong className="text-gray-900 dark:text-white">Usage Data:</strong> We collect anonymous information about how you interact with the app to improve the user experience.</li>
            <li><strong className="text-gray-900 dark:text-white">Subscription Data:</strong> We use RevenueCat to manage subscriptions. They may collect information necessary to process your payments.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">3. Data Security</h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            We implement industry-standard security measures to protect your data. For synced data, we use Supabase&apos;s secure cloud infrastructure with Row Level Security (RLS) to ensure only you can access your data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">4. Your Rights</h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            You have the right to access, export, or delete your data at any time. Free users can delete their data by clearing their browser storage. Pro users can manage their data through the app settings or by contacting our support.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">5. Contact Us</h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@snapptracker.com" className="text-accent-600 hover:underline">support@snapptracker.com</a>.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
