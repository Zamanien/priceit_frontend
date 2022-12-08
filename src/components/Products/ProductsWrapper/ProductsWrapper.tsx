import { useState, useEffect, useRef } from "react";
import { Fragment } from "react";
import ProductDataService from "../../../services/ProductDataService";
import  Product  from "../Product";
import { ProductData } from "../../../types/product";
import {
  Button,
  TextField,
  Pagination,
  CardActionArea,
  CardActions,
} from "@mui/material/";

export function ProductsWrapper(): JSX.Element {
  const [searchWord, setSearchWord] = useState("");
  const [searchWordPagination, setSearchhWordPagination] = useState("");
  const [hiddenTitle, setHiddenTitle] = useState<boolean>(true)
  const [ebayProducts, setEbayProducts] = useState<ProductData[] | undefined>();
  const [facebookProducts, setFacebookProducts] = useState<ProductData[] | undefined>();
  const [googleProducts, setGoogleProducts] = useState<ProductData[] | undefined>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const [hidden, setHidden] = useState(true);
  function handleSearchWordChange(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const word = event.target.value;
    setSearchWord(word);
    setSearchhWordPagination(word);
    
  }
    useEffect(() => {
    const data: string | null = window.localStorage.getItem('itemList_currentPage') as string;
    if ( data !== undefined ) {
      let pageData:{ facebookData: [], ebayData: [], googleData: [], offset: string}  = JSON.parse(data)
      setFacebookProducts(pageData.facebookData);
      setEbayProducts(pageData.ebayData)
      setGoogleProducts(pageData.googleData)
      setHidden(false);
      setHiddenTitle(false)
    }
  }, []);
  async function handleSubmit(event: any) {
    event.preventDefault();
    setCurrentPage(1);
    try {
      let offset: number = 0;
      const data = await ProductDataService.findBySearchWord(
        searchWordPagination,
        limit,
        offset
      );
      console.log(data.data);
      setEbayProducts(data.data.ebayData);
      setFacebookProducts(data.data.facebookData)
      setGoogleProducts(data.data.googleData)
      localStorage.setItem("itemList_currentPage", JSON.stringify(data.data));
      setHidden(false);
      setSearchWord("");
      setHiddenTitle(false)
    } catch (error) {
      console.log(error);
    }
  }
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    let offset: number = (page - 1) * limit;
    console.log("offset", offset)
    ProductDataService.findBySearchWord(searchWord, limit, offset).then(
      (data) => {
        setEbayProducts(data.data.ebayData);
        setGoogleProducts(data.data.googleData)
        localStorage.setItem(
          "itemList_currentPage",
          JSON.stringify(data.data.ebayData)
        );
      }
    );
  };
  return (
    <Fragment>
      <form>
      <div className="search">
        <TextField
          id="outlined-basic"
          label="Search"
          type="text"
          fullWidth
          variant="outlined"
          value={searchWord}
          onChange={handleSearchWordChange}
        />
      </div>
      <br></br>
      <div>
        <Button variant="contained" onClick={handleSubmit}>
          Search
        </Button>
      </div>
      </form>
      
      <Product title="Facebook Products" hiddenTitle={hiddenTitle} productList={facebookProducts || []}></Product>
      <Product  title="Ebay Products" hiddenTitle={hiddenTitle} productList={ebayProducts || []}></Product>
      <Product title="Google Products" hiddenTitle={hiddenTitle} productList={googleProducts || []}></Product>
      <div className="pagination">
        <Pagination
          count={10}
          color="primary"
          page={currentPage}
          onChange={handleChange}
          hidden={hidden}
        />
      </div>
    </Fragment>
  );
}
