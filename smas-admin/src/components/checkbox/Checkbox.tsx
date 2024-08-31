import React from 'react'

interface CheckboxProps {
  flag: boolean;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <div>
        {
            props.flag ? (
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          style={{ fill: "#40C057" }}
        >
          <path d="M 3 3 L 3 21 L 21 21 L 21 13 L 21 6.4140625 L 11 16.414062 L 6.2929688 11.707031 L 7.7070312 10.292969 L 11 13.585938 L 21 3.5859375 L 21 3 L 3 3 z"></path>
        </svg>
      ) : (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 122.879 122.879"
          enableBackground="new 0 0 122.879 122.879"
          xmlSpace="preserve"
        >
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#FF4141"
              d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
            />
          </g>
        </svg>)
        }
        </div>
  )
}

export default Checkbox
