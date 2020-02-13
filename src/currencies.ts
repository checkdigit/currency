// currencies.ts

/*
 * Table generated from ISO 4217 Currency Codes XML at https://www.iso.org/iso-4217-currency-codes.html,
 * published 2018-08-29.
 */

export type CurrencyAlphabeticCode =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BOV'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHE'
  | 'CHF'
  | 'CHW'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'COU'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRU'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MXV'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STN'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'USN'
  | 'UYI'
  | 'UYU'
  | 'UYW'
  | 'UZS'
  | 'VES'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XAG'
  | 'XAU'
  | 'XBA'
  | 'XBB'
  | 'XBC'
  | 'XBD'
  | 'XCD'
  | 'XDR'
  | 'XOF'
  | 'XPD'
  | 'XPF'
  | 'XPT'
  | 'XSU'
  | 'XTS'
  | 'XUA'
  | 'XXX'
  | 'YER'
  | 'ZAR'
  | 'ZMW'
  | 'ZWL';

export type CurrencyNumericCode =
  | '008'
  | '012'
  | '032'
  | '036'
  | '044'
  | '048'
  | '050'
  | '051'
  | '052'
  | '060'
  | '064'
  | '068'
  | '072'
  | '084'
  | '090'
  | '096'
  | '104'
  | '108'
  | '116'
  | '124'
  | '132'
  | '136'
  | '144'
  | '152'
  | '156'
  | '170'
  | '174'
  | '188'
  | '191'
  | '192'
  | '203'
  | '208'
  | '214'
  | '222'
  | '230'
  | '232'
  | '238'
  | '242'
  | '262'
  | '270'
  | '292'
  | '320'
  | '324'
  | '328'
  | '332'
  | '340'
  | '344'
  | '348'
  | '352'
  | '356'
  | '360'
  | '364'
  | '368'
  | '376'
  | '388'
  | '392'
  | '398'
  | '400'
  | '404'
  | '408'
  | '410'
  | '414'
  | '417'
  | '418'
  | '422'
  | '426'
  | '430'
  | '434'
  | '446'
  | '454'
  | '458'
  | '462'
  | '480'
  | '484'
  | '496'
  | '498'
  | '504'
  | '512'
  | '516'
  | '524'
  | '532'
  | '533'
  | '548'
  | '554'
  | '558'
  | '566'
  | '578'
  | '586'
  | '590'
  | '598'
  | '600'
  | '604'
  | '608'
  | '634'
  | '643'
  | '646'
  | '654'
  | '682'
  | '690'
  | '694'
  | '702'
  | '704'
  | '706'
  | '710'
  | '728'
  | '748'
  | '752'
  | '756'
  | '760'
  | '764'
  | '776'
  | '780'
  | '784'
  | '788'
  | '800'
  | '807'
  | '818'
  | '826'
  | '834'
  | '840'
  | '858'
  | '860'
  | '882'
  | '886'
  | '901'
  | '927'
  | '928'
  | '929'
  | '930'
  | '931'
  | '932'
  | '933'
  | '934'
  | '936'
  | '938'
  | '940'
  | '941'
  | '943'
  | '944'
  | '946'
  | '947'
  | '948'
  | '949'
  | '950'
  | '951'
  | '952'
  | '953'
  | '955'
  | '956'
  | '957'
  | '958'
  | '959'
  | '960'
  | '961'
  | '962'
  | '963'
  | '964'
  | '965'
  | '967'
  | '968'
  | '969'
  | '970'
  | '971'
  | '972'
  | '973'
  | '975'
  | '976'
  | '977'
  | '978'
  | '979'
  | '980'
  | '981'
  | '984'
  | '985'
  | '986'
  | '990'
  | '994'
  | '997'
  | '999';

