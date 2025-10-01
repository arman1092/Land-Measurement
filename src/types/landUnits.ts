export interface LandUnit {
  name: string;
  hindiName: string;
  toSquareMeters: number;
  symbol: string;
}

export interface ConversionResult {
  fromValue: number;
  fromUnit: string;
  toUnit: string;
  resultValue: number;
  timestamp: Date;
}

export const landUnits: Record<string, LandUnit> = {
  kadi: {
    name: 'Kadi',
    hindiName: 'काड़ी',
    toSquareMeters: 0.04,
    symbol: 'काड़ी'
  },
  jarib: {
    name: 'Jarib',
    hindiName: 'जरीब',
    toSquareMeters: 400,
    symbol: 'जरीब'
  },
  dhismil: {
    name: 'Dhismil',
    hindiName: 'डिसमील',
    toSquareMeters: 40,
    symbol: 'डिसमील'
  },
  katha: {
    name: 'Katha',
    hindiName: 'कठा',
    toSquareMeters: 160,
    symbol: 'कठा'
  },
  rakad: {
    name: 'Rakad',
    hindiName: 'रकड़',
    toSquareMeters: 4000,
    symbol: 'रकड़'
  },
  bigha: {
    name: 'Bigha',
    hindiName: 'बीघा',
    toSquareMeters: 3200,
    symbol: 'बीघा'
  },
  squareMeter: {
    name: 'Square Meter',
    hindiName: 'वर्ग मीटर',
    toSquareMeters: 1,
    symbol: 'm²'
  },
  acre: {
    name: 'Acre',
    hindiName: 'एकड़',
    toSquareMeters: 4046.86,
    symbol: 'ac'
  },
  hectare: {
    name: 'Hectare',
    hindiName: 'हेक्टेयर',
    toSquareMeters: 10000,
    symbol: 'ha'
  }
};
