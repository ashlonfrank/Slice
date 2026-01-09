import svgPaths from "../imports/svg-duikyk9awc";
import imgImage42 from "figma:asset/98cbc1e12cfefb4eec1566f2fb26877134f4d066.png";

function Icons() {
  return (
    <div className="absolute left-[24px] size-[24px] top-[24px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icons">
          <g id="Vector">
            <path d={svgPaths.p1db21880} fill="black" />
            <path clipRule="evenodd" d={svgPaths.pf605180} fill="black" fillRule="evenodd" />
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
            <path d={svgPaths.pa866080} fill="#0E0F0C" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button({ onClose }: { onClose: () => void }) {
  return (
    <button 
      onClick={onClose}
      className="absolute bg-[rgba(22,51,0,0.08)] content-stretch flex items-center justify-center left-[326px] p-[8px] rounded-[48px] size-[24px] top-[24px]" 
      data-name="button"
    >
      <Icons1 />
    </button>
  );
}

function Header({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute h-[72px] left-0 top-0 w-[374px]" data-name="header">
      <Icons />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[187px] not-italic text-[#0e0f0c] text-[18px] text-center top-[24px] tracking-[-0.18px] translate-x-[-50%] w-[278px]">Pay with Slice</p>
      <Button onClose={onClose} />
    </div>
  );
}

function Button1({ onClose }: { onClose: () => void }) {
  return (
    <button 
      onClick={onClose}
      className="absolute bg-[#9fe870] content-stretch flex items-center justify-center left-[24px] px-[8px] py-[14px] rounded-[48px] top-[24px] w-[326px] hover:bg-[#8ed760] transition-colors" 
      data-name="button"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#163300] text-[16px] text-nowrap tracking-[0.08px]">
        <p className="leading-[24px]">Got it</p>
      </div>
    </button>
  );
}

function Actions({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute bg-white h-[100px] left-0 top-[661px] w-[374px]" data-name="actions">
      <Button1 onClose={onClose} />
    </div>
  );
}

function Divider() {
  return (
    <div className="absolute h-0 left-0 top-0 w-[326px]" data-name="divider">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
          <g id="divider">
            <path d="M0 0.5H326" id="Vector 2" stroke="#0E0F0C" strokeOpacity="0.121569" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[38px] left-0 top-0 w-[302px]">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#0e0f0c] text-[12px] top-0 tracking-[0.4px] w-[302px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        The order is held for 60 minutes and completes once everyone pays.
      </p>
    </div>
  );
}

function Icons2() {
  return (
    <div className="absolute left-[310px] size-[16px] top-0" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icons">
          <g id="Vector">
            <path d={svgPaths.p252fad00} fill="#0E0F0C" />
            <path d={svgPaths.p1d311500} fill="#0E0F0C" />
            <path clipRule="evenodd" d={svgPaths.p1b0e4880} fill="#0E0F0C" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[38px] left-0 top-[8px] w-[326px]">
      <Frame2 />
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

function Content() {
  return (
    <div className="absolute h-[46px] left-[2px] top-[16px] w-[324px]" data-name="content">
      <ol className="absolute block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-[-2px] list-decimal not-italic text-[#0e0f0c] text-[16px] top-0 tracking-[0.08px] w-[326px]" start={1}>
        <li className="ms-[24px]">
          <span className="leading-[24px]">Each person receives a payment link to pay their share</span>
        </li>
      </ol>
    </div>
  );
}

function ListItemNav() {
  return (
    <div className="absolute bg-white h-[78px] left-0 top-[16px] w-[326px]" data-name="list item - nav">
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute h-[46px] left-[2px] top-[16px] w-[324px]" data-name="content">
      <ol className="absolute block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-[-2px] list-decimal not-italic text-[#0e0f0c] text-[16px] top-0 tracking-[0.08px] w-[326px]" start={2}>
        <li className="ms-[24px]">
          <span className="leading-[24px]">We send reminders to pay, and notify everyone when someone pays</span>
        </li>
      </ol>
    </div>
  );
}

function ListItemNav1() {
  return (
    <div className="absolute bg-white h-[78px] left-0 top-[94px] w-[326px]" data-name="list item - nav">
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute h-[46px] left-[2px] top-[16px] w-[324px]" data-name="content">
      <ol className="absolute block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-[-2px] list-decimal not-italic text-[#0e0f0c] text-[16px] top-0 tracking-[0.08px] w-[326px]" start={3}>
        <li className="ms-[24px]">
          <span className="leading-[24px]">You can track progress or pay on someone's behalf if needed</span>
        </li>
      </ol>
    </div>
  );
}

function ListItemNav2() {
  return (
    <div className="absolute bg-white h-[78px] left-0 top-[172px] w-[326px]" data-name="list item - nav">
      <Content2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[250px] left-[24px] top-[337px] w-[326px]">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[3px] text-[#0e0f0c] text-[14px] text-nowrap top-0 tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        What's next:
      </p>
      <ListItemNav />
      <ListItemNav1 />
      <ListItemNav2 />
    </div>
  );
}

export default function AllSetScreen({ 
  onClose 
}: { 
  onClose: () => void;
}) {
  return (
    <div className="absolute bg-white h-[761px] left-[8px] overflow-clip rounded-[32px] bottom-[24px] w-[374px]" data-name="mobile modal">
      <Header onClose={onClose} />
      <Actions onClose={onClose} />
      <Frame1 />
      <div className="absolute h-[125px] left-[111px] top-[80px] w-[130px]" data-name="image 42">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[162.28%] left-[-64.94%] max-w-none top-[-30.74%] w-[234.15%]" src={imgImage42} />
        </div>
      </div>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[36px] left-[187px] text-[#0e0f0c] text-[28px] text-center top-[237px] translate-x-[-50%] w-[326px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        You've done your part.
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[187px] not-italic text-[#0e0f0c] text-[18px] text-center top-[281px] tracking-[-0.18px] translate-x-[-50%] w-[326px]">Rest of the group can pay their share.</p>
      <Frame3 />
    </div>
  );
}
