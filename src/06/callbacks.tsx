import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {

  const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
    alert(event.currentTarget.name)
  }

  const saveUser = () => {
    alert("User saved")
  }

  const onNameChanged = () => {
    console.log("Name changed")
  }

  const focusLostHandler = () => {
    console.log("Focus lost")
  }

  const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("Age changed: " + event.currentTarget.value)
  }

  return (
    <div>
      <textarea onChange={onNameChanged} onBlur={focusLostHandler}>DimOk</textarea>

      <input onChange={onAgeChanged} type={"number"}/>

      <button name="delete" onClick={deleteUser}>X</button>
      <button name="save" onClick={deleteUser}>X</button>
      <button onClick={saveUser}>save</button>
      <button onClick={onNameChanged}>change name</button>
    </div>
  )
}