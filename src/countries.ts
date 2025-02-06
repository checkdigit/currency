// countries.ts

/*
 * Copyright (c) 2021-2025 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

/*
 * ISO 3166 country database with links to ISO 4217 currency information.
 */

/* eslint-disable max-lines */

import type { CurrencyAlphabeticCode } from './currencies.ts';
import type { Operation } from './operation.ts';

export type CountryAlpha2 =
  | 'TW'
  | 'AF'
  | 'AL'
  | 'DZ'
  | 'AS'
  | 'AD'
  | 'AO'
  | 'AI'
  | 'AG'
  | 'AR'
  | 'AM'
  | 'AW'
  | 'AU'
  | 'AT'
  | 'AZ'
  | 'BS'
  | 'BH'
  | 'BD'
  | 'BB'
  | 'BY'
  | 'BE'
  | 'BZ'
  | 'BJ'
  | 'BM'
  | 'BT'
  | 'BO'
  | 'BQ'
  | 'BA'
  | 'BW'
  | 'BV'
  | 'BR'
  | 'IO'
  | 'VG'
  | 'BN'
  | 'BG'
  | 'BF'
  | 'BI'
  | 'CV'
  | 'KH'
  | 'CM'
  | 'CA'
  | 'KY'
  | 'CF'
  | 'TD'
  | 'CL'
  | 'CN'
  | 'HK'
  | 'MO'
  | 'CX'
  | 'CC'
  | 'CO'
  | 'KM'
  | 'CG'
  | 'CK'
  | 'CR'
  | 'HR'
  | 'CU'
  | 'CW'
  | 'CY'
  | 'CZ'
  | 'CI'
  | 'KP'
  | 'CD'
  | 'DK'
  | 'DJ'
  | 'DM'
  | 'DO'
  | 'EC'
  | 'EG'
  | 'SV'
  | 'GQ'
  | 'ER'
  | 'EE'
  | 'ET'
  | 'FO'
  | 'FJ'
  | 'FI'
  | 'FR'
  | 'GF'
  | 'PF'
  | 'TF'
  | 'GA'
  | 'GM'
  | 'GE'
  | 'DE'
  | 'GH'
  | 'GI'
  | 'GR'
  | 'GL'
  | 'GD'
  | 'GP'
  | 'GU'
  | 'GT'
  | 'GG'
  | 'GN'
  | 'GW'
  | 'GY'
  | 'HT'
  | 'HM'
  | 'VA'
  | 'HN'
  | 'HU'
  | 'IS'
  | 'IN'
  | 'ID'
  | 'IR'
  | 'IQ'
  | 'IE'
  | 'IM'
  | 'IL'
  | 'IT'
  | 'JM'
  | 'JP'
  | 'JE'
  | 'JO'
  | 'KZ'
  | 'KE'
  | 'KI'
  | 'KW'
  | 'KG'
  | 'LA'
  | 'LV'
  | 'LB'
  | 'LS'
  | 'LR'
  | 'LY'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MG'
  | 'MW'
  | 'MY'
  | 'MV'
  | 'ML'
  | 'MT'
  | 'MH'
  | 'MQ'
  | 'MR'
  | 'MU'
  | 'YT'
  | 'MX'
  | 'FM'
  | 'MC'
  | 'MN'
  | 'ME'
  | 'MS'
  | 'MA'
  | 'MZ'
  | 'MM'
  | 'NA'
  | 'NR'
  | 'NP'
  | 'NL'
  | 'NC'
  | 'NZ'
  | 'NI'
  | 'NE'
  | 'NG'
  | 'NU'
  | 'NF'
  | 'MP'
  | 'NO'
  | 'OM'
  | 'PK'
  | 'PW'
  | 'PA'
  | 'PG'
  | 'PY'
  | 'PE'
  | 'PH'
  | 'PN'
  | 'PL'
  | 'PT'
  | 'PR'
  | 'QA'
  | 'KR'
  | 'MD'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'RE'
  | 'BL'
  | 'SH'
  | 'KN'
  | 'LC'
  | 'MF'
  | 'PM'
  | 'VC'
  | 'WS'
  | 'SM'
  | 'ST'
  | 'SA'
  | 'SN'
  | 'RS'
  | 'SC'
  | 'SL'
  | 'SG'
  | 'SX'
  | 'SK'
  | 'SI'
  | 'SB'
  | 'SO'
  | 'ZA'
  | 'SS'
  | 'ES'
  | 'LK'
  | 'SD'
  | 'SR'
  | 'SJ'
  | 'SZ'
  | 'SE'
  | 'CH'
  | 'SY'
  | 'TJ'
  | 'TH'
  | 'MK'
  | 'TL'
  | 'TG'
  | 'TK'
  | 'TO'
  | 'TT'
  | 'TN'
  | 'TR'
  | 'TM'
  | 'TC'
  | 'TV'
  | 'UG'
  | 'UA'
  | 'AE'
  | 'GB'
  | 'TZ'
  | 'UM'
  | 'VI'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VU'
  | 'VE'
  | 'VN'
  | 'WF'
  | 'EH'
  | 'YE'
  | 'ZM'
  | 'ZW'
  | 'AX'
  | 'PS';

