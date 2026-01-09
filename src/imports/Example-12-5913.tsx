import svgPaths from "./svg-b0oek49la7";

function TableCells() {
  return (
    <div className="absolute content-stretch flex items-center left-[8px] p-[12px] top-0 w-[240px]" data-name="table cells">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#163300] text-[16px] text-nowrap tracking-[0.08px]">
        <p className="leading-[24px]">Who are splitting the total?</p>
      </div>
    </div>
  );
}

function Header() {
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

function Icons() {
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
      <Icons />
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

export default function Example() {
  return (
    <div className="bg-[rgba(22,51,0,0.08)] relative rounded-[24px] size-full" data-name="example">
      <Header />
      <Body />
      <Component />
    </div>
  );
}