export type CurrencyName =
  | 'ADB Unit of Account'
  | 'Afghani'
  | 'Algerian Dinar'
  | 'Argentine Peso'
  | 'Armenian Dram'
  | 'Aruban Florin'
  | 'Australian Dollar'
  | 'Azerbaijan Manat'
  | 'Bahamian Dollar'
  | 'Bahraini Dinar'
  | 'Baht'
  | 'Balboa'
  | 'Barbados Dollar'
  | 'Belarusian Ruble'
  | 'Belize Dollar'
  | 'Bermudian Dollar'
  | 'Boliviano'
  | 'Bolívar Soberano'
  | 'Bond Markets Unit European Composite Unit (EURCO)'
  | 'Bond Markets Unit European Monetary Unit (E.M.U.-6)'
  | 'Bond Markets Unit European Unit of Account 17 (E.U.A.-17)'
  | 'Bond Markets Unit European Unit of Account 9 (E.U.A.-9)'
  | 'Brazilian Real'
  | 'Brunei Dollar'
  | 'Bulgarian Lev'
  | 'Burundi Franc'
  | 'CFA Franc BCEAO'
  | 'CFA Franc BEAC'
  | 'CFP Franc'
  | 'Cabo Verde Escudo'
  | 'Canadian Dollar'
  | 'Cayman Islands Dollar'
  | 'Chilean Peso'
  | 'Codes specifically reserved for testing purposes'
  | 'Colombian Peso'
  | 'Comorian Franc'
  | 'Congolese Franc'
  | 'Convertible Mark'
  | 'Cordoba Oro'
  | 'Costa Rican Colon'
  | 'Cuban Peso'
  | 'Czech Koruna'
  | 'Dalasi'
  | 'Danish Krone'
  | 'Denar'
  | 'Djibouti Franc'
  | 'Dobra'
  | 'Dominican Peso'
  | 'Dong'
  | 'East Caribbean Dollar'
  | 'Egyptian Pound'
  | 'El Salvador Colon'
  | 'Ethiopian Birr'
  | 'Euro'
  | 'Falkland Islands Pound'
  | 'Fiji Dollar'
  | 'Forint'
  | 'Ghana Cedi'
  | 'Gibraltar Pound'
  | 'Gold'
  | 'Gourde'
  | 'Guarani'
  | 'Guinean Franc'
  | 'Guyana Dollar'
  | 'Hong Kong Dollar'
  | 'Hryvnia'
  | 'Iceland Krona'
  | 'Indian Rupee'
  | 'Iranian Rial'
  | 'Iraqi Dinar'
  | 'Jamaican Dollar'
  | 'Jordanian Dinar'
  | 'Kenyan Shilling'
  | 'Kina'
  | 'Kuna'
  | 'Kuwaiti Dinar'
  | 'Kwanza'
  | 'Kyat'
  | 'Lao Kip'
  | 'Lari'
  | 'Lebanese Pound'
  | 'Lek'
  | 'Lempira'
  | 'Leone'
  | 'Liberian Dollar'
  | 'Libyan Dinar'
  | 'Lilangeni'
  | 'Loti'
  | 'Malagasy Ariary'
  | 'Malawi Kwacha'
  | 'Malaysian Ringgit'
  | 'Mauritius Rupee'
  | 'Mexican Peso'
  | 'Mexican Unidad de Inversion (UDI)'
  | 'Moldovan Leu'
  | 'Moroccan Dirham'
  | 'Mozambique Metical'
  | 'Mvdol'
  | 'Naira'
  | 'Nakfa'
  | 'Namibia Dollar'
  | 'Nepalese Rupee'
  | 'Netherlands Antillean Guilder'
  | 'New Israeli Sheqel'
  | 'New Taiwan Dollar'
  | 'New Zealand Dollar'
  | 'Ngultrum'
  | 'North Korean Won'
  | 'Norwegian Krone'
  | 'Ouguiya'
  | 'Pakistan Rupee'
  | 'Palladium'
  | 'Pataca'
  | 'Pa’anga'
  | 'Peso Convertible'
  | 'Peso Uruguayo'
  | 'Philippine Peso'
  | 'Platinum'
  | 'Pound Sterling'
  | 'Pula'
  | 'Qatari Rial'
  | 'Quetzal'
  | 'Rand'
  | 'Rial Omani'
  | 'Riel'
  | 'Romanian Leu'
  | 'Rufiyaa'
  | 'Rupiah'
  | 'Russian Ruble'
  | 'Rwanda Franc'
  | 'SDR (Special Drawing Right)'
  | 'Saint Helena Pound'
  | 'Saudi Riyal'
  | 'Serbian Dinar'
  | 'Seychelles Rupee'
  | 'Silver'
  | 'Singapore Dollar'
  | 'Sol'
  | 'Solomon Islands Dollar'
  | 'Som'
  | 'Somali Shilling'
  | 'Somoni'
  | 'South Sudanese Pound'
  | 'Sri Lanka Rupee'
  | 'Sucre'
  | 'Sudanese Pound'
  | 'Surinam Dollar'
  | 'Swedish Krona'
  | 'Swiss Franc'
  | 'Syrian Pound'
  | 'Taka'
  | 'Tala'
  | 'Tanzanian Shilling'
  | 'Tenge'
  | 'The codes assigned for transactions where no currency is involved'
  | 'Trinidad and Tobago Dollar'
  | 'Tugrik'
  | 'Tunisian Dinar'
  | 'Turkish Lira'
  | 'Turkmenistan New Manat'
  | 'UAE Dirham'
  | 'US Dollar (Next day)'
  | 'US Dollar'
  | 'Uganda Shilling'
  | 'Unidad Previsional'
  | 'Unidad de Fomento'
  | 'Unidad de Valor Real'
  | 'Uruguay Peso en Unidades Indexadas (UI)'
  | 'Uzbekistan Sum'
  | 'Vatu'
  | 'WIR Euro'
  | 'WIR Franc'
  | 'Won'
  | 'Yemeni Rial'
  | 'Yen'
  | 'Yuan Renminbi'
  | 'Zambian Kwacha'
  | 'Zimbabwe Dollar'
  | 'Zloty';

