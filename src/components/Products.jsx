import { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
  padding: 20px;
  display: flex;
  //商品換行
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({ category, filters, sort }) => {
  // console.log(category, filters, sort)
  const [products, setProducts] = useState([])
  // when we change our filter, we are gonna update these filtered products and going to show by those filters
  const [filteredProducts, setFilteredProducts] = useState([])

  // when the category changes just run this function
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category ? `http://localhost:8000/api/products?category=${category}` : 'http://localhost:8000/api/products'
        )
        // console.log(res)
        setProducts(res.data)
      } catch (err) {}
    }
    getProducts()
    // reset scroll position to top when the component mounts or the category changes
    window.scrollTo(0, 0)
  }, [category])

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value)))
      )
  }, [products, category, filters])

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt))
    } else if (sort === 'asc') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
    }
  }, [sort])

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)}
    </Container>
  )
}

export default Products
 