import { useState, useEffect, useRef } from "react";
import React, { Fragment, ReactNode } from "react";
import { ProductDataProps } from "../../../types/product";
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

export function Product({ title, hiddenTitle, productList }: ProductDataProps): JSX.Element {
  return (
    <Fragment>
      <div>
        <div className="container_header" hidden={hiddenTitle}>
          <h1>{title}</h1>
        </div>
        <div className="container">
          {productList?.map((p, idx) => (
            <Card key={idx}
            sx={{
              maxWidth: 300,
              bgcolor: "whitesmoke",
              boxShadow: 1,
              // borderRadius: 2,
              p: 2,
              minWidth: 250,
              Height:500
            }}>
              <a href={p.itemRef} target="_blank" rel="noreferrer">
                <CardActionArea
                  sx={{
                    bgcolor: "whitesmoke",
                    boxShadow: 1,
                    // borderRadius: 2,
                    p: 2,
                    minWidth: 250,
                    minHeight:350
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={p.image.uri}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom={false}
                      variant="body1"
                      component="div"
                    >
                      {p.title}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {p.price.value + p.price.currency}
                    </Typography>
                    
                  </CardContent>
                  {/* <div>
                  <a href={p.itemRef} target="_blank" rel="noreferrer">
                  <Button
                    size="medium"
                    color="primary"
                    type="button"
                    sx={{ pt: 2 }}
                  >
                    View
                  </Button>
                </a>
                  </div> */}
                  
                </CardActionArea>
              </a>
              <CardActions>
                <a href={p.itemRef} target="_blank" rel="noreferrer">
                  <Button
                    size="small"
                    color="primary"
                    type="button"
                    sx={{ pt: 2 }}
                  >
                    View
                  </Button>
                </a>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
