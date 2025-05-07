
import React from "react";

const ContactFAQ = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services and process
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What are your typical business hours?</h3>
              <p className="text-gray-600">
                Our team is available Monday through Friday from 9:00 AM to 5:00 PM Pacific Time. 
                For urgent matters, we offer emergency support outside of regular business hours.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How quickly can you respond to a service request?</h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 hours during business days. 
                For existing clients with support contracts, we offer faster response times based on the severity of the issue.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Do you offer remote consultations?</h3>
              <p className="text-gray-600">
                Yes, we provide remote consultations via video conferencing tools. This allows us to serve clients globally 
                while maintaining the same level of quality and expertise as in-person meetings.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">What is your project onboarding process?</h3>
              <p className="text-gray-600">
                Our onboarding process begins with an initial consultation to understand your needs, followed by a 
                detailed proposal and project plan. Once approved, we assign a dedicated team to your project and 
                establish regular communication channels and progress reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
