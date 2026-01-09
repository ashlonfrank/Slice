import svgPaths from "./svg-72wo4e5kfd";
import imgImage40 from "figma:asset/6fd74c512cc40313f7b10819f1bce7b1526bfa2e.png";
import { UserPlus, CreditCard, UserCheck } from "lucide-react";
import { useState } from "react";
import AddGroupMembers from "../components/AddGroupMembers";
import PayYourShare from "../components/PayYourShare";
import InviteGroupToPay from "../components/InviteGroupToPay";
import AllSetScreen from "../components/AllSetScreen";
import HomeBarPro from "./HomeBarPro";

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
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 18.75">
          <g id="icons">
            <path d={svgPaths.pa866080} fill="var(--fill-0, #0E0F0C)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button({ onClose }: { onClose?: () => void }) {
  return (
    <button
      onClick={onClose}
      className="absolute bg-[rgba(22,51,0,0.08)] content-stretch flex items-center justify-center left-[326px] p-[8px] rounded-[48px] size-[24px] top-[24px] cursor-pointer"
      data-name="button"
    >
      <Icons1 />
    </button>
  );
}

function Header({ onClose }: { onClose?: () => void }) {
  return (
    <div className="absolute h-[72px] left-0 top-0 w-[374px]" data-name="header">
      <Icons />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[187px] not-italic text-[#0e0f0c] text-[18px] text-center top-[24px] tracking-[-0.18px] translate-x-[-50%] w-[278px]">Pay with Slice</p>
      <Button onClose={onClose} />
    </div>
  );
}

function Icons2() {
  return (
    <div className="absolute left-0 size-[24px] top-[27px]" data-name="icons">
      <UserPlus className="size-full" strokeWidth={2} />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute h-[46px] leading-[0] left-[40px] not-italic text-nowrap top-[16px] w-[286px]" data-name="content">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center left-0 text-[#0e0f0c] text-[16px] top-[12px] tracking-[0.08px] translate-y-[-50%]">
        <ol className="list-decimal" start="1">
          <li className="ms-[24px]">
            <span className="leading-[24px]">Add your group members</span>
          </li>
        </ol>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-0 text-[#454745] text-[14px] top-[35px] tracking-[0.14px] translate-y-[-50%]">
        <p className="leading-[22px] text-nowrap">Enter names, email and phone number</p>
      </div>
    </div>
  );
}

function ListItemNav() {
  return (
    <div className="absolute bg-white h-[78px] left-0 top-[20px] w-[326px]" data-name="list item - nav">
      <Icons2 />
      <Content />
    </div>
  );
}

function Icons3() {
  return (
    <div className="absolute left-0 size-[24px] top-[27px]" data-name="icons">
      <CreditCard className="size-full" strokeWidth={2} />
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute h-[46px] leading-[0] left-[40px] not-italic text-nowrap top-[16px] w-[286px]" data-name="content">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center left-0 text-[#0e0f0c] text-[16px] top-[12px] tracking-[0.08px] translate-y-[-50%]">
        <ol className="list-decimal" start="2">
          <li className="ms-[24px]">
            <span className="leading-[24px]">{`Pay your share & invite others`}</span>
          </li>
        </ol>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-0 text-[#454745] text-[14px] top-[35px] tracking-[0.14px] translate-y-[-50%]">
        <p className="leading-[22px] text-nowrap">We send a payment link to the group</p>
      </div>
    </div>
  );
}

function ListItemNav1() {
  return (
    <div className="absolute bg-white h-[78px] left-0 top-[98px] w-[326px]" data-name="list item - nav">
      <Icons3 />
      <Content1 />
    </div>
  );
}

function Icons4() {
  return (
    <div className="absolute left-0 size-[24px] top-[27px]" data-name="icons">
      <UserCheck className="size-full" strokeWidth={2} />
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute h-[46px] leading-[0] left-[40px] not-italic text-nowrap top-[16px] w-[286px]" data-name="content">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center left-0 text-[#0e0f0c] text-[16px] top-[12px] tracking-[0.08px] translate-y-[-50%]">
        <ol className="list-decimal" start="3">
          <li className="ms-[24px]">
            <span className="leading-[24px]">Everyone pays theirs</span>
          </li>
        </ol>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-0 text-[#454745] text-[14px] top-[35px] tracking-[0.14px] translate-y-[-50%]">
        <p className="leading-[22px] text-nowrap">We’ll hold your order while others pay</p>
      </div>
    </div>
  );
}

function ListItemNav2() {
  return (
    <div className="absolute bg-white h-[78px] left-0 top-[176px] w-[326px]" data-name="list item - nav">
      <Icons4 />
      <Content2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[254px] left-[24px] top-[360px] w-[326px]">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[3px] text-[#0e0f0c] text-[14px] text-nowrap top-0 tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        How it works:
      </p>
      <ListItemNav />
      <ListItemNav1 />
      <ListItemNav2 />
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute bg-[#9fe870] content-stretch flex items-center justify-center left-[24px] px-[8px] py-[14px] rounded-[48px] top-[24px] w-[326px] cursor-pointer hover:bg-[#8ed760] transition-colors"
      data-name="button"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#163300] text-[16px] text-nowrap tracking-[0.08px]">
        <p className="leading-[24px]">Start group payment</p>
      </div>
    </button>
  );
}

function Actions({ onStartPayment }: { onStartPayment?: () => void }) {
  return (
    <div className="absolute bg-white h-[100px] left-0 top-[661px] w-[374px]" data-name="actions">
      <Button1 onClick={onStartPayment} />
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

function Icons5() {
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
      <Icons5 />
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

function MobileModal({ onClose, onStartPayment }: { onClose?: () => void; onStartPayment?: () => void }) {
  return (
    <div className="absolute bg-white h-[761px] left-[8px] overflow-clip rounded-[32px] bottom-[24px] w-[374px]" data-name="mobile modal">
      <Header onClose={onClose} />
      <Frame2 />
      <div className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[36px] left-[187px] text-[#0e0f0c] text-[28px] text-center text-nowrap top-[264px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`No chasing for repay, `}</p>
        <p>No upfront costs</p>
      </div>
      <Actions onStartPayment={onStartPayment} />
      <div className="absolute left-[107px] rounded-[214.5px] size-[160px] top-[88px]" data-name="image 40">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[214.5px] size-full" src={imgImage40} />
      </div>
      <Frame1 />
    </div>
  );
}

function MobileModal1({ onClose }: { onClose?: () => void }) {
  const [currentScreen, setCurrentScreen] = useState<"intro" | "add-members" | "pay-share" | "invite-group" | "all-set">("intro");

  return (
    <div className="absolute bg-[rgba(0,0,0,0.7)] h-[878px] left-0 overflow-clip top-0 w-[390px]" data-name="mobile modal">
      {currentScreen === "intro" && (
        <MobileModal 
          onClose={onClose} 
          onStartPayment={() => setCurrentScreen("add-members")} 
        />
      )}
      {currentScreen === "add-members" && (
        <AddGroupMembers
          onBack={() => setCurrentScreen("intro")}
          onClose={onClose}
          onContinue={() => setCurrentScreen("pay-share")}
        />
      )}
      {currentScreen === "pay-share" && (
        <PayYourShare
          onBack={() => setCurrentScreen("add-members")}
          onClose={onClose}
          onContinue={() => setCurrentScreen("invite-group")}
        />
      )}
      {currentScreen === "invite-group" && (
        <InviteGroupToPay
          onBack={() => setCurrentScreen("pay-share")}
          onClose={onClose}
          onDone={() => setCurrentScreen("all-set")}
        />
      )}
      {currentScreen === "all-set" && (
        <AllSetScreen
          onClose={onClose}
        />
      )}
    </div>
  );
}

export default function Container({ onClose }: { onClose?: () => void }) {
  return (
    <div className="relative size-full" data-name="container">
      <HomeBarPro />
      <MobileModal1 onClose={onClose} />
    </div>
  );
}