import React from "react";

const Pricing = () => {
  return (
    <div className="bg-white sm:flex block  items-center justify-center min-h-full text-bold">
      <div className="container mx-auto px-4 py-8 text-black flex justify-between  rounded-md">
        <div className="flex items-center mr-10 flex-col">
          <h1 className="font-bold text-3xl text-center mb-4 capitalize">
            Pricing
          </h1>
          <p className="mt-2">
            <span>Pricing Policy</span> At KagazPrints, we are dedicated to
            providing our customers with top-quality printing services at
            competitive prices. Our pricing policy reflects our commitment to
            accuracy, transparency, and customer satisfaction.
          </p>
        </div>
        <ul>
          <li className="mb-6">
            <h2 className="font-bold text-2xl"> Our Commitment</h2>
            <ol>
              <li>
                <h3 className="font-semibold leading-9">Accuracy</h3>
                <p>
                  We strive to ensure that all prices for our printing services
                  are accurate and up-to-date.
                </p>
              </li>
              <li>
                <h3 className="font-semibold leading-8">Transparency</h3>
                <p>
                  The price quoted at the time of placing an order will remain
                  unchanged at the time of delivery. We believe in transparent
                  pricing with no hidden fees or charges.
                </p>
              </li>
              <li className="bg-blue-600 p-3 rounded-lg mt-2 mb-2">
                <strong>Please Note:</strong> Price Fluctuations - While we make
                every effort to maintain accurate pricing, there may be
                instances where prices fluctuate due to market conditions or
                changes in material costs.
              </li>
              <li>
                <h3 className="font-semibold leading-8">Corrections</h3>
                <p>
                  In the event of a pricing discrepancy, we reserve the right to
                  adjust the price accordingly and inform you of any changes
                  before proceeding with your order. Best Value Guarantee: We
                  guarantee that our printing services will always offer
                  excellent value for money. Our prices are competitive, and we
                  never compromise on quality.
                </p>
              </li>
            </ol>
          </li>
          <li>
            <h2 className="font-bold text-2xl">Updates & Amendments</h2>
            <p>
              <h3 className="font-semibold leading-9">Dynamic Pricing</h3>{" "}
              Prices may be subject to change based on factors such as material
              costs, printing technology upgrades, and other market influences.
              We will strive to keep you informed of any changes to our pricing
              structure.
              <h3 className="font-semibold leading-9">Notification</h3> If there
              are any changes to the pricing of our services that affect your
              order, we will notify you promptly and seek your confirmation
              before proceeding.
              <h3 className="font-semibold leading-8">
                Your Satisfaction, Our Priority
              </h3>{" "}
              Your satisfaction is our top priority at KagazPrints. If you have
              any questions or concerns about our pricing or if you notice any
              discrepancies, please don't hesitate to reach out to our Customer
              Support team. We are here to assist you and ensure that you have a
              seamless printing experience with us.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
