import React from 'react';

const AdContainer = () => {
    return (
        <div className="relative h-[150px] mt-4 mb-4 text-center overflow-visible">
            <div
                className='border-none w-full text-center text-[#7c7b7b] text-xs font-normal'>
                PUBLICIDAD
            </div>
        </div>
    );
};

// const AdContainerModule = () => {
//     const adData = [
//         {
//             googleQueryId: "",
//             iframeSrc: "/"
//         }
//     ];

//     return (
//         <div className="container mx-auto p-4">
//             {adData.map((ad, index) => (
//                 <AdContainer
//                     key={index}
//                     googleQueryId={ad.googleQueryId}
//                     iframeSrc={ad.iframeSrc}
//                 />
//             ))}
//         </div>
//     );
// };

export default AdContainer;
