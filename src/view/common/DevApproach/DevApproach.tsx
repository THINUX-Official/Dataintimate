import Image from "next/image";
import React from "react";

export const DevApproach = () => {
    return (
        <>
            <div className="card border-0 shadow ">
                <h5 className="card-header text-[14px] text-primary">Development Approach</h5>
                <div className="card-body">
                    <div>
                        <p className="text-[11px] text-gray-500">
                            SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat
                            and poor page performance. Custom CSS classes are used to create custom components and
                            custom utility classes.
                            <br/><br/>
                            Before working with this theme, you should become familiar with the Bootstrap framework,
                            especially the utility classes.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};