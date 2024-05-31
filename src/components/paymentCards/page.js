import React from 'react';
import Image from 'next/image';
import cardImage from '../../../public/eda.png'

const PaymentCards = () => {
    const amounts = [2, 5, 10, 20, 0];

    return (
        <div className="max-w-[1200] mx-auto grid grid-cols-1 px-4 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 pb-8 lg:pb-16 pt-4 lg:pt-6">
            {amounts.map((amount, index) => (
                <div key={index} className="flex flex-col items-center justify-center bg-white p-2">
                    <div className="mb-4">
                        <span className="text-lg font-bold text-center">
                            {amount === 0 ? 'Colabora con la cantidad que tu elijas una única vez' : `Colabora con ${amount} euros al mes`}
                        </span>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <Image src={cardImage} alt={`Donación ${amount} euros mensuales`} width={120} height={50} />
                    </div>
                    <div className="mt-4">
                        <span className="text-md font-medium text-center">
                            {amount === 0 ? 'Donación libre' : `Donación ${amount} euros mensuales`}
                        </span>
                    </div>
                    <div className={`flex items-center mt-4 ${amount === 0 ? 'border rounded-md px-1' : ''}`}>
                        <span className="text-2xl font-semibold mr-1">{amount === 0 ? '0,00' : amount}&nbsp;€</span>
                        <span className="text-sm font-medium">por mes</span>
                    </div>
                    <button className="mt-4 bg-blue-500 w-full text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">
                        {amount === 0 ? 'Donar' : 'Suscribirse'}
                    </button>
                    <div className="flex flex-col items-center mt-4">
                        <span className="text-sm font-medium">Métodos de pago aceptados:</span>
                        <div className="flex mt-2 gap-2">
                            <Image src="https://js.stripe.com/v3/fingerprinted/img/amex-b933c9009eeaf8cfd07e789c549b8c57.svg" alt="amex" width={24} height={16} />
                            <Image src="https://js.stripe.com/v3/fingerprinted/img/mastercard-86e9a2b929496a34918767093c470935.svg" alt="mastercard" width={24} height={16} />
                            <Image src="https://js.stripe.com/v3/fingerprinted/img/visa-fb36094822f73d7bc581f6c0bad1c201.svg" alt="visa" width={24} height={16} />
                            <Image src="https://js.stripe.com/v3/fingerprinted/img/google_pay-ca6cc2f4ee364c7966f8fabf064849fe.svg" alt="GOOGLE_PAY" width={24} height={16} />
                            <Image src="https://js.stripe.com/v3/fingerprinted/img/link-cadf7f2d4be971d3a20d4a333d3bff98.svg" alt="link" width={24} height={16} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PaymentCards;
