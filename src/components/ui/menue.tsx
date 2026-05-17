import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export interface MenuOption {
  value: string;
  label: string;
}

export interface DropdownMenuProps {
  options: MenuOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode; // عشان تقدر تبعت أي Icon إنت عايزها
}

export const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ options, value, onChange, placeholder = "Select...", icon }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // عشان ندمج الـ ref بتاعك مع الـ ref اللي هنستخدمه عشان نقفل الـ Menu لو داس برا
    const setRefs = (element: HTMLDivElement) => {
      containerRef.current = element;
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    // الـ useEffect ده عشان لما اليوزر يدوس في أي حتة فاضية في الشاشة، الـ Menu تقفل لوحدها
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // بندور على الاختيار اللي اليوزر اختاره عشان نعرض اسمه على الزرار
    const selectedOption = options.find(opt => opt.value === value);

    return (
      <div ref={setRefs} className="relative inline-block text-left w-full max-w-xs">
        {/* الزرار الأساسي اللي بيبان لليوزر */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-white input-gamic-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
        >
          <div className="flex items-center gap-2">
            {/* لو باعت Icon هيتعرض هنا */}
            {icon && <span className="text-gray-400">{icon}</span>}
            {/* لو مختار حاجة هيعرضها، لو مفيش هيعرض الـ Placeholder زي "Categories" */}
            <span className={selectedOption ? "text-white" : "text-gray-400"}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
          </div>
          {/* سهم صغير بيلف لفوق ولتحت حسب الـ Menu مفتوحة ولا لأ */}
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* الـ Menu اللي بتفتح لما تدوس */}
        {isOpen && (
          <div className="absolute z-10 w-full mt-2 origin-top-right bg-gray-800 border border-gray-700 rounded-lg shadow-xl focus:outline-none overflow-hidden">
            <div className="py-1 max-h-60 overflow-y-auto custom-scrollbar">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onChange(option.value); // بنبعت القيمة اللي اختارها للـ Parent
                    setIsOpen(false);       // وبنقفل الـ Menu
                  }}
                  className={`block w-full px-4 py-2.5 text-sm text-left transition-colors hover:bg-[var(--color-primary)] hover:bg-opacity-20 hover:text-white ${
                    value === option.value ? 'bg-[var(--color-primary)] bg-opacity-20 text-[var(--color-primary)] font-bold' : 'text-gray-300'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

DropdownMenu.displayName = "DropdownMenu";
export default DropdownMenu;