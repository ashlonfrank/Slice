import { ChevronLeft, X, Check, Share2, Copy, Send } from "lucide-react";
import { useState } from "react";

export default function InviteGroupToPay({ 
  onBack, 
  onClose,
  onDone 
}: { 
  onBack: () => void;
  onClose: () => void;
  onDone: () => void;
}) {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(link);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const handleShareLink = (link: string, name: string) => {
    if (navigator.share) {
      navigator.share({
        title: 'Payment Link',
        text: `Payment link for ${name}`,
        url: link,
      }).catch(() => {
        handleCopyLink(link);
      });
    } else {
      handleCopyLink(link);
    }
  };

  return (
    <div className="absolute bg-white h-[761px] left-[8px] overflow-clip rounded-[32px] bottom-[24px] w-[374px]">
      {/* Header */}
      <div className="absolute content-stretch flex gap-[16px] h-[72px] items-start justify-center left-0 p-[24px] top-0 w-[374px]">
        <button 
          onClick={onBack}
          className="relative shrink-0 size-[24px]"
        >
          <ChevronLeft className="size-6 text-black" strokeWidth={2} />
        </button>
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#0e0f0c] text-[18px] text-center tracking-[-0.18px]">
          Step 3 of 3
        </p>
        <button 
          onClick={onClose}
          className="bg-[rgba(22,51,0,0.08)] content-stretch flex items-center justify-center p-[8px] relative rounded-[48px] shrink-0 size-[24px]"
        >
          <X className="size-4 text-[#0e0f0c]" strokeWidth={2} />
        </button>
      </div>

      {/* Title */}
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[36px] left-[187px] text-[#0e0f0c] text-[28px] text-center top-[88px] translate-x-[-50%] w-[326px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Invite the group to pay
      </p>

      {/* Subtitle */}
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[187px] not-italic text-[#0e0f0c] text-[18px] text-center top-[132px] tracking-[-0.18px] translate-x-[-50%] w-[326px]">
        We send a payment link to the group
      </p>

      {/* Payment Successful Banner */}
      <div className="absolute bg-[rgba(22,51,0,0.08)] content-stretch flex gap-[16px] items-center left-[24px] p-[16px] rounded-[32px] top-[179px] w-[326px]">
        <div className="relative shrink-0 size-[24px]">
          <div className="absolute inset-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" fill="#2F5711" r="12" />
            </svg>
          </div>
          <div className="absolute aspect-[44/44] left-0 right-0 rounded-[48px] top-1/2 translate-y-[-50%]">
            <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[14px] text-white" strokeWidth={3} />
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start justify-center leading-[0] not-italic relative shrink-0 w-[181px]">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0e0f0c] text-[16px] tracking-[0.08px] w-full">
            <p className="leading-[24px]">Payment successful</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#454745] text-[14px] tracking-[0.14px] w-full">
            <p className="leading-[22px]">You paid $450.</p>
          </div>
        </div>
      </div>

      {/* Your Share Section */}
      <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[281px] w-[152px]">
        <div className="content-stretch flex items-center relative shrink-0">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454745] text-[14px] text-nowrap tracking-[0.14px]">
            <p className="leading-[22px]">Your share</p>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0e0f0c] text-[30px] text-nowrap tracking-[-0.75px]">
          <p className="leading-[34px]">$450.00</p>
        </div>
      </div>

      {/* Paid Badge */}
      <div className="absolute bg-[#ecf9f9] content-stretch flex gap-[8px] h-[24px] items-center justify-end left-[161px] px-[8px] py-[4px] rounded-[10px] top-[308px]">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0b4c72] text-[12px] text-nowrap tracking-[0.15px]">
          <p className="leading-[22px]">Paid</p>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute h-0 left-[24px] top-[353px] w-[326px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <path d="M0 0.5H326" stroke="#0E0F0C" strokeOpacity="0.121569" />
          </svg>
        </div>
      </div>

      {/* Section Label */}
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] top-[369px] w-[326px]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#454745] text-[14px] text-nowrap tracking-[0.14px]">
          <p className="leading-[22px]">Invite group members with payment links</p>
        </div>
      </div>

      {/* Members List */}
      <div className="absolute content-stretch flex flex-col gap-[16px] items-end left-[24px] top-[407px] w-[326px]">
        {/* Member 1 - Nili */}
        <div className="bg-[rgba(255,255,255,0.03)] content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
          <div className="relative shrink-0 size-[40px]">
            <div className="absolute inset-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <circle cx="20" cy="20" fill="#163300" fillOpacity="0.0784314" r="20" />
              </svg>
            </div>
            <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[7.14%_4.64%_7.86%_7.86%] justify-center leading-[0] not-italic text-[#163300] text-[16px] text-center text-nowrap tracking-[0.08px]">
              <p className="leading-[24px]">NN</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0e0f0c] text-[16px] tracking-[0.08px] w-full">
              <p className="leading-[24px]">Nili</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#454745] text-[14px] tracking-[0.14px] w-full">
              <p className="leading-[22px]">nili@gmail.com </p>
            </div>
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] bg-white content-stretch flex gap-[8px] h-[32px] items-center ml-0 mt-0 pl-[8px] pr-[16px] py-[12px] relative rounded-[10px] w-[73px]">
              <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#868685] text-[14px] text-center text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[20px]">$</p>
              </div>
            </div>
            <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center ml-[20px] mt-[16px] relative text-[#404040] text-[14px] tracking-[0.25px] translate-y-[-50%] w-[45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[20px]">450.00</p>
            </div>
          </div>
        </div>

        {/* Link Container for Nili */}
        <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] h-[52px] items-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-[326px]">
          <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
              <div className="h-[21px] overflow-clip relative shrink-0 w-full">
                <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#2563eb] text-[14px] top-0 tracking-[0.25px] w-[232px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  https://pay.group/nili/1350
                </p>
              </div>
            </div>
          </div>
          <button 
            onClick={() => handleShareLink('https://pay.group/nili/1350', 'Nili')}
            className="relative rounded-[8px] shrink-0 size-[28px]"
          >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[6px] px-[6px] relative size-full">
              <Share2 className="size-[16px] text-[#454745]" strokeWidth={1.33} />
            </div>
          </button>
          <button 
            onClick={() => handleCopyLink('https://pay.group/nili/1350')}
            className="relative rounded-[8px] shrink-0 size-[28px]"
          >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[6px] px-[6px] relative size-full">
              <Send className="size-[16px] text-[#454745]" strokeWidth={1.33} />
            </div>
          </button>
        </div>

        {/* Member 2 - Karen */}
        <div className="bg-[rgba(255,255,255,0.03)] content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
          <div className="relative shrink-0 size-[40px]">
            <div className="absolute inset-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <circle cx="20" cy="20" fill="#163300" fillOpacity="0.0784314" r="20" />
              </svg>
            </div>
            <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[7.14%_12.14%_7.86%_12.86%] justify-center leading-[0] not-italic text-[#163300] text-[16px] text-center text-nowrap tracking-[0.08px]">
              <p className="leading-[24px]">KL</p>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0e0f0c] text-[16px] tracking-[0.08px] w-full">
              <p className="leading-[24px]">Karen</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#454745] text-[14px] tracking-[0.14px] w-full">
              <p className="leading-[22px]">karen@gmail.com </p>
            </div>
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] bg-white content-stretch flex gap-[8px] h-[32px] items-center ml-0 mt-0 pl-[8px] pr-[16px] py-[12px] relative rounded-[10px] w-[73px]">
              <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#868685] text-[14px] text-center text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[20px]">$</p>
              </div>
            </div>
            <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center ml-[20px] mt-[16px] relative text-[#404040] text-[14px] tracking-[0.25px] translate-y-[-50%] w-[45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[20px]">450.00</p>
            </div>
          </div>
        </div>

        {/* Link Container for Karen */}
        <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] h-[52px] items-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-[326px]">
          <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
              <div className="h-[21px] overflow-clip relative shrink-0 w-full">
                <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#2563eb] text-[14px] top-0 tracking-[0.25px] w-[232px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  https://pay.group/af-nili-karen/1350
                </p>
              </div>
            </div>
          </div>
          <button 
            onClick={() => handleShareLink('https://pay.group/af-nili-karen/1350', 'Karen')}
            className="relative rounded-[8px] shrink-0 size-[28px]"
          >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[6px] px-[6px] relative size-full">
              <Share2 className="size-[16px] text-[#454745]" strokeWidth={1.33} />
            </div>
          </button>
          <button 
            onClick={() => handleCopyLink('https://pay.group/af-nili-karen/1350')}
            className="relative rounded-[8px] shrink-0 size-[28px]"
          >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[6px] px-[6px] relative size-full">
              <Copy className="size-[16px] text-[#454745]" strokeWidth={1.33} />
            </div>
          </button>
        </div>
      </div>

      {/* Done Button */}
      <div className="absolute bg-white/90 backdrop-blur-md content-stretch flex flex-col items-start left-0 p-[24px] top-[661px] w-[374px]">
        <button 
          onClick={onDone}
          className="bg-[#9fe870] relative rounded-[48px] shrink-0 w-full hover:bg-[#8ed760] transition-colors"
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[8px] py-[14px] relative w-full">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#163300] text-[16px] text-nowrap tracking-[0.08px]">
                <p className="leading-[24px]">Done</p>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Copied Toast */}
      {copiedLink && (
        <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 bg-[#0e0f0c] text-white px-[16px] py-[8px] rounded-full text-[14px] z-50">
          Link copied!
        </div>
      )}
    </div>
  );
}