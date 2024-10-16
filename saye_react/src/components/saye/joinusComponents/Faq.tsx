import cn from "@/lib/utils";
import { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {/* السؤال الأول */}
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl gap-3"
          onClick={() => toggleAccordion(1)}
          aria-expanded={isOpen === 1}
          aria-controls="accordion-collapse-body-1"
        >
          <span>ما هو التطوع؟</span>
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 transform ${isOpen === 1 ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={cn(isOpen === 1 ? "block" : "hidden")}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 border border-b-0 border-gray-200">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            التطوع هو تقديم وقتك وجهدك لمساعدة الآخرين أو خدمة المجتمع بدون مقابل مادي.
          </p>
        </div>
      </div>

      {/* السؤال الثاني */}
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 gap-3"
          onClick={() => toggleAccordion(2)}
          aria-expanded={isOpen === 2}
          aria-controls="accordion-collapse-body-2"
        >
          <span>ما هي فوائد التطوع؟</span>
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 transform ${isOpen === 2 ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className={cn(isOpen === 2 ? "block" : "hidden")}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="p-5 border border-b-0 border-gray-200">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            فوائد التطوع تشمل تحسين المهارات الشخصية، اكتساب خبرات جديدة، وتطوير روح المسؤولية والمشاركة الاجتماعية.
          </p>
        </div>
      </div>

      {/* السؤال الثالث */}
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 gap-3"
          onClick={() => toggleAccordion(3)}
          aria-expanded={isOpen === 3}
          aria-controls="accordion-collapse-body-3"
        >
          <span>كيف أبدأ في التطوع؟</span>
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 transform ${isOpen === 3 ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className={cn(isOpen === 3 ? "block" : "hidden")}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-b-0 border-gray-200">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            يمكنك البدء في التطوع من خلال البحث عن المنظمات المحلية أو الدولية التي تقدم فرصًا للتطوع، أو عن طريق الانترنت.
          </p>
        </div>
      </div>

      {/* السؤال الرابع */}
      <h2 id="accordion-collapse-heading-4">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 gap-3"
          onClick={() => toggleAccordion(4)}
          aria-expanded={isOpen === 4}
          aria-controls="accordion-collapse-body-4"
        >
          <span>ما هي أنواع الأعمال التطوعية؟</span>
          <svg
            data-accordion-icon=""
            className={`w-3 h-3 transform ${isOpen === 4 ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-4"
        className={cn(isOpen === 4 ? "block" : "hidden")}
        aria-labelledby="accordion-collapse-heading-4"
      >
        <div className="p-5 border border-b-0 border-gray-200">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            هناك العديد من الأنواع مثل التطوع البيئي، التعليمي، الصحي، الاجتماعي، وتقديم المساعدات الإنسانية.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
