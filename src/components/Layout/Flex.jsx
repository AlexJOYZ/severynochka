import '../../styles/App.css'


export const Flex = ({children,className=''}) => {
  return (
    <div className={`grid ${className}`}>
      {children}
    </div>
  )
};