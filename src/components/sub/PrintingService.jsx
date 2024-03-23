import React from "react";

const PrintingService = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-3xl font-bold mb-4">Printing as a Service</h2>
      
      <div className="text-base">
        <p>
          KagazPrints offers convenient printing services to meet your document needs. Before availing our printing services, please read and understand the following terms and conditions:
        </p>
        <ul className="list-disc ml-6 my-4 flex flex-col gap-2">
          <li>
            For printing services, customers are required to upload their documents in printable format on the KagazPrints platform.
          </li>
          <li>
            Customers agree not to upload any illegal, prohibited, or inappropriate material for printing.
          </li>
          <li>
            While we strive to protect the confidentiality of uploaded documents, we do not guarantee their confidentiality. Customers upload documents at their own risk and are advised not to upload confidential information.
          </li>
          <li>
            We do not store any uploaded documents. Once printing is complete, documents are automatically deleted from our servers.
          </li>
          <li>
            Customers will be charged printing fees, delivery charges, and other applicable fees as reflected at the time of availing printing services. Payment must be made in advance.
          </li>
          <li>
            We reserve the right to change fees at any time without prior notice.
          </li>
          <li>
            Customer complaints regarding defective printouts must be reported within 24 hours of delivery, accompanied by the order number and pictures of the defective printouts.
          </li>
          <li>
            Customers agree to use our printing services for lawful purposes and comply with all applicable laws and regulations.
          </li>
          <li>
            By uploading documents for printing, customers consent to the collection, storage, retention, and usage of such information for printing purposes.
          </li>
          <li>
            Customers acknowledge that the use of our printing services is at their own risk and they are responsible for exercising prudent judgement when using the KagazPrints platform.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrintingService;
