// iso-4217.ts

/*
 * Table generated from ISO 4217 Currency Codes XML at https://www.iso.org/iso-4217-currency-codes.html,
 * published 2018-08-29.
 */

export interface Iso4217 {
  country: string;
  name: string;
  alphabeticCode: string;
  numericCode: string;
  minorUnits?: number;
  isFund?: true;
}

const iso4217: Iso4217[] = [
  {
    country: 'AFGHANISTAN',
    name: 'Afghani',
    alphabeticCode: 'AFN',
    numericCode: '971',
    minorUnits: 2
  },
  {
    country: 'ÅLAND ISLANDS',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'ALBANIA',
    name: 'Lek',
    alphabeticCode: 'ALL',
    numericCode: '008',
    minorUnits: 2
  },
  {
    country: 'ALGERIA',
    name: 'Algerian Dinar',
    alphabeticCode: 'DZD',
    numericCode: '012',
    minorUnits: 2
  },
  {
    country: 'AMERICAN SAMOA',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'ANDORRA',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'ANGOLA',
    name: 'Kwanza',
    alphabeticCode: 'AOA',
    numericCode: '973',
    minorUnits: 2
  },
  {
    country: 'ANGUILLA',
    name: 'East Caribbean Dollar',
    alphabeticCode: 'XCD',
    numericCode: '951',
    minorUnits: 2
  },
  {
    country: 'ANTIGUA AND BARBUDA',
    name: 'East Caribbean Dollar',
    alphabeticCode: 'XCD',
    numericCode: '951',
    minorUnits: 2
  },
  {
    country: 'ARGENTINA',
    name: 'Argentine Peso',
    alphabeticCode: 'ARS',
    numericCode: '032',
    minorUnits: 2
  },
  {
    country: 'ARMENIA',
    name: 'Armenian Dram',
    alphabeticCode: 'AMD',
    numericCode: '051',
    minorUnits: 2
  },
  {
    country: 'ARUBA',
    name: 'Aruban Florin',
    alphabeticCode: 'AWG',
    numericCode: '533',
    minorUnits: 2
  },
  {
    country: 'AUSTRALIA',
    name: 'Australian Dollar',
    alphabeticCode: 'AUD',
    numericCode: '036',
    minorUnits: 2
  },
  {
    country: 'AUSTRIA',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'AZERBAIJAN',
    name: 'Azerbaijan Manat',
    alphabeticCode: 'AZN',
    numericCode: '944',
    minorUnits: 2
  },
  {
    country: 'BAHAMAS (THE)',
    name: 'Bahamian Dollar',
    alphabeticCode: 'BSD',
    numericCode: '044',
    minorUnits: 2
  },
  {
    country: 'BAHRAIN',
    name: 'Bahraini Dinar',
    alphabeticCode: 'BHD',
    numericCode: '048',
    minorUnits: 3
  },
  {
    country: 'BANGLADESH',
    name: 'Taka',
    alphabeticCode: 'BDT',
    numericCode: '050',
    minorUnits: 2
  },
  {
    country: 'BARBADOS',
    name: 'Barbados Dollar',
    alphabeticCode: 'BBD',
    numericCode: '052',
    minorUnits: 2
  },
  {
    country: 'BELARUS',
    name: 'Belarusian Ruble',
    alphabeticCode: 'BYN',
    numericCode: '933',
    minorUnits: 2
  },
  {
    country: 'BELGIUM',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'BELIZE',
    name: 'Belize Dollar',
    alphabeticCode: 'BZD',
    numericCode: '084',
    minorUnits: 2
  },
  {
    country: 'BENIN',
    name: 'CFA Franc BCEAO',
    alphabeticCode: 'XOF',
    numericCode: '952',
    minorUnits: 0
  },
  {
    country: 'BERMUDA',
    name: 'Bermudian Dollar',
    alphabeticCode: 'BMD',
    numericCode: '060',
    minorUnits: 2
  },
  {
    country: 'BHUTAN',
    name: 'Indian Rupee',
    alphabeticCode: 'INR',
    numericCode: '356',
    minorUnits: 2
  },
  {
    country: 'BHUTAN',
    name: 'Ngultrum',
    alphabeticCode: 'BTN',
    numericCode: '064',
    minorUnits: 2
  },
  {
    country: 'BOLIVIA (PLURINATIONAL STATE OF)',
    name: 'Boliviano',
    alphabeticCode: 'BOB',
    numericCode: '068',
    minorUnits: 2
  },
  {
    country: 'BOLIVIA (PLURINATIONAL STATE OF)',
    isFund: true,
    name: 'Mvdol',
    alphabeticCode: 'BOV',
    numericCode: '984',
    minorUnits: 2
  },
  {
    country: 'BONAIRE, SINT EUSTATIUS AND SABA',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'BOSNIA AND HERZEGOVINA',
    name: 'Convertible Mark',
    alphabeticCode: 'BAM',
    numericCode: '977',
    minorUnits: 2
  },
  {
    country: 'BOTSWANA',
    name: 'Pula',
    alphabeticCode: 'BWP',
    numericCode: '072',
    minorUnits: 2
  },
  {
    country: 'BOUVET ISLAND',
    name: 'Norwegian Krone',
    alphabeticCode: 'NOK',
    numericCode: '578',
    minorUnits: 2
  },
  {
    country: 'BRAZIL',
    name: 'Brazilian Real',
    alphabeticCode: 'BRL',
    numericCode: '986',
    minorUnits: 2
  },
  {
    country: 'BRITISH INDIAN OCEAN TERRITORY (THE)',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'BRUNEI DARUSSALAM',
    name: 'Brunei Dollar',
    alphabeticCode: 'BND',
    numericCode: '096',
    minorUnits: 2
  },
  {
    country: 'BULGARIA',
    name: 'Bulgarian Lev',
    alphabeticCode: 'BGN',
    numericCode: '975',
    minorUnits: 2
  },
  {
    country: 'BURKINA FASO',
    name: 'CFA Franc BCEAO',
    alphabeticCode: 'XOF',
    numericCode: '952',
    minorUnits: 0
  },
  {
    country: 'BURUNDI',
    name: 'Burundi Franc',
    alphabeticCode: 'BIF',
    numericCode: '108',
    minorUnits: 0
  },
  {
    country: 'CABO VERDE',
    name: 'Cabo Verde Escudo',
    alphabeticCode: 'CVE',
    numericCode: '132',
    minorUnits: 2
  },
  {
    country: 'CAMBODIA',
    name: 'Riel',
    alphabeticCode: 'KHR',
    numericCode: '116',
    minorUnits: 2
  },
  {
    country: 'CAMEROON',
    name: 'CFA Franc BEAC',
    alphabeticCode: 'XAF',
    numericCode: '950',
    minorUnits: 0
  },
  {
    country: 'CANADA',
    name: 'Canadian Dollar',
    alphabeticCode: 'CAD',
    numericCode: '124',
    minorUnits: 2
  },
  {
    country: 'CAYMAN ISLANDS (THE)',
    name: 'Cayman Islands Dollar',
    alphabeticCode: 'KYD',
    numericCode: '136',
    minorUnits: 2
  },
  {
    country: 'CENTRAL AFRICAN REPUBLIC (THE)',
    name: 'CFA Franc BEAC',
    alphabeticCode: 'XAF',
    numericCode: '950',
    minorUnits: 0
  },
  {
    country: 'CHAD',
    name: 'CFA Franc BEAC',
    alphabeticCode: 'XAF',
    numericCode: '950',
    minorUnits: 0
  },
  {
    country: 'CHILE',
    name: 'Chilean Peso',
    alphabeticCode: 'CLP',
    numericCode: '152',
    minorUnits: 0
  },
  {
    country: 'CHILE',
    isFund: true,
    name: 'Unidad de Fomento',
    alphabeticCode: 'CLF',
    numericCode: '990',
    minorUnits: 4
  },
  {
    country: 'CHINA',
    name: 'Yuan Renminbi',
    alphabeticCode: 'CNY',
    numericCode: '156',
    minorUnits: 2
  },
  {
    country: 'CHRISTMAS ISLAND',
    name: 'Australian Dollar',
    alphabeticCode: 'AUD',
    numericCode: '036',
    minorUnits: 2
  },
  {
    country: 'COCOS (KEELING) ISLANDS (THE)',
    name: 'Australian Dollar',
    alphabeticCode: 'AUD',
    numericCode: '036',
    minorUnits: 2
  },
  {
    country: 'COLOMBIA',
    name: 'Colombian Peso',
    alphabeticCode: 'COP',
    numericCode: '170',
    minorUnits: 2
  },
  {
    country: 'COLOMBIA',
    isFund: true,
    name: 'Unidad de Valor Real',
    alphabeticCode: 'COU',
    numericCode: '970',
    minorUnits: 2
  },
  {
    country: 'COMOROS (THE)',
    name: 'Comorian Franc',
    alphabeticCode: 'KMF',
    numericCode: '174',
    minorUnits: 0
  },
  {
    country: 'CONGO (THE DEMOCRATIC REPUBLIC OF THE)',
    name: 'Congolese Franc',
    alphabeticCode: 'CDF',
    numericCode: '976',
    minorUnits: 2
  },
  {
    country: 'CONGO (THE)',
    name: 'CFA Franc BEAC',
    alphabeticCode: 'XAF',
    numericCode: '950',
    minorUnits: 0
  },
  {
    country: 'COOK ISLANDS (THE)',
    name: 'New Zealand Dollar',
    alphabeticCode: 'NZD',
    numericCode: '554',
    minorUnits: 2
  },
  {
    country: 'COSTA RICA',
    name: 'Costa Rican Colon',
    alphabeticCode: 'CRC',
    numericCode: '188',
    minorUnits: 2
  },
  {
    country: "CÔTE D'IVOIRE",
    name: 'CFA Franc BCEAO',
    alphabeticCode: 'XOF',
    numericCode: '952',
    minorUnits: 0
  },
  {
    country: 'CROATIA',
    name: 'Kuna',
    alphabeticCode: 'HRK',
    numericCode: '191',
    minorUnits: 2
  },
  {
    country: 'CUBA',
    name: 'Cuban Peso',
    alphabeticCode: 'CUP',
    numericCode: '192',
    minorUnits: 2
  },
  {
    country: 'CUBA',
    name: 'Peso Convertible',
    alphabeticCode: 'CUC',
    numericCode: '931',
    minorUnits: 2
  },
  {
    country: 'CURAÇAO',
    name: 'Netherlands Antillean Guilder',
    alphabeticCode: 'ANG',
    numericCode: '532',
    minorUnits: 2
  },
  {
    country: 'CYPRUS',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'CZECHIA',
    name: 'Czech Koruna',
    alphabeticCode: 'CZK',
    numericCode: '203',
    minorUnits: 2
  },
  {
    country: 'DENMARK',
    name: 'Danish Krone',
    alphabeticCode: 'DKK',
    numericCode: '208',
    minorUnits: 2
  },
  {
    country: 'DJIBOUTI',
    name: 'Djibouti Franc',
    alphabeticCode: 'DJF',
    numericCode: '262',
    minorUnits: 0
  },
  {
    country: 'DOMINICA',
    name: 'East Caribbean Dollar',
    alphabeticCode: 'XCD',
    numericCode: '951',
    minorUnits: 2
  },
  {
    country: 'DOMINICAN REPUBLIC (THE)',
    name: 'Dominican Peso',
    alphabeticCode: 'DOP',
    numericCode: '214',
    minorUnits: 2
  },
  {
    country: 'ECUADOR',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'EGYPT',
    name: 'Egyptian Pound',
    alphabeticCode: 'EGP',
    numericCode: '818',
    minorUnits: 2
  },
  {
    country: 'EL SALVADOR',
    name: 'El Salvador Colon',
    alphabeticCode: 'SVC',
    numericCode: '222',
    minorUnits: 2
  },
  {
    country: 'EL SALVADOR',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'EQUATORIAL GUINEA',
    name: 'CFA Franc BEAC',
    alphabeticCode: 'XAF',
    numericCode: '950',
    minorUnits: 0
  },
  {
    country: 'ERITREA',
    name: 'Nakfa',
    alphabeticCode: 'ERN',
    numericCode: '232',
    minorUnits: 2
  },
  {
    country: 'ESTONIA',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'ETHIOPIA',
    name: 'Ethiopian Birr',
    alphabeticCode: 'ETB',
    numericCode: '230',
    minorUnits: 2
  },
  {
    country: 'EUROPEAN UNION',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'FALKLAND ISLANDS (THE) [MALVINAS]',
    name: 'Falkland Islands Pound',
    alphabeticCode: 'FKP',
    numericCode: '238',
    minorUnits: 2
  },
  {
    country: 'FAROE ISLANDS (THE)',
    name: 'Danish Krone',
    alphabeticCode: 'DKK',
    numericCode: '208',
    minorUnits: 2
  },
  {
    country: 'FIJI',
    name: 'Fiji Dollar',
    alphabeticCode: 'FJD',
    numericCode: '242',
    minorUnits: 2
  },
  {
    country: 'FINLAND',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'FRANCE',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'FRENCH GUIANA',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'FRENCH POLYNESIA',
    name: 'CFP Franc',
    alphabeticCode: 'XPF',
    numericCode: '953',
    minorUnits: 0
  },
  {
    country: 'FRENCH SOUTHERN TERRITORIES (THE)',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'GABON',
    name: 'CFA Franc BEAC',
    alphabeticCode: 'XAF',
    numericCode: '950',
    minorUnits: 0
  },
  {
    country: 'GAMBIA (THE)',
    name: 'Dalasi',
    alphabeticCode: 'GMD',
    numericCode: '270',
    minorUnits: 2
  },
  {
    country: 'GEORGIA',
    name: 'Lari',
    alphabeticCode: 'GEL',
    numericCode: '981',
    minorUnits: 2
  },
  {
    country: 'GERMANY',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'GHANA',
    name: 'Ghana Cedi',
    alphabeticCode: 'GHS',
    numericCode: '936',
    minorUnits: 2
  },
  {
    country: 'GIBRALTAR',
    name: 'Gibraltar Pound',
    alphabeticCode: 'GIP',
    numericCode: '292',
    minorUnits: 2
  },
  {
    country: 'GREECE',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'GREENLAND',
    name: 'Danish Krone',
    alphabeticCode: 'DKK',
    numericCode: '208',
    minorUnits: 2
  },
  {
    country: 'GRENADA',
    name: 'East Caribbean Dollar',
    alphabeticCode: 'XCD',
    numericCode: '951',
    minorUnits: 2
  },
  {
    country: 'GUADELOUPE',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'GUAM',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'GUATEMALA',
    name: 'Quetzal',
    alphabeticCode: 'GTQ',
    numericCode: '320',
    minorUnits: 2
  },
  {
    country: 'GUERNSEY',
    name: 'Pound Sterling',
    alphabeticCode: 'GBP',
    numericCode: '826',
    minorUnits: 2
  },
  {
    country: 'GUINEA',
    name: 'Guinean Franc',
    alphabeticCode: 'GNF',
    numericCode: '324',
    minorUnits: 0
  },
  {
    country: 'GUINEA-BISSAU',
    name: 'CFA Franc BCEAO',
    alphabeticCode: 'XOF',
    numericCode: '952',
    minorUnits: 0
  },
  {
    country: 'GUYANA',
    name: 'Guyana Dollar',
    alphabeticCode: 'GYD',
    numericCode: '328',
    minorUnits: 2
  },
  {
    country: 'HAITI',
    name: 'Gourde',
    alphabeticCode: 'HTG',
    numericCode: '332',
    minorUnits: 2
  },
  {
    country: 'HAITI',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'HEARD ISLAND AND McDONALD ISLANDS',
    name: 'Australian Dollar',
    alphabeticCode: 'AUD',
    numericCode: '036',
    minorUnits: 2
  },
  {
    country: 'HOLY SEE (THE)',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'HONDURAS',
    name: 'Lempira',
    alphabeticCode: 'HNL',
    numericCode: '340',
    minorUnits: 2
  },
  {
    country: 'HONG KONG',
    name: 'Hong Kong Dollar',
    alphabeticCode: 'HKD',
    numericCode: '344',
    minorUnits: 2
  },
  {
    country: 'HUNGARY',
    name: 'Forint',
    alphabeticCode: 'HUF',
    numericCode: '348',
    minorUnits: 2
  },
  {
    country: 'ICELAND',
    name: 'Iceland Krona',
    alphabeticCode: 'ISK',
    numericCode: '352',
    minorUnits: 0
  },
  {
    country: 'INDIA',
    name: 'Indian Rupee',
    alphabeticCode: 'INR',
    numericCode: '356',
    minorUnits: 2
  },
  {
    country: 'INDONESIA',
    name: 'Rupiah',
    alphabeticCode: 'IDR',
    numericCode: '360',
    minorUnits: 2
  },
  {
    country: 'INTERNATIONAL MONETARY FUND (IMF) ',
    name: 'SDR (Special Drawing Right)',
    alphabeticCode: 'XDR',
    numericCode: '960'
  },
  {
    country: 'IRAN (ISLAMIC REPUBLIC OF)',
    name: 'Iranian Rial',
    alphabeticCode: 'IRR',
    numericCode: '364',
    minorUnits: 2
  },
  {
    country: 'IRAQ',
    name: 'Iraqi Dinar',
    alphabeticCode: 'IQD',
    numericCode: '368',
    minorUnits: 3
  },
  {
    country: 'IRELAND',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'ISLE OF MAN',
    name: 'Pound Sterling',
    alphabeticCode: 'GBP',
    numericCode: '826',
    minorUnits: 2
  },
  {
    country: 'ISRAEL',
    name: 'New Israeli Sheqel',
    alphabeticCode: 'ILS',
    numericCode: '376',
    minorUnits: 2
  },
  {
    country: 'ITALY',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'JAMAICA',
    name: 'Jamaican Dollar',
    alphabeticCode: 'JMD',
    numericCode: '388',
    minorUnits: 2
  },
  {
    country: 'JAPAN',
    name: 'Yen',
    alphabeticCode: 'JPY',
    numericCode: '392',
    minorUnits: 0
  },
  {
    country: 'JERSEY',
    name: 'Pound Sterling',
    alphabeticCode: 'GBP',
    numericCode: '826',
    minorUnits: 2
  },
  {
    country: 'JORDAN',
    name: 'Jordanian Dinar',
    alphabeticCode: 'JOD',
    numericCode: '400',
    minorUnits: 3
  },
  {
    country: 'KAZAKHSTAN',
    name: 'Tenge',
    alphabeticCode: 'KZT',
    numericCode: '398',
    minorUnits: 2
  },
  {
    country: 'KENYA',
    name: 'Kenyan Shilling',
    alphabeticCode: 'KES',
    numericCode: '404',
    minorUnits: 2
  },
  {
    country: 'KIRIBATI',
    name: 'Australian Dollar',
    alphabeticCode: 'AUD',
    numericCode: '036',
    minorUnits: 2
  },
  {
    country: 'KOREA (THE DEMOCRATIC PEOPLE’S REPUBLIC OF)',
    name: 'North Korean Won',
    alphabeticCode: 'KPW',
    numericCode: '408',
    minorUnits: 2
  },
  {
    country: 'KOREA (THE REPUBLIC OF)',
    name: 'Won',
    alphabeticCode: 'KRW',
    numericCode: '410',
    minorUnits: 0
  },
  {
    country: 'KUWAIT',
    name: 'Kuwaiti Dinar',
    alphabeticCode: 'KWD',
    numericCode: '414',
    minorUnits: 3
  },
  {
    country: 'KYRGYZSTAN',
    name: 'Som',
    alphabeticCode: 'KGS',
    numericCode: '417',
    minorUnits: 2
  },
  {
    country: 'LAO PEOPLE’S DEMOCRATIC REPUBLIC (THE)',
    name: 'Lao Kip',
    alphabeticCode: 'LAK',
    numericCode: '418',
    minorUnits: 2
  },
  {
    country: 'LATVIA',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'LEBANON',
    name: 'Lebanese Pound',
    alphabeticCode: 'LBP',
    numericCode: '422',
    minorUnits: 2
  },
  {
    country: 'LESOTHO',
    name: 'Loti',
    alphabeticCode: 'LSL',
    numericCode: '426',
    minorUnits: 2
  },
  {
    country: 'LESOTHO',
    name: 'Rand',
    alphabeticCode: 'ZAR',
    numericCode: '710',
    minorUnits: 2
  },
  {
    country: 'LIBERIA',
    name: 'Liberian Dollar',
    alphabeticCode: 'LRD',
    numericCode: '430',
    minorUnits: 2
  },
  {
    country: 'LIBYA',
    name: 'Libyan Dinar',
    alphabeticCode: 'LYD',
    numericCode: '434',
    minorUnits: 3
  },
  {
    country: 'LIECHTENSTEIN',
    name: 'Swiss Franc',
    alphabeticCode: 'CHF',
    numericCode: '756',
    minorUnits: 2
  },
  {
    country: 'LITHUANIA',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'LUXEMBOURG',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'MACAO',
    name: 'Pataca',
    alphabeticCode: 'MOP',
    numericCode: '446',
    minorUnits: 2
  },
  {
    country: 'MACEDONIA (THE FORMER YUGOSLAV REPUBLIC OF)',
    name: 'Denar',
    alphabeticCode: 'MKD',
    numericCode: '807',
    minorUnits: 2
  },
  {
    country: 'MADAGASCAR',
    name: 'Malagasy Ariary',
    alphabeticCode: 'MGA',
    numericCode: '969',
    minorUnits: 2
  },
  {
    country: 'MALAWI',
    name: 'Malawi Kwacha',
    alphabeticCode: 'MWK',
    numericCode: '454',
    minorUnits: 2
  },
  {
    country: 'MALAYSIA',
    name: 'Malaysian Ringgit',
    alphabeticCode: 'MYR',
    numericCode: '458',
    minorUnits: 2
  },
  {
    country: 'MALDIVES',
    name: 'Rufiyaa',
    alphabeticCode: 'MVR',
    numericCode: '462',
    minorUnits: 2
  },
  {
    country: 'MALI',
    name: 'CFA Franc BCEAO',
    alphabeticCode: 'XOF',
    numericCode: '952',
    minorUnits: 0
  },
  {
    country: 'MALTA',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'MARSHALL ISLANDS (THE)',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'MARTINIQUE',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'MAURITANIA',
    name: 'Ouguiya',
    alphabeticCode: 'MRU',
    numericCode: '929',
    minorUnits: 2
  },
  {
    country: 'MAURITIUS',
    name: 'Mauritius Rupee',
    alphabeticCode: 'MUR',
    numericCode: '480',
    minorUnits: 2
  },
  {
    country: 'MAYOTTE',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP',
    name: 'ADB Unit of Account',
    alphabeticCode: 'XUA',
    numericCode: '965'
  },
  {
    country: 'MEXICO',
    name: 'Mexican Peso',
    alphabeticCode: 'MXN',
    numericCode: '484',
    minorUnits: 2
  },
  {
    country: 'MEXICO',
    isFund: true,
    name: 'Mexican Unidad de Inversion (UDI)',
    alphabeticCode: 'MXV',
    numericCode: '979',
    minorUnits: 2
  },
  {
    country: 'MICRONESIA (FEDERATED STATES OF)',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'MOLDOVA (THE REPUBLIC OF)',
    name: 'Moldovan Leu',
    alphabeticCode: 'MDL',
    numericCode: '498',
    minorUnits: 2
  },
  {
    country: 'MONACO',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'MONGOLIA',
    name: 'Tugrik',
    alphabeticCode: 'MNT',
    numericCode: '496',
    minorUnits: 2
  },
  {
    country: 'MONTENEGRO',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'MONTSERRAT',
    name: 'East Caribbean Dollar',
    alphabeticCode: 'XCD',
    numericCode: '951',
    minorUnits: 2
  },
  {
    country: 'MOROCCO',
    name: 'Moroccan Dirham',
    alphabeticCode: 'MAD',
    numericCode: '504',
    minorUnits: 2
  },
  {
    country: 'MOZAMBIQUE',
    name: 'Mozambique Metical',
    alphabeticCode: 'MZN',
    numericCode: '943',
    minorUnits: 2
  },
  {
    country: 'MYANMAR',
    name: 'Kyat',
    alphabeticCode: 'MMK',
    numericCode: '104',
    minorUnits: 2
  },
  {
    country: 'NAMIBIA',
    name: 'Namibia Dollar',
    alphabeticCode: 'NAD',
    numericCode: '516',
    minorUnits: 2
  },
  {
    country: 'NAMIBIA',
    name: 'Rand',
    alphabeticCode: 'ZAR',
    numericCode: '710',
    minorUnits: 2
  },
  {
    country: 'NAURU',
    name: 'Australian Dollar',
    alphabeticCode: 'AUD',
    numericCode: '036',
    minorUnits: 2
  },
  {
    country: 'NEPAL',
    name: 'Nepalese Rupee',
    alphabeticCode: 'NPR',
    numericCode: '524',
    minorUnits: 2
  },
  {
    country: 'NETHERLANDS (THE)',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'NEW CALEDONIA',
    name: 'CFP Franc',
    alphabeticCode: 'XPF',
    numericCode: '953',
    minorUnits: 0
  },
  {
    country: 'NEW ZEALAND',
    name: 'New Zealand Dollar',
    alphabeticCode: 'NZD',
    numericCode: '554',
    minorUnits: 2
  },
  {
    country: 'NICARAGUA',
    name: 'Cordoba Oro',
    alphabeticCode: 'NIO',
    numericCode: '558',
    minorUnits: 2
  },
  {
    country: 'NIGER (THE)',
    name: 'CFA Franc BCEAO',
    alphabeticCode: 'XOF',
    numericCode: '952',
    minorUnits: 0
  },
  {
    country: 'NIGERIA',
    name: 'Naira',
    alphabeticCode: 'NGN',
    numericCode: '566',
    minorUnits: 2
  },
  {
    country: 'NIUE',
    name: 'New Zealand Dollar',
    alphabeticCode: 'NZD',
    numericCode: '554',
    minorUnits: 2
  },
  {
    country: 'NORFOLK ISLAND',
    name: 'Australian Dollar',
    alphabeticCode: 'AUD',
    numericCode: '036',
    minorUnits: 2
  },
  {
    country: 'NORTHERN MARIANA ISLANDS (THE)',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'NORWAY',
    name: 'Norwegian Krone',
    alphabeticCode: 'NOK',
    numericCode: '578',
    minorUnits: 2
  },
  {
    country: 'OMAN',
    name: 'Rial Omani',
    alphabeticCode: 'OMR',
    numericCode: '512',
    minorUnits: 3
  },
  {
    country: 'PAKISTAN',
    name: 'Pakistan Rupee',
    alphabeticCode: 'PKR',
    numericCode: '586',
    minorUnits: 2
  },
  {
    country: 'PALAU',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'PANAMA',
    name: 'Balboa',
    alphabeticCode: 'PAB',
    numericCode: '590',
    minorUnits: 2
  },
  {
    country: 'PANAMA',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'PAPUA NEW GUINEA',
    name: 'Kina',
    alphabeticCode: 'PGK',
    numericCode: '598',
    minorUnits: 2
  },
  {
    country: 'PARAGUAY',
    name: 'Guarani',
    alphabeticCode: 'PYG',
    numericCode: '600',
    minorUnits: 0
  },
  {
    country: 'PERU',
    name: 'Sol',
    alphabeticCode: 'PEN',
    numericCode: '604',
    minorUnits: 2
  },
  {
    country: 'PHILIPPINES (THE)',
    name: 'Philippine Peso',
    alphabeticCode: 'PHP',
    numericCode: '608',
    minorUnits: 2
  },
  {
    country: 'PITCAIRN',
    name: 'New Zealand Dollar',
    alphabeticCode: 'NZD',
    numericCode: '554',
    minorUnits: 2
  },
  {
    country: 'POLAND',
    name: 'Zloty',
    alphabeticCode: 'PLN',
    numericCode: '985',
    minorUnits: 2
  },
  {
    country: 'PORTUGAL',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'PUERTO RICO',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'QATAR',
    name: 'Qatari Rial',
    alphabeticCode: 'QAR',
    numericCode: '634',
    minorUnits: 2
  },
  {
    country: 'RÉUNION',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'ROMANIA',
    name: 'Romanian Leu',
    alphabeticCode: 'RON',
    numericCode: '946',
    minorUnits: 2
  },
  {
    country: 'RUSSIAN FEDERATION (THE)',
    name: 'Russian Ruble',
    alphabeticCode: 'RUB',
    numericCode: '643',
    minorUnits: 2
  },
  {
    country: 'RWANDA',
    name: 'Rwanda Franc',
    alphabeticCode: 'RWF',
    numericCode: '646',
    minorUnits: 0
  },
  {
    country: 'SAINT BARTHÉLEMY',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA',
    name: 'Saint Helena Pound',
    alphabeticCode: 'SHP',
    numericCode: '654',
    minorUnits: 2
  },
  {
    country: 'SAINT KITTS AND NEVIS',
    name: 'East Caribbean Dollar',
    alphabeticCode: 'XCD',
    numericCode: '951',
    minorUnits: 2
  },
  {
    country: 'SAINT LUCIA',
    name: 'East Caribbean Dollar',
    alphabeticCode: 'XCD',
    numericCode: '951',
    minorUnits: 2
  },
  {
    country: 'SAINT MARTIN (FRENCH PART)',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'SAINT PIERRE AND MIQUELON',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'SAINT VINCENT AND THE GRENADINES',
    name: 'East Caribbean Dollar',
    alphabeticCode: 'XCD',
    numericCode: '951',
    minorUnits: 2
  },
  {
    country: 'SAMOA',
    name: 'Tala',
    alphabeticCode: 'WST',
    numericCode: '882',
    minorUnits: 2
  },
  {
    country: 'SAN MARINO',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'SAO TOME AND PRINCIPE',
    name: 'Dobra',
    alphabeticCode: 'STN',
    numericCode: '930',
    minorUnits: 2
  },
  {
    country: 'SAUDI ARABIA',
    name: 'Saudi Riyal',
    alphabeticCode: 'SAR',
    numericCode: '682',
    minorUnits: 2
  },
  {
    country: 'SENEGAL',
    name: 'CFA Franc BCEAO',
    alphabeticCode: 'XOF',
    numericCode: '952',
    minorUnits: 0
  },
  {
    country: 'SERBIA',
    name: 'Serbian Dinar',
    alphabeticCode: 'RSD',
    numericCode: '941',
    minorUnits: 2
  },
  {
    country: 'SEYCHELLES',
    name: 'Seychelles Rupee',
    alphabeticCode: 'SCR',
    numericCode: '690',
    minorUnits: 2
  },
  {
    country: 'SIERRA LEONE',
    name: 'Leone',
    alphabeticCode: 'SLL',
    numericCode: '694',
    minorUnits: 2
  },
  {
    country: 'SINGAPORE',
    name: 'Singapore Dollar',
    alphabeticCode: 'SGD',
    numericCode: '702',
    minorUnits: 2
  },
  {
    country: 'SINT MAARTEN (DUTCH PART)',
    name: 'Netherlands Antillean Guilder',
    alphabeticCode: 'ANG',
    numericCode: '532',
    minorUnits: 2
  },
  {
    country: 'SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS "SUCRE"',
    name: 'Sucre',
    alphabeticCode: 'XSU',
    numericCode: '994'
  },
  {
    country: 'SLOVAKIA',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'SLOVENIA',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'SOLOMON ISLANDS',
    name: 'Solomon Islands Dollar',
    alphabeticCode: 'SBD',
    numericCode: '090',
    minorUnits: 2
  },
  {
    country: 'SOMALIA',
    name: 'Somali Shilling',
    alphabeticCode: 'SOS',
    numericCode: '706',
    minorUnits: 2
  },
  {
    country: 'SOUTH AFRICA',
    name: 'Rand',
    alphabeticCode: 'ZAR',
    numericCode: '710',
    minorUnits: 2
  },
  {
    country: 'SOUTH SUDAN',
    name: 'South Sudanese Pound',
    alphabeticCode: 'SSP',
    numericCode: '728',
    minorUnits: 2
  },
  {
    country: 'SPAIN',
    name: 'Euro',
    alphabeticCode: 'EUR',
    numericCode: '978',
    minorUnits: 2
  },
  {
    country: 'SRI LANKA',
    name: 'Sri Lanka Rupee',
    alphabeticCode: 'LKR',
    numericCode: '144',
    minorUnits: 2
  },
  {
    country: 'SUDAN (THE)',
    name: 'Sudanese Pound',
    alphabeticCode: 'SDG',
    numericCode: '938',
    minorUnits: 2
  },
  {
    country: 'SURINAME',
    name: 'Surinam Dollar',
    alphabeticCode: 'SRD',
    numericCode: '968',
    minorUnits: 2
  },
  {
    country: 'SVALBARD AND JAN MAYEN',
    name: 'Norwegian Krone',
    alphabeticCode: 'NOK',
    numericCode: '578',
    minorUnits: 2
  },
  {
    country: 'ESWATINI',
    name: 'Lilangeni',
    alphabeticCode: 'SZL',
    numericCode: '748',
    minorUnits: 2
  },
  {
    country: 'SWEDEN',
    name: 'Swedish Krona',
    alphabeticCode: 'SEK',
    numericCode: '752',
    minorUnits: 2
  },
  {
    country: 'SWITZERLAND',
    name: 'Swiss Franc',
    alphabeticCode: 'CHF',
    numericCode: '756',
    minorUnits: 2
  },
  {
    country: 'SWITZERLAND',
    isFund: true,
    name: 'WIR Euro',
    alphabeticCode: 'CHE',
    numericCode: '947',
    minorUnits: 2
  },
  {
    country: 'SWITZERLAND',
    isFund: true,
    name: 'WIR Franc',
    alphabeticCode: 'CHW',
    numericCode: '948',
    minorUnits: 2
  },
  {
    country: 'SYRIAN ARAB REPUBLIC',
    name: 'Syrian Pound',
    alphabeticCode: 'SYP',
    numericCode: '760',
    minorUnits: 2
  },
  {
    country: 'TAIWAN (PROVINCE OF CHINA)',
    name: 'New Taiwan Dollar',
    alphabeticCode: 'TWD',
    numericCode: '901',
    minorUnits: 2
  },
  {
    country: 'TAJIKISTAN',
    name: 'Somoni',
    alphabeticCode: 'TJS',
    numericCode: '972',
    minorUnits: 2
  },
  {
    country: 'TANZANIA, UNITED REPUBLIC OF',
    name: 'Tanzanian Shilling',
    alphabeticCode: 'TZS',
    numericCode: '834',
    minorUnits: 2
  },
  {
    country: 'THAILAND',
    name: 'Baht',
    alphabeticCode: 'THB',
    numericCode: '764',
    minorUnits: 2
  },
  {
    country: 'TIMOR-LESTE',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'TOGO',
    name: 'CFA Franc BCEAO',
    alphabeticCode: 'XOF',
    numericCode: '952',
    minorUnits: 0
  },
  {
    country: 'TOKELAU',
    name: 'New Zealand Dollar',
    alphabeticCode: 'NZD',
    numericCode: '554',
    minorUnits: 2
  },
  {
    country: 'TONGA',
    name: 'Pa’anga',
    alphabeticCode: 'TOP',
    numericCode: '776',
    minorUnits: 2
  },
  {
    country: 'TRINIDAD AND TOBAGO',
    name: 'Trinidad and Tobago Dollar',
    alphabeticCode: 'TTD',
    numericCode: '780',
    minorUnits: 2
  },
  {
    country: 'TUNISIA',
    name: 'Tunisian Dinar',
    alphabeticCode: 'TND',
    numericCode: '788',
    minorUnits: 3
  },
  {
    country: 'TURKEY',
    name: 'Turkish Lira',
    alphabeticCode: 'TRY',
    numericCode: '949',
    minorUnits: 2
  },
  {
    country: 'TURKMENISTAN',
    name: 'Turkmenistan New Manat',
    alphabeticCode: 'TMT',
    numericCode: '934',
    minorUnits: 2
  },
  {
    country: 'TURKS AND CAICOS ISLANDS (THE)',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'TUVALU',
    name: 'Australian Dollar',
    alphabeticCode: 'AUD',
    numericCode: '036',
    minorUnits: 2
  },
  {
    country: 'UGANDA',
    name: 'Uganda Shilling',
    alphabeticCode: 'UGX',
    numericCode: '800',
    minorUnits: 0
  },
  {
    country: 'UKRAINE',
    name: 'Hryvnia',
    alphabeticCode: 'UAH',
    numericCode: '980',
    minorUnits: 2
  },
  {
    country: 'UNITED ARAB EMIRATES (THE)',
    name: 'UAE Dirham',
    alphabeticCode: 'AED',
    numericCode: '784',
    minorUnits: 2
  },
  {
    country: 'UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE)',
    name: 'Pound Sterling',
    alphabeticCode: 'GBP',
    numericCode: '826',
    minorUnits: 2
  },
  {
    country: 'UNITED STATES MINOR OUTLYING ISLANDS (THE)',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'UNITED STATES OF AMERICA (THE)',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'UNITED STATES OF AMERICA (THE)',
    isFund: true,
    name: 'US Dollar (Next day)',
    alphabeticCode: 'USN',
    numericCode: '997',
    minorUnits: 2
  },
  {
    country: 'URUGUAY',
    name: 'Peso Uruguayo',
    alphabeticCode: 'UYU',
    numericCode: '858',
    minorUnits: 2
  },
  {
    country: 'URUGUAY',
    isFund: true,
    name: 'Uruguay Peso en Unidades Indexadas (UI)',
    alphabeticCode: 'UYI',
    numericCode: '940',
    minorUnits: 0
  },
  {
    country: 'URUGUAY',
    name: 'Unidad Previsional',
    alphabeticCode: 'UYW',
    numericCode: '927',
    minorUnits: 4
  },
  {
    country: 'UZBEKISTAN',
    name: 'Uzbekistan Sum',
    alphabeticCode: 'UZS',
    numericCode: '860',
    minorUnits: 2
  },
  {
    country: 'VANUATU',
    name: 'Vatu',
    alphabeticCode: 'VUV',
    numericCode: '548',
    minorUnits: 0
  },
  {
    country: 'VENEZUELA (BOLIVARIAN REPUBLIC OF)',
    name: 'Bolívar Soberano',
    alphabeticCode: 'VES',
    numericCode: '928',
    minorUnits: 2
  },
  {
    country: 'VIET NAM',
    name: 'Dong',
    alphabeticCode: 'VND',
    numericCode: '704',
    minorUnits: 0
  },
  {
    country: 'VIRGIN ISLANDS (BRITISH)',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'VIRGIN ISLANDS (U.S.)',
    name: 'US Dollar',
    alphabeticCode: 'USD',
    numericCode: '840',
    minorUnits: 2
  },
  {
    country: 'WALLIS AND FUTUNA',
    name: 'CFP Franc',
    alphabeticCode: 'XPF',
    numericCode: '953',
    minorUnits: 0
  },
  {
    country: 'WESTERN SAHARA',
    name: 'Moroccan Dirham',
    alphabeticCode: 'MAD',
    numericCode: '504',
    minorUnits: 2
  },
  {
    country: 'YEMEN',
    name: 'Yemeni Rial',
    alphabeticCode: 'YER',
    numericCode: '886',
    minorUnits: 2
  },
  {
    country: 'ZAMBIA',
    name: 'Zambian Kwacha',
    alphabeticCode: 'ZMW',
    numericCode: '967',
    minorUnits: 2
  },
  {
    country: 'ZIMBABWE',
    name: 'Zimbabwe Dollar',
    alphabeticCode: 'ZWL',
    numericCode: '932',
    minorUnits: 2
  },
  {
    country: 'ZZ01_Bond Markets Unit European_EURCO',
    name: 'Bond Markets Unit European Composite Unit (EURCO)',
    alphabeticCode: 'XBA',
    numericCode: '955'
  },
  {
    country: 'ZZ02_Bond Markets Unit European_EMU-6',
    name: 'Bond Markets Unit European Monetary Unit (E.M.U.-6)',
    alphabeticCode: 'XBB',
    numericCode: '956'
  },
  {
    country: 'ZZ03_Bond Markets Unit European_EUA-9',
    name: 'Bond Markets Unit European Unit of Account 9 (E.U.A.-9)',
    alphabeticCode: 'XBC',
    numericCode: '957'
  },
  {
    country: 'ZZ04_Bond Markets Unit European_EUA-17',
    name: 'Bond Markets Unit European Unit of Account 17 (E.U.A.-17)',
    alphabeticCode: 'XBD',
    numericCode: '958'
  },
  {
    country: 'ZZ06_Testing_Code',
    name: 'Codes specifically reserved for testing purposes',
    alphabeticCode: 'XTS',
    numericCode: '963'
  },
  {
    country: 'ZZ07_No_Currency',
    name: 'The codes assigned for transactions where no currency is involved',
    alphabeticCode: 'XXX',
    numericCode: '999'
  },
  {
    country: 'ZZ08_Gold',
    name: 'Gold',
    alphabeticCode: 'XAU',
    numericCode: '959'
  },
  {
    country: 'ZZ09_Palladium',
    name: 'Palladium',
    alphabeticCode: 'XPD',
    numericCode: '964'
  },
  {
    country: 'ZZ10_Platinum',
    name: 'Platinum',
    alphabeticCode: 'XPT',
    numericCode: '962'
  },
  {
    country: 'ZZ11_Silver',
    name: 'Silver',
    alphabeticCode: 'XAG',
    numericCode: '961'
  }
];

export default iso4217;
