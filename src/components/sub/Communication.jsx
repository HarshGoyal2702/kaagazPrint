import React from "react";

const Communication = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-4">
        <h1 className="font-sans font-bold text-3xl mb-3">
          Communication with Kaagazprint
        </h1>

        <div>
          <p className="text-gray-600 flex flex-col gap-2">
            If you need to correct or update any information you've provided,
            you have two options: <br />
            <div>
              <strong>Online Correction: </strong> You can easily update your
              information directly on our website.
            </div>
            <div>
              <strong>Email Correction: </strong> Alternatively, you may contact
              us via email at:{" "}
              <a href="mailto:info@kaagazprint.com">info@kaagazprint.com</a> to
              request any corrections or updates.
            </div>
            <div>
              In case you experience any issues accessing our website, please
              don't hesitate to reach out to us via email at:{" "}
              <a href="mailto:info@kaagazprint.com">info@kaagazprint.com</a> for
              assistance.
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Communication;
