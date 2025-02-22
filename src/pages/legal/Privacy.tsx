import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We collect information that you provide directly to us, including personal information such as your name, email address, and financial information necessary for trading.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We use the information we collect to provide, maintain, and improve our services, process your transactions, and communicate with you.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We do not sell your personal information. We may share your information with third parties only as described in this policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Security</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
          <p className="text-gray-600 dark:text-gray-300">
            You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            If you have questions about this Privacy Policy, please{' '}
            <Link to="/contact" className="text-teal-600 dark:text-teal-400 hover:underline">
              contact us
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
}