export type CountryAlpha3 =
  | 'TWN'
  | 'AFG'
  | 'ALB'
  | 'DZA'
  | 'ASM'
  | 'AND'
  | 'AGO'
  | 'AIA'
  | 'ATG'
  | 'ARG'
  | 'ARM'
  | 'ABW'
  | 'AUS'
  | 'AUT'
  | 'AZE'
  | 'BHS'
  | 'BHR'
  | 'BGD'
  | 'BRB'
  | 'BLR'
  | 'BEL'
  | 'BLZ'
  | 'BEN'
  | 'BMU'
  | 'BTN'
  | 'BOL'
  | 'BES'
  | 'BIH'
  | 'BWA'
  | 'BVT'
  | 'BRA'
  | 'IOT'
  | 'VGB'
  | 'BRN'
  | 'BGR'
  | 'BFA'
  | 'BDI'
  | 'CPV'
  | 'KHM'
  | 'CMR'
  | 'CAN'
  | 'CYM'
  | 'CAF'
  | 'TCD'
  | 'CHL'
  | 'CHN'
  | 'HKG'
  | 'MAC'
  | 'CXR'
  | 'CCK'
  | 'COL'
  | 'COM'
  | 'COG'
  | 'COK'
  | 'CRI'
  | 'HRV'
  | 'CUB'
  | 'CUW'
  | 'CYP'
  | 'CZE'
  | 'CIV'
  | 'PRK'
  | 'COD'
  | 'DNK'
  | 'DJI'
  | 'DMA'
  | 'DOM'
  | 'ECU'
  | 'EGY'
  | 'SLV'
  | 'GNQ'
  | 'ERI'
  | 'EST'
  | 'ETH'
  | 'FRO'
  | 'FJI'
  | 'FIN'
  | 'FRA'
  | 'GUF'
  | 'PYF'
  | 'ATF'
  | 'GAB'
  | 'GMB'
  | 'GEO'
  | 'DEU'
  | 'GHA'
  | 'GIB'
  | 'GRC'
  | 'GRL'
  | 'GRD'
  | 'GLP'
  | 'GUM'
  | 'GTM'
  | 'GGY'
  | 'GIN'
  | 'GNB'
  | 'GUY'
  | 'HTI'
  | 'HMD'
  | 'VAT'
  | 'HND'
  | 'HUN'
  | 'ISL'
  | 'IND'
  | 'IDN'
  | 'IRN'
  | 'IRQ'
  | 'IRL'
  | 'IMN'
  | 'ISR'
  | 'ITA'
  | 'JAM'
  | 'JPN'
  | 'JEY'
  | 'JOR'
  | 'KAZ'
  | 'KEN'
  | 'KIR'
  | 'KWT'
  | 'KGZ'
  | 'LAO'
  | 'LVA'
  | 'LBN'
  | 'LSO'
  | 'LBR'
  | 'LBY'
  | 'LIE'
  | 'LTU'
  | 'LUX'
  | 'MDG'
  | 'MWI'
  | 'MYS'
  | 'MDV'
  | 'MLI'
  | 'MLT'
  | 'MHL'
  | 'MTQ'
  | 'MRT'
  | 'MUS'
  | 'MYT'
  | 'MEX'
  | 'FSM'
  | 'MCO'
  | 'MNG'
  | 'MNE'
  | 'MSR'
  | 'MAR'
  | 'MOZ'
  | 'MMR'
  | 'NAM'
  | 'NRU'
  | 'NPL'
  | 'NLD'
  | 'NCL'
  | 'NZL'
  | 'NIC'
  | 'NER'
  | 'NGA'
  | 'NIU'
  | 'NFK'
  | 'MNP'
  | 'NOR'
  | 'OMN'
  | 'PAK'
  | 'PLW'
  | 'PAN'
  | 'PNG'
  | 'PRY'
  | 'PER'
  | 'PHL'
  | 'PCN'
  | 'POL'
  | 'PRT'
  | 'PRI'
  | 'QAT'
  | 'KOR'
  | 'MDA'
  | 'ROU'
  | 'RUS'
  | 'RWA'
  | 'REU'
  | 'BLM'
  | 'SHN'
  | 'KNA'
  | 'LCA'
  | 'MAF'
  | 'SPM'
  | 'VCT'
  | 'WSM'
  | 'SMR'
  | 'STP'
  | 'SAU'
  | 'SEN'
  | 'SRB'
  | 'SYC'
  | 'SLE'
  | 'SGP'
  | 'SXM'
  | 'SVK'
  | 'SVN'
  | 'SLB'
  | 'SOM'
  | 'ZAF'
  | 'SSD'
  | 'ESP'
  | 'LKA'
  | 'SDN'
  | 'SUR'
  | 'SJM'
  | 'SWZ'
  | 'SWE'
  | 'CHE'
  | 'SYR'
  | 'TJK'
  | 'THA'
  | 'MKD'
  | 'TLS'
  | 'TGO'
  | 'TKL'
  | 'TON'
  | 'TTO'
  | 'TUN'
  | 'TUR'
  | 'TKM'
  | 'TCA'
  | 'TUV'
  | 'UGA'
  | 'UKR'
  | 'ARE'
  | 'GBR'
  | 'TZA'
  | 'UMI'
  | 'VIR'
  | 'USA'
  | 'URY'
  | 'UZB'
  | 'VUT'
  | 'VEN'
  | 'VNM'
  | 'WLF'
  | 'ESH'
  | 'YEM'
  | 'ZMB'
  | 'ZWE'
  | 'ALA'
  | 'PSE';

