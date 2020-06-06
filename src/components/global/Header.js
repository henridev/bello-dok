import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

export default function Header() {
  const [isExpanded, toggleExpansion] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <nav className="font-sans flex items-center justify-between flex-wrap bg-white p-6">
      <div className="flex items-center flex-shrink-0   mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 79.73 79.75"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="cls-1"
                d="M36,.09A40.17,40.17,0,0,0,.22,34.81,61.58,61.58,0,0,0,.2,45a49.16,49.16,0,0,0,1.43,6.48,40.18,40.18,0,0,0,32,27.92,57.84,57.84,0,0,0,10.45.24A40.55,40.55,0,0,0,64,71.72,49.8,49.8,0,0,0,71.71,64a40.59,40.59,0,0,0,7.88-19.9,57.8,57.8,0,0,0-.24-10.45A40.37,40.37,0,0,0,68.07,11.61,39.69,39.69,0,0,0,45.45.3,64.76,64.76,0,0,0,36,.09ZM36.23,21s-.32,1-.72,2.08a14,14,0,0,0-.62,2s.5-.22,1-.48a9.53,9.53,0,0,1,1-.48s.08,2.34.08,5.2v5.2l9.89,0,9.87-.05V31.05L48.35,31l-8.44,0,0-4.29,0-4.27,9.89-.05,9.87,0v2.24a14.86,14.86,0,0,1-.08,2.24,13.67,13.67,0,0,1-1.31-1l-1.21-1H42.79v3.36H57.21l1.26,1.07,1.28,1.06v6.1l0,6.09L61,47.28,62.12,52l-.81,2.54-.82,2.53H56.76A25.53,25.53,0,0,1,53,56.92c0-.06.2-.62.42-1.24l.42-1.14,1.24-.27L56.36,54l.48-1.09.48-1.09L56,50.28a15.42,15.42,0,0,0-1.47-1.55c-.06,0-1,1.28-2.13,2.85l-2,2.85-.18,1.25c-.1.67-.18,1.26-.18,1.31s-1.72.06-3.85.06H42.28l.1-.43c.06-.26.21-.82.33-1.26l.24-.84,1-.27a3.69,3.69,0,0,0,1.25-.54c.31-.35,5.57-9.65,5.51-9.73s-1.64.72-3.57,1.66l-3.51,1.73-3.44.08-3.42.08-1.25,1.76a17.16,17.16,0,0,0-1.25,2,12.08,12.08,0,0,0,1,1.73,8.89,8.89,0,0,1,1,1.77A10.74,10.74,0,0,1,36,56l-.17,1h-4c-2.94,0-4,0-4-.19a9.3,9.3,0,0,1,.26-1.12c.26-.86.34-1,1-1.33,1.47-.75,1.44-.51.38-3.17a21.12,21.12,0,0,0-1-2.35s-.68.85-1.44,1.87l-2.19,3-.85,1.14L24.38,56l.32,1.07H21.1c-2,0-3.59,0-3.59,0s.21-.67.47-1.45c.45-1.38.49-1.44,1.17-1.79s.89-.66,2.27-2.84A29.7,29.7,0,0,0,23,48.3a24,24,0,0,0-1.24-2.94,2.86,2.86,0,0,0-1.24.43c-.6.29-1.13.46-1.16.38s.73-3,1.71-6.56S22.79,33.1,22.79,33A6.7,6.7,0,0,0,22,31.6l-.8-1.17.36-.4.48-.56a3.18,3.18,0,0,1,1.29.61,3.33,3.33,0,0,0,1.41.64A8.84,8.84,0,0,0,25.9,29.6l.94-1H19.66l-.27.56c-.24.51-.32.56-1,.56s-.72-.05-.64-.29.16-.59.25-1,.21-.85.26-1,.46-.29,4.24-.32l4.18-.05-.53-.38c-.51-.39-.51-.39-2.13-.16-.9.13-1.71.22-1.84.22s-.42-.56-.75-1.65l-.51-1.63h4.56l.14-.53.16-.51,3.34-.08,3.36-.08,1.68-.67C35.72,21,36.23,20.81,36.23,21Z"
              />
            </g>
          </g>
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          {data.site.siteMetadata.title}
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 border rounded  border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-base text-sm lg:flex-grow font-semibold">
          <Link
            to={`/`}
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-red-dark mr-4"
          >
            home
          </Link>
          <Link
            to={`/promoties`}
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-red-dark mr-4"
          >
            promoties
          </Link>
          <Link
            to={`/vacatures`}
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-red-dark mr-4"
          >
            vacatures
          </Link>
          <Link
            to={`/shop`}
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-red-dark"
          >
            shop
          </Link>
        </div>
        <div>
          <a
            className="m-3"
            target="_blank"
            rel="nofollow noopener"
            href="https://www.facebook.com/delhaizedoknoord"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <Link
            to="/contact"
            className="inline-block text-base font-semibold px-4 py-2 leading-none border rounded text-red-dark border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
