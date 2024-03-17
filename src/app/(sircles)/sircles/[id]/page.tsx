export default function SirclesDetails(
    {params : {id},} : {params : {id : string};}
    ){
    return <div className="relative w-[390px] h-[42px] rounded-[99px] overflow-hidden border border-solid border-[#3d3d3d]">
      <img
        className="absolute w-[24px] h-[24px] top-[9px] left-[353px]"
        alt="Mingcute search line"
        src="mingcute-search-line.svg"
      />
    <p className="absolute w-[241px] top-[12px] left-[12px] [font-family:'LINE_Seed_Sans-Regular',Helvetica] font-normal text-[#9e9ea2] text-[14px] tracking-[0] leading-[16px]">
      Search Sircles, Interests and more...
    </p>
  </div>
}