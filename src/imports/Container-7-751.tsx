import svgPaths from "./svg-b29ju5kyai";
import imgImage40 from "figma:asset/6fd74c512cc40313f7b10819f1bce7b1526bfa2e.png";
import imgImage41 from "figma:asset/98cbc1e12cfefb4eec1566f2fb26877134f4d066.png";

function Icons() {
  return (
    <div className="absolute left-[24px] size-[24px] top-[24px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icons">
          <g id="Vector">
            <path d={svgPaths.p1db21880} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.pf605180} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
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
    <div className="absolute bg-[rgba(22,51,0,0.08)] content-stretch flex items-center justify-center left-[326px] p-[8px] rounded-[48px] size-[24px] top-[24px]" data-name="button">
      <Icons1 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[72px] left-0 top-0 w-[374px]" data-name="header">
      <Icons />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[187px] not-italic text-[#0e0f0c] text-[18px] text-center top-[24px] tracking-[-0.18px] translate-x-[-50%] w-[278px]">Pay with Slice</p>
      <Button />
    </div>
  );
}

function ListItemNav() {
  return (
    <div className="absolute bg-white h-[29px] left-0 top-[18px] w-[326px]" data-name="list item - nav">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#0e0f0c] text-[16px] text-nowrap top-[17px] tracking-[0.08px] translate-y-[-50%]">
        <ol className="list-decimal" start="1">
          <li className="ms-[24px]">
            <span className="leading-[24px]">Everyone pays their own share</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[284px] left-[24px] top-[331px] w-[326px]">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[3px] text-[#0e0f0c] text-[14px] text-nowrap top-[-10px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        What’s next:
      </p>
      <ListItemNav />
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#0e0f0c] text-[16px] top-[136px] tracking-[0.08px] translate-y-[-50%] w-[326px]">
        <ol className="list-decimal" start="3">
          <li className="ms-[24px]">
            <span className="leading-[24px]">Track payments or cover a missing share from the dashboard - linked in your email</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#9fe870] content-stretch flex items-center justify-center left-[24px] px-[8px] py-[14px] rounded-[48px] top-[24px] w-[326px]" data-name="button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#163300] text-[16px] text-nowrap tracking-[0.08px]">
        <p className="leading-[24px]">Done</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute bg-white h-[100px] left-0 top-[661px] w-[374px]" data-name="actions">
      <Button1 />
    </div>
  );
}

function Divider() {
  return (
    <div className="absolute h-0 left-0 top-0 w-[326px]" data-name="divider">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
          <g id="divider">
            <path d="M0 0.5H326" id="Vector 2" stroke="var(--stroke-0, #0E0F0C)" strokeOpacity="0.121569" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[38px] left-0 top-0 w-[302px]">
      <div className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#0e0f0c] text-[12px] text-nowrap top-0 tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Purchase is complete only once everyone pays.</p>
        <p>We hold the order for 60 minutes.</p>
      </div>
    </div>
  );
}

function Icons2() {
  return (
    <div className="absolute left-[310px] size-[16px] top-0" data-name="icons">
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
    <div className="absolute h-[38px] left-0 top-[8px] w-[326px]">
      <Frame3 />
      <Icons2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[326px]" data-name="Frame">
      <Divider />
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[46px] left-[25px] top-[615px] w-[326px]" data-name="Frame">
      <Frame />
    </div>
  );
}

function MobileModal() {
  return (
    <div className="absolute bg-white h-[761px] left-[8px] overflow-clip rounded-[32px] top-[59px] w-[374px]" data-name="mobile modal">
      <Header />
      <Frame2 />
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[36px] left-[187px] text-[#0e0f0c] text-[28px] text-center text-nowrap top-[261px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        You are all set!
      </p>
      <Actions />
      <div className="absolute left-[107px] rounded-[214.5px] size-[160px] top-[88px]" data-name="image 40">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[214.5px] size-full" src={imgImage40} />
      </div>
      <Frame1 />
    </div>
  );
}

function HomeBarPro() {
  return (
    <div className="absolute h-[34px] left-0 top-[810px] w-[393px]" data-name="Home bar/Pro">
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

function ListItemNav1() {
  return (
    <div className="absolute bg-white h-[39px] left-[32px] top-[481px] w-[326px]" data-name="list item - nav">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#0e0f0c] text-[16px] text-nowrap top-[17px] tracking-[0.08px] translate-y-[-50%]">
        <ol className="list-decimal" start="2">
          <li className="ms-[24px]">
            <span className="leading-[24px]">No one is charged until everyone pays</span>
          </li>
        </ol>
      </div>
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
      <div className="absolute h-[144px] left-[120px] top-[187px] w-[150px]" data-name="image 41">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[162.28%] left-[-64.94%] max-w-none top-[-30.74%] w-[234.15%]" src={imgImage41} />
        </div>
      </div>
      <ListItemNav1 />
    </div>
  );
}