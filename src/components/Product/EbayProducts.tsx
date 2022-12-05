import { useState, useEffect, useRef } from "react";
import React, { Fragment, ReactNode } from "react";
import { Link } from "react-router-dom";
import ProductDataService from "../../services/ProductDataService";
import {
  Button,
  TextField,
  Pagination,
  CardActionArea,
  CardActions,
} from "@mui/material/";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ProductData } from "../../types/product";

export function EbayProduct(): JSX.Element {
  const [searchWord, setSearchWorkd] = useState("");
  const [products, setProducts] = useState<ProductData[] | undefined>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const [hidden, setHidden] = useState(true);

  // useEffect(() => {
  //   const data: string = window.localStorage.getItem('itemList_currentPage');
  //   if ( data !== undefined ) {
  //     setProducts(JSON.parse(data));
  //     setHidden(false);
  //   } else {
  //     setProducts(undefined)
  //   }
  // }, []);
  async function handleSubmit(event: any) {
    setCurrentPage(1);
    try {
      let offset: number = 0;
      const data = await ProductDataService.findBySearchWord(
        searchWord,
        limit,
        offset
      );
      console.log(data.data);
      setProducts(data.data.ebayData);
      localStorage.setItem(
        "itemList_currentPage",
        JSON.stringify(data.data)
      );
      setHidden(false);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSearchWordChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const word = event.target.value;
    setSearchWorkd(word);
  }

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    let offset: number = (page - 1) * limit
    ProductDataService.findBySearchWord(searchWord, limit, offset).then((data) => {
      setProducts(data.data.ebayData);
      localStorage.setItem(
        "itemList_currentPage",
        JSON.stringify(data.data.ebayData)
      );
    });
  };


  return (
    <Fragment>
      <div>
        <div>
          <TextField
            id="outlined-basic"
            label="Search"
            type="text"
            variant="outlined"
            onChange={handleSearchWordChange}
          />
        </div>
        <br></br>
        <div>
          <Button variant="contained" onClick={handleSubmit}>
            Search
          </Button>
        </div>
        <div className="container">
          {products?.map(function (p, idx) {
            return (
              <Card sx={{ maxWidth: 250 }} key={idx}>
                <a href={p.itemRef} target="_blank" rel="noreferrer">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={p.image.uri}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom={true}
                        variant="body1"
                        component="div"
                      >
                        {p.title}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        {p.price.value + p.price.currency}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </a>
                <CardActions>
                  <a href={p.itemRef} target="_blank" rel="noreferrer">
                    <Button
                      size="small"
                      color="primary"
                      type="button"
                      sx={{ pt: 5 }}
                    >
                      View
                    </Button>
                  </a>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
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
