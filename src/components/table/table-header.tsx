import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<'th'>{

}

export function TableHeader({...rest}: TableHeaderProps){
  return(
    <th className='py-3 px-4 font-semibold text-left'{...rest}></th>
  )
}