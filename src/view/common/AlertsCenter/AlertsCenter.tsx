'use client'

import {BiSolidReport} from "react-icons/bi";

export const AlertsCenter = () => {
    return (
        <>
            {/*tabIndex="-1"*/}
            <div className="modal"         role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-white font-bold text-[11px]">Alerts Center</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <div className="flex items-center">
                                <div>
                                    <BiSolidReport/>
                                </div>
                                <div>
                                    <p className="text-opacity-50 text-sm">February 07, 2024</p>
                                    <p className="text-opacity-50 text-sm">A new monthly report is ready to
                                        download!</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div>
                                    <BiSolidReport/>
                                </div>
                                <div>
                                    <p className="text-opacity-50 text-sm">February 07, 2024</p>
                                    <p className="text-opacity-50 text-sm">A new monthly report is ready to
                                        download!</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div>
                                    <BiSolidReport/>
                                </div>
                                <div>
                                    <p className="text-opacity-50 text-sm">February 07, 2024</p>
                                    <p className="text-opacity-50 text-sm">A new monthly report is ready to
                                        download!</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="text-opacity-50 text-[8px] text-center"
                                    data-dismiss="modal">Show All Alerts
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};