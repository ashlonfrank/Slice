import svgPaths from "./svg-gchjuapso";

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
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#0e0f0c] text-[18px] text-center tracking-[-0.18px]">Step 3 of 3</p>
      <Button />
    </div>
  );
}

function Bank() {
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
    <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[281px] w-[152px]" data-name="$">
      <Bank />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[30px] text-nowrap tracking-[-0.75px]">
        <p className="leading-[34px]">$450.00</p>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="absolute h-0 left-[24px] top-[369px] w-[326px]" data-name="divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 0">
        <g id="divider"></g>
      </svg>
    </div>
  );
}

function Icons2() {
  return (
    <div className="absolute aspect-[44/44] left-0 right-0 rounded-[48px] top-1/2 translate-y-[-50%]" data-name="icons">
      <div className="absolute aspect-[20.66/15] bottom-[24.48%] left-1/2 top-[28.65%] translate-x-[-50%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.495 11.25">
            <path d={svgPaths.p12070380} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icons">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(47, 87, 17, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #2F5711)" id="Ellipse 1" r="12" />
        </svg>
      </div>
      <Icons2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] not-italic relative shrink-0 w-[181px]" data-name="content">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0e0f0c] text-[16px] tracking-[0.08px] w-full">
        <p className="leading-[24px]">Payment successful</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#454745] text-[14px] tracking-[0.14px] w-full">
        <p className="leading-[22px]">You paid $450.</p>
      </div>
    </div>
  );
}

function StatePositive() {
  return (
    <div className="absolute bg-[rgba(22,51,0,0.08)] content-stretch flex gap-[16px] items-center left-[24px] p-[16px] rounded-[32px] top-[179px] w-[326px]" data-name="state=positive">
      <Icons3 />
      <Content />
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

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="content">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0e0f0c] text-[16px] tracking-[0.08px] w-full">
        <p className="leading-[24px]">Nili</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#454745] text-[14px] tracking-[0.14px] w-full">
        <p className="leading-[22px]">{`nili@gmail.com `}</p>
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
    <div className="bg-[rgba(255,255,255,0.03)] content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="list item - icon button">
      <Avatar />
      <Content1 />
      <Group />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#2563eb] text-[14px] top-0 tracking-[0.25px] w-[232px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        https://pay.group/nili/1350
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_12.5%_66.67%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #454745)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_62.5%_37.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #454745)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_12.5%_8.33%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #454745)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[56.29%_35.75%_27.12%_35.79%]" data-name="Vector">
        <div className="absolute inset-[-25.13%_-14.64%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.88688 3.98688">
            <path d={svgPaths.p3e007700} id="Vector" stroke="var(--stroke-0, #454745)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.13%_35.79%_56.29%_35.79%]" data-name="Vector">
        <div className="absolute inset-[-25.13%_-14.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.88022 3.98688">
            <path d={svgPaths.p309e7540} id="Vector" stroke="var(--stroke-0, #454745)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[6px] px-[6px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.33%_8.33%_8.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
            <path d={svgPaths.p4611e00} id="Vector" stroke="var(--stroke-0, #454745)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_33.33%_33.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
            <path d={svgPaths.p26970a80} id="Vector" stroke="var(--stroke-0, #454745)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[6px] px-[6px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] h-[52px] items-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-[326px]" data-name="Container">
      <Container />
      <Button1 />
      <Button2 />
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

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="content">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0e0f0c] text-[16px] tracking-[0.08px] w-full">
        <p className="leading-[24px]">Karen</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#454745] text-[14px] tracking-[0.14px] w-full">
        <p className="leading-[22px]">{`karen@gmail.com `}</p>
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
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center ml-[20px] mt-[16px] relative text-[#404040] text-[14px] tracking-[0.25px] translate-y-[-50%] w-[45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">450.00</p>
      </div>
    </div>
  );
}

