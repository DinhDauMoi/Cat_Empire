"use client"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { ComplexNavbar } from '@/app/component/header'
import { CarouselCustomNavigation } from '@/app/component/carousel'
import { DefaultSpeedDial } from '@/app/component/dial'
import { InputVariants } from '@/app/component/search'
import { CardDefault } from '@/app/component/catProduct'
import  Product  from '@/app/component/product'
export default function Home() {
  return (
    <main>
      <ComplexNavbar></ComplexNavbar>
      <CarouselCustomNavigation></CarouselCustomNavigation>
      <InputVariants></InputVariants>
       {/* <CardDefault></CardDefault> */}
      <Product></Product>

      {/* alway end */}
      <DefaultSpeedDial></DefaultSpeedDial>
    </main>
  )
}
