type userProps = {
  id: number;
  name: string;
  avatar: string;
  login: string;
  bio: string;
  children?: React.ReactNode;
};

const CardUser = (props: userProps) => {
  const { name, avatar, login, bio, children,} = props;

  return (
    <div className=" h-auto flex flex-col bg-[#0D1117] rounded-[8px] border-[1px] border-[#21262D] p-4 gap-2 xl:w-[100%] max-md:w-[90vw]">
      <div className="w-[100%] flex flex-row justify-between gap-0.5">
        <div className="w-[auto] flex flex-row items-center gap-2">
          <img src={avatar} alt="" className="w-[32px] h-[32] rounded-2xl" />
          <div className="w-[100%] flex xl:flex-row xl:gap-2  max-md:flex-col">
            <p className="font-semibold text-[#58A6FF] text-[13px]">{name}</p>
            <span className="text-[#8B949E] text-[13px]">{login}</span>
          </div>
        </div>

        {children}
       
      </div>
      <div className="w-[100%] text-[13px] text=[#C9D1D9] font-normal">
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default CardUser;
