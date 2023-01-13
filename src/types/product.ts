
export interface ProductDataProps {
  title?:string
  productList?: ProductData[] | undefined;
  favoriteProducts?:() => any,
  handleChange?: ((event: React.ChangeEvent<unknown>, page: number) => void)
  childToParent?:(product:ProductData) => void
  currentPage?: number
  hiddenTitle?: boolean
  error?:string
  hiddenError?:boolean
  onDelete?: () => any
 }
 export interface Data{
  facebookProducts: ProductData[] | undefined;
  ebayProducts: ProductData[] | undefined;
  googleProducts: ProductData[] | undefined;
 }
export type ProductData ={
    id: string,
    title: string,
    price: Price,
    image: Image,
    itemRef:string
  }

type Price = {
    value:number,
    currency:string
}

interface Image  {
  height: number,
  width:number,
  uri: string
}