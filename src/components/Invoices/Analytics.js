import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

function Analytics() {
    return (
        <div className=" w-full  border-2 rounded-md p-6">
            <div className="flex flex-rows max-md:flex-col gap-4 justify-between ">
                <div className="flex flex-col">
                    <p className="text-sm text-gray-500 font-semibold">
                        Overdue
                    </p>
                    <div className="flex flex-row items-end">
                        <p className="text-3xl text-black">
                            $0.00
                        </p>
                        <p className="text-md text-gray-400 ml-2 font-semibold">
                            USD
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm text-gray-500 font-semibold">
                        Due within next 30 days
                    </p>
                    <div className="flex flex-row items-end">
                        <p className="text-3xl text-black">
                            $0.00
                        </p>
                        <p className="text-md text-gray-400 ml-2 font-semibold">
                            USD
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm text-gray-500 font-semibold">
                        Average time to get paid
                    </p>
                    <div className="flex flex-row items-end">
                        <p className="text-3xl text-black">
                            29
                        </p>
                        <p className="text-md text-gray-400 ml-2 font-semibold">
                            days
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm text-gray-500 font-semibold">
                        Upcoming payout
                    </p>
                    <p className="text-3xl text-black">
                        None
                    </p>
                </div>
            </div>
            <div className="flex flex-rows items-center">
                <p className="text-sm font-semibold mt-6">
                    Last updated just a moment ago.  <FontAwesomeIcon icon={faArrowsRotate} className="ml-1 text-lg" />
                </p>
            </div>
        </div>
    );
}

export default Analytics;
