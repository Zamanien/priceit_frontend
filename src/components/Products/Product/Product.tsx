import { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ProductDataProps, ProductData } from "../../../types/product";
import { createTheme } from "@mui/material/styles";

export function Product({
  title,
  hiddenTitle,
  productList,
  error,
  hiddenError,
}: ProductDataProps): JSX.Element {
  let localProducts: any = [];
  if (localStorage["favoriteProducts"]) {
    const oldFavorites: ProductData[] | undefined = JSON.parse(
      localStorage.getItem("favoriteProducts") || ""
    );
    localProducts=JSON.parse(JSON.stringify(oldFavorites));
    
  } else {
    localProducts = [];
  }

  const [favoriteProducts, setFavoriteProducts] = useState<
    ProductData[] | undefined
  >([]);

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  function handleFavorites(
    e: React.SyntheticEvent,
    p: ProductData,
    index: number
  ) {
    e.preventDefault();
    if (p) {
      setActiveIndex(index);
      if (!favoriteProducts?.includes(p)) setFavoriteProducts(favoriteProducts?.concat(p));
      if (!favoriteProducts?.includes(p)) localProducts.push(p);
      localStorage.setItem("favoriteProducts", JSON.stringify(localProducts));
    } else {
      setActiveIndex(-1);
    }
  }


  return (
    <>
      <div className="product_container">
        <div className="product_header" hidden={hiddenTitle}>
          <h1>{title}</h1>
        </div>
        {error && (
          <div className="error" hidden={hiddenError}>
            <h1>{error}</h1>
          </div>
        )}
        {productList?.map((p, idx) => (
          <Card sx={{ maxWidth: 245 }} key={idx}>
            <a href={p.itemRef} target="_blank" rel="noreferrer">
              <CardMedia
                className="zoom"
                component="img"
                height="150"
                image={p.image.uri}
                alt="Paella dish"
              />
            </a>
            <CardContent sx={{ maxHeight: 30 }}>
              <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                {p.title}
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                {p.price.currency + p.price.value}
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ bottom: 0 }}>
              <Box sx={{ width: 500, bottom: 0, paddingTop: 5 }}>
                <Tooltip title="Add to favorites">
                  <IconButton
                    id={idx.toString()}
                    aria-label="add to favorites"
                    color={idx === activeIndex ? "info" : "default"}
                    onClick={(e) => handleFavorites(e, p, idx)}
                    sx={{ "&$checked": { color: "blue" } }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
