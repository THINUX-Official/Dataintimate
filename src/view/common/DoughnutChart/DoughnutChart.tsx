'use client'

import React from "react";

export const DoughnutChart = () => {

    const data = {
        dataset: [{
            data: [10, 20, 30],
            background: ['blue', 'green', 'cian']
        }],
        labels: ['Direct', 'Social', 'Referral']
    };

    return (
        <>
            <div className="card border-0 shadow my-3">
                <h5 className="card-header text-[14px] text-primary">Revenue Sources</h5>
                <div className="card-body">
                    <div>
                        <h1>DoughnutChart</h1>
                    </div>
                </div>
            </div>
        </>
    );
};