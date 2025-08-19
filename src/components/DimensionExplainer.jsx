import React from 'react';

function DimensionExplainer({ matrixA, matrixB }) {
  const [aRows, aCols] = matrixA;
  const [bRows, bCols] = matrixB;
  const resultRows = aRows;
  const resultCols = bCols;

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 flex items-center justify-center relative">
      <div className="flex items-center gap-8 text-2xl font-bold">
        
        {/* Matrix A Dimensions */}
        <div className="flex flex-col items-center">
          <div className="text-sm text-gray-600 mb-2">Matrix A</div>
          <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-red-300">
            <span className="text-red-600">{aRows}</span>
            <span className="text-gray-400 mx-1">×</span>
            <span className="text-blue-600">{aCols}</span>
          </div>
        </div>

        {/* Multiplication Symbol */}
        <div className="text-4xl text-gray-700">×</div>

        {/* Matrix B Dimensions */}
        <div className="flex flex-col items-center">
          <div className="text-sm text-gray-600 mb-2">Matrix B</div>
          <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-red-300">
            <span className="text-blue-600">{bRows}</span>
            <span className="text-gray-400 mx-1">×</span>
            <span className="text-red-600">{bCols}</span>
          </div>
        </div>

        {/* Equals Symbol */}
        <div className="text-4xl text-gray-700">=</div>

        {/* Result Matrix Dimensions */}
        <div className="flex flex-col items-center">
          <div className="text-sm text-gray-600 mb-2">Result</div>
          <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-red-300">
            <span className="text-red-600">{resultRows}</span>
            <span className="text-gray-400 mx-1">×</span>
            <span className="text-red-600">{resultCols}</span>
          </div>
        </div>
      </div>


    </div>
  );
}

export default DimensionExplainer;
