import React from "react";
import Image from 'next/image';

export const Illustration = () => {
    return (
        <>
            <div className="card border-0 shadow ">
                <h5 className="card-header text-[14px] text-primary">Illustration</h5>
                <div className="card-body">
                    <div className="">
                        <Image className="mx-auto" src="/undraw_posting_photo.svg" alt="Example" width={400}
                               height={500}></Image>
                    </div>

                    <div>
                        <p className="text-[11px] text-gray-500">Add some quality, svg illustrations to your project
                            courtesy of <a className="text-blue-500 no-underline hover:underline"
                                           href="https://undraw.co/" target="_blank">unDraw</a>,
                            a constantly updated collection of beautiful svg images that you can use completely free and
                            without attribution!</p>

                        <a className="text-[12px] text-blue-500 no-underline hover:underline"
                           href="https://undraw.co/" target="_blank">Browse Illustrations on unDraw →</a>
                    </div>
                </div>
            </div>
        </>
    );
};