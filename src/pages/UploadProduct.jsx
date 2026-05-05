import React from 'react'
import ProductForm from '../components/ProductForm'
import Container from '../components/Container/Container'

function UploadProduct() {
  return (
    <Container>
      <div className='w-full min-h-screen  p-4'>
        <ProductForm />
        </div>
    </Container>
  )
}

export default UploadProduct