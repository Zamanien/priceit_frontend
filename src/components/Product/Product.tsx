import { useState, useEffect } from "react";
import React, { Fragment, ReactNode } from "react";
import { Link } from 'react-router-dom';
import ProductDataService from "../../services/ProductDataService";
import {
  Button,
  TextField,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Pagination,
  CardActionArea,
  CardActions,
} from "@mui/material/";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ProductData } from "../../types/product";

export function Product() {
  const [searchWord, setSearchWorkd] = useState("");
  const [products, setProducts] = useState<ProductData[]>();
  const [page, setPage] = useState(1);

  function handleSubmit(event: any) {
    ProductDataService.findBySearchWord(searchWord, page).then((data) => {
      setProducts(data.data);
      console.log(products);
    });
  }
  function handleSearchWordChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const word = event.target.value;
    setSearchWorkd(word);
  }

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
    console.log("Product.handleChange page value:", page);
    ProductDataService.findBySearchWord(searchWord, page).then((data) => {
      setProducts(data.data);
      console.log(products);
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
        <div>
          {products?.map(function (p, idx) {
            
            return (
              // <ListItemButton component="a" href="#simple-list" key={idx}>
              // <ListItemText primary={p.title} secondary={<img src={p.image.uri} height="100px" width="100px"></img>} slot={p.price.text}/>
              // </ListItemButton>

              // <ListItemButton component="a" href={p.itemRef} key={idx}>
              // <ListItemAvatar>
              //   <Avatar variant="rounded" sx={{ width: 100, height: 100 }}>
              //   <img src={p.image.uri} height="100%" width="100%"></img>
              //   </Avatar>
              // </ListItemAvatar>
              // <ListItemText primary={p.title} secondary={p.price.text}/>
              // </ListItemButton>
              <Card sx={{ maxWidth: 250 }} key={idx}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="160"
                    image={p.image.uri}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {p.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {p.price.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <a href={p.itemRef} target="_blank" rel="noreferrer">
                  <Button size="small" color="primary" type="button" >
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
          page={page}
          onChange={handleChange}
        />
      </div>
    </Fragment>
  );
}
