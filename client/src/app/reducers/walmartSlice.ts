import { createSlice } from '@reduxjs/toolkit';
import { WalmartProduct as WalmartType } from '@/types/walmart';
// {
//     "wpId": 15321,
//     "Id": "product_9767_774976869",
//     "CatalogId": "9767",
//     "CampaignId": "9383",
//     "CampaignName": "Walmart Affiliate Program",
//     "CatalogItemId": "774976869",
//     "Name": "Mellow MAVN Upholstered Platform Bed  Modern Tufted Headboard  Real Wooden Slats and Legs  Dark Grey  King",
//     "Description": "Mellow s Mavn upholstered platform bed features a modern tufted design and headboard with elegant curves and modern edges. The dark grey fabric headboard is detailed with curves complemented with clean  edged corners and layered with foam for comfort as you lean back and relax. The authentic solid wooden slats provide sturdy  durable support without the need for a separate box spring. The legs are also made with solid wood for stability and a refined modern look. Enjoy quick and easy assembly with a free ratchet and everything you need included in the package  no other tools required. The Mavn platform bed is available in Full  Queen and King sizes and comes with a 5-year manufacturer s warranty.",
//     "Manufacturer": "Mellow",
//     "Url": "https://goto.walmart.com/c/3917115/1285386/9383?prodsku=774976869&u=https%3A%2F%2Fwww.walmart.com%2Fip%2FMellow-MAVN-Upholstered-Platform-Bed-Modern-Tufted-Headboard-Real-Wooden-Slats-and-Legs-Dark-Grey-King%2F774976869&intsrc=APIG_9767",
//     "ImageUrl": "https://i5.walmartimages.com/asr/102b75c2-3163-4499-b9fe-3085b9bb63a2_1.d0cdb4c43f5ac838b6f190f865398bd7.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
//     "Currency": "USD",
//     "StockAvailability": "InStock",
//     "Gtin": "00842165126559",
//     "Category": "Home>Furniture>Bedroom Furniture>Beds>Shop all Beds",
//     "SubCategory": "Home Page/Home/Furniture/Bedroom Furniture/Beds/Shop all Beds",
//     "IsParent": "false",
//     "Text2": "Walmart.com",
//     "Uri": "/Mediapartners/IRA4K3ySvbUh3917115tdrHHtKz6Y6tff1/Catalogs/9767/Items/product_9767_774976869",
//     "CurrentPrice": "321.12",
//     "OriginalPrice": "350.00",
//     "DiscountPercentage": "8"
// },
const initialState: {
  furnitureProducts: WalmartType[];
  exclusiveDeals: WalmartType[];
  searchedProducts: WalmartType[];
} = {
  furnitureProducts: [],
  exclusiveDeals: [],
  searchedProducts: []
};

const walmartSlice = createSlice({
  name: 'walmart',
  initialState,
  reducers: {
    loadFurnitureProducts: (state, action) => {
      state.furnitureProducts = action.payload.furnitureProducts;
      console.log(state.furnitureProducts);
      return state;
    },
    loadExclusiveDeals: (state, action) => {
      state.exclusiveDeals = action.payload.exclusiveDeals;
      console.log(state.exclusiveDeals);
      return state;
    },
    searchProducts: (state, action) => {
      state.searchedProducts = action.payload.searchedProducts;
      return state;
    }
  }
});

export const { loadFurnitureProducts, loadExclusiveDeals, searchProducts } =
  walmartSlice.actions;
export default walmartSlice.reducer;