export type CountryNumeric =
  | '158'
  | '004'
  | '008'
  | '012'
  | '016'
  | '020'
  | '024'
  | '660'
  | '028'
  | '032'
  | '051'
  | '533'
  | '036'
  | '040'
  | '031'
  | '044'
  | '048'
  | '050'
  | '052'
  | '112'
  | '056'
  | '084'
  | '204'
  | '060'
  | '064'
  | '068'
  | '535'
  | '070'
  | '072'
  | '074'
  | '076'
  | '086'
  | '092'
  | '096'
  | '100'
  | '854'
  | '108'
  | '132'
  | '116'
  | '120'
  | '124'
  | '136'
  | '140'
  | '148'
  | '152'
  | '156'
  | '344'
  | '446'
  | '162'
  | '166'
  | '170'
  | '174'
  | '178'
  | '184'
  | '188'
  | '191'
  | '192'
  | '531'
  | '196'
  | '203'
  | '384'
  | '408'
  | '180'
  | '208'
  | '262'
  | '212'
  | '214'
  | '218'
  | '818'
  | '222'
  | '226'
  | '232'
  | '233'
  | '231'
  | '234'
  | '242'
  | '246'
  | '250'
  | '254'
  | '258'
  | '260'
  | '266'
  | '270'
  | '268'
  | '276'
  | '288'
  | '292'
  | '300'
  | '304'
  | '308'
  | '312'
  | '316'
  | '320'
  | '831'
  | '324'
  | '624'
  | '328'
  | '332'
  | '334'
  | '336'
  | '340'
  | '348'
  | '352'
  | '356'
  | '360'
  | '364'
  | '368'
  | '372'
  | '833'
  | '376'
  | '380'
  | '388'
  | '392'
  | '832'
  | '400'
  | '398'
  | '404'
  | '296'
  | '414'
  | '417'
  | '418'
  | '428'
  | '422'
  | '426'
  | '430'
  | '434'
  | '438'
  | '440'
  | '442'
  | '450'
  | '454'
  | '458'
  | '462'
  | '466'
  | '470'
  | '584'
  | '474'
  | '478'
  | '480'
  | '175'
  | '484'
  | '583'
  | '492'
  | '496'
  | '499'
  | '500'
  | '504'
  | '508'
  | '104'
  | '516'
  | '520'
  | '524'
  | '528'
  | '540'
  | '554'
  | '558'
  | '562'
  | '566'
  | '570'
  | '574'
  | '580'
  | '578'
  | '512'
  | '586'
  | '585'
  | '591'
  | '598'
  | '600'
  | '604'
  | '608'
  | '612'
  | '616'
  | '620'
  | '630'
  | '634'
  | '410'
  | '498'
  | '642'
  | '643'
  | '646'
  | '638'
  | '652'
  | '654'
  | '659'
  | '662'
  | '663'
  | '666'
  | '670'
  | '882'
  | '674'
  | '678'
  | '682'
  | '686'
  | '688'
  | '690'
  | '694'
  | '702'
  | '534'
  | '703'
  | '705'
  | '090'
  | '706'
  | '710'
  | '728'
  | '724'
  | '144'
  | '729'
  | '740'
  | '744'
  | '748'
  | '752'
  | '756'
  | '760'
  | '762'
  | '764'
  | '807'
  | '626'
  | '768'
  | '772'
  | '776'
  | '780'
  | '788'
  | '792'
  | '795'
  | '796'
  | '798'
  | '800'
  | '804'
  | '784'
  | '826'
  | '834'
  | '581'
  | '850'
  | '840'
  | '858'
  | '860'
  | '548'
  | '862'
  | '704'
  | '876'
  | '732'
  | '887'
  | '894'
  | '716'
  | '248'
  | '275';

export interface Country {
  // ISO 3166 country display name, alpha2/3 and numeric codes
  name: string;
  alpha2: CountryAlpha2;
  alpha3: CountryAlpha3;
  numeric: CountryNumeric;

  // ISO 4217 currencies
  currencyCodes: CurrencyAlphabeticCode[];
}

