import React, { useEffect, useState } from "react";

export const LoginContext = React.createContext();
export const SettingsContext = React.createContext();

function Settings(props) {
  let [numOfItems, setNum] = useState(3);
  let[display,setDisplay]=useState(false)

const handleChangeNum=(value)=>{
    setNum(value)
}
  useEffect(()=>{
  let data=JSON.parse(localStorage.getItem('configStting')) 
  if(data){
    handleChangeNum(data.numOfItems)
    setDisplay(data.display)
  }
  })
   console.log(numOfItems)
  return (
    <>
      <SettingsContext.Provider value={{numOfItems,handleChangeNum,setDisplay}}>
        {props.children}
      </SettingsContext.Provider>
    </>
  );
}

export default Settings;