import React from "react";
import DetailColumn from "./detailCol";
import MainColumn from "./mainCol";
import SubColumn from "./subCol";

const CoverModule = ({ order }) => {
    const renderColumns = () => {
        switch (order) {
            case 1:
                return (
                    <>
                        <div className="grid grid-cols-[100%] gap-4 md:grid-cols-[33%,33%,33%] lg:grid-cols-[40%,30%,25%]">
                            <MainColumn />
                            <DetailColumn />
                            <SubColumn />
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="grid grid-cols-[100%] gap-4 md:grid-cols-[33%,33%,33%] lg:grid-cols-[30%,40%,25%]">
                            <DetailColumn />
                            <MainColumn />
                            <SubColumn />
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className="grid grid-cols-[100%] md:grid-cols-[33%,auto,33%,auto,33%] lg:grid-cols-[40%,auto,25%,auto,30%] gap-4">
                            <MainColumn />
                            <hr className="h-full w-[1px] border-[#f3f3f3] border-r-2 opacity-50 mx-auto" />
                            <SubColumn />
                            <hr className="h-full w-[1px] border-[#f3f3f3] border-r-2 opacity-50 mx-auto" />
                            <DetailColumn />
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <div className="grid grid-cols-[100%] md:grid-cols-[33%,33%,33%] lg:grid-cols-[40%,30%,25%] gap-4">
                            <p className="text-center text-[#7c7b7b] text-xs font-normal">PUBLICIDAD</p>
                            <DetailColumn />
                            <SubColumn />
                        </div>
                    </>
                );
            case 5:
                return (
                    <>
                        <div className="grid grid-cols-[100%] md:grid-cols-[33%,33%,33%] lg:grid-cols-[30%,30%,40%] gap-4">
                            <DetailColumn />
                            <DetailColumn />
                            <p className="text-center text-[#7c7b7b] text-xs font-normal">PUBLICIDAD</p>
                        </div>
                    </>
                );
            default:
                return (
                    <>
                        <div className="grid grid-cols-[100%] md:grid-cols-[33%,33%,33%] lg:grid-cols-[40%,30%,25%]">
                            <MainColumn />
                            <DetailColumn />
                            <SubColumn />
                        </div>
                    </>
                );
        }
    };

    return (
        <div className="mb-[50px] gap-[10px] mt-[20px] p-[1em]">
            {renderColumns()}
        </div>
    );
};

export default CoverModule;