export interface Currency {
  name: CurrencyName;
  alphabeticCode: CurrencyAlphabeticCode;
  numericCode: CurrencyNumericCode;
  minorUnits?: number;
  isFund?: true;
}

const currencies: Currency[] = [
  { name: 'Afghani', alphabeticCode: 'AFN', numericCode: '971', minorUnits: 2 },
  { name: 'Euro', alphabeticCode: 'EUR', numericCode: '978', minorUnits: 2 },
  { name: 'Lek', alphabeticCode: 'ALL', numericCode: '008', minorUnits: 2 },
  { name: 'Algerian Dinar', alphabeticCode: 'DZD', numericCode: '012', minorUnits: 2 },
  { name: 'US Dollar', alphabeticCode: 'USD', numericCode: '840', minorUnits: 2 },
  { name: 'Kwanza', alphabeticCode: 'AOA', numericCode: '973', minorUnits: 2 },
  { name: 'East Caribbean Dollar', alphabeticCode: 'XCD', numericCode: '951', minorUnits: 2 },
  { name: 'Argentine Peso', alphabeticCode: 'ARS', numericCode: '032', minorUnits: 2 },
  { name: 'Armenian Dram', alphabeticCode: 'AMD', numericCode: '051', minorUnits: 2 },
  { name: 'Aruban Florin', alphabeticCode: 'AWG', numericCode: '533', minorUnits: 2 },
  { name: 'Australian Dollar', alphabeticCode: 'AUD', numericCode: '036', minorUnits: 2 },
  { name: 'Azerbaijan Manat', alphabeticCode: 'AZN', numericCode: '944', minorUnits: 2 },
  { name: 'Bahamian Dollar', alphabeticCode: 'BSD', numericCode: '044', minorUnits: 2 },
  { name: 'Bahraini Dinar', alphabeticCode: 'BHD', numericCode: '048', minorUnits: 3 },
  { name: 'Taka', alphabeticCode: 'BDT', numericCode: '050', minorUnits: 2 },
  { name: 'Barbados Dollar', alphabeticCode: 'BBD', numericCode: '052', minorUnits: 2 },
  { name: 'Belarusian Ruble', alphabeticCode: 'BYN', numericCode: '933', minorUnits: 2 },
  { name: 'Belize Dollar', alphabeticCode: 'BZD', numericCode: '084', minorUnits: 2 },
  { name: 'CFA Franc BCEAO', alphabeticCode: 'XOF', numericCode: '952', minorUnits: 0 },
  { name: 'Bermudian Dollar', alphabeticCode: 'BMD', numericCode: '060', minorUnits: 2 },
  { name: 'Indian Rupee', alphabeticCode: 'INR', numericCode: '356', minorUnits: 2 },
  { name: 'Ngultrum', alphabeticCode: 'BTN', numericCode: '064', minorUnits: 2 },
  { name: 'Boliviano', alphabeticCode: 'BOB', numericCode: '068', minorUnits: 2 },
  { isFund: true, name: 'Mvdol', alphabeticCode: 'BOV', numericCode: '984', minorUnits: 2 },
  { name: 'Convertible Mark', alphabeticCode: 'BAM', numericCode: '977', minorUnits: 2 },
  { name: 'Pula', alphabeticCode: 'BWP', numericCode: '072', minorUnits: 2 },
  { name: 'Norwegian Krone', alphabeticCode: 'NOK', numericCode: '578', minorUnits: 2 },
  { name: 'Brazilian Real', alphabeticCode: 'BRL', numericCode: '986', minorUnits: 2 },
  { name: 'Brunei Dollar', alphabeticCode: 'BND', numericCode: '096', minorUnits: 2 },
  { name: 'Bulgarian Lev', alphabeticCode: 'BGN', numericCode: '975', minorUnits: 2 },
  { name: 'Burundi Franc', alphabeticCode: 'BIF', numericCode: '108', minorUnits: 0 },
  { name: 'Cabo Verde Escudo', alphabeticCode: 'CVE', numericCode: '132', minorUnits: 2 },
  { name: 'Riel', alphabeticCode: 'KHR', numericCode: '116', minorUnits: 2 },
  { name: 'CFA Franc BEAC', alphabeticCode: 'XAF', numericCode: '950', minorUnits: 0 },
  { name: 'Canadian Dollar', alphabeticCode: 'CAD', numericCode: '124', minorUnits: 2 },
  { name: 'Cayman Islands Dollar', alphabeticCode: 'KYD', numericCode: '136', minorUnits: 2 },
  { name: 'Chilean Peso', alphabeticCode: 'CLP', numericCode: '152', minorUnits: 0 },
  { isFund: true, name: 'Unidad de Fomento', alphabeticCode: 'CLF', numericCode: '990', minorUnits: 4 },
  { name: 'Yuan Renminbi', alphabeticCode: 'CNY', numericCode: '156', minorUnits: 2 },
  { name: 'Colombian Peso', alphabeticCode: 'COP', numericCode: '170', minorUnits: 2 },
  { isFund: true, name: 'Unidad de Valor Real', alphabeticCode: 'COU', numericCode: '970', minorUnits: 2 },
  { name: 'Comorian Franc', alphabeticCode: 'KMF', numericCode: '174', minorUnits: 0 },
  { name: 'Congolese Franc', alphabeticCode: 'CDF', numericCode: '976', minorUnits: 2 },
  { name: 'New Zealand Dollar', alphabeticCode: 'NZD', numericCode: '554', minorUnits: 2 },
  { name: 'Costa Rican Colon', alphabeticCode: 'CRC', numericCode: '188', minorUnits: 2 },
  { name: 'Kuna', alphabeticCode: 'HRK', numericCode: '191', minorUnits: 2 },
  { name: 'Cuban Peso', alphabeticCode: 'CUP', numericCode: '192', minorUnits: 2 },
  { name: 'Peso Convertible', alphabeticCode: 'CUC', numericCode: '931', minorUnits: 2 },
  { name: 'Netherlands Antillean Guilder', alphabeticCode: 'ANG', numericCode: '532', minorUnits: 2 },
  { name: 'Czech Koruna', alphabeticCode: 'CZK', numericCode: '203', minorUnits: 2 },
  { name: 'Danish Krone', alphabeticCode: 'DKK', numericCode: '208', minorUnits: 2 },
  { name: 'Djibouti Franc', alphabeticCode: 'DJF', numericCode: '262', minorUnits: 0 },
  { name: 'Dominican Peso', alphabeticCode: 'DOP', numericCode: '214', minorUnits: 2 },
  { name: 'Egyptian Pound', alphabeticCode: 'EGP', numericCode: '818', minorUnits: 2 },
  { name: 'El Salvador Colon', alphabeticCode: 'SVC', numericCode: '222', minorUnits: 2 },
  { name: 'Nakfa', alphabeticCode: 'ERN', numericCode: '232', minorUnits: 2 },
  { name: 'Ethiopian Birr', alphabeticCode: 'ETB', numericCode: '230', minorUnits: 2 },
  { name: 'Falkland Islands Pound', alphabeticCode: 'FKP', numericCode: '238', minorUnits: 2 },
  { name: 'Fiji Dollar', alphabeticCode: 'FJD', numericCode: '242', minorUnits: 2 },
  { name: 'CFP Franc', alphabeticCode: 'XPF', numericCode: '953', minorUnits: 0 },
  { name: 'Dalasi', alphabeticCode: 'GMD', numericCode: '270', minorUnits: 2 },
  { name: 'Lari', alphabeticCode: 'GEL', numericCode: '981', minorUnits: 2 },
  { name: 'Ghana Cedi', alphabeticCode: 'GHS', numericCode: '936', minorUnits: 2 },
  { name: 'Gibraltar Pound', alphabeticCode: 'GIP', numericCode: '292', minorUnits: 2 },
  { name: 'Quetzal', alphabeticCode: 'GTQ', numericCode: '320', minorUnits: 2 },
  { name: 'Pound Sterling', alphabeticCode: 'GBP', numericCode: '826', minorUnits: 2 },
  { name: 'Guinean Franc', alphabeticCode: 'GNF', numericCode: '324', minorUnits: 0 },
  { name: 'Guyana Dollar', alphabeticCode: 'GYD', numericCode: '328', minorUnits: 2 },
  { name: 'Gourde', alphabeticCode: 'HTG', numericCode: '332', minorUnits: 2 },
  { name: 'Lempira', alphabeticCode: 'HNL', numericCode: '340', minorUnits: 2 },
  { name: 'Hong Kong Dollar', alphabeticCode: 'HKD', numericCode: '344', minorUnits: 2 },
  { name: 'Forint', alphabeticCode: 'HUF', numericCode: '348', minorUnits: 2 },
  { name: 'Iceland Krona', alphabeticCode: 'ISK', numericCode: '352', minorUnits: 0 },
  { name: 'Rupiah', alphabeticCode: 'IDR', numericCode: '360', minorUnits: 2 },
  { name: 'SDR (Special Drawing Right)', alphabeticCode: 'XDR', numericCode: '960' },
  { name: 'Iranian Rial', alphabeticCode: 'IRR', numericCode: '364', minorUnits: 2 },
  { name: 'Iraqi Dinar', alphabeticCode: 'IQD', numericCode: '368', minorUnits: 3 },
  { name: 'New Israeli Sheqel', alphabeticCode: 'ILS', numericCode: '376', minorUnits: 2 },
  { name: 'Jamaican Dollar', alphabeticCode: 'JMD', numericCode: '388', minorUnits: 2 },
  { name: 'Yen', alphabeticCode: 'JPY', numericCode: '392', minorUnits: 0 },
  { name: 'Jordanian Dinar', alphabeticCode: 'JOD', numericCode: '400', minorUnits: 3 },
  { name: 'Tenge', alphabeticCode: 'KZT', numericCode: '398', minorUnits: 2 },
  { name: 'Kenyan Shilling', alphabeticCode: 'KES', numericCode: '404', minorUnits: 2 },
  { name: 'North Korean Won', alphabeticCode: 'KPW', numericCode: '408', minorUnits: 2 },
  { name: 'Won', alphabeticCode: 'KRW', numericCode: '410', minorUnits: 0 },
  { name: 'Kuwaiti Dinar', alphabeticCode: 'KWD', numericCode: '414', minorUnits: 3 },
  { name: 'Som', alphabeticCode: 'KGS', numericCode: '417', minorUnits: 2 },
  { name: 'Lao Kip', alphabeticCode: 'LAK', numericCode: '418', minorUnits: 2 },
  { name: 'Lebanese Pound', alphabeticCode: 'LBP', numericCode: '422', minorUnits: 2 },
  { name: 'Loti', alphabeticCode: 'LSL', numericCode: '426', minorUnits: 2 },
  { name: 'Rand', alphabeticCode: 'ZAR', numericCode: '710', minorUnits: 2 },
  { name: 'Liberian Dollar', alphabeticCode: 'LRD', numericCode: '430', minorUnits: 2 },
  { name: 'Libyan Dinar', alphabeticCode: 'LYD', numericCode: '434', minorUnits: 3 },
  { name: 'Swiss Franc', alphabeticCode: 'CHF', numericCode: '756', minorUnits: 2 },
  { name: 'Pataca', alphabeticCode: 'MOP', numericCode: '446', minorUnits: 2 },
  { name: 'Denar', alphabeticCode: 'MKD', numericCode: '807', minorUnits: 2 },
  { name: 'Malagasy Ariary', alphabeticCode: 'MGA', numericCode: '969', minorUnits: 2 },
  { name: 'Malawi Kwacha', alphabeticCode: 'MWK', numericCode: '454', minorUnits: 2 },
  { name: 'Malaysian Ringgit', alphabeticCode: 'MYR', numericCode: '458', minorUnits: 2 },
  { name: 'Rufiyaa', alphabeticCode: 'MVR', numericCode: '462', minorUnits: 2 },
  { name: 'Ouguiya', alphabeticCode: 'MRU', numericCode: '929', minorUnits: 2 },
  { name: 'Mauritius Rupee', alphabeticCode: 'MUR', numericCode: '480', minorUnits: 2 },
  { name: 'ADB Unit of Account', alphabeticCode: 'XUA', numericCode: '965' },
  { name: 'Mexican Peso', alphabeticCode: 'MXN', numericCode: '484', minorUnits: 2 },
  { isFund: true, name: 'Mexican Unidad de Inversion (UDI)', alphabeticCode: 'MXV', numericCode: '979', minorUnits: 2 },
  { name: 'Moldovan Leu', alphabeticCode: 'MDL', numericCode: '498', minorUnits: 2 },
  { name: 'Tugrik', alphabeticCode: 'MNT', numericCode: '496', minorUnits: 2 },
  { name: 'Moroccan Dirham', alphabeticCode: 'MAD', numericCode: '504', minorUnits: 2 },
  { name: 'Mozambique Metical', alphabeticCode: 'MZN', numericCode: '943', minorUnits: 2 },
  { name: 'Kyat', alphabeticCode: 'MMK', numericCode: '104', minorUnits: 2 },
  { name: 'Namibia Dollar', alphabeticCode: 'NAD', numericCode: '516', minorUnits: 2 },
  { name: 'Nepalese Rupee', alphabeticCode: 'NPR', numericCode: '524', minorUnits: 2 },
  { name: 'Cordoba Oro', alphabeticCode: 'NIO', numericCode: '558', minorUnits: 2 },
  { name: 'Naira', alphabeticCode: 'NGN', numericCode: '566', minorUnits: 2 },
  { name: 'Rial Omani', alphabeticCode: 'OMR', numericCode: '512', minorUnits: 3 },
  { name: 'Pakistan Rupee', alphabeticCode: 'PKR', numericCode: '586', minorUnits: 2 },
  { name: 'Balboa', alphabeticCode: 'PAB', numericCode: '590', minorUnits: 2 },
  { name: 'Kina', alphabeticCode: 'PGK', numericCode: '598', minorUnits: 2 },
  { name: 'Guarani', alphabeticCode: 'PYG', numericCode: '600', minorUnits: 0 },
  { name: 'Sol', alphabeticCode: 'PEN', numericCode: '604', minorUnits: 2 },
  { name: 'Philippine Peso', alphabeticCode: 'PHP', numericCode: '608', minorUnits: 2 },
  { name: 'Zloty', alphabeticCode: 'PLN', numericCode: '985', minorUnits: 2 },
  { name: 'Qatari Rial', alphabeticCode: 'QAR', numericCode: '634', minorUnits: 2 },
  { name: 'Romanian Leu', alphabeticCode: 'RON', numericCode: '946', minorUnits: 2 },
  { name: 'Russian Ruble', alphabeticCode: 'RUB', numericCode: '643', minorUnits: 2 },
  { name: 'Rwanda Franc', alphabeticCode: 'RWF', numericCode: '646', minorUnits: 0 },
  { name: 'Saint Helena Pound', alphabeticCode: 'SHP', numericCode: '654', minorUnits: 2 },
  { name: 'Tala', alphabeticCode: 'WST', numericCode: '882', minorUnits: 2 },
  { name: 'Dobra', alphabeticCode: 'STN', numericCode: '930', minorUnits: 2 },
  { name: 'Saudi Riyal', alphabeticCode: 'SAR', numericCode: '682', minorUnits: 2 },
  { name: 'Serbian Dinar', alphabeticCode: 'RSD', numericCode: '941', minorUnits: 2 },
  { name: 'Seychelles Rupee', alphabeticCode: 'SCR', numericCode: '690', minorUnits: 2 },
  { name: 'Leone', alphabeticCode: 'SLL', numericCode: '694', minorUnits: 2 },
  { name: 'Singapore Dollar', alphabeticCode: 'SGD', numericCode: '702', minorUnits: 2 },
  { name: 'Sucre', alphabeticCode: 'XSU', numericCode: '994' },
  { name: 'Solomon Islands Dollar', alphabeticCode: 'SBD', numericCode: '090', minorUnits: 2 },
  { name: 'Somali Shilling', alphabeticCode: 'SOS', numericCode: '706', minorUnits: 2 },
  { name: 'South Sudanese Pound', alphabeticCode: 'SSP', numericCode: '728', minorUnits: 2 },
  { name: 'Sri Lanka Rupee', alphabeticCode: 'LKR', numericCode: '144', minorUnits: 2 },
  { name: 'Sudanese Pound', alphabeticCode: 'SDG', numericCode: '938', minorUnits: 2 },
  { name: 'Surinam Dollar', alphabeticCode: 'SRD', numericCode: '968', minorUnits: 2 },
  { name: 'Lilangeni', alphabeticCode: 'SZL', numericCode: '748', minorUnits: 2 },
  { name: 'Swedish Krona', alphabeticCode: 'SEK', numericCode: '752', minorUnits: 2 },
  { isFund: true, name: 'WIR Euro', alphabeticCode: 'CHE', numericCode: '947', minorUnits: 2 },
  { isFund: true, name: 'WIR Franc', alphabeticCode: 'CHW', numericCode: '948', minorUnits: 2 },
  { name: 'Syrian Pound', alphabeticCode: 'SYP', numericCode: '760', minorUnits: 2 },
  { name: 'New Taiwan Dollar', alphabeticCode: 'TWD', numericCode: '901', minorUnits: 2 },
  { name: 'Somoni', alphabeticCode: 'TJS', numericCode: '972', minorUnits: 2 },
  { name: 'Tanzanian Shilling', alphabeticCode: 'TZS', numericCode: '834', minorUnits: 2 },
  { name: 'Baht', alphabeticCode: 'THB', numericCode: '764', minorUnits: 2 },
  { name: 'Pa’anga', alphabeticCode: 'TOP', numericCode: '776', minorUnits: 2 },
  { name: 'Trinidad and Tobago Dollar', alphabeticCode: 'TTD', numericCode: '780', minorUnits: 2 },
  { name: 'Tunisian Dinar', alphabeticCode: 'TND', numericCode: '788', minorUnits: 3 },
  { name: 'Turkish Lira', alphabeticCode: 'TRY', numericCode: '949', minorUnits: 2 },
  { name: 'Turkmenistan New Manat', alphabeticCode: 'TMT', numericCode: '934', minorUnits: 2 },
  { name: 'Uganda Shilling', alphabeticCode: 'UGX', numericCode: '800', minorUnits: 0 },
  { name: 'Hryvnia', alphabeticCode: 'UAH', numericCode: '980', minorUnits: 2 },
  { name: 'UAE Dirham', alphabeticCode: 'AED', numericCode: '784', minorUnits: 2 },
  { isFund: true, name: 'US Dollar (Next day)', alphabeticCode: 'USN', numericCode: '997', minorUnits: 2 },
  { name: 'Peso Uruguayo', alphabeticCode: 'UYU', numericCode: '858', minorUnits: 2 },
  {
    isFund: true,
    name: 'Uruguay Peso en Unidades Indexadas (UI)',
    alphabeticCode: 'UYI',
    numericCode: '940',
    minorUnits: 0
  },
  { name: 'Unidad Previsional', alphabeticCode: 'UYW', numericCode: '927', minorUnits: 4 },
  { name: 'Uzbekistan Sum', alphabeticCode: 'UZS', numericCode: '860', minorUnits: 2 },
  { name: 'Vatu', alphabeticCode: 'VUV', numericCode: '548', minorUnits: 0 },
  { name: 'Bolívar Soberano', alphabeticCode: 'VES', numericCode: '928', minorUnits: 2 },
  { name: 'Dong', alphabeticCode: 'VND', numericCode: '704', minorUnits: 0 },
  { name: 'Yemeni Rial', alphabeticCode: 'YER', numericCode: '886', minorUnits: 2 },
  { name: 'Zambian Kwacha', alphabeticCode: 'ZMW', numericCode: '967', minorUnits: 2 },
  { name: 'Zimbabwe Dollar', alphabeticCode: 'ZWL', numericCode: '932', minorUnits: 2 },
  { name: 'Bond Markets Unit European Composite Unit (EURCO)', alphabeticCode: 'XBA', numericCode: '955' },
  { name: 'Bond Markets Unit European Monetary Unit (E.M.U.-6)', alphabeticCode: 'XBB', numericCode: '956' },
  { name: 'Bond Markets Unit European Unit of Account 9 (E.U.A.-9)', alphabeticCode: 'XBC', numericCode: '957' },
  { name: 'Bond Markets Unit European Unit of Account 17 (E.U.A.-17)', alphabeticCode: 'XBD', numericCode: '958' },
  { name: 'Codes specifically reserved for testing purposes', alphabeticCode: 'XTS', numericCode: '963' },
  {
    name: 'The codes assigned for transactions where no currency is involved',
    alphabeticCode: 'XXX',
    numericCode: '999'
  },
  { name: 'Gold', alphabeticCode: 'XAU', numericCode: '959' },
  { name: 'Palladium', alphabeticCode: 'XPD', numericCode: '964' },
  { name: 'Platinum', alphabeticCode: 'XPT', numericCode: '962' },
  { name: 'Silver', alphabeticCode: 'XAG', numericCode: '961' }
];

export default currencies;
