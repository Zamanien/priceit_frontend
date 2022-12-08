
export interface ProductDataProps {
  title:string
  productList: ProductData[];
  handleChange?: ((event: React.ChangeEvent<unknown>, page: number) => void)
  currentPage?: number
  hiddenTitle: boolean
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