function ListItemIconButton1() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="list item - icon button">
      <Avatar1 />
      <Content2 />
      <Group1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#2563eb] text-[14px] top-0 tracking-[0.25px] w-[232px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        https://pay.group/af-nili-karen/1350
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_12.5%_66.67%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #454745)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_62.5%_37.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #454745)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_12.5%_8.33%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #454745)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[56.29%_35.75%_27.12%_35.79%]" data-name="Vector">
        <div className="absolute inset-[-25.13%_-14.64%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.88688 3.98688">
            <path d={svgPaths.p3e007700} id="Vector" stroke="var(--stroke-0, #454745)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.13%_35.79%_56.29%_35.79%]" data-name="Vector">
        <div className="absolute inset-[-25.13%_-14.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.88022 3.98688">
            <path d={svgPaths.p309e7540} id="Vector" stroke="var(--stroke-0, #454745)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[6px] px-[6px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.33%_8.33%_8.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
            <path d={svgPaths.p4611e00} id="Vector" stroke="var(--stroke-0, #454745)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_33.33%_33.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
            <path d={svgPaths.p26970a80} id="Vector" stroke="var(--stroke-0, #454745)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[6px] px-[6px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] h-[52px] items-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-[326px]" data-name="Container">
      <Container2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-end left-[24px] top-[395px] w-[326px]">
      <ListItemIconButton />
      <Container1 />
      <ListItemIconButton1 />
      <Container3 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#9fe870] relative rounded-[48px] shrink-0 w-full" data-name="button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[14px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#163300] text-[16px] text-nowrap tracking-[0.08px]">
            <p className="leading-[24px]">Done</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 p-[24px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[661px] w-[374px]" data-name="actions">
      <Button5 />
    </div>
  );
}

function Badges() {
  return (
    <div className="absolute bg-[#ecf9f9] content-stretch flex gap-[8px] h-[24px] items-center justify-end left-[161px] px-[8px] py-[4px] rounded-[10px] top-[308px]" data-name="badges">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0b4c72] text-[12px] text-nowrap tracking-[0.15px]">
        <p className="leading-[22px]">Paid</p>
      </div>
    </div>
  );
}

function MobileModal() {
  return (
    <div className="absolute bg-white bottom-[24px] h-[761px] left-1/2 overflow-clip rounded-[32px] translate-x-[-50%] w-[374px]" data-name="mobile modal">
      <Header />
      <Component />
      <Divider />
      <StatePositive />
      <Frame1 />
      <Actions />
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[36px] left-[187px] text-[#0e0f0c] text-[28px] text-center top-[88px] translate-x-[-50%] w-[326px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Invite the group to pay
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[187px] not-italic text-[#0e0f0c] text-[18px] text-center top-[132px] tracking-[-0.18px] translate-x-[-50%] w-[326px]">We send a payment link to the group</p>
      <Badges />
    </div>
  );
}

function Divider1() {
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

function Bank1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-0 mt-0 relative" data-name="bank">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454745] text-[14px] text-nowrap tracking-[0.14px]">
        <p className="leading-[22px]">Invite group members with payment links</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Bank1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[32px] top-[412px] w-[326px]" data-name="Frame">
      <Divider1 />
      <Group2 />
    </div>
  );
}

function Badges1() {
  return (
    <div className="absolute bg-[#ddf7d2] content-stretch flex gap-[8px] h-[24px] items-center left-[419px] px-[8px] py-[4px] rounded-[10px] top-[606px]" data-name="badges">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#454745] text-[14px] text-nowrap tracking-[0.175px]">
        <p className="leading-[22px]">Paid</p>
      </div>
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

export default function MobileModal1() {
  return (
    <div className="bg-[rgba(0,0,0,0.25)] relative size-full" data-name="mobile modal">
      <StatusBarPro />
      <MobileModal />
      <Frame />
      <Badges1 />
      <HomeBarPro />
    </div>
  );
}