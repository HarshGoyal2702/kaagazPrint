import React, { useEffect, useRef } from 'react'

const Process = () => {
    return (

        <div id='process' className='w-full min-h-screen pl-14 pr-14 overflow-hidden'>
            <hr className='' />

            <ul className="timeline timeline-snap-icon mt-4 max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#EC4899" className="h-5 w-5 timeline-svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10 p-5">
                        <time className="font-mono italic">STEP 1</time>
                        <div className="text-lg font-black">Login/Register</div>
                        you can simply login/register youself to our website with fully functional email and password authentication. and gmail validation
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#EC4899" className="h-5 w-5 timeline-svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10  p-5 rounded">
                        <time className="font-mono italic">Step 2</time>
                        <div className="text-lg font-black">Upload Document</div>
                        The document can be of .jpg, .png , .pdf, .word we deliver any document format to the desired destination.
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#EC4899" className="h-5 w-5 timeline-svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10 p-5">
                        <time className="font-mono italic">Step 3</time>
                        <div className="text-lg font-black">Adjust Requirements</div>
                        If you have any kind of adjustments and Requirements regarding your printing document then you can select the options on the screen.
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#EC4899" className="h-5 w-5 timeline-svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10 p-5">
                        <time className="font-mono italic">Step 4</time>
                        <div className="text-lg font-black">Payment Proceeding</div>
                        After successfully uploading your document to the app and adjust the requirements now you are to pay the payment the additional delivery charges will be add on.
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#EC4899" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10 p-5 -mt-8">
                        <time className="font-mono italic">Step 5</time>
                        <div className="text-lg font-black">Order Placed</div>
                        Now the Order is placed and you can simply wait  for your order to be processed. You will receive it shortly
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    )

}
export default Process
