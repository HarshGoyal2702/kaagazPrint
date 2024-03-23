import React from "react";

const OrderCancel = () => {
  return (
    <div className="container mx-auto px-4 py-4 text-base-500">
      <div >
        <h1 className="text-3xl font-bold mb-4">Order Cancellation</h1>
        <div>
          <ul className="list-decimal flex flex-col gap-4">
            <li>
              <strong>Customer's Right to Cancel:</strong> As a user of
              KagazPrints, you have the right to cancel an order placed by you
              before the order enters the “billed” stage. Should you choose to
              cancel an order, please note the following conditions and
              procedures:
              <ul className="ml-8 leading-relaxed list-disc mt-1 flex flex-col gap-1">
                <li>
                  {" "}
                  Cancellation Timeframe Orders can be cancelled any time
                  before they enter the “billed” stage.
                </li>
                <li>
                  {" "}
                  Refund Process Upon successful cancellation, KagazPrints
                  will initiate a refund, if applicable, to the payment method
                  used for the transaction. Refunds will typically be processed
                  within approximately 48-72 hours.
                </li>
              </ul>
            </li>
            <li>
              <strong>Company's Right to Cancel:</strong> KagazPrints reserves the right to
              cancel orders under the following circumstances: - Fraudulent
              Transactions: If KagazPrints suspects that a customer has
              undertaken a fraudulent transaction, the company reserves the
              right to cancel the order.
              <ul className="ml-8 leading-relaxed mt-1 flex flex-col gap-1 list-disc">
                <li>
                Violation of Terms: Orders may be
              cancelled if it is suspected that a customer has undertaken a
              transaction that does not conform to or violates the KagazPrints
              Terms of Use/User Agreement.
                </li>
                <li>
               Product Unavailability: In the
              event of unavailability of product(s), KagazPrints may cancel the
              order. - Beyond Control: KagazPrints may cancel orders for reasons
              beyond its control, including causes for delivery-related
              logistical difficulties.
                </li>
              </ul>
            </li>
            <li>
              <strong>Accuracy of Product Specifications:</strong> While KagazPrints takes
              precautions to ensure the accuracy of product specifications,
              discrepancies may occur due to technical issues, typographical
              errors, or incorrect product information provided by third-party
              sellers. In such cases, KagazPrints reserves the right to cancel
              the order and provide credit/coupon for the value of the returned
              product. This credit can be used against a subsequent invoice for
              transactions on the KagazPrints website.
            </li>
            <li>
              <strong>Legal Disclaimer:</strong> By placing an order on KagazPrints, you
              acknowledge and agree to abide by the terms and conditions
              outlined in this Order Cancellation Policy. KagazPrints reserves
              the right to modify or update this policy at any time without
              prior notice.
            </li>
          </ul>
          <p>
            This comprehensive order cancellation section outlines both the
            customer's and KagazPrints' rights and responsibilities regarding
            order cancellations, ensuring transparency and legal compliance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCancel;
