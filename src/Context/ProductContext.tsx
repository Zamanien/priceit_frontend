import { useFormik } from "formik";
import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  useRef,
} from "react";
import ProductDataService from "../services/ProductDataService";
import { ProductData } from "../types";
import { useFormikContext } from "formik";

// From the code below you can see that the values can be undefined as well
type IProductContext = [
    string | undefined,
    React.Dispatch<React.SetStateAction<string | undefined>>
//   ProductData[] | undefined,
//   React.Dispatch<React.SetStateAction<ProductData[] | undefined>>,
//   ProductData[] | undefined,
//   React.Dispatch<React.SetStateAction<ProductData[] | undefined>>
];

export const ProductContext = createContext<IProductContext>([
"",
() => null,
// [],
// () => null,
// [],
// () => null

]);

interface Props {
  children: JSX.Element[] | JSX.Element;
}
let searchWord = "iphone";
let limit = 20;
let offset: number = 0;

const getProducts = async () => {
// let searchWord:string|null = localStorage.getItem('searchWord')

    try {
        const response = await ProductDataService.findBySearchWord(
          searchWord,
          limit,
          offset
        );
        return response;
      } catch (error: any) {
        console.log(error);
      }
    };

 
export const ProductStateContext = ({ children }: Props) => {
//   const [facebookProducts, setFacebookProducts] = useState<
//     ProductData[] | undefined
//   >();
//   const [ebayProducts, setEbayProducts] = useState<ProductData[] | undefined>();
  const [searchWord, setSearchWord] = useState<string>()

    
//   useEffect(() => {
  
//     getProducts().then((response) => {
//       if (response?.status === 200) {
//         console.log(response);
//         setFacebookProducts(response?.data.facebookData);
//         setEbayProducts(response.data.ebayData);
//       }
//     });
//   }, [getProducts, setFacebookProducts, setEbayProducts]);
  
  
  return (
    <ProductContext.Provider
      value={[
        searchWord,
        setSearchWord
        // facebookProducts,
        // setFacebookProducts,
        // ebayProducts,
        // setEbayProducts,
      ]}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useStateContext = () => {
    if (ProductContext === undefined) {
        throw new Error("ProductContext was used outside of its Provider");
      }
      
      return useContext(ProductContext);;
    };
    
