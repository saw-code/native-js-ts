import React, {useState} from "react";

export type ManType = {
  name: string
  age: number
  lessons: Array<{ title: string }>
  address: {
    street: {
      title: string
    }
  }
}

type PropsType = {
  title: string
  man: ManType
}

export const ManComponent: React.FC<PropsType> = (props) => {
  const {title} = props
  const {name} = props.man

  const [message, setMessage] = useState<string>("hello")

  return <div>
    <h1>{title}</h1>
    <hr/>
    <div>
      {name}
    </div>
  </div>
}
