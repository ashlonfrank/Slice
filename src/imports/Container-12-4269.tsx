import svgPaths from "./svg-txfc4ty50g";

function Icons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icons">
          <path d={svgPaths.pe860e00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icons">
      <div className="absolute inset-[0_-17.19%_-17.19%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 18.75">
          <g id="icons">
            <path d={svgPaths.pa866080} fill="var(--fill-0, #0E0F0C)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(22,51,0,0.08)] content-stretch flex items-center justify-center p-[8px] relative rounded-[48px] shrink-0 size-[24px]" data-name="button">
      <Icons1 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[72px] items-start justify-center left-0 p-[24px] top-0 w-[374px]" data-name="header">
      <Icons />
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#0e0f0c] text-[18px] text-center tracking-[-0.18px]">Step 2 of 3</p>
      <Button />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="divider">
      <div className="absolute bottom-full left-0 right-0 top-0">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(14, 15, 12, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <path d="M0 0.5H326" id="Vector 2" stroke="var(--stroke-0, #0E0F0C)" strokeOpacity="0.121569" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="avatar">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(22, 51, 0, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #163300)" fillOpacity="0.0784314" id="Ellipse 1" r="20" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[7.14%_4.64%_7.86%_7.86%] justify-center leading-[0] not-italic text-[#163300] text-[24px] text-center text-nowrap tracking-[-0.6px]">
        <p className="leading-[34px]">NN</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="content">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[16px] tracking-[0.08px] w-full">
        <p className="leading-[24px]">Nili</p>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex gap-[8px] h-[32px] items-center ml-0 mt-0 pl-[8px] pr-[16px] py-[12px] relative rounded-[10px] w-[73px]" data-name="field">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#868685] text-[14px] text-center text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">$</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Field />
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center ml-[20px] mt-[16px] relative text-[#404040] text-[14px] tracking-[0.25px] translate-y-[-50%] w-[45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">450.00</p>
      </div>
    </div>
  );
}

function ListItemIconButton() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.03)] content-stretch flex gap-[16px] items-center ml-0 mt-[30px] relative w-[326px]" data-name="list item - icon button">
      <Avatar />
      <Content />
      <Group />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="avatar">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(22, 51, 0, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #163300)" fillOpacity="0.0784314" id="Ellipse 1" r="20" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[7.14%_12.14%_7.86%_12.86%] justify-center leading-[0] not-italic text-[#163300] text-[24px] text-center text-nowrap tracking-[-0.6px]">
        <p className="leading-[34px]">KL</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="content">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[16px] tracking-[0.08px] w-full">
        <p className="leading-[24px]">Karen</p>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex gap-[8px] h-[32px] items-center ml-0 mt-0 pl-[8px] pr-[16px] py-[12px] relative rounded-[10px] w-[73px]" data-name="field">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#868685] text-[14px] text-center text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">$</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Field1 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center ml-[20px] mt-[16px] relative text-[#404040] text-[14px] text-nowrap tracking-[0.25px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">450.00</p>
      </div>
    </div>
  );
}

function ListItemIconButton1() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.03)] content-stretch flex gap-[16px] items-center ml-0 mt-[78px] relative w-[326px]" data-name="list item - icon button">
      <Avatar1 />
      <Content1 />
      <Group1 />
    </div>
  );
}

function Bank() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="bank">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454745] text-[14px] text-nowrap tracking-[0.14px]">
        <p className="leading-[22px]">{`Other's share`}</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <ListItemIconButton />
      <ListItemIconButton1 />
      <Bank />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] top-[251px] w-[326px]" data-name="Frame">
      <Divider />
      <Group2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#0e0f0c] text-[22px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add payment details
      </p>
    </div>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icons">
          <g id="Vector">
            <path d={svgPaths.p252fad00} fill="var(--fill-0, #0E0F0C)" />
            <path d={svgPaths.p1d311500} fill="var(--fill-0, #0E0F0C)" />
            <path clipRule="evenodd" d={svgPaths.p1b0e4880} fill="var(--fill-0, #0E0F0C)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame2 />
      <Icons2 />
    </div>
  );
}

function Field2() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#868685] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#868685] text-[16px] text-center text-nowrap tracking-[-0.08px]">
            <p className="leading-[24px]">Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputFields() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input fields">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[14px] tracking-[0.175px] w-full">
        <p className="leading-[22px]">Name on card</p>
      </div>
      <Field2 />
    </div>
  );
}

function Field3() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#868685] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#868685] text-[16px] text-center text-nowrap tracking-[-0.08px]">
            <p className="leading-[24px]">Value</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputFields1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input fields">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[14px] tracking-[0.175px] w-full">
        <p className="leading-[22px]">Card number</p>
      </div>
      <Field3 />
    </div>
  );
}

