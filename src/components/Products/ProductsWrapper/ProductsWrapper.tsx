import { useState, useEffect, useRef } from "react";
import { Fragment } from "react";
import ProductDataService from "../../../services/ProductDataService";
import Product from "../Product";
import { ProductData } from "../../../types/product";
import { Button, TextField, Pagination } from "@mui/material/";
import { useFormik } from "formik";
import { searchWordValidationSchema } from "../../../validationSchema";
import { ProductDataProps } from "../../../types/product";
export function ProductsWrapper(facebookProducts:ProductData[] | undefined, googleProducts:ProductData[] | undefined, ebayProducts:ProductData[] | undefined): JSX.Element {
  const [searchWordPagination, setSearchhWordPagination] = useState("");
  const [hiddenTitle, setHiddenTitle] = useState<boolean>(true);
  const [hiddenPagination, setHiddenPagination] = useState(true);
  // const [ebayProducts, setEbayProducts] = useState<ProductData[] | undefined>();
  // const [facebookProducts, setFacebookProducts] = useState<
  //   ProductData[] | undefined
  // >();
  // const [googleProducts, setGoogleProducts] = useState<
  //   ProductData[] | undefined
  // >();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      searchWord: "",
    },
    validationSchema: searchWordValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      const searchWord: string = values.searchWord;
      setSearchhWordPagination(values.searchWord);
      console.log(values);
      setCurrentPage(1);
      // try {
      //   let offset: number = 0;
      //   const response = await ProductDataService.findBySearchWord(
      //     searchWord,
      //     limit,
      //     offset
      //   );
      //   console.log(response);
      //   if (response.status === 200) {
      //     setEbayProducts(response.data.ebayData);
      //     setFacebookProducts(response.data.facebookData);
      //     setGoogleProducts(response.data.googleData);
      //     // sessionStorage.setItem("itemList_currentPage", JSON.stringify(response.data));
      //     setHiddenPagination(false);
      //     setHiddenTitle(false);
      //   }
      // } catch (error: any) {
      //   console.log(error.response.data.error);
      //   setError(error.response.data.error);
      // }
      // resetForm({
      //   values: {
      //     searchWord: "",
      //   },
      // });
    },
  });
  // function handleSearchWordChange(
  //   event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  // ) {
  //   const word = event.target.value;
  //   if (!word.length) return false;
  //   if (word) {
  //     setSearchWord(word);
  //     setSearchhWordPagination(word);
  //   }
  // }
  // useEffect(() => {
  //   const data: string | null = window.sessionStorage.getItem(
  //     "itemList_currentPage"
  //   ) as string;
  //   if (!data) {
  //     setFacebookProducts([]);
  //     setEbayProducts([]);
  //     setGoogleProducts([]);
  //     setHiddenPagination(false);
  //     setHiddenTitle(false);
  //   }
  //   if (data !== null) {
  //     let pageData: {
  //       facebookData: [];
  //       ebayData: [];
  //       googleData: [];
  //       offset: string;
  //     } = JSON.parse(data);
  //     setFacebookProducts(pageData.facebookData);
  //     setEbayProducts(pageData.ebayData);
  //     setGoogleProducts(pageData.googleData);
  //     setHiddenPagination(true);
  //     setHiddenTitle(true);
  //   }
  // }, []);
  
  // const handlePageChange = (
  //   event: React.ChangeEvent<unknown>,
  //   page: number
  // ) => {
  //   setCurrentPage(page);
  //   let offset: number = (page - 1) * limit;
  //   console.log("offset", offset);
  //   try {
  //     ProductDataService.findBySearchWord(
  //       searchWordPagination,
  //       limit,
  //       offset
  //     ).then((data) => {
  //       setEbayProducts(data.data.ebayData);
  //       setGoogleProducts(data.data.googleData);
  //       sessionStorage.setItem(
  //         "itemList_currentPage",
  //         JSON.stringify(data.data.ebayData)
  //       );
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <Fragment>
      <div className="container">
        {/* <form onSubmit={formik.handleSubmit}>
          <div className="search">
            <TextField
              fullWidth
              id="searchWord"
              label="Search"
              type="text"
              variant="outlined"
              margin="normal"
              value={formik.values.searchWord}
              onChange={formik.handleChange}
              error={
                formik.touched.searchWord && Boolean(formik.errors.searchWord)
              }
              helperText={formik.touched.searchWord && formik.errors.searchWord}
            />
          </div>
          <div>
            <Button variant="contained" type="submit">
              Search
            </Button>
          </div>
        </form> */}

        <Product
          title="Facebook Products"
          hiddenTitle={hiddenTitle}
          productList={facebookProducts || []}
        ></Product>
        <Product
          title="Ebay Products"
          hiddenTitle={hiddenTitle}
          productList={ebayProducts || []}
        ></Product>
        <Product
          title="Google Products"
          hiddenTitle={hiddenTitle}
          productList={googleProducts || []}
        ></Product>
      </div>
      {/* <div className="pagination">
        <Pagination
          count={10}
          color="primary"
          page={currentPage}
          onChange={handlePageChange}
          hidden={hiddenPagination}
        />
      </div> */}
    </Fragment>
  );
}
