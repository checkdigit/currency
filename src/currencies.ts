// currencies.ts

/*
 * Copyright (c) 2021-2025 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

/*
 * Table generated from ISO 4217 Currency Codes XML at https://www.iso.org/iso-4217-currency-codes.html,
 * published 2018-08-29.
 */

/* eslint-disable max-lines */

import type { Operation } from './operation.ts';

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

const currencies: Operation<Currency>[] = [
  {
    type: 'create',
    item: { name: 'Afghani', alphabeticCode: 'AFN', numericCode: '971', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Euro', alphabeticCode: 'EUR', numericCode: '978', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Lek', alphabeticCode: 'ALL', numericCode: '008', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Algerian Dinar', alphabeticCode: 'DZD', numericCode: '012', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'US Dollar', alphabeticCode: 'USD', numericCode: '840', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Kwanza', alphabeticCode: 'AOA', numericCode: '973', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'East Caribbean Dollar', alphabeticCode: 'XCD', numericCode: '951', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Argentine Peso', alphabeticCode: 'ARS', numericCode: '032', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Armenian Dram', alphabeticCode: 'AMD', numericCode: '051', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Aruban Florin', alphabeticCode: 'AWG', numericCode: '533', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Australian Dollar', alphabeticCode: 'AUD', numericCode: '036', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Azerbaijan Manat', alphabeticCode: 'AZN', numericCode: '944', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Bahamian Dollar', alphabeticCode: 'BSD', numericCode: '044', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Bahraini Dinar', alphabeticCode: 'BHD', numericCode: '048', minorUnits: 3 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Taka', alphabeticCode: 'BDT', numericCode: '050', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Barbados Dollar', alphabeticCode: 'BBD', numericCode: '052', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Belarusian Ruble', alphabeticCode: 'BYN', numericCode: '933', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Belize Dollar', alphabeticCode: 'BZD', numericCode: '084', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'CFA Franc BCEAO', alphabeticCode: 'XOF', numericCode: '952', minorUnits: 0 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Bermudian Dollar', alphabeticCode: 'BMD', numericCode: '060', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Indian Rupee', alphabeticCode: 'INR', numericCode: '356', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Ngultrum', alphabeticCode: 'BTN', numericCode: '064', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Boliviano', alphabeticCode: 'BOB', numericCode: '068', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { isFund: true, name: 'Mvdol', alphabeticCode: 'BOV', numericCode: '984', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Convertible Mark', alphabeticCode: 'BAM', numericCode: '977', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Pula', alphabeticCode: 'BWP', numericCode: '072', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Norwegian Krone', alphabeticCode: 'NOK', numericCode: '578', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Brazilian Real', alphabeticCode: 'BRL', numericCode: '986', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Brunei Dollar', alphabeticCode: 'BND', numericCode: '096', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Bulgarian Lev', alphabeticCode: 'BGN', numericCode: '975', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Burundi Franc', alphabeticCode: 'BIF', numericCode: '108', minorUnits: 0 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Cabo Verde Escudo', alphabeticCode: 'CVE', numericCode: '132', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Riel', alphabeticCode: 'KHR', numericCode: '116', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'CFA Franc BEAC', alphabeticCode: 'XAF', numericCode: '950', minorUnits: 0 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Canadian Dollar', alphabeticCode: 'CAD', numericCode: '124', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Cayman Islands Dollar', alphabeticCode: 'KYD', numericCode: '136', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Chilean Peso', alphabeticCode: 'CLP', numericCode: '152', minorUnits: 0 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { isFund: true, name: 'Unidad de Fomento', alphabeticCode: 'CLF', numericCode: '990', minorUnits: 4 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Yuan Renminbi', alphabeticCode: 'CNY', numericCode: '156', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Colombian Peso', alphabeticCode: 'COP', numericCode: '170', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { isFund: true, name: 'Unidad de Valor Real', alphabeticCode: 'COU', numericCode: '970', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Comorian Franc', alphabeticCode: 'KMF', numericCode: '174', minorUnits: 0 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Congolese Franc', alphabeticCode: 'CDF', numericCode: '976', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'New Zealand Dollar', alphabeticCode: 'NZD', numericCode: '554', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Costa Rican Colon', alphabeticCode: 'CRC', numericCode: '188', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Kuna', alphabeticCode: 'HRK', numericCode: '191', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Cuban Peso', alphabeticCode: 'CUP', numericCode: '192', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Peso Convertible', alphabeticCode: 'CUC', numericCode: '931', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Netherlands Antillean Guilder', alphabeticCode: 'ANG', numericCode: '532', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Czech Koruna', alphabeticCode: 'CZK', numericCode: '203', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Danish Krone', alphabeticCode: 'DKK', numericCode: '208', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Djibouti Franc', alphabeticCode: 'DJF', numericCode: '262', minorUnits: 0 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Dominican Peso', alphabeticCode: 'DOP', numericCode: '214', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Egyptian Pound', alphabeticCode: 'EGP', numericCode: '818', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'El Salvador Colon', alphabeticCode: 'SVC', numericCode: '222', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Nakfa', alphabeticCode: 'ERN', numericCode: '232', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Ethiopian Birr', alphabeticCode: 'ETB', numericCode: '230', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Falkland Islands Pound', alphabeticCode: 'FKP', numericCode: '238', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Fiji Dollar', alphabeticCode: 'FJD', numericCode: '242', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'CFP Franc', alphabeticCode: 'XPF', numericCode: '953', minorUnits: 0 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Dalasi', alphabeticCode: 'GMD', numericCode: '270', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Lari', alphabeticCode: 'GEL', numericCode: '981', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Ghana Cedi', alphabeticCode: 'GHS', numericCode: '936', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Gibraltar Pound', alphabeticCode: 'GIP', numericCode: '292', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Quetzal', alphabeticCode: 'GTQ', numericCode: '320', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Pound Sterling', alphabeticCode: 'GBP', numericCode: '826', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Guinean Franc', alphabeticCode: 'GNF', numericCode: '324', minorUnits: 0 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Guyana Dollar', alphabeticCode: 'GYD', numericCode: '328', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Gourde', alphabeticCode: 'HTG', numericCode: '332', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Lempira', alphabeticCode: 'HNL', numericCode: '340', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Hong Kong Dollar', alphabeticCode: 'HKD', numericCode: '344', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Forint', alphabeticCode: 'HUF', numericCode: '348', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Iceland Krona', alphabeticCode: 'ISK', numericCode: '352', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Rupiah', alphabeticCode: 'IDR', numericCode: '360', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'SDR (Special Drawing Right)', alphabeticCode: 'XDR', numericCode: '960' },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Iranian Rial', alphabeticCode: 'IRR', numericCode: '364', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Iraqi Dinar', alphabeticCode: 'IQD', numericCode: '368', minorUnits: 3 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'New Israeli Sheqel', alphabeticCode: 'ILS', numericCode: '376', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Jamaican Dollar', alphabeticCode: 'JMD', numericCode: '388', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Yen', alphabeticCode: 'JPY', numericCode: '392', minorUnits: 0 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Jordanian Dinar', alphabeticCode: 'JOD', numericCode: '400', minorUnits: 3 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Tenge', alphabeticCode: 'KZT', numericCode: '398', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Kenyan Shilling', alphabeticCode: 'KES', numericCode: '404', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'North Korean Won', alphabeticCode: 'KPW', numericCode: '408', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Won', alphabeticCode: 'KRW', numericCode: '410', minorUnits: 0 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Kuwaiti Dinar', alphabeticCode: 'KWD', numericCode: '414', minorUnits: 3 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Som', alphabeticCode: 'KGS', numericCode: '417', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Lao Kip', alphabeticCode: 'LAK', numericCode: '418', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Lebanese Pound', alphabeticCode: 'LBP', numericCode: '422', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Loti', alphabeticCode: 'LSL', numericCode: '426', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Rand', alphabeticCode: 'ZAR', numericCode: '710', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Liberian Dollar', alphabeticCode: 'LRD', numericCode: '430', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Libyan Dinar', alphabeticCode: 'LYD', numericCode: '434', minorUnits: 3 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Swiss Franc', alphabeticCode: 'CHF', numericCode: '756', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Pataca', alphabeticCode: 'MOP', numericCode: '446', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Denar', alphabeticCode: 'MKD', numericCode: '807', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Malagasy Ariary', alphabeticCode: 'MGA', numericCode: '969', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Malawi Kwacha', alphabeticCode: 'MWK', numericCode: '454', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Malaysian Ringgit', alphabeticCode: 'MYR', numericCode: '458', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Rufiyaa', alphabeticCode: 'MVR', numericCode: '462', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Ouguiya', alphabeticCode: 'MRU', numericCode: '929', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Mauritius Rupee', alphabeticCode: 'MUR', numericCode: '480', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'ADB Unit of Account', alphabeticCode: 'XUA', numericCode: '965' },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Mexican Peso', alphabeticCode: 'MXN', numericCode: '484', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      isFund: true,
      name: 'Mexican Unidad de Inversion (UDI)',
      alphabeticCode: 'MXV',
      numericCode: '979',
      minorUnits: 2,
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Moldovan Leu', alphabeticCode: 'MDL', numericCode: '498', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Tugrik', alphabeticCode: 'MNT', numericCode: '496', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Moroccan Dirham', alphabeticCode: 'MAD', numericCode: '504', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Mozambique Metical', alphabeticCode: 'MZN', numericCode: '943', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Kyat', alphabeticCode: 'MMK', numericCode: '104', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Namibia Dollar', alphabeticCode: 'NAD', numericCode: '516', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Nepalese Rupee', alphabeticCode: 'NPR', numericCode: '524', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Cordoba Oro', alphabeticCode: 'NIO', numericCode: '558', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Naira', alphabeticCode: 'NGN', numericCode: '566', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Rial Omani', alphabeticCode: 'OMR', numericCode: '512', minorUnits: 3 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Pakistan Rupee', alphabeticCode: 'PKR', numericCode: '586', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Balboa', alphabeticCode: 'PAB', numericCode: '590', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Kina', alphabeticCode: 'PGK', numericCode: '598', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Guarani', alphabeticCode: 'PYG', numericCode: '600', minorUnits: 0 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Sol', alphabeticCode: 'PEN', numericCode: '604', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Philippine Peso', alphabeticCode: 'PHP', numericCode: '608', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Zloty', alphabeticCode: 'PLN', numericCode: '985', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Zloty', alphabeticCode: 'PLN', numericCode: '985', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Qatari Rial', alphabeticCode: 'QAR', numericCode: '634', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Romanian Leu', alphabeticCode: 'RON', numericCode: '946', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Russian Ruble', alphabeticCode: 'RUB', numericCode: '643', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Rwanda Franc', alphabeticCode: 'RWF', numericCode: '646', minorUnits: 0 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Saint Helena Pound', alphabeticCode: 'SHP', numericCode: '654', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Tala', alphabeticCode: 'WST', numericCode: '882', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Dobra', alphabeticCode: 'STN', numericCode: '930', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Saudi Riyal', alphabeticCode: 'SAR', numericCode: '682', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Serbian Dinar', alphabeticCode: 'RSD', numericCode: '941', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Seychelles Rupee', alphabeticCode: 'SCR', numericCode: '690', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Leone', alphabeticCode: 'SLL', numericCode: '694', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Singapore Dollar', alphabeticCode: 'SGD', numericCode: '702', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Sucre', alphabeticCode: 'XSU', numericCode: '994' },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Solomon Islands Dollar', alphabeticCode: 'SBD', numericCode: '090', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Somali Shilling', alphabeticCode: 'SOS', numericCode: '706', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'South Sudanese Pound', alphabeticCode: 'SSP', numericCode: '728', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Sri Lanka Rupee', alphabeticCode: 'LKR', numericCode: '144', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Sudanese Pound', alphabeticCode: 'SDG', numericCode: '938', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Surinam Dollar', alphabeticCode: 'SRD', numericCode: '968', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Lilangeni', alphabeticCode: 'SZL', numericCode: '748', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Swedish Krona', alphabeticCode: 'SEK', numericCode: '752', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { isFund: true, name: 'WIR Euro', alphabeticCode: 'CHE', numericCode: '947', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { isFund: true, name: 'WIR Franc', alphabeticCode: 'CHW', numericCode: '948', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Syrian Pound', alphabeticCode: 'SYP', numericCode: '760', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'New Taiwan Dollar', alphabeticCode: 'TWD', numericCode: '901', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Somoni', alphabeticCode: 'TJS', numericCode: '972', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Tanzanian Shilling', alphabeticCode: 'TZS', numericCode: '834', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Baht', alphabeticCode: 'THB', numericCode: '764', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Pa’anga', alphabeticCode: 'TOP', numericCode: '776', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Trinidad and Tobago Dollar', alphabeticCode: 'TTD', numericCode: '780', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Tunisian Dinar', alphabeticCode: 'TND', numericCode: '788', minorUnits: 3 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Turkish Lira', alphabeticCode: 'TRY', numericCode: '949', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Turkmenistan New Manat', alphabeticCode: 'TMT', numericCode: '934', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Uganda Shilling', alphabeticCode: 'UGX', numericCode: '800', minorUnits: 0 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Hryvnia', alphabeticCode: 'UAH', numericCode: '980', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'UAE Dirham', alphabeticCode: 'AED', numericCode: '784', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { isFund: true, name: 'US Dollar (Next day)', alphabeticCode: 'USN', numericCode: '997', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Peso Uruguayo', alphabeticCode: 'UYU', numericCode: '858', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      isFund: true,
      name: 'Uruguay Peso en Unidades Indexadas (UI)',
      alphabeticCode: 'UYI',
      numericCode: '940',
      minorUnits: 0,
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Unidad Previsional', alphabeticCode: 'UYW', numericCode: '927', minorUnits: 4 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Uzbekistan Sum', alphabeticCode: 'UZS', numericCode: '860', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Vatu', alphabeticCode: 'VUV', numericCode: '548', minorUnits: 0 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Bolívar Soberano', alphabeticCode: 'VES', numericCode: '928', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Dong', alphabeticCode: 'VND', numericCode: '704', minorUnits: 0 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Yemeni Rial', alphabeticCode: 'YER', numericCode: '886', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Zambian Kwacha', alphabeticCode: 'ZMW', numericCode: '967', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Zimbabwe Dollar', alphabeticCode: 'ZWL', numericCode: '932', minorUnits: 2 },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Bond Markets Unit European Composite Unit (EURCO)', alphabeticCode: 'XBA', numericCode: '955' },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Bond Markets Unit European Monetary Unit (E.M.U.-6)', alphabeticCode: 'XBB', numericCode: '956' },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Bond Markets Unit European Unit of Account 9 (E.U.A.-9)',
      alphabeticCode: 'XBC',
      numericCode: '957',
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Bond Markets Unit European Unit of Account 17 (E.U.A.-17)',
      alphabeticCode: 'XBD',
      numericCode: '958',
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Codes specifically reserved for testing purposes', alphabeticCode: 'XTS', numericCode: '963' },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'The codes assigned for transactions where no currency is involved',
      alphabeticCode: 'XXX',
      numericCode: '999',
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Gold', alphabeticCode: 'XAU', numericCode: '959' },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Palladium', alphabeticCode: 'XPD', numericCode: '964' },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Platinum', alphabeticCode: 'XPT', numericCode: '962' },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Silver', alphabeticCode: 'XAG', numericCode: '961' },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'delete',
    name: 'Iceland Krona',
    previousCreatedOn: '2018-01-01T00:00:00.000Z',
    createdOn: '2023-04-15T00:00:00.000Z',
  },
  {
    type: 'create',
    item: { name: 'Iceland Krona', alphabeticCode: 'ISK', numericCode: '352', minorUnits: 0 },
    createdOn: '2023-04-15T00:00:00.000Z',
  },
];

export default currencies;

/* eslint-enable max-lines */
