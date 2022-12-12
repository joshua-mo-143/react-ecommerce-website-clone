import React from 'react'
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