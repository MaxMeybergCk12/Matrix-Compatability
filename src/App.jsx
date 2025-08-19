import React, { useState } from 'react';
import Template from './template/Template.jsx';
import Flexi from './template/assets/Flexi.js';
import MatrixLayoutVisualizer from './components/utils/layout/MatrixLayoutVisualizer';
import DimensionExplainer from './components/DimensionExplainer';


// Reusable component for each matrix step
function MatrixStep({ matrixA, matrixB }) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1">
        <MatrixLayoutVisualizer 
          matrixA={matrixA} 
          matrixB={matrixB} 
          totalWidth={484} 
          totalHeight={202} 
          margins={15} 
        />
      </div>
      <div className="flex-1">
        <DimensionExplainer matrixA={matrixA} matrixB={matrixB} />
      </div>
    </div>
  );
}

function App() {
  const [current_step, set_current_step] = useState(1);

// ==========================================
// 🔴 DO NOT MODIFY ANYTHING ABOVE THIS LINE
// ==========================================

  // ==========================================
  // 🟢 MODIFY THE SECTION BELOW THIS LINE
  // ==========================================
  
  const total_steps = 27; // All possible matrix combinations!
  
  const flexi_steps = [
    { pose: Flexi.pointing, message: "Focus on the blue numbers!" },
    { pose: Flexi.reading, message: "1×1 times 1×2..." },
    { pose: Flexi.reading, message: "1×1 times 1×3..." },
    { pose: Flexi.reading, message: "1×2 times 2×1..." },
    { pose: Flexi.teacher, message: "Notice how they match perfectly!" },
    { pose: Flexi.reading, message: "1×2 times 2×2..." },
    { pose: Flexi.reading, message: "1×2 times 2×3..." },
    { pose: Flexi.reading, message: "1×3 times 3×1..." },
    { pose: Flexi.reading, message: "1×3 times 3×2..." },
    { pose: Flexi.excited, message: "When they match, multiplication works!" },
    { pose: Flexi.reading, message: "1×3 times 3×3..." },
    { pose: Flexi.reading, message: "2×1 times 1×1..." },
    { pose: Flexi.reading, message: "2×1 times 1×2..." },
    { pose: Flexi.reading, message: "2×1 times 1×3..." },
    { pose: Flexi.thumbs_up, message: "Red numbers become our shape!" },
    { pose: Flexi.reading, message: "2×2 times 2×1..." },
    { pose: Flexi.reading, message: "2×2 times 2×2..." },
    { pose: Flexi.reading, message: "2×2 times 2×3..." },
    { pose: Flexi.teacher, message: "See the pattern emerging?" },
    { pose: Flexi.reading, message: "2×3 times 3×1..." },
    { pose: Flexi.reading, message: "2×3 times 3×2..." },
    { pose: Flexi.reading, message: "2×3 times 3×3..." },
    { pose: Flexi.reading, message: "3×1 times 1×1..." },
    { pose: Flexi.excited, message: "Almost done! Look at these!" },
    { pose: Flexi.reading, message: "3×1 times 1×2..." },
    { pose: Flexi.reading, message: "3×1 times 1×3..." },
    { pose: Flexi.reading, message: "3×2 times 2×1..." },
    { pose: Flexi.reading, message: "3×2 times 2×2..." },
    { pose: Flexi.reading, message: "3×2 times 2×3..." },
    { pose: Flexi.reading, message: "3×3 times 3×1..." },
    { pose: Flexi.reading, message: "3×3 times 3×2..." },
    { pose: Flexi.idea, message: "All 27 combinations complete!" }
  ];

  // ==========================================
  // 🟢 MODIFY THE SECTION ABOVE THIS LINE
  // ==========================================

// ==========================================
// 🔴 DO NOT MODIFY ANYTHING BELOW THIS LINE  
// ==========================================
  
  return (
    <Template 
      current_step={current_step}
      total_steps={total_steps}
      flexi_steps={flexi_steps}
      on_next={() => set_current_step(prev => prev + 1)}
      on_prev={() => set_current_step(prev => prev - 1)}
    >
      
      {/* ================================================= */}
      {/* 🟢 HEY CURSUR! VIBE CODE INSIDE THIS AREA BELOW! */}
      {/* ================================================= */}
      
      {/* All 27 Matrix Combinations */}
      {current_step === 1 && <MatrixStep matrixA={[1, 1]} matrixB={[1, 1]} />}
      {current_step === 2 && <MatrixStep matrixA={[1, 1]} matrixB={[1, 2]} />}
      {current_step === 3 && <MatrixStep matrixA={[1, 1]} matrixB={[1, 3]} />}
      {current_step === 4 && <MatrixStep matrixA={[1, 2]} matrixB={[2, 1]} />}
      {current_step === 5 && <MatrixStep matrixA={[1, 2]} matrixB={[2, 2]} />}
      {current_step === 6 && <MatrixStep matrixA={[1, 2]} matrixB={[2, 3]} />}
      {current_step === 7 && <MatrixStep matrixA={[1, 3]} matrixB={[3, 1]} />}
      {current_step === 8 && <MatrixStep matrixA={[1, 3]} matrixB={[3, 2]} />}
      {current_step === 9 && <MatrixStep matrixA={[1, 3]} matrixB={[3, 3]} />}
      {current_step === 10 && <MatrixStep matrixA={[2, 1]} matrixB={[1, 1]} />}
      {current_step === 11 && <MatrixStep matrixA={[2, 1]} matrixB={[1, 2]} />}
      {current_step === 12 && <MatrixStep matrixA={[2, 1]} matrixB={[1, 3]} />}
      {current_step === 13 && <MatrixStep matrixA={[2, 2]} matrixB={[2, 1]} />}
      {current_step === 14 && <MatrixStep matrixA={[2, 2]} matrixB={[2, 2]} />}
      {current_step === 15 && <MatrixStep matrixA={[2, 2]} matrixB={[2, 3]} />}
      {current_step === 16 && <MatrixStep matrixA={[2, 3]} matrixB={[3, 1]} />}
      {current_step === 17 && <MatrixStep matrixA={[2, 3]} matrixB={[3, 2]} />}
      {current_step === 18 && <MatrixStep matrixA={[2, 3]} matrixB={[3, 3]} />}
      {current_step === 19 && <MatrixStep matrixA={[3, 1]} matrixB={[1, 1]} />}
      {current_step === 20 && <MatrixStep matrixA={[3, 1]} matrixB={[1, 2]} />}
      {current_step === 21 && <MatrixStep matrixA={[3, 1]} matrixB={[1, 3]} />}
      {current_step === 22 && <MatrixStep matrixA={[3, 2]} matrixB={[2, 1]} />}
      {current_step === 23 && <MatrixStep matrixA={[3, 2]} matrixB={[2, 2]} />}
      {current_step === 24 && <MatrixStep matrixA={[3, 2]} matrixB={[2, 3]} />}
      {current_step === 25 && <MatrixStep matrixA={[3, 3]} matrixB={[3, 1]} />}
      {current_step === 26 && <MatrixStep matrixA={[3, 3]} matrixB={[3, 2]} />}
      {current_step === 27 && <MatrixStep matrixA={[3, 3]} matrixB={[3, 3]} />}
      
      {/* ================================================= */}
      {/* 🟢 HEY CURSUR! VIBE CODE INSIDE THIS AREA ABOVE! */}
      {/* ================================================= */}

    </Template>
  );
}

// ==========================================
// 🔴 DO NOT MODIFY ANYTHING BELOW THIS LINE  
// ==========================================

export default App;