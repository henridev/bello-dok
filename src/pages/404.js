import React from "react"
import { Link } from "gatsby"
import Layout from "../components/global/Layout"

export default function Page404() {
  return (
    <Layout title="404">
      <div className="md:flex">
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center ">
          <div className="max-w-sm m-8">
            <div className="text-black text-5xl md:text-15xl font-black">
              404
            </div>
            <div className="w-16 h-1 bg-purple-light my-3 md:my-6"></div>
            <p className="text-grey-darker text-2xl md:text-3xl font-light mb-8 leading-normal">
              Sorry, the page you are looking for could not be found.
            </p>
            <Link to="/">
              <button className="bg-transparent text-grey-darkest font-bold uppercase tracking-wide py-3 px-6 border-2 border-grey-light hover:border-grey rounded-lg">
                Go Home
              </button>
            </Link>
          </div>
        </div>
        <div className="relative pb-full md:flex md:pb-0 md:min-h-screen w-full md:w-1/2">
          <div className="absolute pin bg-cover bg-no-repeat md:bg-left lg:bg-center"></div>
        </div>
      </div>
    </Layout>
  )
}
