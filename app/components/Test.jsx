import React from 'react'

const Test = () => {
  return (
    <section>

      <section className="hero w-full hero_bg h-screen flex justify-center items-center  z-0 py-[102px] px-[72px]">
        {/* <Image src={img} alt="this is image" className="w-full h-full z-3"/> */}

        <div className="header_container w-full h-full px-[32px] flex justify-center items-center flex-col gap-6">
          <div className="content w-full flex justify-center items-center flex-col gap-6">
            <div className="bg-[#FBE843] w-[291px] h-[45px] px-[20px] py-[10px] rounded-md relative">
              <h1 className=" font-extrabold text-[17px] uppercase text-center line-[24px] text-black">
                Pitch, Vote, and Grow
              </h1>
              <div className="border_div absolute right-1 bottom-1"></div>
              <div className="border_div2 absolute left-1 top-1"></div>
            </div>

            <div className="bg-black px-[5rem] py-6">
              <h1 className="text-4xl text-center uppercase font-extrabold">
                Pitch Your Startup,<br></br>
                Connect with Entrepreneurs
              </h1>
            </div>

            <p className="text-md text-[#FFFFFF]">
              Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
              Competitions
            </p>
          </div>

          <div className="search_container bg-white rounded-[25px]  w-[32rem] border-[5px] border-black  relative">
            <input
              type="text"
              className="w-full h-full rounded-[25px] px-6 py-3 text-black font-bold text-lg uppercase focus:outline-0 focus:border-0 placeholder:text-black placeholder:font-bold"
              placeholder="Search startup"
            />
            {/* <div>
              <h1 className="text-black font-bold text-lg uppercase">Search startup</h1>
          </div> */}
            <div className="bg-black w-10 aspect-square flex justify-center items-center rounded-full absolute top-1 right-2">
              <i className="ri-search-line text-white"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white w-full p-12">
        <div className="head w-full">
          <h1 className="text-black font-bold text-xl">Recommended startups</h1>
        </div>
        <div className="body w-full">
          <div className="cards_list grid grid-cols-4 gap-3 w-full mt-8">
            <div className="card card_layout p-6">
              <div className="flex justify-between items-center">
                <div className="bg-[#FFE8F0] w-[8rem] h-[39px] rounded-xl text-center text-black flex justify-center items-center font-bold">
                  20 May, 2023
                </div>
                <div className="flex justify-center items-center gap-1">
                  <i className="ri-eye-line text-[#EE2B69] "></i>
                  <span className="text-black ">232</span>
                </div>
              </div>

              <div className="text-black mt-6 flex justify-between items-center">
                <div className="flex justify-center items-start flex-col gap-2">
                  <h1 className="">Steven Smith</h1>
                  <h1 className="font-extrabold text-xl">EcoTrack</h1>
                </div>
                <Image src={logo} alt="this is image" width={50} />
              </div>

              <p className="text-md text-[#333333] mt-4 h-[3rem] w-full multiline-truncated">A mobile app that helps users track and reduce their carbo and best ins difjaklj kljlkjfklafklkldjlsfad ldfjlkdsahlsalh lkalkdsf lsdaf dflka llk sadlksdl kasfkl</p>

              <div className="w-full h-[10rem] mt-4">
                <Image src={image} className="w-full h-full rounded-xl" alt="post image" />
              </div>

              <div className="text-black flex justify-between items-center mt-4">
                <h1 className=" capitalize font-bold">senior level</h1>
                <button className="bg-black text-white cursor-pointer rounded-2xl flex justify-center items-center py-2 px-4">Details</button>
              </div>
            </div>
            <div className="card card_layout p-6">
              <div className="flex justify-between items-center">
                <div className="bg-[#FFE8F0] w-[8rem] h-[39px] rounded-xl text-center text-black flex justify-center items-center font-bold">
                  20 May, 2023
                </div>
                <div className="flex justify-center items-center gap-1">
                  <i className="ri-eye-line text-[#EE2B69] "></i>
                  <span className="text-black ">232</span>
                </div>
              </div>

              <div className="text-black mt-6 flex justify-between items-center">
                <div className="flex justify-center items-start flex-col gap-2">
                  <h1 className="">Steven Smith</h1>
                  <h1 className="font-extrabold text-xl">EcoTrack</h1>
                </div>
                <Image src={logo} alt="this is image" width={50} />
              </div>

              <p className="text-md text-[#333333] mt-4 h-[3rem] w-full multiline-truncated">A mobile app that helps users track and reduce their carbo and best ins difjaklj kljlkjfklafklkldjlsfad ldfjlkdsahlsalh lkalkdsf lsdaf dflka llk sadlksdl kasfkl</p>

              <div className="w-full h-[10rem] mt-4">
                <Image src={image} className="w-full h-full rounded-xl" alt="post image" />
              </div>

              <div className="text-black flex justify-between items-center mt-4">
                <h1 className=" capitalize font-bold">senior level</h1>
                <button className="bg-black text-white cursor-pointer rounded-2xl flex justify-center items-center py-2 px-4">Details</button>
              </div>
            </div>
            <div className="card card_layout p-6">
              <div className="flex justify-between items-center">
                <div className="bg-[#FFE8F0] w-[8rem] h-[39px] rounded-xl text-center text-black flex justify-center items-center font-bold">
                  20 May, 2023
                </div>
                <div className="flex justify-center items-center gap-1">
                  <i className="ri-eye-line text-[#EE2B69] "></i>
                  <span className="text-black ">232</span>
                </div>
              </div>

              <div className="text-black mt-6 flex justify-between items-center">
                <div className="flex justify-center items-start flex-col gap-2">
                  <h1 className="">Steven Smith</h1>
                  <h1 className="font-extrabold text-xl">EcoTrack</h1>
                </div>
                <Image src={logo} alt="this is image" width={50} />
              </div>

              <p className="text-md text-[#333333] mt-4 h-[3rem] w-full multiline-truncated">A mobile app that helps users track and reduce their carbo and best ins difjaklj kljlkjfklafklkldjlsfad ldfjlkdsahlsalh lkalkdsf lsdaf dflka llk sadlksdl kasfkl</p>

              <div className="w-full h-[10rem] mt-4">
                <Image src={image} className="w-full h-full rounded-xl" alt="post image" />
              </div>

              <div className="text-black flex justify-between items-center mt-4">
                <h1 className=" capitalize font-bold">senior level</h1>
                <button className="bg-black text-white cursor-pointer rounded-2xl flex justify-center items-center py-2 px-4">Details</button>
              </div>
            </div>
            <div className="card card_layout p-6">
              <div className="flex justify-between items-center">
                <div className="bg-[#FFE8F0] w-[8rem] h-[39px] rounded-xl text-center text-black flex justify-center items-center font-bold">
                  20 May, 2023
                </div>
                <div className="flex justify-center items-center gap-1">
                  <i className="ri-eye-line text-[#EE2B69] "></i>
                  <span className="text-black ">232</span>
                </div>
              </div>

              <div className="text-black mt-6 flex justify-between items-center">
                <div className="flex justify-center items-start flex-col gap-2">
                  <h1 className="">Steven Smith</h1>
                  <h1 className="font-extrabold text-xl">EcoTrack</h1>
                </div>
                <Image src={logo} alt="this is image" width={50} />
              </div>

              <p className="text-md text-[#333333] mt-4 h-[3rem] w-full multiline-truncated">A mobile app that helps users track and reduce their carbo and best ins difjaklj kljlkjfklafklkldjlsfad ldfjlkdsahlsalh lkalkdsf lsdaf dflka llk sadlksdl kasfkl</p>

              <div className="w-full h-[10rem] mt-4">
                <Image src={image} className="w-full h-full rounded-xl" alt="post image" />
              </div>

              <div className="text-black flex justify-between items-center mt-4">
                <h1 className=" capitalize font-bold">senior level</h1>
                <button className="bg-black text-white cursor-pointer rounded-2xl flex justify-center items-center py-2 px-4">Details</button>
              </div>
            </div>
            <div className="card card_layout p-6">
              <div className="flex justify-between items-center">
                <div className="bg-[#FFE8F0] w-[8rem] h-[39px] rounded-xl text-center text-black flex justify-center items-center font-bold">
                  20 May, 2023
                </div>
                <div className="flex justify-center items-center gap-1">
                  <i className="ri-eye-line text-[#EE2B69] "></i>
                  <span className="text-black ">232</span>
                </div>
              </div>

              <div className="text-black mt-6 flex justify-between items-center">
                <div className="flex justify-center items-start flex-col gap-2">
                  <h1 className="">Steven Smith</h1>
                  <h1 className="font-extrabold text-xl">EcoTrack</h1>
                </div>
                <Image src={logo} alt="this is image" width={50} />
              </div>

              <p className="text-md text-[#333333] mt-4 h-[3rem] w-full multiline-truncated">A mobile app that helps users track and reduce their carbo and best ins difjaklj kljlkjfklafklkldjlsfad ldfjlkdsahlsalh lkalkdsf lsdaf dflka llk sadlksdl kasfkl</p>

              <div className="w-full h-[10rem] mt-4">
                <Image src={image} className="w-full h-full rounded-xl" alt="post image" />
              </div>

              <div className="text-black flex justify-between items-center mt-4">
                <h1 className=" capitalize font-bold">senior level</h1>
                <button className="bg-black text-white cursor-pointer rounded-2xl flex justify-center items-center py-2 px-4">Details</button>
              </div>
            </div>
            <div className="card card_layout p-6">
              <div className="flex justify-between items-center">
                <div className="bg-[#FFE8F0] w-[8rem] h-[39px] rounded-xl text-center text-black flex justify-center items-center font-bold">
                  20 May, 2023
                </div>
                <div className="flex justify-center items-center gap-1">
                  <i className="ri-eye-line text-[#EE2B69] "></i>
                  <span className="text-black ">232</span>
                </div>
              </div>

              <div className="text-black mt-6 flex justify-between items-center">
                <div className="flex justify-center items-start flex-col gap-2">
                  <h1 className="">Steven Smith</h1>
                  <h1 className="font-extrabold text-xl">EcoTrack</h1>
                </div>
                <Image src={logo} alt="this is image" width={50} />
              </div>

              <p className="text-md text-[#333333] mt-4 h-[3rem] w-full multiline-truncated">A mobile app that helps users track and reduce their carbo and best ins difjaklj kljlkjfklafklkldjlsfad ldfjlkdsahlsalh lkalkdsf lsdaf dflka llk sadlksdl kasfkl</p>

              <div className="w-full h-[10rem] mt-4">
                <Image src={image} className="w-full h-full rounded-xl" alt="post image" />
              </div>

              <div className="text-black flex justify-between items-center mt-4">
                <h1 className=" capitalize font-bold">senior level</h1>
                <button className="bg-black text-white cursor-pointer rounded-2xl flex justify-center items-center py-2 px-4">Details</button>
              </div>
            </div>
            <div className="card card_layout p-6">
              <div className="flex justify-between items-center">
                <div className="bg-[#FFE8F0] w-[8rem] h-[39px] rounded-xl text-center text-black flex justify-center items-center font-bold">
                  20 May, 2023
                </div>
                <div className="flex justify-center items-center gap-1">
                  <i className="ri-eye-line text-[#EE2B69] "></i>
                  <span className="text-black ">232</span>
                </div>
              </div>

              <div className="text-black mt-6 flex justify-between items-center">
                <div className="flex justify-center items-start flex-col gap-2">
                  <h1 className="">Steven Smith</h1>
                  <h1 className="font-extrabold text-xl">EcoTrack</h1>
                </div>
                <Image src={logo} alt="this is image" width={50} />
              </div>

              <p className="text-md text-[#333333] mt-4 h-[3rem] w-full multiline-truncated">A mobile app that helps users track and reduce their carbo and best ins difjaklj kljlkjfklafklkldjlsfad ldfjlkdsahlsalh lkalkdsf lsdaf dflka llk sadlksdl kasfkl</p>

              <div className="w-full h-[10rem] mt-4">
                <Image src={image} className="w-full h-full rounded-xl" alt="post image" />
              </div>

              <div className="text-black flex justify-between items-center mt-4">
                <h1 className=" capitalize font-bold">senior level</h1>
                <button className="bg-black text-white cursor-pointer rounded-2xl flex justify-center items-center py-2 px-4">Details</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </section>
  )
}

export default Test