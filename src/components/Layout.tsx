import React from 'react'
import { cartStore } from '../zustand'
import Navigation from './Navigation'

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
  
  return (
    <>
    <Navigation/>
    {children}
    </>
  )
}

export default Layout