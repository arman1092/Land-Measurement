import { useState } from 'react';
import { Calculator, RefreshCw } from 'lucide-react';
import { UnitSelector } from './components/UnitSelector';
import { ConversionCard } from './components/ConversionCard';
import { ConversionHistory } from './components/ConversionHistory';
import { QuickReferenceCard } from './components/QuickReferenceCard';
import { convertLandUnit } from './utils/conversionLogic';
import { ConversionResult } from './types/landUnits';

function App() {
  const [inputValue, setInputValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<string>('kadi');
  const [toUnit, setToUnit] = useState<string>('squareMeter');
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<ConversionResult[]>([]);
  const [showReference, setShowReference] = useState(false);

  const handleConvert = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value) || value <= 0) {
      alert('Please enter a valid positive number');
      return;
    }

    try {
      const convertedValue = convertLandUnit(value, fromUnit, toUnit);
      setResult(convertedValue);

      const newConversion: ConversionResult = {
        fromValue: value,
        fromUnit,
        toUnit,
        resultValue: convertedValue,
        timestamp: new Date(),
      };

      setHistory([newConversion, ...history.slice(0, 9)]);
    } catch (error) {
      alert('Conversion error. Please check your inputs.');
    }
  };

  const handleSwapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    if (result !== null) {
      setInputValue(result.toString());
      setResult(null);
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-12 h-12 text-emerald-600" />
            <h1 className="text-5xl font-bold text-gray-800">
              Land Measurement Converter
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            भूमि माप रूपांतरण उपकरण - Convert Indian Land Units with Ease
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-emerald-100">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Value
                  </label>
                  <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleConvert()}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors text-lg font-semibold"
                    placeholder="Enter value"
                    min="0"
                    step="any"
                  />
                </div>

                <UnitSelector
                  value={fromUnit}
                  onChange={setFromUnit}
                  label="From Unit"
                />
              </div>

              <div className="flex justify-center mb-6">
                <button
                  onClick={handleSwapUnits}
                  className="p-3 bg-emerald-100 hover:bg-emerald-200 rounded-full transition-colors"
                  title="Swap units"
                >
                  <RefreshCw className="w-6 h-6 text-emerald-600" />
                </button>
              </div>

              <div className="mb-6">
                <UnitSelector
                  value={toUnit}
                  onChange={setToUnit}
                  label="To Unit"
                />
              </div>

              <button
                onClick={handleConvert}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Convert Now
              </button>
            </div>

            {result !== null && (
              <ConversionCard
                fromValue={parseFloat(inputValue)}
                fromUnit={fromUnit}
                toUnit={toUnit}
                resultValue={result}
              />
            )}

            {history.length > 0 && (
              <ConversionHistory
                history={history}
                onClear={handleClearHistory}
              />
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Common Conversions
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                  <div className="font-semibold text-gray-800 mb-1">
                    1 Bigha (बीघा)
                  </div>
                  <div className="text-sm text-gray-600">
                    = 20 Katha = 3,200 m²
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                  <div className="font-semibold text-gray-800 mb-1">
                    1 Katha (कठा)
                  </div>
                  <div className="text-sm text-gray-600">
                    = 4 Dhismil = 160 m²
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                  <div className="font-semibold text-gray-800 mb-1">
                    1 Acre (एकड़)
                  </div>
                  <div className="text-sm text-gray-600">
                    = 4,046.86 m² ≈ 1.26 Bigha
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                  <div className="font-semibold text-gray-800 mb-1">
                    1 Rakad (रकड़)
                  </div>
                  <div className="text-sm text-gray-600">
                    = 25 Katha = 4,000 m²
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowReference(!showReference)}
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg"
            >
              {showReference ? 'Hide' : 'Show'} Complete Reference
            </button>

            {showReference && <QuickReferenceCard />}
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            Made with care for accurate land measurement conversions
          </p>
          <p className="text-xs mt-2">
            Note: These conversions are based on standard Indian land measurement units.
            Regional variations may apply.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
