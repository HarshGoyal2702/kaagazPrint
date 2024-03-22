import React from "react";

const ServicesOverview = () => {
  return (
    <div className="container mx-auto px-4 mb-14">
      <h1 className="text-3xl font-bold mb-8">Services & Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Online Printing Services</h2>
          <p className="text-base mb-4">
            KagazPrints offers a wide range of online printing services for
            individuals and businesses. Whether you need documents, flyers,
            brochures, posters, or any other printed materials, we've got you
            covered.
          </p>
          <p className="text-base mb-4">
            Our online platform allows you to easily upload your files,
            customize your printing options, and place your order with just a
            few clicks. We ensure high-quality printing with fast turnaround
            times and competitive pricing.
          </p>
          <p className="text-base">
            With KagazPrints, you can trust that your printing needs will be
            met efficiently and professionally.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Subscription Plans</h2>
          <p className="text-base mb-4">
            Take advantage of our subscription plans for even greater
            convenience and savings. With our subscription model, you can enjoy
            discounted rates on bulk printing orders and exclusive perks for
            loyal customers.
          </p>
          <p className="text-base mb-4">
            Choose from a variety of subscription tiers based on your printing
            needs and budget. Whether you're a small business owner, a student,
            or an individual user, there's a subscription plan for you.
          </p>
          <p className="text-base">
            Sign up for a KagazPrints subscription today and streamline your
            printing process while saving money.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Delivery and Shipping</h2>
          <p className="text-base mb-4">
            We understand the importance of timely delivery, which is why we
            offer efficient shipping and delivery options for all orders.
          </p>
          <p className="text-base mb-4">
            Whether you need your printed materials shipped to your doorstep or
            picked up from a designated location, we've got you covered. Our
            reliable delivery partners ensure that your orders reach you on
            time, every time.
          </p>
          <p className="text-base">
            With KagazPrints, you can expect hassle-free delivery and shipping
            for all your printing needs.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Data Security and Privacy</h2>
          <p className="text-base mb-4">
            At KagazPrints, we prioritize the security and privacy of your
            personal and sensitive information.
          </p>
          <p className="text-base mb-4">
            We employ strict data protection measures to safeguard your data
            throughout the printing process. Whether you're uploading documents
            for printing or making payments online, rest assured that your
            information is safe with us.
          </p>
          <p className="text-base">
            Trust KagazPrints for secure and confidential online printing
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
