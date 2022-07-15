import getTokenPrices from "./aave";
export default function factories() {
  getTokenPrices(
    "optimism",
    "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
    "v3"
  );
  getTokenPrices(
    "arbitrum",
    "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
    "v3"
  );
  getTokenPrices(
    "ethereum",
    "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
    "v2"
  );
  // AMM market has no registry
  //getTokenPrices("ethereum", "0x7937d4799803fbbe595ed57278bc4ca21f3bffcb");
  getTokenPrices("polygon", "0x3ac4e9aa29940770aeC38fe853a4bbabb2dA9C19", "v2");
  getTokenPrices("avax", "0x4235E22d9C3f28DCDA82b58276cb6370B01265C2", "v2");
}
