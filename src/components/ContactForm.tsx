'use client';

import { useState } from 'react';
import { ContactFormData } from './contact/ContactPageContent';

interface ContactFormProps {
  formData: ContactFormData;
  onSubmit: (data: ContactFormData) => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm({ formData, onSubmit }: ContactFormProps) {
  const [formDataLocal, setFormDataLocal] = useState<ContactFormData>(formData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormDataLocal((prev: ContactFormData) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formDataLocal.name.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen ein';
    }

    if (!formDataLocal.email.trim()) {
      newErrors.email = 'Bitte geben Sie eine E-Mail-Adresse ein';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formDataLocal.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    if (!formDataLocal.message.trim()) {
      newErrors.message = 'Bitte geben Sie eine Nachricht ein';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSubmit(formDataLocal);
      setSubmitStatus('success');
      
      // Reset form
      setFormDataLocal({
        name: '',
        email: '',
        phone: '',
        subject: 'beratung',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormDataLocal({
      name: '',
      email: '',
      phone: '',
      subject: 'beratung',
      message: ''
    });
    setErrors({});
    setSubmitStatus('idle');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">
          Senden Sie uns eine Nachricht
        </h2>
        <p className="text-slate-600 text-lg">
          Wir antworten in der Regel innerhalb von 2-4 Stunden
        </p>
      </div>

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg" role="alert" aria-live="polite">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-green-800 font-medium">
              Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert" aria-live="polite">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <p className="text-red-800 font-medium">
              Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" aria-labelledby="contact-form-title">
        <div id="contact-form-title" className="sr-only">Kontaktformular</div>
        
        {/* Name and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
              Vollständiger Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formDataLocal.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 ${
                errors.name ? 'border-red-300 bg-red-50' : 'border-slate-300 bg-white'
              }`}
              placeholder="Ihr vollständiger Name"
              aria-describedby={errors.name ? 'name-error' : undefined}
              aria-required="true"
              required
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
              Telefonnummer
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formDataLocal.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 bg-white"
              placeholder="Ihre Telefonnummer"
              aria-describedby="phone-help"
            />
            <p id="phone-help" className="mt-1 text-sm text-slate-500">
              Optional - für Rückruf
            </p>
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
            E-Mail-Adresse *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formDataLocal.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 ${
              errors.email ? 'border-red-300 bg-red-50' : 'border-slate-300 bg-white'
            }`}
            placeholder="ihre.email@beispiel.de"
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-required="true"
            required
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
            Betreff *
          </label>
          <select
            id="subject"
            name="subject"
            value={formDataLocal.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 bg-white"
            aria-required="true"
            required
          >
            <option value="kaufen">Fahrzeug kaufen</option>
            <option value="verkaufen">Fahrzeug verkaufen</option>
            <option value="beratung">Beratung</option>
            <option value="sonstiges">Sonstiges</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
            Ihre Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formDataLocal.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 resize-none ${
              errors.message ? 'border-red-300 bg-red-50' : 'border-slate-300 bg-white'
            }`}
            placeholder="Wie können wir Ihnen helfen? Beschreiben Sie Ihr Anliegen..."
            aria-describedby={errors.message ? 'message-error' : undefined}
            aria-required="true"
            required
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-xl disabled:shadow-none"
            aria-describedby={isSubmitting ? 'submitting-status' : undefined}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span id="submitting-status">Wird gesendet...</span>
              </span>
            ) : (
              'Nachricht senden'
            )}
          </button>
          
          <button
            type="button"
            onClick={resetForm}
            className="px-8 py-4 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all duration-300"
          >
            Formular zurücksetzen
          </button>
        </div>

        <p className="text-slate-500 text-sm text-center">
          * Pflichtfelder. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
      </form>
    </div>
  );
}
