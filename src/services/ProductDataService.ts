import http from "../http-common";
import {ProductData} from "../types/product"
import axios from "axios";

class ProductDataService {
    findBySearchWord(searchWord: string, limit:number, offset:number) {
      return http.get<{ebayData:Array<ProductData>, facebookData:Array<ProductData>, limit:number, offset:number}>('/products/find', {
        params: {
          search:searchWord,
          limit:limit,
          offset:offset
        }
      });
    }
  }
  export default new ProductDataService();