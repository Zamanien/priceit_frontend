import { useState, useEffect, useRef } from "react";
// import React, { Fragment, ReactNode } from "react";
import { ProductDataProps, ProductData } from "../../../types/product";
// import {
//   Button,
//   TextField,
//   Pagination,
//   CardActionArea,
//   CardActions,
// } from "@mui/material/";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";

// export function Product({
//   title,
//   hiddenTitle,
//   productList,
// }: ProductDataProps): JSX.Element {
//   return (
//     <Fragment>
//       <div>
//         <div className="product_container">
//           <div className="product_header" hidden={hiddenTitle}>
//             <h1>{title}</h1>
//           </div>
//           {productList?.map((p, idx) => (
//             <Card
//               className="zoom"
//               key={idx}
//               sx={{
//                 maxWidth: 300,
//                 bgcolor: "white",
//                 boxShadow: 1,
//                 // borderRadius: 2,
//                 p: 2,
//                 minWidth: 250,
//                 Height: 500,
//               }}
//             >
//               <a href={p.itemRef} target="_blank" rel="noreferrer">
//                 <CardActionArea
//                   sx={{
//                     bgcolor: "white",
//                     boxShadow: 1,
//                     // borderRadius: 2,
//                     p: 2,
//                     minWidth: 250,
//                     minHeight: 350,
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="200"
//                     image={p.image.uri}
//                     alt="green iguana"
//                   />
//                   <CardContent>
//                     <Typography
//                       gutterBottom={false}
//                       variant="body1"
//                       component="div"
//                     >
//                       {p.title}
//                     </Typography>
//                     <Typography variant="subtitle2" color="text.secondary">
//                       {p.price.value + p.price.currency}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//               </a>
//               <CardActions>
//                 <a href={p.itemRef} target="_blank" rel="noreferrer">
//                   <Button
//                     size="small"
//                     color="primary"
//                     type="button"
//                     sx={{ pt: 2 }}
//                   >
//                     View
//                   </Button>
//                 </a>
//                 <Button
//                   size="small"
//                   color="primary"
//                   type="button"
//                   sx={{ pt: 2 }}
//                   onClick={() => console.log(p)}
//                 >
//                   Save
//                 </Button>
//               </CardActions>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </Fragment>
//   );
// }
import { createContext } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from '@mui/material/Box';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
export function Product({
  title,
  hiddenTitle,
  productList,
  childToParent,
}: ProductDataProps): JSX.Element {

  const [blue, setBlue] = useState(false);
  const favoriteProducts: ProductData[] = [];
  function handleFavorites(p: ProductData) {
    favoriteProducts.push(p);
  }
  return (
    <>
      <div className="product_container">
        <div className="product_header" hidden={hiddenTitle}>
          <h1>{title}</h1>
        </div>

        {productList?.map((p, idx) => (
          <Card sx={{ maxWidth: 345 }} key={idx}>
            <a href={p.itemRef} target="_blank" rel="noreferrer">
              <CardMedia
                className="zoom"
                component="img"
                height="275"
                image={p.image.uri}
                alt="Paella dish"
              />
            </a>
            <CardContent sx={{maxHeight: 50}}>
              <Typography variant="body1" color="text.secondary">
                {p.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {p.price.currency + p.price.value}
              </Typography>
            </CardContent>

            <CardActions disableSpacing sx={{ bottom: 0 }}>
              
              <Box sx={{ width: 500, bottom:0}}>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => handleFavorites(p)}
                  
                >
                  <FavoriteIcon />
                </IconButton>
               
              </Box>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
