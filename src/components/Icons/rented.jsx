import * as React from "react"

export function SvgRented(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="currentColor"
      className="bi bi-bag-check"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10.854 8.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L7.5 10.793l2.646-2.647a.5.5 0 01.708 0"
      />
      <path d="M8 1a2.5 2.5 0 012.5 2.5V4h-5v-.5A2.5 2.5 0 018 1m3.5 3v-.5a3.5 3.5 0 10-7 0V4H1v10a2 2 0 002 2h10a2 2 0 002-2V4zM2 5h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1z" />
    </svg>
  )
}