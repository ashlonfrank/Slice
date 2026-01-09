import { useState } from "react";
import svgPaths from "../imports/svg-txfc4ty50g";

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
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#0e0f0c] text-[18px] text-center tracking-[-0.18px]">Step 2 of 3</p>
      <Button onClick={onClose} />
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
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[7.14%_4.64%_7.86%_7.86%] justify-center leading-[0] not-italic text-[#163300] text-[24px] text-center text-nowrap tracking-[-0.6px]">
        <p className="leading-[34px]">{initials}</p>
      </div>
    </div>
  );
}

function Content({ name }: { name: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="content">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[16px] tracking-[0.08px] w-full">
        <p className="leading-[24px]">{name}</p>
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

function Group({ amount, width }: { amount: string; width?: string }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Field />
      <div className={`[grid-area:1_/_1] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center ml-[20px] mt-[16px] relative text-[#404040] text-[14px] tracking-[0.25px] translate-y-[-50%] ${width ? width : 'w-[45px]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{amount}</p>
      </div>
    </div>
  );
}

function ListItemIconButton({ initials, name, amount, marginTop }: { initials: string; name: string; amount: string; marginTop: string }) {
  return (
    <div className={`[grid-area:1_/_1] bg-[rgba(255,255,255,0.03)] content-stretch flex gap-[16px] items-center ml-0 ${marginTop} relative w-[326px]`} data-name="list item - icon button">
      <Avatar initials={initials} />
      <Content name={name} />
      <Group amount={amount} />
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

function Field2({ value, onChange, placeholder }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string }) {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#868685] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <input 
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[16px] text-center text-nowrap tracking-[-0.08px] w-full bg-transparent border-none outline-none placeholder:text-[#868685]"
            style={{ textAlign: 'left', whiteSpace: 'normal' }}
          />
        </div>
      </div>
    </div>
  );
}

function InputFields({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="input fields">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[14px] tracking-[0.175px] w-full">
        <p className="leading-[22px]">{label}</p>
      </div>
      <Field2 value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}

function InputFieldsSmall({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="input fields">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[14px] tracking-[0.175px] w-full">
        <p className="leading-[22px]">{label}</p>
      </div>
      <Field2 value={value} onChange={onChange} placeholder={placeholder} />
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
            <p className="leading-[24px]">Pay your share</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Actions({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[141px] items-start left-0 p-[24px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[620px] w-[374px]" data-name="actions">
      <div className="bg-[rgba(22,51,0,0.08)] content-stretch flex flex-col gap-[8px] items-center pb-[4px] pt-[8px] px-[4px] relative rounded-[32px] w-full">
        <div className="content-stretch flex gap-[4px] items-start px-[16px] py-0 relative shrink-0 w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454745] text-[12px] tracking-[0.12px] w-full">
            <p className="leading-[22px]">You are charged once everyone pays their share</p>
          </div>
        </div>
        <Button1 onClick={onContinue} />
      </div>
    </div>
  );
}

export default function PayYourShare({ 
  onBack, 
  onClose,
  onContinue 
}: { 
  onBack: () => void;
  onClose: () => void;
  onContinue: () => void;
}) {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleContinue = () => {
    // Simulate payment processing
    setTimeout(() => {
      onContinue();
    }, 2000);
  };

  const handleAutoFill = () => {
    setCardholderName("Sarah Johnson");
    setCardNumber("4532 1234 5678 9010");
    setExpiry("12/28");
    setCvv("123");
  };

  // Format card number with spaces every 4 digits
  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '').replace(/\D/g, '');
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(' ') : cleaned;
  };

  // Format expiry as MM/YY
  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.replace(/\s/g, '').length <= 16) {
      setCardNumber(formatted);
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiry(e.target.value);
    if (formatted.replace(/\//g, '').length <= 4) {
      setExpiry(formatted);
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/\D/g, '');
    if (cleaned.length <= 4) {
      setCvv(cleaned);
    }
  };

  return (
    <div className="absolute bg-white bottom-[24px] h-[761px] left-[8px] overflow-clip rounded-[32px] w-[374px]" data-name="mobile modal">
      <Header onBack={onBack} onClose={onClose} />
      
      {/* Scrollable Content Area */}
      <div className="absolute left-0 top-[72px] w-[374px] h-[548px] overflow-y-auto px-[24px] pt-[16px] pb-[24px]">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[36px] text-[#0e0f0c] text-[28px] text-center w-full mb-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Pay only your share
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#0e0f0c] text-[18px] text-center tracking-[-0.18px] w-full mb-[24px]">We'll hold the order while others pay</p>
        
        {/* Your Share */}
        <div className="mb-[20px]">
          <div className="content-stretch flex items-center relative shrink-0 mb-[4px]">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454745] text-[14px] text-nowrap tracking-[0.14px]">
              <p className="leading-[22px]">Your share</p>
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[30px] text-nowrap tracking-[-0.75px]">
            <p className="leading-[34px]">$450.00</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-0 relative shrink-0 w-full mb-[16px]">
          <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(14, 15, 12, 1)" } as React.CSSProperties}>
            <svg className="block w-full h-[1px]" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
              <path d="M0 0.5H326" stroke="var(--stroke-0, #0E0F0C)" strokeOpacity="0.121569" />
            </svg>
          </div>
        </div>

        {/* Other's Share */}
        <div className="mb-[32px]">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454745] text-[14px] text-nowrap tracking-[0.14px] mb-[16px]">
            <p className="leading-[22px]">Other's share</p>
          </div>
          
          {/* Member 1 */}
          <div className="content-stretch flex gap-[16px] items-center mb-[12px]">
            <Avatar initials="NN" />
            <Content name="Nili" />
            <Group amount="450.00" />
          </div>
          
          {/* Member 2 */}
          <div className="content-stretch flex gap-[16px] items-center">
            <Avatar initials="KL" />
            <Content name="Karen" />
            <Group amount="450.00" />
          </div>
        </div>

        {/* Payment Details Form */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          {/* Title with Info Icon */}
          <button 
            onClick={handleAutoFill}
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full text-left"
          >
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
              <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#0e0f0c] text-[22px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                Add payment details
              </p>
            </div>
            <Icons2 />
          </button>
          
          {/* Name on Card */}
          <InputFields 
            label="Name on card" 
            value={cardholderName} 
            onChange={(e) => setCardholderName(e.target.value)} 
            placeholder="Name" 
          />
          
          {/* Card Number */}
          <InputFields 
            label="Card number" 
            value={cardNumber} 
            onChange={handleCardNumberChange} 
            placeholder="Value" 
          />
          
          {/* Expiry and CVV Row */}
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            <InputFieldsSmall 
              label="Expiry" 
              value={expiry} 
              onChange={handleExpiryChange} 
              placeholder="Value" 
            />
            <InputFieldsSmall 
              label="CVV" 
              value={cvv} 
              onChange={handleCvvChange} 
              placeholder="Value" 
            />
          </div>
        </div>
      </div>
      
      <Actions onContinue={handleContinue} />
    </div>
  );
}