import { useSearchParams } from "react-router-dom";

export const Product = () => {
  const params = useSearchParams() 
  console.log(params)

  return (
    <div>
      Product

    </div>
  )
};