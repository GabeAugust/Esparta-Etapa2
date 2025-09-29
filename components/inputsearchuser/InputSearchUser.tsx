'use client'


type InputSearchUserProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const InputSearchUser = (props: InputSearchUserProps) => {
  const {value, onChange} = props

  return(
    <div className="relative xl:w-[786px] max-md:w-[100vw] h-[120px] py-[32px] flex justify-center">
      <input
        placeholder="Buscar usuários..."
        className="xl:w-[658px] max-md:w-[80vw] h-[40px] py-2 px-4 bg-[#0D1117] border-1 border-[#30363D] mt-6 focus:outline-none rounded-md font-normal font-noto text-[14px]"
        value ={value}
        onChange={onChange}
      ></input>
      <img src="../../assests/search-normal.svg" alt="Search" className="absolute xl:right-20 xl:top-16 max-md:right-12 max-md:top-16" />
    </div>
  )
  
}
  
export default InputSearchUser; 

