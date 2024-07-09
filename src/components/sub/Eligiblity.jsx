import React, { useState } from "react";

const Eligibility = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className="min-h-[50vh] bg-white shadow-md">
      <div className="container mx-auto px-4 mb-8 bg-white py-12 text-black">
        <h1 className="text-3xl font-bold mb-8">Eligibility Criteria</h1>
        <div className="flex gap-5 flex-col">
          <div className="collapse collapse-arrow bg-base-200 shadow-md text-black">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Minority</div>
            <div className="collapse-content">
              <p>
                If you are a minor, i.e., under the age of 18 years, you may
                use/access the Marketplace under the supervision of an adult
                parent or legal guardian who agrees to be bound by these Terms
                of Use. You are, however, prohibited (even under supervision)
                from purchasing any product(s) which is for adult consumption,
                the sale of which to minors is prohibited.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 text-black">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Business Users
            </div>
            <div className="collapse-content">
              <p>
                The Marketplace is intended to be a platform for end-consumers
                desirous of purchasing product(s) for domestic self-consumption.
                If you are a retailer, institution, wholesaler, or any other
                business user, you are not eligible to use the Marketplace to
                purchase products from third-party sellers, who have been
                granted access to the Marketplace to display and offer their
                products for sale through the Marketplace.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 text-black">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Termination and Refusal of Registration
            </div>
            <div className="collapse-content">
              <p>
                The Company, in its sole discretion and without liability,
                reserves the right to terminate or refuse your registration, or
                refuse to permit use/access to the Marketplace, if: (i) it is
                discovered or brought to notice that you do not conform to the
                eligibility criteria, or (ii) the Company has reason to believe
                (including through evaluating usage patterns) that the
                eligibility criteria is not met/is violated by a user, or (iii)
                you may breach the terms of this User Agreement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
