export interface Country {
  name: string;
  code: string;
  flag: string;
  iso: string;
}

// Comprehensive list of countries with calling codes
export const COUNTRIES: Country[] = [
  // North America
  { name: 'United States', code: '+1', flag: '🇺🇸', iso: 'US' },
  { name: 'Canada', code: '+1', flag: '🇨🇦', iso: 'CA' },
  { name: 'Mexico', code: '+52', flag: '🇲🇽', iso: 'MX' },

  // Europe
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧', iso: 'GB' },
  { name: 'Germany', code: '+49', flag: '🇩🇪', iso: 'DE' },
  { name: 'France', code: '+33', flag: '🇫🇷', iso: 'FR' },
  { name: 'Italy', code: '+39', flag: '🇮🇹', iso: 'IT' },
  { name: 'Spain', code: '+34', flag: '🇪🇸', iso: 'ES' },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱', iso: 'NL' },
  { name: 'Belgium', code: '+32', flag: '🇧🇪', iso: 'BE' },
  { name: 'Switzerland', code: '+41', flag: '🇨🇭', iso: 'CH' },
  { name: 'Austria', code: '+43', flag: '🇦🇹', iso: 'AT' },
  { name: 'Sweden', code: '+46', flag: '🇸🇪', iso: 'SE' },
  { name: 'Norway', code: '+47', flag: '🇳🇴', iso: 'NO' },
  { name: 'Denmark', code: '+45', flag: '🇩🇰', iso: 'DK' },
  { name: 'Finland', code: '+358', flag: '🇫🇮', iso: 'FI' },
  { name: 'Poland', code: '+48', flag: '🇵🇱', iso: 'PL' },
  { name: 'Czech Republic', code: '+420', flag: '🇨🇿', iso: 'CZ' },
  { name: 'Hungary', code: '+36', flag: '🇭🇺', iso: 'HU' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹', iso: 'PT' },
  { name: 'Greece', code: '+30', flag: '🇬🇷', iso: 'GR' },
  { name: 'Ireland', code: '+353', flag: '🇮🇪', iso: 'IE' },
  { name: 'Russia', code: '+7', flag: '🇷🇺', iso: 'RU' },
  { name: 'Ukraine', code: '+380', flag: '🇺🇦', iso: 'UA' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷', iso: 'TR' },

  // Central Asia & Middle East
  { name: 'Uzbekistan', code: '+998', flag: '🇺🇿', iso: 'UZ' },
  { name: 'Kazakhstan', code: '+7', flag: '🇰🇿', iso: 'KZ' },
  { name: 'Kyrgyzstan', code: '+996', flag: '🇰🇬', iso: 'KG' },
  { name: 'Tajikistan', code: '+992', flag: '🇹🇯', iso: 'TJ' },
  { name: 'Turkmenistan', code: '+993', flag: '🇹🇲', iso: 'TM' },
  { name: 'Afghanistan', code: '+93', flag: '🇦🇫', iso: 'AF' },
  { name: 'UAE', code: '+971', flag: '🇦🇪', iso: 'AE' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦', iso: 'SA' },
  { name: 'Qatar', code: '+974', flag: '🇶🇦', iso: 'QA' },
  { name: 'Kuwait', code: '+965', flag: '🇰🇼', iso: 'KW' },
  { name: 'Bahrain', code: '+973', flag: '🇧🇭', iso: 'BH' },
  { name: 'Oman', code: '+968', flag: '🇴🇲', iso: 'OM' },
  { name: 'Iran', code: '+98', flag: '🇮🇷', iso: 'IR' },
  { name: 'Iraq', code: '+964', flag: '🇮🇶', iso: 'IQ' },
  { name: 'Israel', code: '+972', flag: '🇮🇱', iso: 'IL' },
  { name: 'Jordan', code: '+962', flag: '🇯🇴', iso: 'JO' },
  { name: 'Lebanon', code: '+961', flag: '🇱🇧', iso: 'LB' },
  { name: 'Syria', code: '+963', flag: '🇸🇾', iso: 'SY' },

  // Asia Pacific
  { name: 'China', code: '+86', flag: '🇨🇳', iso: 'CN' },
  { name: 'Japan', code: '+81', flag: '🇯🇵', iso: 'JP' },
  { name: 'South Korea', code: '+82', flag: '🇰🇷', iso: 'KR' },
  { name: 'India', code: '+91', flag: '🇮🇳', iso: 'IN' },
  { name: 'Pakistan', code: '+92', flag: '🇵🇰', iso: 'PK' },
  { name: 'Bangladesh', code: '+880', flag: '🇧🇩', iso: 'BD' },
  { name: 'Sri Lanka', code: '+94', flag: '🇱🇰', iso: 'LK' },
  { name: 'Nepal', code: '+977', flag: '🇳🇵', iso: 'NP' },
  { name: 'Bhutan', code: '+975', flag: '🇧🇹', iso: 'BT' },
  { name: 'Myanmar', code: '+95', flag: '🇲🇲', iso: 'MM' },
  { name: 'Thailand', code: '+66', flag: '🇹🇭', iso: 'TH' },
  { name: 'Vietnam', code: '+84', flag: '🇻🇳', iso: 'VN' },
  { name: 'Cambodia', code: '+855', flag: '🇰🇭', iso: 'KH' },
  { name: 'Laos', code: '+856', flag: '🇱🇦', iso: 'LA' },
  { name: 'Malaysia', code: '+60', flag: '🇲🇾', iso: 'MY' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬', iso: 'SG' },
  { name: 'Indonesia', code: '+62', flag: '🇮🇩', iso: 'ID' },
  { name: 'Philippines', code: '+63', flag: '🇵🇭', iso: 'PH' },
  { name: 'Brunei', code: '+673', flag: '🇧🇳', iso: 'BN' },
  { name: 'Mongolia', code: '+976', flag: '🇲🇳', iso: 'MN' },
  { name: 'Hong Kong', code: '+852', flag: '🇭🇰', iso: 'HK' },
  { name: 'Macau', code: '+853', flag: '🇲🇴', iso: 'MO' },
  { name: 'Taiwan', code: '+886', flag: '🇹🇼', iso: 'TW' },

  // Oceania
  { name: 'Australia', code: '+61', flag: '🇦🇺', iso: 'AU' },
  { name: 'New Zealand', code: '+64', flag: '🇳🇿', iso: 'NZ' },
  { name: 'Fiji', code: '+679', flag: '🇫🇯', iso: 'FJ' },
  { name: 'Papua New Guinea', code: '+675', flag: '🇵🇬', iso: 'PG' },

  // Africa
  { name: 'South Africa', code: '+27', flag: '🇿🇦', iso: 'ZA' },
  { name: 'Egypt', code: '+20', flag: '🇪🇬', iso: 'EG' },
  { name: 'Nigeria', code: '+234', flag: '🇳🇬', iso: 'NG' },
  { name: 'Kenya', code: '+254', flag: '🇰🇪', iso: 'KE' },
  { name: 'Ghana', code: '+233', flag: '🇬🇭', iso: 'GH' },
  { name: 'Morocco', code: '+212', flag: '🇲🇦', iso: 'MA' },
  { name: 'Tunisia', code: '+216', flag: '🇹🇳', iso: 'TN' },
  { name: 'Algeria', code: '+213', flag: '🇩🇿', iso: 'DZ' },
  { name: 'Libya', code: '+218', flag: '🇱🇾', iso: 'LY' },
  { name: 'Sudan', code: '+249', flag: '🇸🇩', iso: 'SD' },
  { name: 'Ethiopia', code: '+251', flag: '🇪🇹', iso: 'ET' },
  { name: 'Tanzania', code: '+255', flag: '🇹🇿', iso: 'TZ' },
  { name: 'Uganda', code: '+256', flag: '🇺🇬', iso: 'UG' },
  { name: 'Zimbabwe', code: '+263', flag: '🇿🇼', iso: 'ZW' },
  { name: 'Zambia', code: '+260', flag: '🇿🇲', iso: 'ZM' },
  { name: 'Botswana', code: '+267', flag: '🇧🇼', iso: 'BW' },
  { name: 'Namibia', code: '+264', flag: '🇳🇦', iso: 'NA' },

  // South America
  { name: 'Brazil', code: '+55', flag: '🇧🇷', iso: 'BR' },
  { name: 'Argentina', code: '+54', flag: '🇦🇷', iso: 'AR' },
  { name: 'Chile', code: '+56', flag: '🇨🇱', iso: 'CL' },
  { name: 'Colombia', code: '+57', flag: '🇨🇴', iso: 'CO' },
  { name: 'Peru', code: '+51', flag: '🇵🇪', iso: 'PE' },
  { name: 'Venezuela', code: '+58', flag: '🇻🇪', iso: 'VE' },
  { name: 'Ecuador', code: '+593', flag: '🇪🇨', iso: 'EC' },
  { name: 'Bolivia', code: '+591', flag: '🇧🇴', iso: 'BO' },
  { name: 'Paraguay', code: '+595', flag: '🇵🇾', iso: 'PY' },
  { name: 'Uruguay', code: '+598', flag: '🇺🇾', iso: 'UY' },
  { name: 'Guyana', code: '+592', flag: '🇬🇾', iso: 'GY' },
  { name: 'Suriname', code: '+597', flag: '🇸🇷', iso: 'SR' },

  // Caribbean
  { name: 'Jamaica', code: '+1876', flag: '🇯🇲', iso: 'JM' },
  { name: 'Cuba', code: '+53', flag: '🇨🇺', iso: 'CU' },
  { name: 'Dominican Republic', code: '+1809', flag: '🇩🇴', iso: 'DO' },
  { name: 'Haiti', code: '+509', flag: '🇭🇹', iso: 'HT' },
  { name: 'Puerto Rico', code: '+1787', flag: '🇵🇷', iso: 'PR' },
  { name: 'Trinidad and Tobago', code: '+1868', flag: '🇹🇹', iso: 'TT' },
  { name: 'Barbados', code: '+1246', flag: '🇧🇧', iso: 'BB' },
];

// Popular countries that should appear first in dropdowns
export const POPULAR_COUNTRIES = [
  'United States',
  'United Kingdom',
  'Germany',
  'France',
  'Canada',
  'Australia',
  'India',
  'China',
  'Japan',
  'Uzbekistan',
  'UAE',
  'Saudi Arabia',
  'Turkey',
  'Russia',
];

// Helper function to get popular countries first, then rest alphabetically
export const getSortedCountries = (): Country[] => {
  const popular = COUNTRIES.filter((country) =>
    POPULAR_COUNTRIES.includes(country.name)
  ).sort(
    (a, b) =>
      POPULAR_COUNTRIES.indexOf(a.name) - POPULAR_COUNTRIES.indexOf(b.name)
  );

  const others = COUNTRIES.filter(
    (country) => !POPULAR_COUNTRIES.includes(country.name)
  ).sort((a, b) => a.name.localeCompare(b.name));

  return [...popular, ...others];
};

// Helper function to find country by code
export const findCountryByCode = (code: string): Country | undefined => {
  return COUNTRIES.find((country) => country.code === code);
};

// Helper function to search countries
export const searchCountries = (query: string): Country[] => {
  const searchTerm = query.toLowerCase();
  return COUNTRIES.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm) ||
      country.code.includes(searchTerm) ||
      country.iso.toLowerCase().includes(searchTerm)
  );
};