function Field4() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#868685] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#868685] text-[16px] text-center text-nowrap tracking-[-0.08px]">
            <p className="leading-[24px]">Value</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputFields2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input fields">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[14px] tracking-[0.175px] w-full">
        <p className="leading-[22px]">Expiry</p>
      </div>
      <Field4 />
    </div>
  );
}

function Field5() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#868685] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#868685] text-[16px] text-center text-nowrap tracking-[-0.08px]">
            <p className="leading-[24px]">Value</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputFields3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input fields">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[14px] tracking-[0.175px] w-full">
        <p className="leading-[22px]">CVV</p>
      </div>
      <Field5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <InputFields2 />
      <InputFields3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] top-[417px] w-[326px]" data-name="Frame">
      <Frame3 />
      <InputFields />
      <InputFields1 />
      <Frame4 />
    </div>
  );
}

function Helper() {
  return (
    <div className="content-stretch flex gap-[4px] items-start px-[16px] py-0 relative shrink-0 w-[326px]" data-name="helper">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454745] text-[12px] tracking-[0.12px] w-[282px]">
        <p className="leading-[22px]">You are charged once everyone pays their share</p>
      </div>
    </div>
  );
}

function Button1() {
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
      <Button1 />
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[141px] items-start left-0 p-[24px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[620px] w-[374px]" data-name="actions">
      <ButtonWithHelperText />
    </div>
  );
}

function Bank1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="bank">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454745] text-[14px] text-nowrap tracking-[0.14px]">
        <p className="leading-[22px]">Your share</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pl-[24px] pr-[16px] py-0 top-[179px] w-[374px]" data-name="$">
      <Bank1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[30px] text-nowrap tracking-[-0.75px]">
        <p className="leading-[34px]">$450.00</p>
      </div>
    </div>
  );
}

function MobileModal() {
  return (
    <div className="absolute bg-white bottom-[24px] h-[761px] left-1/2 overflow-clip rounded-[32px] translate-x-[-50%] w-[374px]" data-name="mobile modal">
      <Header />
      <Frame />
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[36px] left-[187px] text-[#0e0f0c] text-[28px] text-center top-[88px] translate-x-[-50%] w-[326px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pay only your share
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[187px] not-italic text-[#0e0f0c] text-[18px] text-center top-[132px] tracking-[-0.18px] translate-x-[-50%] w-[326px]">We’ll hold the order while others pay</p>
      <Frame1 />
      <Actions />
      <Component />
    </div>
  );
}

function HomeBarPro() {
  return (
    <div className="absolute bottom-0 h-[34px] left-0 right-[-0.77%]" data-name="Home bar/Pro">
      <div className="absolute bg-black bottom-[9px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[139px]" data-name="Home Indicator" />
    </div>
  );
}

function StatusPro() {
  return (
    <div className="absolute h-[13.667px] right-[32.67px] top-1/2 translate-y-[-50%] w-[78.327px]" data-name="Status/Pro">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78.3267 13.6667">
        <g id="Status/Pro">
          <g id="Cellular">
            <path d={svgPaths.p3d840500} fill="var(--fill-0, white)" />
            <path d={svgPaths.pd096b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p24ead80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2a834780} fill="var(--fill-0, white)" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p2c3a3700} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
          <g id="Battery/Percentage">
            <rect fill="var(--fill-0, white)" height="9" id="percent" rx="2.66667" width="10.3333" x="52.9933" y="2.33341" />
            <g id="battery">
              <path clipRule="evenodd" d={svgPaths.pf7d2800} fill="var(--fill-0, white)" fillOpacity="0.4" fillRule="evenodd" />
              <path d={svgPaths.p25048300} fill="var(--fill-0, white)" fillOpacity="0.4" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusBarPro() {
  return (
    <div className="absolute h-[59px] left-0 top-0 w-[390px]" data-name="Status Bar/Pro">
      <StatusPro />
      <p className="absolute font-['SF_Pro_Text:Bold',sans-serif] leading-[normal] left-[72px] not-italic text-[17px] text-center text-white top-[calc(50%-10.1px)] tracking-[-0.4px] translate-x-[-50%] w-[54px]">9:41</p>
    </div>
  );
}

function MobileModal1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.25)] h-[844px] left-0 overflow-clip top-[34px] w-[390px]" data-name="mobile modal">
      <HomeBarPro />
      <StatusBarPro />
      <MobileModal />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="container">
      <div className="absolute flex flex-col font-['Circular_Std:Bold',sans-serif] justify-center leading-[0] left-0 not-italic text-[#6f8197] text-[14px] text-nowrap top-[9px] tracking-[-0.028px] translate-y-[-50%] uppercase">
        <p className="leading-[normal]">mobile</p>
      </div>
      <MobileModal1 />
    </div>
  );
}