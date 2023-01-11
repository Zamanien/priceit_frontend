import { httpSearch } from "../http-common";
import {ProductData} from "../types/product"


class ProductDataService {
    findBySearchWord(searchWord: string, limit:number, offset:number) {
      return httpSearch.get<{ebayData:Array<ProductData>, facebookData: Array<ProductData>, googleData:Array<ProductData>,limit:number, offset:number, error:string}>('/products/find', {
        params: {
          search:searchWord,
          limit:limit,
          offset:offset,
        }
      });
    }
    findEbayProductsBySearchWord(searchWord: string, limit:number, offset:number) {
      return httpSearch.get<{ebayData:{itemList:Array<ProductData>}, limit:number, offset:number, error:string}>('/products/find/ebay', {
        params: {
          search:searchWord,
          limit:limit,
          offset:offset,
        }
      });
    }
    findFacebookProductsBySearchWord(searchWord: string, offset:number) {
      return httpSearch.get<{facebookData:{itemList: Array<ProductData>}, error:string}>('/products/find/facebook', {
        params: {
          search:searchWord,
          offset:offset,
        }
      });
    }
    findGoogleProductsBySearchWord(searchWord: string, offset:number) {
      return httpSearch.get<{googleData:{itemList: Array<ProductData>}, error:string}>('/products/find/google', {
        params: {
          search:searchWord,
          offset:offset,
        }
      });
    }
  }
  export default new ProductDataService();