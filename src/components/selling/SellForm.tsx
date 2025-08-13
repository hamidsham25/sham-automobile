'use client';

import { useState, useRef } from 'react';
import { SellFormData, SellFormErrors } from './types';

interface SellFormProps {
  formData: SellFormData;
  onSubmit: (data: SellFormData) => void;
}

export default function SellForm({ formData, onSubmit }: SellFormProps) {
  const [formState, setFormState] = useState<SellFormData>(formData);
  const [errors, setErrors] = useState<SellFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fuelTypes = [
    'Benzin',
    'Diesel',
    'Elektro',
    'Hybrid',
    'Plug-in Hybrid',
    'LPG',
    'CNG'
  ];

  const conditions = [
    'Sehr gut',
    'Gut',
    'Befriedigend',
    'Ausreichend',
    'Mangelhaft'
  ];

  const handleInputChange = (field: keyof SellFormData, value: string | number) => {
    setFormState(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: SellFormErrors = {};

    if (!formState.brand.trim()) newErrors.brand = 'Marke ist erforderlich';
    if (!formState.model.trim()) newErrors.model = 'Modell ist erforderlich';
    if (!formState.year || formState.year < 1900 || formState.year > new Date().getFullYear() + 1) {
      newErrors.year = 'Gültiges Baujahr erforderlich';
    }
    if (!formState.mileage || formState.mileage < 0) {
      newErrors.mileage = 'Gültiger Kilometerstand erforderlich';
    }
    if (!formState.fuelType) newErrors.fuelType = 'Kraftstoffart ist erforderlich';
    if (!formState.condition) newErrors.condition = 'Zustand ist erforderlich';
    if (!formState.name.trim()) newErrors.name = 'Name ist erforderlich';
    if (!formState.email.trim()) newErrors.email = 'E-Mail ist erforderlich';
    if (!formState.phone.trim()) newErrors.phone = 'Telefonnummer ist erforderlich';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formState.email && !emailRegex.test(formState.email)) {
      newErrors.email = 'Gültige E-Mail-Adresse erforderlich';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      onSubmit(formState);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormState({
          brand: '',
          model: '',
          year: 0,
          mileage: 0,
          fuelType: '',
          condition: '',
          images: [],
          name: '',
          email: '',
          phone: ''
        });
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormState(prev => ({ ...prev, images: files }));
  };

  if (submitSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-900 mb-4">
          Bewertungsanfrage erfolgreich gesendet!
        </h3>
        <p className="text-green-700 mb-6">
          Vielen Dank für Ihre Anfrage. Wir werden uns innerhalb von 24 Stunden 
          mit einem fairen Angebot bei Ihnen melden.
        </p>
        <div className="text-sm text-green-600">
          <p>Nächste Schritte:</p>
          <ul className="mt-2 space-y-1">
            <li>• Wir prüfen Ihre Fahrzeugdaten</li>
            <li>• Erstellung eines detaillierten Angebots</li>
            <li>• Kontaktaufnahme per E-Mail oder Telefon</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div id="bewertungsformular" className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-slate-900 mb-4">
          Fahrzeugbewertung anfordern
        </h3>
        <p className="text-slate-600">
          Füllen Sie das Formular aus und erhalten Sie ein faires Angebot für Ihr Fahrzeug
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Vehicle Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="brand" className="block text-sm font-medium text-slate-700 mb-2">
              Marke *
            </label>
            <input
              type="text"
              id="brand"
              value={formState.brand}
              onChange={(e) => handleInputChange('brand', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.brand ? 'border-red-500' : 'border-slate-300'
              }`}
              placeholder="z.B. BMW, Mercedes, Audi"
            />
            {errors.brand && <p className="mt-1 text-sm text-red-600">{errors.brand}</p>}
          </div>

          <div>
            <label htmlFor="model" className="block text-sm font-medium text-slate-700 mb-2">
              Modell *
            </label>
            <input
              type="text"
              id="model"
              value={formState.model}
              onChange={(e) => handleInputChange('model', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.model ? 'border-red-500' : 'border-slate-300'
              }`}
              placeholder="z.B. 3er, C-Klasse, A4"
            />
            {errors.model && <p className="mt-1 text-sm text-red-600">{errors.model}</p>}
          </div>

          <div>
            <label htmlFor="year" className="block text-sm font-medium text-slate-700 mb-2">
              Baujahr *
            </label>
            <input
              type="number"
              id="year"
              value={formState.year || ''}
              onChange={(e) => handleInputChange('year', parseInt(e.target.value) || 0)}
              min="1900"
              max={new Date().getFullYear() + 1}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.year ? 'border-red-500' : 'border-slate-300'
              }`}
              placeholder="z.B. 2020"
            />
            {errors.year && <p className="mt-1 text-sm text-red-600">{errors.year}</p>}
          </div>

          <div>
            <label htmlFor="mileage" className="block text-sm font-medium text-slate-700 mb-2">
              Kilometerstand *
            </label>
            <input
              type="number"
              id="mileage"
              value={formState.mileage || ''}
              onChange={(e) => handleInputChange('mileage', parseInt(e.target.value) || 0)}
              min="0"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.mileage ? 'border-red-500' : 'border-slate-300'
              }`}
              placeholder="z.B. 50000"
            />
            {errors.mileage && <p className="mt-1 text-sm text-red-600">{errors.mileage}</p>}
          </div>

          <div>
            <label htmlFor="fuelType" className="block text-sm font-medium text-slate-700 mb-2">
              Kraftstoff *
            </label>
            <select
              id="fuelType"
              value={formState.fuelType}
              onChange={(e) => handleInputChange('fuelType', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.fuelType ? 'border-red-500' : 'border-slate-300'
              }`}
            >
              <option value="">Bitte wählen</option>
              {fuelTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.fuelType && <p className="mt-1 text-sm text-red-600">{errors.fuelType}</p>}
          </div>

          <div>
            <label htmlFor="condition" className="block text-sm font-medium text-slate-700 mb-2">
              Zustand *
            </label>
            <select
              id="condition"
              value={formState.condition}
              onChange={(e) => handleInputChange('condition', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.condition ? 'border-red-500' : 'border-slate-300'
              }`}
            >
              <option value="">Bitte wählen</option>
              {conditions.map(condition => (
                <option key={condition} value={condition}>{condition}</option>
              ))}
            </select>
            {errors.condition && <p className="mt-1 text-sm text-red-600">{errors.condition}</p>}
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="images" className="block text-sm font-medium text-slate-700 mb-2">
            Fahrzeugbilder (optional)
          </label>
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
            <input
              ref={fileInputRef}
              type="file"
              id="images"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Bilder auswählen
            </button>
            <p className="text-sm text-slate-500 mt-2">
              oder Dateien hierher ziehen (max. 5 Bilder)
            </p>
            {formState.images.length > 0 && (
              <div className="mt-4">
                <p className="text-sm text-slate-600">
                  {formState.images.length} Bild(er) ausgewählt
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              value={formState.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.name ? 'border-red-500' : 'border-slate-300'
              }`}
              placeholder="Ihr vollständiger Name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              E-Mail *
            </label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.email ? 'border-red-500' : 'border-slate-300'
              }`}
              placeholder="ihre.email@beispiel.de"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div className="md:col-span-2">
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
              Telefonnummer *
            </label>
            <input
              type="tel"
              id="phone"
              value={formState.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.phone ? 'border-red-500' : 'border-slate-300'
              }`}
              placeholder="+49 511 123 456"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-xl disabled:shadow-none"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Wird gesendet...
              </span>
            ) : (
              'Kostenlose Bewertung anfordern'
            )}
          </button>
        </div>

        <p className="text-xs text-slate-500 text-center">
          * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nur für die Fahrzeugbewertung verwendet.
        </p>
      </form>
    </div>
  );
}
