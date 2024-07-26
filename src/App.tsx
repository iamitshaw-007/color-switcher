import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#333');
  const colorJson = [
    { colorId: 1, colorName: '#bb0101', colorText: 'Red' },
    { colorId: 2, colorName: '#0101dd', colorText: 'Blue' },
    { colorId: 3, colorName: '#333333', colorText: 'Black' },
    { colorId: 4, colorName: 'Olive', colorText: 'Olive' },
    { colorId: 5, colorName: 'Lavender', colorText: 'Lavender' },
    { colorId: 6, colorName: 'Orange', colorText: 'Orange' },
    { colorId: 7, colorName: 'Purple', colorText: 'Purple' },
    { colorId: 8, colorName: 'Teal', colorText: 'Teal' },
    { colorId: 9, colorName: 'Green', colorText: 'Green' },
  ];

  return (
    <>
      <div
        className="w-full h-screen duration-1000"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap  justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {colorJson.map((colorObj, index) => (
              <button
                onClick={() => setColor(colorObj.colorName.toLowerCase())}
                key={index}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{
                  backgroundColor: `${colorObj.colorName.toLowerCase()}`,
                }}
              >
                {colorObj.colorText}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
