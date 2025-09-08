import Summertext from '../parts/Summertext'

export default function Summersales(){
  return(
    <div className="flex bg-primary space-x-4">
      <div className=" pl-4 md:pl-16 lg:pl-32">
      <Summertext/>
      </div>
      <div className="summersales rounded-xl flex-1 "></div>
      
    </div>
  )
}