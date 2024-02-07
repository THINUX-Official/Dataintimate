import React from "react";

export const ProgressBar = () => {
    return (
        <>
            <div className="card border-0 shadow">
                <h5 className="card-header text-[14px] text-primary">Projects</h5>
                <div className="card-body">
                    <div>
                        <div className="flex justify-between mb-[-15px]">
                            <p className="text-[11px] text-gray-500">Server Migration</p>
                            <p className="text-[11px] text-gray-500">20%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-danger w-[20%]" role="progressbar"
                                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mt-3 mb-[-15px]">
                            <p className="text-[11px] text-gray-500">Sales Tracking</p>
                            <p className="text-[11px] text-gray-500">40%</p>
                        </div>

                        <div className="progress">
                            <div className="progress-bar bg-warning w-[40%]" role="progressbar"
                                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mt-3 mb-[-15px]">
                            <p className="text-[11px] text-gray-500">Customer Database</p>
                            <p className="text-[11px] text-gray-500">60%</p>
                        </div>

                        <div className="progress">
                            <div className="progress-bar bg-primary w-[60%]" role="progressbar"
                                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mt-3 mb-[-15px]">
                            <p className="text-[11px] text-gray-500">Payout Details</p>
                            <p className="text-[11px] text-gray-500">80%</p>
                        </div>

                        <div className="progress">
                            <div className="progress-bar bg-info w-[80%]" role="progressbar"
                                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mt-3 mb-[-15px]">
                            <p className="text-[11px] text-gray-500">Account Setup</p>
                            <p className="text-[11px] text-gray-500">Completed!</p>
                        </div>

                        <div className="progress">
                            <div className="progress-bar bg-success w-[100%]" role="progressbar"
                                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};