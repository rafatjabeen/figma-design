import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'


const Home = () => {
  return (
    <div className= "h-screen">
        <Header />
           <div className= "flex h-[80%]">
       
            <div className= "w-1/2 flex flex-col justify-center items-start  m-12">

                <h1 className= "w-[496px] font-bold text-[40px]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
                
                <p className= "w-[902px] h-[147px]  text-[#A29875]">
                    
                An example of intricate workmanship and detail, elegant <br/> necklaces and long and short chains form a part of our <br/> desirable collection. </p>
               
                <button className= "w-[288px] h-[58px] bg-[#A29875] text-white p-2 font-normal text-[28px] ">Explore Now</button>
                </div>
                <div className= "w-1/2 flex justify-center items-center pt-10 pr-80">
                    <Image 
                    src={"/images/figma_image.svg"}
                    alt= "Hero image"
                    width= {462}
                    height= {647}
                    />
                </div>
                </div>
        </div>
    
  )
}

export default Home;