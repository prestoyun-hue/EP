import React, { useState, FormEvent, useEffect } from 'react';
import { Send, Mail, Phone, Building, User, Hash, MessageSquare } from 'lucide-react';
import { solutions } from '../data/solutions';
import { ContactFormData } from '../types';

interface ContactFormProps {
  selectedSolution?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ selectedSolution }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    solution: solutions[0].name,
    quantity: '',
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    remarks: ''
  });

  // Update selected solution if passed from parent
  useEffect(() => {
    if (selectedSolution) {
      setFormData(prev => ({
        ...prev,
        solution: selectedSolution
      }));
    }
  }, [selectedSolution]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct Mailto Link
    const subject = `[ESET 견적 문의] ${formData.companyName} - ${formData.solution}`;
    
    // Cleanly formatted body without extra indentation
    const body = `문의 솔루션: ${formData.solution}
수량: ${formData.quantity}
회사명: ${formData.companyName}
담당자: ${formData.contactName}
전화번호: ${formData.phone}
이메일: ${formData.email}

[비고]
${formData.remarks}`;
    
    const mailtoLink = `mailto:sales@estc.co.kr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Create a temporary link element and click it to avoid navigation issues
    const link = document.createElement('a');
    link.href = mailtoLink;
    link.style.display = 'none';
    document.body.appendChild(link);
    
    try {
      link.click();
      // Show alert after a slight delay to ensure click registers
      setTimeout(() => {
        alert('이메일 클라이언트를 실행합니다.\n\n메일 발송이 완료되지 않으면 sales@estc.co.kr 로 직접 문의 부탁드립니다.');
      }, 500);
    } catch (err) {
      console.error('Mailto link failed:', err);
      alert('메일 클라이언트를 열 수 없습니다. sales@estc.co.kr 로 직접 문의해주세요.');
    } finally {
      document.body.removeChild(link);
    }
  };

  return (
    <section id="contact" className="py-24 bg-eset-light/50 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">도입 문의 및 상담</h2>
            <p className="text-slate-600">
              전문 컨설턴트가 귀사의 환경에 맞는 최적의 보안 솔루션을 제안해 드립니다.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Solution Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <ShieldIcon /> 관심 솔루션
                  </label>
                  <select
                    name="solution"
                    value={formData.solution}
                    onChange={handleChange}
                    className="w-full rounded-lg border-slate-200 p-3 focus:ring-2 focus:ring-eset-teal focus:border-transparent transition bg-slate-50"
                  >
                    {solutions.map(s => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>

                {/* Quantity */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Hash size={16} /> 예상 수량 (Users/Endpoints)
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    required
                    placeholder="예: 50, 100"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full rounded-lg border-slate-200 p-3 focus:ring-2 focus:ring-eset-teal focus:border-transparent transition bg-slate-50"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Building size={16} /> 회사명
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    placeholder="회사명을 입력하세요"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full rounded-lg border-slate-200 p-3 focus:ring-2 focus:ring-eset-teal focus:border-transparent transition bg-slate-50"
                  />
                </div>

                {/* Contact Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <User size={16} /> 담당자 이름
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    required
                    placeholder="담당자 성함을 입력하세요"
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full rounded-lg border-slate-200 p-3 focus:ring-2 focus:ring-eset-teal focus:border-transparent transition bg-slate-50"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Phone size={16} /> 전화번호
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border-slate-200 p-3 focus:ring-2 focus:ring-eset-teal focus:border-transparent transition bg-slate-50"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Mail size={16} /> 이메일 주소
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border-slate-200 p-3 focus:ring-2 focus:ring-eset-teal focus:border-transparent transition bg-slate-50"
                  />
                </div>
              </div>

              {/* Remarks */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <MessageSquare size={16} /> 비고 / 문의사항
                </label>
                <textarea
                  name="remarks"
                  rows={4}
                  placeholder="궁금하신 점이나 추가 요청사항을 적어주세요."
                  value={formData.remarks}
                  onChange={handleChange}
                  className="w-full rounded-lg border-slate-200 p-3 focus:ring-2 focus:ring-eset-teal focus:border-transparent transition bg-slate-50 resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-eset-teal text-white font-bold py-4 rounded-xl hover:bg-teal-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
                >
                  <Send size={20} />
                  문의 메일 전송하기
                </button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  * 전송 버튼을 누르면 기본 메일 앱이 실행됩니다.<br/>
                  직접 문의: <span className="font-semibold text-slate-600">02-567-0510</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

export default ContactForm;