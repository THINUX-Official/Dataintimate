'use client'

export const ColorCards = () => {
    return (
        <>
            <div className="mt-2 flex flex-wrap justify-content-between">
                <div className="bg-[#4e73df] h-16 rounded p-3 lg:w-[49%] w-full my-2">
                    <h6 className="text-white text-[11px]">Primary</h6>
                    <h6 className="text-white text-[11px] opacity-50">#4e73df</h6>
                </div>

                <div className="bg-[#1cc88a] h-16 rounded p-3 my-2 lg:w-[49%] w-full">
                    <h6 className="text-white text-[11px]">Success</h6>
                    <h6 className="text-white text-[11px] opacity-50">#1cc88a</h6>
                </div>

                <div className="bg-[#36b9cc] h-16 rounded p-3 my-2 lg:w-[49%] w-full">
                    <h6 className="text-white text-[11px]">Info</h6>
                    <h6 className="text-white text-[11px] opacity-50">#36b9cc</h6>
                </div>

                <div className="bg-[#f6c23e] h-16 rounded p-3 my-2 lg:w-[49%] w-full">
                    <h6 className="text-white text-[11px]">Warning</h6>
                    <h6 className="text-white text-[11px] opacity-50">#f6c23e</h6>
                </div>

                <div className="bg-[#e74a3b] h-16 rounded p-3 my-2 lg:w-[49%] w-full">
                    <h6 className="text-white text-[11px]">Danger</h6>
                    <h6 className="text-white text-[11px] opacity-50">#e74a3b</h6>
                </div>

                <div className="bg-[#858796] h-16 rounded p-3 my-2 lg:w-[49%] w-full">
                    <h6 className="text-white text-[11px]">Secondary</h6>
                    <h6 className="text-white text-[11px] opacity-50">#858796</h6>
                </div>

                <div className="bg-[#f8f9fc] h-16 rounded p-3 my-2 lg:w-[49%] w-full shadow-sm">
                    <h6 className="text-gray-400 text-[11px]">Light</h6>
                    <h6 className="text-gray-400 text-[11px] opacity-50">#f8f9fc</h6>
                </div>

                <div className="bg-[#5a5c69] h-16 rounded p-3 my-2 lg:w-[49%] w-full">
                    <h6 className="text-white text-[11px]">Dark</h6>
                    <h6 className="text-white text-[11px] opacity-50">#5a5c69</h6>
                </div>
            </div>
        </>
    );
};