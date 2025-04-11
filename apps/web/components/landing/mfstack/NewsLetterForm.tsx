import React, { useEffect } from "react";

const NewsletterForm = () => {
  useEffect(() => {
    // Load ConvertKit script
    const script = document.createElement("script");
    script.src = "https://f.convertkit.com/ckjs/ck.5.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        action="https://app.kit.com/forms/7657561/subscriptions"
        className="seva-form formkit-form bg-gray-50 rounded-lg border border-gray-200"
        method="post"
        data-sv-form="7657561"
        data-uid="b5925d1137"
        data-format="inline"
        data-version="5"
      >
        <div className="p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              Join the Newsletter
            </h2>
            <div className="text-lg text-gray-600">
              Subscribe to get our latest content by email.
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <input
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                name="email_address"
                aria-label="Email Address"
                placeholder="Email Address"
                required
                type="email"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              <span>Subscribe</span>
            </button>
          </div>

          <div className="mt-4 text-sm text-gray-600 text-center">
            We won't send you spam. Unsubscribe at any time.
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewsletterForm;
