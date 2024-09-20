import React, { useEffect } from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Card, CardHeader, Table } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, findProducts } from '../../Redux/Product/Action';


const ProductsTable = () => {
  const dispatch = useDispatch()
  const {products} = useSelector(store => store.product)
  const productItems = products.content 

  const handleProductDelete = (productId)=>{
    dispatch(deleteProduct(productId))
  }
  useEffect(()=>{
    console.log(products.deletedProduct,'ooooooooo')
    const data = {
      category:'',
      color:[],
      discount:0,
      minPrice:0,
      maxPrice:10000000,
      size:[],
      sort:'price_low',
      pageNumber:0,
      pageSize:10,
      stock:'',
    }
    dispatch(findProducts(data))
  },[products.deletedProduct])
  return (
   <div className='p-5'>
     <Card>
      <CardHeader title='All Products'/>
     <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productItems?.map((item) => (
              <TableRow
                key={item.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar src={item?.imageURL}/>
                </TableCell>
                <TableCell align="right">{item.brand}</TableCell>
                <TableCell align="right">{item.category.name}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.discountedPrice}</TableCell>
                <TableCell align="right">
                <Button onClick={()=>handleProductDelete(item._id)} variant="outlined">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     </Card>
   </div>
  )
}

export default ProductsTable


