import React from "react";

const OrderLimit = () => {
  const Items = [
    "Customers are eligible to place up to 4 live orders",
    "A customer cannot place another order if 4 of their orders are still live",
    "Live order refers to all those orders which are not delivered",
    "Drop shipment orders are split into two separate orders, basis the merchants",
    "Internal orders are also counted as an order",
    "Every store has its own delivery charges. The delivery charges are mentioned on the app and web at the checkout page",
    "The Company may at its discretion charge You a delivery fee, surge fee, convenience fee, packaging fee, etc. for the delivery of Products purchased by You on the Marketplace. Such charges will be notified to You prior to placing of an order. By placing the order, you agree to pay for such charges being levied by the Company",
  ];
  return (
    <div className="min-h-[70vh]">
      <div className="container mx-auto px-4 py-4">
        <h2 className="text-3xl font-bold mb-4">
          Order limit & minimum order value
        </h2>
        <ul className="list-disc pl-4">
          {Items.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-t-2 border-base-500 my-4" />
    </div>
  );
};

export default OrderLimit;
