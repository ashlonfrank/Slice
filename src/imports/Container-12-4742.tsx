import svgPaths from "./svg-15z63mjdx1";

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
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#0e0f0c] text-[18px] text-center tracking-[-0.18px]">Step 1 of 3</p>
      <Button />
    </div>
  );
}

function Button1() {
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

function Actions() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 p-[24px] top-[661px] w-[374px]" data-name="actions">
      <Button1 />
    </div>
  );
}

function Radio() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="radio">
          <circle cx="12" cy="12" fill="var(--fill-0, white)" id="Ellipse 2" r="11.5" stroke="var(--stroke-0, #163300)" />
          <circle cx="12" cy="12" fill="var(--fill-0, #163300)" id="Ellipse 1" r="7" />
        </g>
      </svg>
    </div>
  );
}

function Radio1() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0" data-name="radio">
      <Radio />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[16px] text-nowrap tracking-[-0.08px]">
        <p className="leading-[24px]">I’ll cover the unpaid balance</p>
      </div>
    </div>
  );
}

function Radio2() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0" data-name="radio">
      <div className="relative shrink-0 size-[24px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(134, 134, 133, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" fill="var(--fill-0, white)" id="Ellipse 1" r="11.5" stroke="var(--stroke-0, #868685)" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[16px] text-nowrap tracking-[-0.08px]">
        <p className="leading-[24px]">Cancel the entire purchase</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Radio1 />
      <Radio2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0e0f0c] text-[14px] tracking-[0.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        If someone doesn’t pay in time
      </p>
      <Frame2 />
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Icons2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[302px]" data-name="Frame">
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40px] top-[569px] w-[302px]" data-name="Frame">
      <Frame />
    </div>
  );
}

function Button2() {
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

function Actions1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 p-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[661px] w-[374px]" data-name="actions">
      <Button2 />
    </div>
  );
}

function TableCells() {
  return (
    <div className="absolute content-stretch flex items-center left-[8px] p-[12px] top-0 w-[240px]" data-name="table cells">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#163300] text-[16px] text-nowrap tracking-[0.08px]">
        <p className="leading-[24px]">Who are splitting the total?</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute h-[48px] left-[8px] top-[8px] w-[310px]" data-name="header">
      <TableCells />
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
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[19.64%_17.14%_20.36%_17.86%] justify-center leading-[0] not-italic text-[#163300] text-[16px] text-center text-nowrap tracking-[0.08px]">
        <p className="leading-[24px]">JW</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[14px]" data-name="content">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0e0f0c] tracking-[0.175px] w-full">
        <p className="leading-[22px]">You</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#454745] tracking-[0.14px] w-full">
        <p className="leading-[22px]">{`ashlon@gmail.com `}</p>
      </div>
    </div>
  );
}

function TableCells1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 px-[8px] py-[16px] top-0 w-[294px]" data-name="table cells">
      <Avatar />
      <Content />
    </div>
  );
}

function TableCells2() {
  return <div className="absolute content-stretch flex gap-[12px] items-center left-[270px] px-[8px] py-[16px] top-0 w-[16px]" data-name="table cells" />;
}

function Field() {
  return (
    <div className="absolute bg-white border border-[#868685] border-solid h-[32px] left-[200px] rounded-[10px] top-[22px] w-[86px]" data-name="field">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[11px] text-[#868685] text-[14px] text-center text-nowrap top-[15px] tracking-[0.25px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">$</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[200px] top-[22px]">
      <Field />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[224px] text-[#404040] text-[14px] top-[38px] tracking-[0.25px] translate-y-[-50%] w-[54px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">1800.00</p>
      </div>
    </div>
  );
}

function Cells() {
  return (
    <div className="absolute h-[76px] left-[8px] rounded-[10px] top-[8px] w-[294px]" data-name="cells">
      <TableCells1 />
      <TableCells2 />
      <Group />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="avatar">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(14, 15, 12, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g id="Ellipse 1">
            <circle cx="20" cy="20" fill="var(--fill-0, white)" r="20" />
            <circle cx="20" cy="20" r="19.25" stroke="var(--stroke-0, #0E0F0C)" strokeOpacity="0.121569" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[14px]" data-name="content">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0e0f0c] tracking-[0.175px] w-full">
        <p className="leading-[22px]">Add members</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6a6c6a] tracking-[0.14px] w-full">
        <p className="leading-[22px]">You need their email address</p>
      </div>
    </div>
  );
}

function TableCells3() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[-1px] px-[8px] py-[16px] top-[-1px] w-[270px]" data-name="table cells">
      <Avatar1 />
      <Content1 />
    </div>
  );
}

function Icons3() {
  return (
    <div className="absolute aspect-[44/44] bottom-[calc(34.4%-1px)] left-[calc(50%-118.57px)] rounded-[48px] top-[calc(35.53%-1px)] translate-x-[-50%]" data-name="icons">
      <div className="absolute inset-[14.58%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(22, 51, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1905 16.1905">
            <path d={svgPaths.p13a0e00} fill="var(--fill-0, #163300)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TableCells4() {
  return <div className="absolute content-stretch flex gap-[12px] items-center left-[269px] px-[8px] py-[16px] top-[-1px] w-[16px]" data-name="table cells" />;
}

function CellsHover() {
  return (
    <div className="absolute bg-[rgba(22,51,0,0.03)] border border-[rgba(14,15,12,0.12)] border-dashed h-[76px] left-[8px] rounded-[16px] top-[92px] w-[294px]" data-name="cells - hover">
      <TableCells3 />
      <Icons3 />
      <TableCells4 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white h-[256px] left-[8px] rounded-bl-[16px] rounded-br-[16px] top-[56px] w-[310px]" data-name="body">
      <Cells />
      <CellsHover />
    </div>
  );
}

function Bank() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="bank">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454745] text-[14px] text-nowrap tracking-[0.14px]">
        <p className="leading-[22px]">Total purchase amount</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-0 px-[16px] py-0 top-[240px] w-[326px]" data-name="$">
      <Bank />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[30px] text-nowrap tracking-[-0.75px]">
        <p className="leading-[34px]">$1800.00</p>
      </div>
    </div>
  );
}

function Example() {
  return (
    <div className="absolute bg-[rgba(22,51,0,0.08)] h-[320px] left-[24px] rounded-[24px] top-[179px] w-[326px]" data-name="example">
      <Header1 />
      <Body />
      <Component />
    </div>
  );
}

function MobileModal() {
  return (
    <div className="absolute bg-white bottom-[24px] h-[761px] left-1/2 overflow-clip rounded-[32px] translate-x-[-50%] w-[374px]" data-name="mobile modal">
      <Header />
      <Actions />
      <Frame1 />
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[36px] left-[187px] text-[#0e0f0c] text-[28px] text-center top-[88px] translate-x-[-50%] w-[326px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add your group members
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[187.5px] not-italic text-[#0e0f0c] text-[18px] text-center top-[132px] tracking-[-0.18px] translate-x-[-50%] w-[325px]">Enter names, email and phone number</p>
      <Actions1 />
      <Example />
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