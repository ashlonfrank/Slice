function Button() {
  return (
    <div className="bg-[#9fe870] relative rounded-[48px] shrink-0 w-full" data-name="button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[14px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#163300] text-[16px] text-nowrap tracking-[0.08px]">
            <p className="leading-[24px]">Continue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Actions() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="actions">
      <Button />
    </div>
  );
}