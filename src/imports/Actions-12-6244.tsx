function Helper() {
  return (
    <div className="content-stretch flex gap-[4px] items-start px-[16px] py-0 relative shrink-0 w-[326px]" data-name="helper">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454745] text-[12px] tracking-[0.12px] w-[282px]">
        <p className="leading-[22px]">You are charged once everyone pays their share</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#9fe870] relative rounded-[48px] shrink-0 w-full" data-name="button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[14px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#163300] text-[16px] text-nowrap tracking-[0.08px]">
            <p className="leading-[24px]">Pay your share</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonWithHelperText() {
  return (
    <div className="bg-[rgba(22,51,0,0.08)] content-stretch flex flex-col gap-[8px] h-[93px] items-center pb-[4px] pt-[8px] px-[4px] relative rounded-[32px] shrink-0 w-[326px]" data-name="button with helper text">
      <Helper />
      <Button />
    </div>
  );
}

export default function Actions() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="actions">
      <ButtonWithHelperText />
    </div>
  );
}