import { useState } from "react";
import svgPaths from "../imports/svg-h1xxaj8og1";

interface Member {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  initials: string;
}

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

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[rgba(22,51,0,0.08)] content-stretch flex items-center justify-center p-[8px] relative rounded-[48px] shrink-0 size-[24px]" 
      data-name="button"
    >
      <Icons1 />
    </button>
  );
}

function Header({ onBack, onClose }: { onBack: () => void; onClose: () => void }) {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[72px] items-start justify-center left-0 p-[24px] top-0 w-[374px]" data-name="header">
      <button onClick={onBack} className="relative shrink-0 size-[24px]">
        <Icons />
      </button>
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#0e0f0c] text-[18px] text-center tracking-[-0.18px]">Step 1 of 3</p>
      <Button onClick={onClose} />
    </div>
  );
}

function Button1({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#9fe870] relative rounded-[48px] shrink-0 w-full" 
      data-name="button"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[14px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#163300] text-[16px] text-nowrap tracking-[0.08px]">
            <p className="leading-[24px]">Continue</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Actions({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 p-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[661px] w-[374px]" data-name="actions">
      <Button1 onClick={onContinue} />
    </div>
  );
}

function Radio({ selected }: { selected: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="radio">
      {selected ? (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="radio">
            <circle cx="12" cy="12" fill="var(--fill-0, white)" id="Ellipse 2" r="11.5" stroke="var(--stroke-0, #163300)" />
            <circle cx="12" cy="12" fill="var(--fill-0, #163300)" id="Ellipse 1" r="7" />
          </g>
        </svg>
      ) : (
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(134, 134, 133, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" fill="var(--fill-0, white)" id="Ellipse 1" r="11.5" stroke="var(--stroke-0, #868685)" />
          </svg>
        </div>
      )}
    </div>
  );
}

function Radio1({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="content-stretch flex gap-[16px] items-end relative shrink-0 text-left" 
      data-name="radio"
    >
      <Radio selected={selected} />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[16px] text-nowrap tracking-[-0.08px]">
        <p className="leading-[24px]">I'll cover the unpaid balance</p>
      </div>
    </button>
  );
}

function Radio2({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="content-stretch flex gap-[16px] items-end relative shrink-0 text-left" 
      data-name="radio"
    >
      <Radio selected={selected} />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[16px] text-nowrap tracking-[-0.08px]">
        <p className="leading-[24px]">Cancel the entire purchase</p>
      </div>
    </button>
  );
}

function Frame2({ paymentOption, setPaymentOption }: { paymentOption: string; setPaymentOption: (opt: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Radio1 selected={paymentOption === "cover"} onClick={() => setPaymentOption("cover")} />
      <Radio2 selected={paymentOption === "cancel"} onClick={() => setPaymentOption("cancel")} />
    </div>
  );
}

function Frame3({ paymentOption, setPaymentOption }: { paymentOption: string; setPaymentOption: (opt: string) => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0e0f0c] text-[14px] tracking-[0.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        If someone doesn't pay in time
      </p>
      <Frame2 paymentOption={paymentOption} setPaymentOption={setPaymentOption} />
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

function Frame4({ paymentOption, setPaymentOption }: { paymentOption: string; setPaymentOption: (opt: string) => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame3 paymentOption={paymentOption} setPaymentOption={setPaymentOption} />
      <Icons2 />
    </div>
  );
}

function Frame({ paymentOption, setPaymentOption }: { paymentOption: string; setPaymentOption: (opt: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[302px]" data-name="Frame">
      <Frame4 paymentOption={paymentOption} setPaymentOption={setPaymentOption} />
    </div>
  );
}

function Frame1({ paymentOption, setPaymentOption }: { paymentOption: string; setPaymentOption: (opt: string) => void }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40px] top-[569px] w-[302px]" data-name="Frame">
      <Frame paymentOption={paymentOption} setPaymentOption={setPaymentOption} />
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

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="avatar">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(22, 51, 0, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #163300)" fillOpacity="0.0784314" id="Ellipse 1" r="20" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[19.64%_17.14%_20.36%_17.86%] justify-center leading-[0] not-italic text-[#163300] text-[16px] text-center text-nowrap tracking-[0.08px]">
        <p className="leading-[24px]">{initials}</p>
      </div>
    </div>
  );
}

function Content({ name, email, isYou }: { name: string; email: string; isYou?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[14px]" data-name="content">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0e0f0c] tracking-[0.175px] w-full">
        <p className="leading-[22px]">{isYou ? "You" : name}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#454745] tracking-[0.14px] w-full">
        <p className="leading-[22px]">{email} </p>
      </div>
    </div>
  );
}

function MemberCell({ member, amount, index, isYou }: { member: Member; amount: number; index: number; isYou?: boolean }) {
  return (
    <>
      <div className={`absolute h-[76px] left-[8px] rounded-[10px] w-[294px]`} style={{ top: `${index * 76}px` }} data-name="cells">
        <div className="absolute content-stretch flex gap-[12px] items-center left-0 px-[8px] py-[16px] top-0 w-[270px]" data-name="table cells">
          <Avatar initials={member.initials} />
          <Content name={`${member.firstName} ${member.lastName}`} email={member.email} isYou={isYou} />
        </div>
        <div className="absolute content-stretch flex gap-[12px] items-center left-[270px] px-[8px] py-[16px] top-0 w-[16px]" data-name="table cells" />
        <div className="absolute contents left-[200px] top-[22px]">
          <div className="absolute bg-white border border-[#868685] border-solid h-[32px] left-[200px] rounded-[10px] top-[22px] w-[86px]" data-name="field">
            <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[11px] text-[#868685] text-[14px] text-center text-nowrap top-[15px] tracking-[0.25px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[20px]">$</p>
            </div>
          </div>
          <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[224px] text-[#404040] text-[14px] top-[38px] tracking-[0.25px] translate-y-[-50%] w-[54px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">{amount.toFixed(2)}</p>
          </div>
        </div>
      </div>
      {index > 0 && (
        <div className="absolute h-0 left-[8px] w-[294px]" style={{ top: `${index * 76}px` }} data-name="divider">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 294 1">
              <g id="divider">
                <path d="M0 0.5H294" id="Vector 2" stroke="var(--stroke-0, #0E0F0C)" strokeOpacity="0.121569" />
              </g>
            </svg>
          </div>
        </div>
      )}
    </>
  );
}

function TableCells1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 px-[8px] py-[16px] top-0 w-[294px]" data-name="table cells">
      <Avatar initials="AF" />
      <Content name="You" email="ashlon@gmail.com" isYou />
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
        <p className="leading-[22px] text-left">Add members</p>
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

function CellsHover({ onClick, topPosition }: { onClick: () => void; topPosition: number }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-[rgba(22,51,0,0.03)] border border-[rgba(14,15,12,0.12)] border-dashed h-[76px] left-[8px] rounded-[16px] w-[294px]" 
      style={{ top: `${topPosition}px` }}
      data-name="cells - hover"
    >
      <TableCells3 />
      <Icons3 />
      <TableCells4 />
    </button>
  );
}

function Body({ onAddMember, members }: { onAddMember: () => void; members: Member[] }) {
  const totalMembers = members.length + 1; // +1 for "You"
  const splitAmount = 1800 / totalMembers;
  const bodyHeight = 56 + (totalMembers * 76) + 76 + 8; // header + member cells + add button + padding

  return (
    <div className="absolute bg-white left-[8px] rounded-bl-[16px] rounded-br-[16px] top-[56px] w-[310px]" style={{ height: `${bodyHeight}px` }} data-name="body">
      {/* You cell */}
      <MemberCell 
        member={{ 
          id: "you", 
          firstName: "Ashlon", 
          lastName: "F", 
          email: "ashlon@gmail.com", 
          phone: "", 
          initials: "AF" 
        }} 
        amount={splitAmount} 
        index={0}
        isYou
      />
      
      {/* Added members */}
      {members.map((member, idx) => (
        <MemberCell 
          key={member.id} 
          member={member} 
          amount={splitAmount} 
          index={idx + 1}
        />
      ))}
      
      {/* Add members button */}
      <CellsHover onClick={onAddMember} topPosition={(totalMembers * 76) + 4} />
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

function Component({ members }: { members: Member[] }) {
  const totalMembers = members.length + 1;
  const bodyHeight = 56 + (totalMembers * 76) + 76 + 8;
  
  return (
    <div className="absolute content-stretch flex flex-col items-end left-0 px-[16px] py-0 top-[240px] w-[326px]" data-name="$">
      <Bank />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[30px] text-nowrap tracking-[-0.75px]">
        <p className="leading-[34px]">$1800.00</p>
      </div>
    </div>
  );
}

function Example({ onAddMember, members }: { onAddMember: () => void; members: Member[] }) {
  const totalMembers = members.length + 1;
  const bodyHeight = 56 + (totalMembers * 76) + 76 + 8;
  const exampleHeight = bodyHeight + 56 + 8; // body + header + padding
  
  return (
    <div className="absolute bg-[rgba(22,51,0,0.08)] left-[24px] rounded-[24px] top-[179px] w-[326px]" style={{ height: `${exampleHeight}px` }} data-name="example">
      <Header1 />
      <Body onAddMember={onAddMember} members={members} />
      <Component members={members} />
    </div>
  );
}

export default function AddGroupMembers({ 
  onBack, 
  onClose,
  onContinue 
}: { 
  onBack: () => void;
  onClose: () => void;
  onContinue: () => void;
}) {
  const [paymentOption, setPaymentOption] = useState("cover");
  const [showAddMemberForm, setShowAddMemberForm] = useState(false);
  const [members, setMembers] = useState<Member[]>([]);
  const [currentSampleIndex, setCurrentSampleIndex] = useState(0);
  
  // Sample members data for auto-population
  const sampleMembers = [
    { firstName: "Nili", lastName: "Nagar", email: "nili@gmail.com", phone: "+1 (555) 234-5678" },
    { firstName: "Karen", lastName: "Lee", email: "karen.lee@email.com", phone: "+1 (555) 345-6789" },
    { firstName: "Mike", lastName: "Chen", email: "mike.chen@email.com", phone: "+1 (555) 456-7890" },
    { firstName: "Sara", lastName: "Williams", email: "sara.w@email.com", phone: "+1 (555) 567-8901" },
  ];

  const currentSample = sampleMembers[currentSampleIndex];
  const [firstName, setFirstName] = useState(currentSample.firstName);
  const [lastName, setLastName] = useState(currentSample.lastName);
  const [email, setEmail] = useState(currentSample.email);
  const [phone, setPhone] = useState(currentSample.phone);

  const handleOpenForm = () => {
    // Pre-populate with next sample member
    const nextIndex = currentSampleIndex % sampleMembers.length;
    const nextSample = sampleMembers[nextIndex];
    setFirstName(nextSample.firstName);
    setLastName(nextSample.lastName);
    setEmail(nextSample.email);
    setPhone(nextSample.phone);
    setShowAddMemberForm(true);
  };

  const handleAddMember = () => {
    // Create initials from first letter of first name + first letter of last name
    const initials = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
    
    const newMember: Member = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      phone,
      initials,
    };
    
    setMembers([...members, newMember]);
    setShowAddMemberForm(false);
    
    // Move to next sample for next time
    setCurrentSampleIndex((currentSampleIndex + 1) % sampleMembers.length);
  };

  return (
    <div className="absolute bg-white bottom-[24px] h-[761px] left-[8px] overflow-clip rounded-[32px] w-[374px]" data-name="mobile modal">
      <Header onBack={onBack} onClose={onClose} />
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[36px] left-[187px] text-[#0e0f0c] text-[28px] text-center top-[88px] translate-x-[-50%] w-[326px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add your group members
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[187.5px] not-italic text-[#0e0f0c] text-[18px] text-center top-[132px] tracking-[-0.18px] translate-x-[-50%] w-[325px]">Enter names, email and phone number</p>
      <Actions onContinue={onContinue} />
      <Frame1 paymentOption={paymentOption} setPaymentOption={setPaymentOption} />
      <Example onAddMember={handleOpenForm} members={members} />

      {/* Add Member Form Overlay */}
      {showAddMemberForm && (
        <div className="absolute inset-0 z-50 flex items-center justify-center px-[24px]">
          <div 
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowAddMemberForm(false)}
          />
          
          <div className="relative bg-white rounded-[24px] p-[24px] w-full max-w-[326px] shadow-lg">
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[#0e0f0c] leading-[24px] tracking-[0.09px] mb-[20px]">
              Add member
            </h3>
            
            <div className="space-y-[16px]">
              <div>
                <label className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0e0f0c] leading-[22px] tracking-[0.175px] mb-[8px]">
                  First name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter first name"
                  className="w-full bg-white border border-[#868685] rounded-[10px] h-[48px] px-[16px] font-['Inter:Regular',sans-serif] text-[16px] text-[#0e0f0c] leading-[24px] tracking-[-0.08px] placeholder:text-[#868685] focus:outline-none focus:border-[#163300] focus:ring-1 focus:ring-[#163300]"
                />
              </div>

              <div>
                <label className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0e0f0c] leading-[22px] tracking-[0.175px] mb-[8px]">
                  Last name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter last name"
                  className="w-full bg-white border border-[#868685] rounded-[10px] h-[48px] px-[16px] font-['Inter:Regular',sans-serif] text-[16px] text-[#0e0f0c] leading-[24px] tracking-[-0.08px] placeholder:text-[#868685] focus:outline-none focus:border-[#163300] focus:ring-1 focus:ring-[#163300]"
                />
              </div>

              <div>
                <label className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0e0f0c] leading-[22px] tracking-[0.175px] mb-[8px]">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full bg-white border border-[#868685] rounded-[10px] h-[48px] px-[16px] font-['Inter:Regular',sans-serif] text-[16px] text-[#0e0f0c] leading-[24px] tracking-[-0.08px] placeholder:text-[#868685] focus:outline-none focus:border-[#163300] focus:ring-1 focus:ring-[#163300]"
                />
              </div>

              <div>
                <label className="block font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0e0f0c] leading-[22px] tracking-[0.175px] mb-[8px]">
                  Phone number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number"
                  className="w-full bg-white border border-[#868685] rounded-[10px] h-[48px] px-[16px] font-['Inter:Regular',sans-serif] text-[16px] text-[#0e0f0c] leading-[24px] tracking-[-0.08px] placeholder:text-[#868685] focus:outline-none focus:border-[#163300] focus:ring-1 focus:ring-[#163300]"
                />
              </div>

              <div className="flex gap-[12px] pt-[8px]">
                <button
                  onClick={() => setShowAddMemberForm(false)}
                  className="flex-1 bg-[#f5f5f5] text-[#0e0f0c] py-[14px] rounded-[48px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] tracking-[0.08px] hover:bg-[#e5e5e5] transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddMember}
                  className="flex-1 bg-[#9fe870] text-[#163300] py-[14px] rounded-[48px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] tracking-[0.08px] hover:bg-[#8ed760] transition-colors"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}