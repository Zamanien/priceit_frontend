import { Card, CardMedia, CardContent, CardActions } from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useOutletContext } from "react-router-dom";
import { ProductData, ProductDataProps, User } from "../../types";
import { Container } from "@mui/material/";
import Product from "../Products/Product";
import { useEffect, useState } from "react";

export function Profile() {
  const user: User = useOutletContext();
  const [favoriteProducts, setFavoriteProducts] = useState<ProductData[] | undefined>([]);

    function getFavoritesItems(){
      if(localStorage['favoriteProducts']){
        let favProducts:ProductData[] | undefined = JSON.parse(localStorage.getItem('favoriteProducts')|| "")
        setFavoriteProducts(favProducts)
      }
     
    }
    useEffect(()=>{
      getFavoritesItems()
    }, [])
    return (
      <>
        <Container maxWidth="lg">
          <h3>Welcome: {user.userName}</h3>
          <h3>{user.email}</h3>
        </Container>
        <h4>Your favorites products :</h4>
        <Product
        title="Your Favorites"
        productList={favoriteProducts}
        ></Product>
      </>
    );
  
  
}
