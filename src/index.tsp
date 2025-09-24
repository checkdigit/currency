import "@typespec/http";

import "./countries.tsp";
import "./currencies.tsp";

using Http;

@service
@server("/")

namespace Currency;

model SampleModel {
  currencyAlphabeticCode: CurrencyAlphabeticCode;
  countryAlpha2: CountryAlpha2;
  countryAlpha3: CountryAlpha3;
}
