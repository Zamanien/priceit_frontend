// import { useState, useEffect, useRef } from "react";
// import React, { Fragment, ReactNode } from "react";
import { ProductDataProps } from "../../../types/product";
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
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export function Product({
  title,
  hiddenTitle,
  productList,
}: ProductDataProps): JSX.Element {
  const [expanded, setExpanded] = React.useState(false);
  const [flag, setFlag] = React.useState(true);

  
  const handleClick = () => {
    setFlag(!flag);
  };

  return (
    <div className="product_container">
      <div className="product_header" hidden={hiddenTitle}>
        <h1>{title}</h1>
      </div>
      {productList?.map((p, idx) => (
        <Card sx={{ maxWidth: 345 }} key={idx}>
          {/* <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={p.title}
            subheader={p.price.value}
          /> */}
          <CardMedia
            className="zoom"
            component="img"
            height="250"
            image={p.image.uri}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              {p.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {p.price.currency + p.price.value}
            </Typography>
          </CardContent>
          <CardActions disableSpacing onClick={() => console.log(p)}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>

            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
