import "@typespec/http";

import "./countries.tsp";
import "./currencies.tsp";

using Http;

@service
@server("/")

namespace Currency;

// Sample model must be presented and declare properties from imported models to ensure they are included in the generated OpenAPI spec.
model SampleModel {
  currencyAlphabeticCode: CurrencyAlphabeticCode;
  countryAlpha2: CountryAlpha2;
  countryAlpha3: CountryAlpha3;
}
