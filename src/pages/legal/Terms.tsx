import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome to JayeCane. By accessing or using our platform, you agree to be bound by these terms of service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Definitions</h2>
          <p className="text-gray-600 dark:text-gray-300">
            "Platform" refers to JayeCane's website, mobile applications, and services.
            "User" refers to any individual or entity using our Platform.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Account Registration</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Users must provide accurate and complete information when creating an account.
            Users are responsible for maintaining the security of their account credentials.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Trading Rules</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Users must comply with all applicable laws and regulations when trading.
            JayeCane reserves the right to suspend or terminate accounts that violate our trading rules.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Privacy</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our privacy practices are governed by our{' '}
            <Link to="/privacy" className="text-teal-600 dark:text-teal-400 hover:underline">
              Privacy Policy
            </Link>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            For questions about these terms, please contact us at{' '}
            <Link to="/contact" className="text-teal-600 dark:text-teal-400 hover:underline">
              support@JayeCane.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}