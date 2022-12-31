import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import { Pagination } from "@mui/material";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import { searchWordValidationSchema } from "../../validationSchema";
import ProductDataService from "../../services/ProductDataService";
import { ProductData } from "../../types/product";
import Product from "../Products/Product";
import  SpringModal  from "../Modal/Modal"
import Profile from "../Profile";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 10,
  marginRight: 10,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(40),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));

export function SearchAppBar() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const limit: number = 20;
  const [searchWordPagination, setSearchhWordPagination] = useState("");
  const [hiddenFacebookTitle, setHiddenFacebookTitle] = useState<boolean>(true);
  const [hiddenEbayTitle, setHiddenEbayTitle] = useState<boolean>(true);
  const [hiddenGoogleTitle, setHiddenGoogleTitle] = useState<boolean>(true);
  const [hiddenPagination, setHiddenPagination] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [ebayProducts, setEbayProducts] = useState<ProductData[] | undefined>();

  const [facebookProducts, setFacebookProducts] = useState<ProductData[] | undefined>();
  const [googleProducts, setGoogleProducts] = useState<ProductData[] | undefined>();

  const formik = useFormik({
    initialValues: {
      searchWord: "",
    },
    validationSchema: searchWordValidationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const searchWord: string = values.searchWord;
      setSearchhWordPagination(values.searchWord);
      setCurrentPage(1);
      try {
        let offset: number = 0;

        const response = await ProductDataService.findBySearchWord(
          searchWord,
          limit,
          offset
        );
        console.log(response);
        if (response.status === 200) {
          setEbayProducts(response.data.ebayData);
          setFacebookProducts(response.data.facebookData);
          setGoogleProducts(response.data.googleData);
          setHiddenPagination(false);
          setHiddenFacebookTitle(false);
          setHiddenEbayTitle(false);
          setHiddenGoogleTitle(false);
        }
      } catch (error: any) {
        console.log(error);
      }
      setSubmitting(false);
      resetForm({
        values: {
          searchWord: "",
        },
      });
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setAuth(event.target.checked);
  };
  const handleKeyDown = (
    event: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    //@ts-ignore
    if (event.key === "Enter")
      //@ts-ignore
      formik.handleChange;
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  function gotoProfile(){
    navigate("/profile")
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseProfileMenu = () => {
    setAnchorEl(null);
    gotoProfile();
  };
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    let offset: number = (page - 1) * limit;
    console.log("offset", offset);
    try {
      ProductDataService.findBySearchWord(
        searchWordPagination,
        limit,
        offset
      ).then((response) => {
        console.log(response)
        if(response.data.facebookData.length == 0){
          setHiddenFacebookTitle(true)
        }
        setFacebookProducts(response.data.facebookData);
        setEbayProducts(response.data.ebayData)
        setGoogleProducts(response.data.googleData);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="navbar">
        <AppBar position="fixed">
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <form onSubmit={formik.handleSubmit}>
                <StyledInputBase
                  id="searchWord"
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={formik.handleChange}
                  //@ts-ignore
                  onKeyDown={handleKeyDown}
                  value={formik.values.searchWord}
                  error={
                    formik.touched.searchWord &&
                    Boolean(formik.errors.searchWord)
                  }
                />
              </form>
            </Search>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Welcome
            </Typography>

            
            <SpringModal />
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleCloseProfileMenu}>Profile</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <>
        <div className="container">
         
          <Product
            title="Facebook Products"
            hiddenTitle={hiddenFacebookTitle}
            productList={facebookProducts || []}
          ></Product>
          <Product
            title="Ebay Products"
            hiddenTitle={hiddenEbayTitle}
            productList={ebayProducts || []}
          ></Product>
          <Product
            title="Google Products"
            hiddenTitle={hiddenGoogleTitle}
            productList={googleProducts || []}
          ></Product>
        </div>
        <div className="pagination">
          <Pagination
            count={10}
            color="primary"
            page={currentPage}
            onChange={handlePageChange}
            hidden={hiddenPagination}
          />
        </div>
      </>
    </>
  );
}