const countries: Operation<Country>[] = [
  {
    type: 'create',
    item: {
      name: 'Taiwan',
      alpha2: 'TW',
      alpha3: 'TWN',
      numeric: '158',
      currencyCodes: ['TWD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Afghanistan',
      alpha2: 'AF',
      alpha3: 'AFG',
      numeric: '004',
      currencyCodes: ['AFN'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Albania',
      alpha2: 'AL',
      alpha3: 'ALB',
      numeric: '008',
      currencyCodes: ['ALL'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Algeria',
      alpha2: 'DZ',
      alpha3: 'DZA',
      numeric: '012',
      currencyCodes: ['DZD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'American Samoa',
      alpha2: 'AS',
      alpha3: 'ASM',
      numeric: '016',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Andorra',
      alpha2: 'AD',
      alpha3: 'AND',
      numeric: '020',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Angola',
      alpha2: 'AO',
      alpha3: 'AGO',
      numeric: '024',
      currencyCodes: ['AOA'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Anguilla',
      alpha2: 'AI',
      alpha3: 'AIA',
      numeric: '660',
      currencyCodes: ['XCD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Antigua & Barbuda',
      alpha2: 'AG',
      alpha3: 'ATG',
      numeric: '028',
      currencyCodes: ['XCD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Argentina',
      alpha2: 'AR',
      alpha3: 'ARG',
      numeric: '032',
      currencyCodes: ['ARS'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Armenia',
      alpha2: 'AM',
      alpha3: 'ARM',
      numeric: '051',
      currencyCodes: ['AMD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Aruba',
      alpha2: 'AW',
      alpha3: 'ABW',
      numeric: '533',
      currencyCodes: ['AWG'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Australia',
      alpha2: 'AU',
      alpha3: 'AUS',
      numeric: '036',
      currencyCodes: ['AUD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Austria',
      alpha2: 'AT',
      alpha3: 'AUT',
      numeric: '040',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Azerbaijan',
      alpha2: 'AZ',
      alpha3: 'AZE',
      numeric: '031',
      currencyCodes: ['AZN'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Bahamas',
      alpha2: 'BS',
      alpha3: 'BHS',
      numeric: '044',
      currencyCodes: ['BSD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Bahrain',
      alpha2: 'BH',
      alpha3: 'BHR',
      numeric: '048',
      currencyCodes: ['BHD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Bangladesh',
      alpha2: 'BD',
      alpha3: 'BGD',
      numeric: '050',
      currencyCodes: ['BDT'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Barbados',
      alpha2: 'BB',
      alpha3: 'BRB',
      numeric: '052',
      currencyCodes: ['BBD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Belarus',
      alpha2: 'BY',
      alpha3: 'BLR',
      numeric: '112',
      currencyCodes: ['BYN'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Belgium',
      alpha2: 'BE',
      alpha3: 'BEL',
      numeric: '056',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Belize',
      alpha2: 'BZ',
      alpha3: 'BLZ',
      numeric: '084',
      currencyCodes: ['BZD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Benin',
      alpha2: 'BJ',
      alpha3: 'BEN',
      numeric: '204',
      currencyCodes: ['XOF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Bermuda',
      alpha2: 'BM',
      alpha3: 'BMU',
      numeric: '060',
      currencyCodes: ['BMD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Bhutan',
      alpha2: 'BT',
      alpha3: 'BTN',
      numeric: '064',
      currencyCodes: ['INR', 'BTN'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Bolivia',
      alpha2: 'BO',
      alpha3: 'BOL',
      numeric: '068',
      currencyCodes: ['BOB'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Caribbean Netherlands',
      alpha2: 'BQ',
      alpha3: 'BES',
      numeric: '535',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Bosnia',
      alpha2: 'BA',
      alpha3: 'BIH',
      numeric: '070',
      currencyCodes: ['BAM'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Botswana',
      alpha2: 'BW',
      alpha3: 'BWA',
      numeric: '072',
      currencyCodes: ['BWP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },

  {
    type: 'create',
    item: {
      name: 'Bouvet Island',
      alpha2: 'BV',
      alpha3: 'BVT',
      numeric: '074',
      currencyCodes: ['NOK'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Brazil',
      alpha2: 'BR',
      alpha3: 'BRA',
      numeric: '076',
      currencyCodes: ['BRL'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'British Indian Ocean Territory',
      alpha2: 'IO',
      alpha3: 'IOT',
      numeric: '086',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'British Virgin Islands',
      alpha2: 'VG',
      alpha3: 'VGB',
      numeric: '092',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Brunei',
      alpha2: 'BN',
      alpha3: 'BRN',
      numeric: '096',
      currencyCodes: ['BND'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Bulgaria',
      alpha2: 'BG',
      alpha3: 'BGR',
      numeric: '100',
      currencyCodes: ['BGN'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Burkina Faso',
      alpha2: 'BF',
      alpha3: 'BFA',
      numeric: '854',
      currencyCodes: ['XOF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Burundi',
      alpha2: 'BI',
      alpha3: 'BDI',
      numeric: '108',
      currencyCodes: ['BIF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Cape Verde',
      alpha2: 'CV',
      alpha3: 'CPV',
      numeric: '132',
      currencyCodes: ['CVE'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Cambodia',
      alpha2: 'KH',
      alpha3: 'KHM',
      numeric: '116',
      currencyCodes: ['KHR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Cameroon',
      alpha2: 'CM',
      alpha3: 'CMR',
      numeric: '120',
      currencyCodes: ['XAF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Canada',
      alpha2: 'CA',
      alpha3: 'CAN',
      numeric: '124',
      currencyCodes: ['CAD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Cayman Islands',
      alpha2: 'KY',
      alpha3: 'CYM',
      numeric: '136',
      currencyCodes: ['KYD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Central African Republic',
      alpha2: 'CF',
      alpha3: 'CAF',
      numeric: '140',
      currencyCodes: ['XAF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Chad',
      alpha2: 'TD',
      alpha3: 'TCD',
      numeric: '148',
      currencyCodes: ['XAF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Chile',
      alpha2: 'CL',
      alpha3: 'CHL',
      numeric: '152',
      currencyCodes: ['CLP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'China',
      alpha2: 'CN',
      alpha3: 'CHN',
      numeric: '156',
      currencyCodes: ['CNY'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Hong Kong',
      alpha2: 'HK',
      alpha3: 'HKG',
      numeric: '344',
      currencyCodes: ['HKD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Macau',
      alpha2: 'MO',
      alpha3: 'MAC',
      numeric: '446',
      currencyCodes: ['MOP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Christmas Island',
      alpha2: 'CX',
      alpha3: 'CXR',
      numeric: '162',
      currencyCodes: ['AUD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Cocos (Keeling) Islands',
      alpha2: 'CC',
      alpha3: 'CCK',
      numeric: '166',
      currencyCodes: ['AUD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Colombia',
      alpha2: 'CO',
      alpha3: 'COL',
      numeric: '170',
      currencyCodes: ['COP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Comoros',
      alpha2: 'KM',
      alpha3: 'COM',
      numeric: '174',
      currencyCodes: ['KMF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Congo - Brazzaville',
      alpha2: 'CG',
      alpha3: 'COG',
      numeric: '178',
      currencyCodes: ['XAF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Cook Islands',
      alpha2: 'CK',
      alpha3: 'COK',
      numeric: '184',
      currencyCodes: ['NZD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Costa Rica',
      alpha2: 'CR',
      alpha3: 'CRI',
      numeric: '188',
      currencyCodes: ['CRC'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Croatia',
      alpha2: 'HR',
      alpha3: 'HRV',
      numeric: '191',
      currencyCodes: ['HRK'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Cuba',
      alpha2: 'CU',
      alpha3: 'CUB',
      numeric: '192',
      currencyCodes: ['CUP', 'CUC'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Cura\u00E7ao',
      alpha2: 'CW',
      alpha3: 'CUW',
      numeric: '531',
      currencyCodes: ['ANG'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Cyprus',
      alpha2: 'CY',
      alpha3: 'CYP',
      numeric: '196',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Czechia',
      alpha2: 'CZ',
      alpha3: 'CZE',
      numeric: '203',
      currencyCodes: ['CZK'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'C\u00F4te d\u2019Ivoire',
      alpha2: 'CI',
      alpha3: 'CIV',
      numeric: '384',
      currencyCodes: ['XOF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'North Korea',
      alpha2: 'KP',
      alpha3: 'PRK',
      numeric: '408',
      currencyCodes: ['KPW'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Congo - Kinshasa',
      alpha2: 'CD',
      alpha3: 'COD',
      numeric: '180',
      currencyCodes: ['CDF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Denmark',
      alpha2: 'DK',
      alpha3: 'DNK',
      numeric: '208',
      currencyCodes: ['DKK'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Djibouti',
      alpha2: 'DJ',
      alpha3: 'DJI',
      numeric: '262',
      currencyCodes: ['DJF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Dominica',
      alpha2: 'DM',
      alpha3: 'DMA',
      numeric: '212',
      currencyCodes: ['XCD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Dominican Republic',
      alpha2: 'DO',
      alpha3: 'DOM',
      numeric: '214',
      currencyCodes: ['DOP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Ecuador',
      alpha2: 'EC',
      alpha3: 'ECU',
      numeric: '218',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Egypt',
      alpha2: 'EG',
      alpha3: 'EGY',
      numeric: '818',
      currencyCodes: ['EGP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'El Salvador',
      alpha2: 'SV',
      alpha3: 'SLV',
      numeric: '222',
      currencyCodes: ['SVC', 'USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Equatorial Guinea',
      alpha2: 'GQ',
      alpha3: 'GNQ',
      numeric: '226',
      currencyCodes: ['XAF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Eritrea',
      alpha2: 'ER',
      alpha3: 'ERI',
      numeric: '232',
      currencyCodes: ['ERN'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Estonia',
      alpha2: 'EE',
      alpha3: 'EST',
      numeric: '233',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Ethiopia',
      alpha2: 'ET',
      alpha3: 'ETH',
      numeric: '231',
      currencyCodes: ['ETB'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Faroe Islands',
      alpha2: 'FO',
      alpha3: 'FRO',
      numeric: '234',
      currencyCodes: ['DKK'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Fiji',
      alpha2: 'FJ',
      alpha3: 'FJI',
      numeric: '242',
      currencyCodes: ['FJD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Finland',
      alpha2: 'FI',
      alpha3: 'FIN',
      numeric: '246',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'France',
      alpha2: 'FR',
      alpha3: 'FRA',
      numeric: '250',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'French Guiana',
      alpha2: 'GF',
      alpha3: 'GUF',
      numeric: '254',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'French Polynesia',
      alpha2: 'PF',
      alpha3: 'PYF',
      numeric: '258',
      currencyCodes: ['XPF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'French Southern Territories',
      alpha2: 'TF',
      alpha3: 'ATF',
      numeric: '260',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Gabon',
      alpha2: 'GA',
      alpha3: 'GAB',
      numeric: '266',
      currencyCodes: ['XAF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Gambia',
      alpha2: 'GM',
      alpha3: 'GMB',
      numeric: '270',
      currencyCodes: ['GMD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Georgia',
      alpha2: 'GE',
      alpha3: 'GEO',
      numeric: '268',
      currencyCodes: ['GEL'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Germany',
      alpha2: 'DE',
      alpha3: 'DEU',
      numeric: '276',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Ghana',
      alpha2: 'GH',
      alpha3: 'GHA',
      numeric: '288',
      currencyCodes: ['GHS'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Gibraltar',
      alpha2: 'GI',
      alpha3: 'GIB',
      numeric: '292',
      currencyCodes: ['GIP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Greece',
      alpha2: 'GR',
      alpha3: 'GRC',
      numeric: '300',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Greenland',
      alpha2: 'GL',
      alpha3: 'GRL',
      numeric: '304',
      currencyCodes: ['DKK'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Grenada',
      alpha2: 'GD',
      alpha3: 'GRD',
      numeric: '308',
      currencyCodes: ['XCD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Guadeloupe',
      alpha2: 'GP',
      alpha3: 'GLP',
      numeric: '312',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Guam',
      alpha2: 'GU',
      alpha3: 'GUM',
      numeric: '316',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Guatemala',
      alpha2: 'GT',
      alpha3: 'GTM',
      numeric: '320',
      currencyCodes: ['GTQ'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Guernsey',
      alpha2: 'GG',
      alpha3: 'GGY',
      numeric: '831',
      currencyCodes: ['GBP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Guinea',
      alpha2: 'GN',
      alpha3: 'GIN',
      numeric: '324',
      currencyCodes: ['GNF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Guinea-Bissau',
      alpha2: 'GW',
      alpha3: 'GNB',
      numeric: '624',
      currencyCodes: ['XOF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Guyana',
      alpha2: 'GY',
      alpha3: 'GUY',
      numeric: '328',
      currencyCodes: ['GYD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Haiti',
      alpha2: 'HT',
      alpha3: 'HTI',
      numeric: '332',
      currencyCodes: ['HTG', 'USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Heard & McDonald Islands',
      alpha2: 'HM',
      alpha3: 'HMD',
      numeric: '334',
      currencyCodes: ['AUD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Vatican City',
      alpha2: 'VA',
      alpha3: 'VAT',
      numeric: '336',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Honduras',
      alpha2: 'HN',
      alpha3: 'HND',
      numeric: '340',
      currencyCodes: ['HNL'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Hungary',
      alpha2: 'HU',
      alpha3: 'HUN',
      numeric: '348',
      currencyCodes: ['HUF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Iceland',
      alpha2: 'IS',
      alpha3: 'ISL',
      numeric: '352',
      currencyCodes: ['ISK'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'India',
      alpha2: 'IN',
      alpha3: 'IND',
      numeric: '356',
      currencyCodes: ['INR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Indonesia',
      alpha2: 'ID',
      alpha3: 'IDN',
      numeric: '360',
      currencyCodes: ['IDR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Iran',
      alpha2: 'IR',
      alpha3: 'IRN',
      numeric: '364',
      currencyCodes: ['IRR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Iraq',
      alpha2: 'IQ',
      alpha3: 'IRQ',
      numeric: '368',
      currencyCodes: ['IQD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Ireland',
      alpha2: 'IE',
      alpha3: 'IRL',
      numeric: '372',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Isle of Man',
      alpha2: 'IM',
      alpha3: 'IMN',
      numeric: '833',
      currencyCodes: ['GBP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Israel',
      alpha2: 'IL',
      alpha3: 'ISR',
      numeric: '376',
      currencyCodes: ['ILS'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Italy',
      alpha2: 'IT',
      alpha3: 'ITA',
      numeric: '380',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Jamaica',
      alpha2: 'JM',
      alpha3: 'JAM',
      numeric: '388',
      currencyCodes: ['JMD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Japan',
      alpha2: 'JP',
      alpha3: 'JPN',
      numeric: '392',
      currencyCodes: ['JPY'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Jersey',
      alpha2: 'JE',
      alpha3: 'JEY',
      numeric: '832',
      currencyCodes: ['GBP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Jordan',
      alpha2: 'JO',
      alpha3: 'JOR',
      numeric: '400',
      currencyCodes: ['JOD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Kazakhstan',
      alpha2: 'KZ',
      alpha3: 'KAZ',
      numeric: '398',
      currencyCodes: ['KZT'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Kenya',
      alpha2: 'KE',
      alpha3: 'KEN',
      numeric: '404',
      currencyCodes: ['KES'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Kiribati',
      alpha2: 'KI',
      alpha3: 'KIR',
      numeric: '296',
      currencyCodes: ['AUD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Kuwait',
      alpha2: 'KW',
      alpha3: 'KWT',
      numeric: '414',
      currencyCodes: ['KWD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Kyrgyzstan',
      alpha2: 'KG',
      alpha3: 'KGZ',
      numeric: '417',
      currencyCodes: ['KGS'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Laos',
      alpha2: 'LA',
      alpha3: 'LAO',
      numeric: '418',
      currencyCodes: ['LAK'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Latvia',
      alpha2: 'LV',
      alpha3: 'LVA',
      numeric: '428',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Lebanon',
      alpha2: 'LB',
      alpha3: 'LBN',
      numeric: '422',
      currencyCodes: ['LBP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Lesotho',
      alpha2: 'LS',
      alpha3: 'LSO',
      numeric: '426',
      currencyCodes: ['LSL', 'ZAR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Liberia',
      alpha2: 'LR',
      alpha3: 'LBR',
      numeric: '430',
      currencyCodes: ['LRD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Libya',
      alpha2: 'LY',
      alpha3: 'LBY',
      numeric: '434',
      currencyCodes: ['LYD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Liechtenstein',
      alpha2: 'LI',
      alpha3: 'LIE',
      numeric: '438',
      currencyCodes: ['CHF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Lithuania',
      alpha2: 'LT',
      alpha3: 'LTU',
      numeric: '440',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Luxembourg',
      alpha2: 'LU',
      alpha3: 'LUX',
      numeric: '442',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Madagascar',
      alpha2: 'MG',
      alpha3: 'MDG',
      numeric: '450',
      currencyCodes: ['MGA'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Malawi',
      alpha2: 'MW',
      alpha3: 'MWI',
      numeric: '454',
      currencyCodes: ['MWK'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Malaysia',
      alpha2: 'MY',
      alpha3: 'MYS',
      numeric: '458',
      currencyCodes: ['MYR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Maldives',
      alpha2: 'MV',
      alpha3: 'MDV',
      numeric: '462',
      currencyCodes: ['MVR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Mali',
      alpha2: 'ML',
      alpha3: 'MLI',
      numeric: '466',
      currencyCodes: ['XOF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Malta',
      alpha2: 'MT',
      alpha3: 'MLT',
      numeric: '470',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Marshall Islands',
      alpha2: 'MH',
      alpha3: 'MHL',
      numeric: '584',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Martinique',
      alpha2: 'MQ',
      alpha3: 'MTQ',
      numeric: '474',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Mauritania',
      alpha2: 'MR',
      alpha3: 'MRT',
      numeric: '478',
      currencyCodes: ['MRU'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Mauritius',
      alpha2: 'MU',
      alpha3: 'MUS',
      numeric: '480',
      currencyCodes: ['MUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Mayotte',
      alpha2: 'YT',
      alpha3: 'MYT',
      numeric: '175',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Mexico',
      alpha2: 'MX',
      alpha3: 'MEX',
      numeric: '484',
      currencyCodes: ['MXN'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Micronesia',
      alpha2: 'FM',
      alpha3: 'FSM',
      numeric: '583',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Monaco',
      alpha2: 'MC',
      alpha3: 'MCO',
      numeric: '492',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Mongolia',
      alpha2: 'MN',
      alpha3: 'MNG',
      numeric: '496',
      currencyCodes: ['MNT'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Montenegro',
      alpha2: 'ME',
      alpha3: 'MNE',
      numeric: '499',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Montserrat',
      alpha2: 'MS',
      alpha3: 'MSR',
      numeric: '500',
      currencyCodes: ['XCD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Morocco',
      alpha2: 'MA',
      alpha3: 'MAR',
      numeric: '504',
      currencyCodes: ['MAD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Mozambique',
      alpha2: 'MZ',
      alpha3: 'MOZ',
      numeric: '508',
      currencyCodes: ['MZN'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Myanmar',
      alpha2: 'MM',
      alpha3: 'MMR',
      numeric: '104',
      currencyCodes: ['MMK'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Namibia',
      alpha2: 'NA',
      alpha3: 'NAM',
      numeric: '516',
      currencyCodes: ['NAD', 'ZAR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Nauru',
      alpha2: 'NR',
      alpha3: 'NRU',
      numeric: '520',
      currencyCodes: ['AUD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Nepal',
      alpha2: 'NP',
      alpha3: 'NPL',
      numeric: '524',
      currencyCodes: ['NPR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Netherlands',
      alpha2: 'NL',
      alpha3: 'NLD',
      numeric: '528',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'New Caledonia',
      alpha2: 'NC',
      alpha3: 'NCL',
      numeric: '540',
      currencyCodes: ['XPF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'New Zealand',
      alpha2: 'NZ',
      alpha3: 'NZL',
      numeric: '554',
      currencyCodes: ['NZD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Nicaragua',
      alpha2: 'NI',
      alpha3: 'NIC',
      numeric: '558',
      currencyCodes: ['NIO'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Niger',
      alpha2: 'NE',
      alpha3: 'NER',
      numeric: '562',
      currencyCodes: ['XOF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Nigeria',
      alpha2: 'NG',
      alpha3: 'NGA',
      numeric: '566',
      currencyCodes: ['NGN'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Niue',
      alpha2: 'NU',
      alpha3: 'NIU',
      numeric: '570',
      currencyCodes: ['NZD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Norfolk Island',
      alpha2: 'NF',
      alpha3: 'NFK',
      numeric: '574',
      currencyCodes: ['AUD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Northern Mariana Islands',
      alpha2: 'MP',
      alpha3: 'MNP',
      numeric: '580',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Norway',
      alpha2: 'NO',
      alpha3: 'NOR',
      numeric: '578',
      currencyCodes: ['NOK'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Oman',
      alpha2: 'OM',
      alpha3: 'OMN',
      numeric: '512',
      currencyCodes: ['OMR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Pakistan',
      alpha2: 'PK',
      alpha3: 'PAK',
      numeric: '586',
      currencyCodes: ['PKR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Palau',
      alpha2: 'PW',
      alpha3: 'PLW',
      numeric: '585',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Panama',
      alpha2: 'PA',
      alpha3: 'PAN',
      numeric: '591',
      currencyCodes: ['PAB', 'USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Papua New Guinea',
      alpha2: 'PG',
      alpha3: 'PNG',
      numeric: '598',
      currencyCodes: ['PGK'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Paraguay',
      alpha2: 'PY',
      alpha3: 'PRY',
      numeric: '600',
      currencyCodes: ['PYG'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Peru',
      alpha2: 'PE',
      alpha3: 'PER',
      numeric: '604',
      currencyCodes: ['PEN'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Philippines',
      alpha2: 'PH',
      alpha3: 'PHL',
      numeric: '608',
      currencyCodes: ['PHP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Pitcairn Islands',
      alpha2: 'PN',
      alpha3: 'PCN',
      numeric: '612',
      currencyCodes: ['NZD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Poland',
      alpha2: 'PL',
      alpha3: 'POL',
      numeric: '616',
      currencyCodes: ['PLN'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Portugal',
      alpha2: 'PT',
      alpha3: 'PRT',
      numeric: '620',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Puerto Rico',
      alpha2: 'PR',
      alpha3: 'PRI',
      numeric: '630',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Qatar',
      alpha2: 'QA',
      alpha3: 'QAT',
      numeric: '634',
      currencyCodes: ['QAR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'South Korea',
      alpha2: 'KR',
      alpha3: 'KOR',
      numeric: '410',
      currencyCodes: ['KRW'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Moldova',
      alpha2: 'MD',
      alpha3: 'MDA',
      numeric: '498',
      currencyCodes: ['MDL'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Romania',
      alpha2: 'RO',
      alpha3: 'ROU',
      numeric: '642',
      currencyCodes: ['RON'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Russia',
      alpha2: 'RU',
      alpha3: 'RUS',
      numeric: '643',
      currencyCodes: ['RUB'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Rwanda',
      alpha2: 'RW',
      alpha3: 'RWA',
      numeric: '646',
      currencyCodes: ['RWF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'R\u00E9union',
      alpha2: 'RE',
      alpha3: 'REU',
      numeric: '638',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'St. Barth\u00E9lemy',
      alpha2: 'BL',
      alpha3: 'BLM',
      numeric: '652',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'St. Helena',
      alpha2: 'SH',
      alpha3: 'SHN',
      numeric: '654',
      currencyCodes: ['SHP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'St. Kitts & Nevis',
      alpha2: 'KN',
      alpha3: 'KNA',
      numeric: '659',
      currencyCodes: ['XCD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'St. Lucia',
      alpha2: 'LC',
      alpha3: 'LCA',
      numeric: '662',
      currencyCodes: ['XCD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'St. Martin',
      alpha2: 'MF',
      alpha3: 'MAF',
      numeric: '663',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'St. Pierre & Miquelon',
      alpha2: 'PM',
      alpha3: 'SPM',
      numeric: '666',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'St. Vincent & Grenadines',
      alpha2: 'VC',
      alpha3: 'VCT',
      numeric: '670',
      currencyCodes: ['XCD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Samoa',
      alpha2: 'WS',
      alpha3: 'WSM',
      numeric: '882',
      currencyCodes: ['WST'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'San Marino',
      alpha2: 'SM',
      alpha3: 'SMR',
      numeric: '674',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'S\u00E3o Tom\u00E9 & Pr\u00EDncipe',
      alpha2: 'ST',
      alpha3: 'STP',
      numeric: '678',
      currencyCodes: ['STN'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Saudi Arabia',
      alpha2: 'SA',
      alpha3: 'SAU',
      numeric: '682',
      currencyCodes: ['SAR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Senegal',
      alpha2: 'SN',
      alpha3: 'SEN',
      numeric: '686',
      currencyCodes: ['XOF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Serbia',
      alpha2: 'RS',
      alpha3: 'SRB',
      numeric: '688',
      currencyCodes: ['RSD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Seychelles',
      alpha2: 'SC',
      alpha3: 'SYC',
      numeric: '690',
      currencyCodes: ['SCR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Sierra Leone',
      alpha2: 'SL',
      alpha3: 'SLE',
      numeric: '694',
      currencyCodes: ['SLL'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Singapore',
      alpha2: 'SG',
      alpha3: 'SGP',
      numeric: '702',
      currencyCodes: ['SGD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Sint Maarten',
      alpha2: 'SX',
      alpha3: 'SXM',
      numeric: '534',
      currencyCodes: ['ANG'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Slovakia',
      alpha2: 'SK',
      alpha3: 'SVK',
      numeric: '703',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Slovenia',
      alpha2: 'SI',
      alpha3: 'SVN',
      numeric: '705',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Solomon Islands',
      alpha2: 'SB',
      alpha3: 'SLB',
      numeric: '090',
      currencyCodes: ['SBD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Somalia',
      alpha2: 'SO',
      alpha3: 'SOM',
      numeric: '706',
      currencyCodes: ['SOS'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'South Africa',
      alpha2: 'ZA',
      alpha3: 'ZAF',
      numeric: '710',
      currencyCodes: ['ZAR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'South Sudan',
      alpha2: 'SS',
      alpha3: 'SSD',
      numeric: '728',
      currencyCodes: ['SSP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Spain',
      alpha2: 'ES',
      alpha3: 'ESP',
      numeric: '724',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Sri Lanka',
      alpha2: 'LK',
      alpha3: 'LKA',
      numeric: '144',
      currencyCodes: ['LKR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Sudan',
      alpha2: 'SD',
      alpha3: 'SDN',
      numeric: '729',
      currencyCodes: ['SDG'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Suriname',
      alpha2: 'SR',
      alpha3: 'SUR',
      numeric: '740',
      currencyCodes: ['SRD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Svalbard & Jan Mayen',
      alpha2: 'SJ',
      alpha3: 'SJM',
      numeric: '744',
      currencyCodes: ['NOK'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Swaziland',
      alpha2: 'SZ',
      alpha3: 'SWZ',
      numeric: '748',
      currencyCodes: ['SZL'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Sweden',
      alpha2: 'SE',
      alpha3: 'SWE',
      numeric: '752',
      currencyCodes: ['SEK'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Switzerland',
      alpha2: 'CH',
      alpha3: 'CHE',
      numeric: '756',
      currencyCodes: ['CHF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Syria',
      alpha2: 'SY',
      alpha3: 'SYR',
      numeric: '760',
      currencyCodes: ['SYP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Tajikistan',
      alpha2: 'TJ',
      alpha3: 'TJK',
      numeric: '762',
      currencyCodes: ['TJS'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Thailand',
      alpha2: 'TH',
      alpha3: 'THA',
      numeric: '764',
      currencyCodes: ['THB'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Macedonia',
      alpha2: 'MK',
      alpha3: 'MKD',
      numeric: '807',
      currencyCodes: ['MKD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Timor-Leste',
      alpha2: 'TL',
      alpha3: 'TLS',
      numeric: '626',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Togo',
      alpha2: 'TG',
      alpha3: 'TGO',
      numeric: '768',
      currencyCodes: ['XOF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Tokelau',
      alpha2: 'TK',
      alpha3: 'TKL',
      numeric: '772',
      currencyCodes: ['NZD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Tonga',
      alpha2: 'TO',
      alpha3: 'TON',
      numeric: '776',
      currencyCodes: ['TOP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Trinidad & Tobago',
      alpha2: 'TT',
      alpha3: 'TTO',
      numeric: '780',
      currencyCodes: ['TTD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Tunisia',
      alpha2: 'TN',
      alpha3: 'TUN',
      numeric: '788',
      currencyCodes: ['TND'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Turkey',
      alpha2: 'TR',
      alpha3: 'TUR',
      numeric: '792',
      currencyCodes: ['TRY'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Turkmenistan',
      alpha2: 'TM',
      alpha3: 'TKM',
      numeric: '795',
      currencyCodes: ['TMT'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Turks & Caicos Islands',
      alpha2: 'TC',
      alpha3: 'TCA',
      numeric: '796',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Tuvalu',
      alpha2: 'TV',
      alpha3: 'TUV',
      numeric: '798',
      currencyCodes: ['AUD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Uganda',
      alpha2: 'UG',
      alpha3: 'UGA',
      numeric: '800',
      currencyCodes: ['UGX'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Ukraine',
      alpha2: 'UA',
      alpha3: 'UKR',
      numeric: '804',
      currencyCodes: ['UAH'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'United Arab Emirates',
      alpha2: 'AE',
      alpha3: 'ARE',
      numeric: '784',
      currencyCodes: ['AED'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'UK',
      alpha2: 'GB',
      alpha3: 'GBR',
      numeric: '826',
      currencyCodes: ['GBP'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Tanzania',
      alpha2: 'TZ',
      alpha3: 'TZA',
      numeric: '834',
      currencyCodes: ['TZS'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'U.S. Outlying Islands',
      alpha2: 'UM',
      alpha3: 'UMI',
      numeric: '581',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'U.S. Virgin Islands',
      alpha2: 'VI',
      alpha3: 'VIR',
      numeric: '850',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'US',
      alpha2: 'US',
      alpha3: 'USA',
      numeric: '840',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Uruguay',
      alpha2: 'UY',
      alpha3: 'URY',
      numeric: '858',
      currencyCodes: ['UYU'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Uzbekistan',
      alpha2: 'UZ',
      alpha3: 'UZB',
      numeric: '860',
      currencyCodes: ['UZS'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Vanuatu',
      alpha2: 'VU',
      alpha3: 'VUT',
      numeric: '548',
      currencyCodes: ['VUV'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Venezuela',
      alpha2: 'VE',
      alpha3: 'VEN',
      numeric: '862',
      currencyCodes: ['VES'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Vietnam',
      alpha2: 'VN',
      alpha3: 'VNM',
      numeric: '704',
      currencyCodes: ['VND'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Wallis & Futuna',
      alpha2: 'WF',
      alpha3: 'WLF',
      numeric: '876',
      currencyCodes: ['XPF'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Western Sahara',
      alpha2: 'EH',
      alpha3: 'ESH',
      numeric: '732',
      currencyCodes: ['MAD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Yemen',
      alpha2: 'YE',
      alpha3: 'YEM',
      numeric: '887',
      currencyCodes: ['YER'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Zambia',
      alpha2: 'ZM',
      alpha3: 'ZMB',
      numeric: '894',
      currencyCodes: ['ZMW'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Zimbabwe',
      alpha2: 'ZW',
      alpha3: 'ZWE',
      numeric: '716',
      currencyCodes: ['ZWL'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: '\u00C5land Islands',
      alpha2: 'AX',
      alpha3: 'ALA',
      numeric: '248',
      currencyCodes: ['EUR'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Palestine, State of',
      alpha2: 'PS',
      alpha3: 'PSE',
      numeric: '275',
      currencyCodes: ['USD'],
    },
    createdOn: '2018-01-01T00:00:00.000Z',
  },
  {
    type: 'delete',
    name: 'Croatia',
    previousCreatedOn: '2018-01-01T00:00:00.000Z',
    createdOn: '2023-01-01T00:00:00.000Z',
  },
  {
    type: 'create',
    item: {
      name: 'Croatia',
      alpha2: 'HR',
      alpha3: 'HRV',
      numeric: '191',
      currencyCodes: ['EUR'],
    },
    createdOn: '2023-01-01T00:00:00.000Z',
  },
];

export default countries;

/* eslint-enable max-lines */
