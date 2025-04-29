
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CreditCard, Lock, HelpCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentInfo = () => {
  return (
    <section id="payment-info" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Payment Information</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer flexible payment options to accommodate your business needs
            </p>
          </div>

          <Card className="border-0 shadow-lg overflow-hidden">
            <CardHeader className="bg-consulting-800 text-white">
              <CardTitle className="text-2xl">Billing & Payment Options</CardTitle>
              <CardDescription className="text-consulting-100">
                Our payment process is designed for simplicity and security
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold flex items-center mb-3">
                    <Lock className="mr-2 text-consulting-600" size={20} />
                    Secure Payment Process
                  </h3>
                  <p className="text-gray-600">
                    For your security, we handle all payments offline after your initial consultation. 
                    This allows us to provide a tailored quote based on your specific project requirements.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-bold flex items-center mb-3">
                    <CreditCard className="mr-2 text-consulting-600" size={20} />
                    Available Payment Methods
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We accept multiple payment methods for your convenience:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
                      <div className="text-gray-700 font-medium">Credit Card</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
                      <div className="text-gray-700 font-medium">Bank Transfer</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
                      <div className="text-gray-700 font-medium">Purchase Order</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
                      <div className="text-gray-700 font-medium">Net 30 Terms</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-bold flex items-center mb-3">
                    <HelpCircle className="mr-2 text-consulting-600" size={20} />
                    Payment Questions?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about our payment process or would like to discuss payment options, 
                    please don't hesitate to contact our billing department.
                  </p>
                  <Button variant="outline" className="flex items-center">
                    <Mail className="mr-2" size={16} />
                    <Link to="/contact">Contact Billing Department</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;
