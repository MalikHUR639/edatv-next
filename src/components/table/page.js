import React from 'react';

const data = [
    {
      position: 1,
      gazpacho: 'Gazpacho Tradicional Chef Select',
      supermarket: 'Lidl',
      price: '1,60 euros el litro',
    },
    {
      position: 2,
      gazpacho: 'Gazpacho Tradicional Eliges',
      supermarket: 'Puntos de venta Grupo IFA',
      price: '2 euros el litro',
    },
  ];

const Table = () => {
  return (
    <div className="overflow-x-auto mb-[3rem]">
      <table className="min-w-full bg-white border border-gray-200"> 
        <thead>
          <tr className="text-center text-lg font-bold bg-blue-200">
            {Object.keys(data[0]).map((key, index) => (
              <td key={index} className="py-3 px-4 capitalize border-l border-gray-200 bg-[rgba(151, 182, 228, 0.72)]">
                {key}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className="text-center border-t border-gray-200 bg-[rgba(245, 245, 245, 0.77)]">
              {Object.values(item).map((value, cellIndex) => (
                <td key={cellIndex} className={`py-3 px-4 ${cellIndex !== 0 ? 'border-l border-gray-200' : ''}`}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
