'use client';
// import { CountryCallingCodeSelector } from '@/components/shared/CountryCallingCodeSelector';
// import { CountrySelector } from '@/components/shared/CountrySelector';
// import { useCountryData } from '@/hooks/useCountryData';
// import { useRegisterPartnerMutation } from '@/redux/api/userApi';
// import { CountryData } from '@/redux/features/countrySlice';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import PrivacyPolicyModal from './PrivacyPolicyModal';

interface RegisterTabProps {
  onRegisterSuccess?: () => void;
}

export default function RegisterTab({}: RegisterTabProps) {
  // const [registerPartner, { isLoading }] = useRegisterPartnerMutation();
  // const { getCountryByName: _getCountryByName } = useCountryData();
  // const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(
  //   null
  // );
  // const [selectedCallingCodeCountry, setSelectedCallingCodeCountry] =
  //   useState<CountryData | null>(null);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [formData, setFormData] = useState({
    company_name: '',
    ceo_first_name: '',
    ceo_last_name: '',
    ceo_email: '',
    account_email: '',
    account_manager_first_name: '',
    account_manager_last_name: '',
    account_manager_email: '',
    country: '',
    country_calling_code: '',
    country_code: '',
    phone_number: '',
    business_description: '',
    company_website: '',
    street_address: '',
    street_address_2: '',
    zip_code: '',
    city: '',
    state: '',
    status: 'inactive',
    is_terms_accepted: false,
    is_policy_accepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle escape key to close modals
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowTermsModal(false);
        setShowPrivacyModal(false);
      }
    };

    if (showTermsModal || showPrivacyModal) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showTermsModal, showPrivacyModal]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    // For phone number field, only allow numeric characters
    let processedValue = value;
    if (name === 'phone_number' && type !== 'checkbox') {
      // Remove any non-numeric characters
      processedValue = value.replace(/[^0-9]/g, '');
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : processedValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // const handleCountrySelect = (country: CountryData) => {
  //   setSelectedCountry(country);

  //   setFormData((prev) => ({
  //     ...prev,
  //     country: country.country_name,
  //     country_code: country.country_code,
  //   }));

  //   if (errors.country) {
  //     setErrors((prev) => ({
  //       ...prev,
  //       country: '',
  //       country_code: '',
  //     }));
  //   }
  // };

  // const handleCallingCodeSelect = (country: CountryData) => {
  //   setSelectedCallingCodeCountry(country);

  //   setFormData((prev) => ({
  //     ...prev,
  //     country_calling_code: country.country_calling_code,
  //   }));

  //   if (errors.country_calling_code) {
  //     setErrors((prev) => ({
  //       ...prev,
  //       country_calling_code: '',
  //     }));
  //   }
  // };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Validate all required fields
    if (!formData.company_name.trim())
      newErrors.company_name = 'Company name is required';
    if (!formData.ceo_first_name.trim())
      newErrors.ceo_first_name = 'CEO first name is required';
    if (!formData.ceo_last_name.trim())
      newErrors.ceo_last_name = 'CEO last name is required';
    if (!formData.ceo_email.trim()) {
      newErrors.ceo_email = 'CEO email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.ceo_email)) {
      newErrors.ceo_email = 'Invalid CEO email format';
    }
    if (!formData.account_email.trim()) {
      newErrors.account_email = 'Account email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.account_email)) {
      newErrors.account_email = 'Invalid account email format';
    }
    if (!formData.account_manager_first_name.trim())
      newErrors.account_manager_first_name =
        'Account manager first name is required';
    if (!formData.account_manager_last_name.trim())
      newErrors.account_manager_last_name =
        'Account manager last name is required';
    if (!formData.account_manager_email.trim()) {
      newErrors.account_manager_email = 'Account manager email is required';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.account_manager_email)
    ) {
      newErrors.account_manager_email = 'Invalid account manager email format';
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.country_calling_code.trim())
      newErrors.country_calling_code = 'Country calling code is required';
    if (!formData.country_code.trim())
      newErrors.country_code = 'Country code is required';
    if (!formData.phone_number.trim())
      newErrors.phone_number = 'Phone number is required';
    if (!formData.business_description.trim())
      newErrors.business_description = 'Business description is required';

    // Validate company website if provided (optional field)
    if (
      formData.company_website.trim() &&
      !/^https?:\/\/.+\..+/.test(formData.company_website.trim())
    ) {
      newErrors.company_website =
        'Please enter a valid website URL (e.g., https://example.com)';
    }

    if (!formData.street_address.trim())
      newErrors.street_address = 'Street address is required';
    if (!formData.zip_code.trim()) newErrors.zip_code = 'ZIP code is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.is_terms_accepted)
      newErrors.is_terms_accepted = 'You must accept the Terms and Conditions';
    if (!formData.is_policy_accepted)
      newErrors.is_policy_accepted = 'You must accept the Privacy Policy';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Prepare API payload with combined names, excluding individual name fields
    const apiPayload = {
      company_name: formData.company_name,
      ceo_name: `${formData.ceo_first_name.trim()} ${formData.ceo_last_name.trim()}`,
      ceo_email: formData.ceo_email,
      account_email: formData.account_email,
      account_manager_name: `${formData.account_manager_first_name.trim()} ${formData.account_manager_last_name.trim()}`,
      account_manager_email: formData.account_manager_email,
      country: formData.country,
      country_calling_code: formData.country_calling_code,
      country_code: formData.country_code,
      phone_number: formData.phone_number,
      business_description: formData.business_description,
      company_website: formData.company_website,
      street_address: formData.street_address,
      street_address_2: formData.street_address_2,
      zip_code: formData.zip_code,
      city: formData.city,
      state: formData.state,
      status: formData.status,
      is_terms_accepted: formData.is_terms_accepted,
      is_policy_accepted: formData.is_policy_accepted,
    };

    // Use apiPayload for future API call
    void apiPayload;

    //   try {
    //     const response = await registerPartner(apiPayload).unwrap();
    //     if (response?.statusCode === 200 || response?.statusCode === 201) {
    //       toast.success('Partner registration successful!');
    //       setSelectedCountry(null);
    //       setSelectedCallingCodeCountry(null);
    //       setFormData({
    //         company_name: '',
    //         ceo_first_name: '',
    //         ceo_last_name: '',
    //         ceo_email: '',
    //         account_email: '',
    //         account_manager_first_name: '',
    //         account_manager_last_name: '',
    //         account_manager_email: '',
    //         country: '',
    //         country_calling_code: '',
    //         country_code: '',
    //         phone_number: '',
    //         business_description: '',
    //         company_website: '',
    //         street_address: '',
    //         zip_code: '',
    //         street_address_2: '',
    //         city: '',
    //         state: '',
    //         status: 'inactive',
    //         is_terms_accepted: false,
    //         is_policy_accepted: false,
    //       });
    //     } else {
    //       toast.error(
    //         response?.message || 'Registration failed. Please try again.'
    //       );
    //     }
    //   } catch (error: any) {
    //     console.error('💥 Registration failed:', error);
    //     const errorMessage =
    //       error?.data?.message ||
    //       error?.message ||
    //       'Registration failed. Please try again.';
    //     toast.error(errorMessage);
    //   }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company Name */}
        {/* <div className="space-y-2">
          <label
            htmlFor="company_name"
            className="block text-sm font-medium text-foreground/90 dark:text-foreground/90"
          >
            Company Name *
          </label>
          <div className="relative">
            <FiBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 z-10 pointer-events-none" />
            <GlassInput
              type="text"
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={handleInputChange}
              placeholder="e. g. Your Company Inc."
              className="pl-12"
              required
            />
          </div>
          {errors.company_name && (
            <span className="text-destructive text-xs mt-1 drop-shadow-sm">
              {errors.company_name}
            </span>
          )}
        </div> */}
        {/* Account Email */}
        {/* <div className="space-y-2">
          <label
            htmlFor="account_email"
            className="block text-sm font-medium text-foreground/90 dark:text-foreground/90"
          >
            Account Email (Login ID) *
          </label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 z-10 pointer-events-none" />
            <GlassInput
              type="email"
              id="account_email"
              name="account_email"
              value={formData.account_email}
              onChange={handleInputChange}
              placeholder="company@yourcompany.com"
              className="pl-12"
              required
            />
          </div>
          {errors.account_email && (
            <span className="text-destructive text-xs mt-1 drop-shadow-sm">
              {errors.account_email}
            </span>
          )}
        </div> */}
        {/* CEO Details Section */}
        {/* <div className="border border-gray-200/40 dark:border-gray-700/40 rounded-lg p-4 space-y-4 bg-gray-50/20 dark:bg-gray-800/20">
          <h3 className="text-lg font-semibold text-foreground/90 dark:text-foreground/90 border-b border-gray-200/30 dark:border-gray-700/30 pb-2">
            CEO Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="ceo_first_name"
                className="block text-sm font-medium text-foreground/90 dark:text-foreground/90"
              >
                First Name *
              </label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 z-10 pointer-events-none" />
                <GlassInput
                  type="text"
                  id="ceo_first_name"
                  name="ceo_first_name"
                  value={formData.ceo_first_name}
                  onChange={handleInputChange}
                  placeholder="John"
                  className="pl-12"
                  required
                />
              </div>
              {errors.ceo_first_name && (
                <span className="text-destructive text-xs mt-1 drop-shadow-sm">
                  {errors.ceo_first_name}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="ceo_last_name"
                className="block text-sm font-medium text-foreground/90 dark:text-foreground/90"
              >
                Last Name *
              </label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 z-10 pointer-events-none" />
                <GlassInput
                  type="text"
                  id="ceo_last_name"
                  name="ceo_last_name"
                  value={formData.ceo_last_name}
                  onChange={handleInputChange}
                  placeholder="Smith"
                  className="pl-12"
                  required
                />
              </div>
              {errors.ceo_last_name && (
                <span className="text-destructive text-xs mt-1 drop-shadow-sm">
                  {errors.ceo_last_name}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="ceo_email"
              className="block text-sm font-medium text-foreground/90 dark:text-foreground/90"
            >
              Email *
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 z-10 pointer-events-none" />
              <GlassInput
                type="email"
                id="ceo_email"
                name="ceo_email"
                value={formData.ceo_email}
                onChange={handleInputChange}
                placeholder="ceo@company.com"
                className="pl-12"
                required
              />
            </div>
            {errors.ceo_email && (
              <span className="text-destructive text-xs mt-1 drop-shadow-sm">
                {errors.ceo_email}
              </span>
            )}
          </div>
        </div> */}
        {/* Account Manager Details Section */}
        {/* <div className="border border-gray-200/40 dark:border-gray-700/40 rounded-lg p-4 space-y-4 bg-gray-50/20 dark:bg-gray-800/20">
          <h3 className="text-lg font-semibold text-foreground/90 dark:text-foreground/90 border-b border-gray-200/30 dark:border-gray-700/30 pb-2">
            Account Manager Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="account_manager_first_name"
                className="block text-sm font-medium text-foreground/90 dark:text-foreground/90"
              >
                First Name *
              </label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 z-10 pointer-events-none" />
                <GlassInput
                  type="text"
                  id="account_manager_first_name"
                  name="account_manager_first_name"
                  value={formData.account_manager_first_name}
                  onChange={handleInputChange}
                  placeholder="Sarah"
                  className="pl-12"
                  required
                />
              </div>
              {errors.account_manager_first_name && (
                <span className="text-destructive text-xs mt-1 drop-shadow-sm">
                  {errors.account_manager_first_name}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="account_manager_last_name"
                className="block text-sm font-medium text-foreground/90 dark:text-foreground/90"
              >
                Last Name *
              </label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 z-10 pointer-events-none" />
                <GlassInput
                  type="text"
                  id="account_manager_last_name"
                  name="account_manager_last_name"
                  value={formData.account_manager_last_name}
                  onChange={handleInputChange}
                  placeholder="Johnson"
                  className="pl-12"
                  required
                />
              </div>
              {errors.account_manager_last_name && (
                <span className="text-destructive text-xs mt-1 drop-shadow-sm">
                  {errors.account_manager_last_name}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="account_manager_email"
              className="block text-sm font-medium text-foreground/90 dark:text-foreground/90"
            >
              Email *
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 z-10 pointer-events-none" />
              <GlassInput
                type="email"
                id="account_manager_email"
                name="account_manager_email"
                value={formData.account_manager_email}
                onChange={handleInputChange}
                placeholder="manager@company.com"
                className="pl-12"
                required
              />
            </div>
            {errors.account_manager_email && (
              <span className="text-destructive text-xs mt-1 drop-shadow-sm">
                {errors.account_manager_email}
              </span>
            )}
          </div>
        </div> */}
        {/* Business and Contact Information Section */}
        {/* Terms and Privacy Policy Checkboxes */}
        <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="is_terms_accepted"
              name="is_terms_accepted"
              checked={formData.is_terms_accepted}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-brand-gold bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded focus:ring-brand-gold focus:ring-2"
              required
            />
            <label
              htmlFor="is_terms_accepted"
              className="text-sm text-gray-700 dark:text-gray-300 flex-1"
            >
              <span>
                I accept the{' '}
                <button
                  type="button"
                  onClick={() => setShowTermsModal(true)}
                  className="text-brand-gold hover:text-brand-gold/80 underline hover:no-underline transition-all"
                >
                  Terms and Conditions
                </button>{' '}
                <span className="text-red-500">*</span>
              </span>
            </label>
          </div>
          {errors.is_terms_accepted && (
            <span className="text-destructive text-xs ml-7 drop-shadow-sm">
              {errors.is_terms_accepted}
            </span>
          )}

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="is_policy_accepted"
              name="is_policy_accepted"
              checked={formData.is_policy_accepted}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-brand-gold bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded focus:ring-brand-gold focus:ring-2"
              required
            />
            <label
              htmlFor="is_policy_accepted"
              className="text-sm text-gray-700 dark:text-gray-300 flex-1"
            >
              <span>
                I accept the{' '}
                <button
                  type="button"
                  onClick={() => setShowPrivacyModal(true)}
                  className="text-brand-gold hover:text-brand-gold/80 underline hover:no-underline transition-all"
                >
                  Privacy Policy
                </button>{' '}
                <span className="text-red-500">*</span>
              </span>
            </label>
          </div>
          {errors.is_policy_accepted && (
            <span className="text-destructive text-xs ml-7 drop-shadow-sm">
              {errors.is_policy_accepted}
            </span>
          )}
        </div>
        <button
          type="submit"
          // disabled={isLoading}
          className="w-full p-4 bg-white dark:bg-gray-800/50 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/50 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:border-transparent dark:hover:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
        >
          <div className="relative z-10 flex items-center gap-3">
            {/* {isLoading ? (
              <>
                <ArrowPathIcon className="w-5 h-5 animate-spin" />
                <span>Creating Partner Account...</span>
              </>
            ) : (
              <>
                <FiSend className="w-5 h-5" />
                <span>Create Partner Account</span>
              </>
            )} */}
            Create Partner Account
          </div>
        </button>
      </form>

      {/* Terms and Conditions Modal */}
      {showTermsModal && (
        <div
          className="fixed inset-0 px-1 py-4 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto"
          onClick={() => setShowTermsModal(false)}
        >
          <div
            className="bg-gray-900/95 backdrop-blur-xl border border-gray-600 rounded-xl w-full max-w-4xl max-h-[80vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-600">
              <h2 className="text-xl font-bold text-white">
                Terms and Conditions
              </h2>
              <button
                onClick={() => setShowTermsModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 text-gray-300 space-y-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  SarafCard Partner Service Agreement
                </h2>
                <p className="text-sm italic text-gray-400">
                  Last Updated: September 8, 2025
                </p>
                <p className="mt-2">
                  This Partner Service Agreement (the "Agreement") sets forth
                  the terms and conditions under which SwiftReload Inc., an
                  Ontario, Canada corporation doing business as SarafCard.io
                  ("SarafCard," "we," "us," or "our"), provides access to its
                  voucher distribution services to approved business entities
                  ("Partner," "you," or "your").
                </p>
                <p className="mt-2">
                  By creating a Partner Account, funding a wallet, or accessing
                  the SarafCard Partner Portal, you acknowledge that you have
                  read, understood, and agree to be bound by this Agreement.
                </p>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  1. Scope of Services
                </h3>
                <div className="space-y-3">
                  <p>
                    <strong>1.1 Voucher Services.</strong> SarafCard provides
                    Partners with access to digital prepaid SarafCard Vouchers
                    ("Vouchers") via the Partner Portal or API. Vouchers are
                    redeemable exclusively through SarafCard.io against prepaid
                    card services offered by SarafCard.
                  </p>
                  <p>
                    <strong>1.2 No Customer Relationship.</strong> Partner
                    resells Vouchers only. End-customer redemption and all
                    cardholder servicing is handled solely by SarafCard. Partner
                    does not and will not have access to end-customer personal
                    information.
                  </p>
                  <p>
                    <strong>1.3 Exclusions.</strong> This Agreement does not
                    authorize Partner to:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Issue prepaid cards;</li>
                    <li>Conduct KYC on behalf of SarafCard;</li>
                    <li>
                      Represent itself as SarafCard's agent, bank, or regulated
                      entity;
                    </li>
                    <li>
                      Offer white-labeled or modified versions of SarafCard
                      services.
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  2. Eligibility and Onboarding
                </h3>
                <div className="space-y-3">
                  <p>
                    <strong>2.1 Business Use Only.</strong> The Services are
                    available solely to legally incorporated business entities
                    in good standing. Personal use is prohibited.
                  </p>
                  <p>
                    <strong>2.2 Authority.</strong> The individual registering
                    an account represents they are authorized to bind the
                    Partner organization.
                  </p>
                  <p>
                    <strong>2.3 Onboarding Information.</strong> Partner shall
                    provide complete and accurate business information,
                    including ownership, business activities, and principal
                    place of business.
                  </p>
                  <p>
                    <strong>2.4 Verification.</strong> SarafCard may conduct due
                    diligence, request additional documents, and perform
                    sanctions checks at onboarding and periodically thereafter.
                    Failure to cooperate may result in suspension.
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  3. Ordering and Delivery of Vouchers
                </h3>
                <div className="space-y-3">
                  <p>
                    <strong>3.1 Ordering.</strong> Partner may place orders for
                    Vouchers via the Partner Portal or API. Each order will
                    display applicable costs and fees before confirmation.
                  </p>
                  <p>
                    <strong>3.2 Delivery.</strong> Upon confirmed payment,
                    Voucher codes or links will be delivered electronically to
                    Partner's account. Risk of loss passes to Partner upon
                    delivery.
                  </p>
                  <p>
                    <strong>3.3 Resale.</strong> Partner may resell Vouchers to
                    its customers subject to the restrictions in this Agreement.
                    Partner must handle Voucher codes securely and disclose to
                    its customers any redemption limitations or expiry terms.
                  </p>
                  <p>
                    <strong>3.4 Modification.</strong> SarafCard reserves the
                    right to add, modify, or discontinue Voucher denominations,
                    supported geographies, or redemption rules. Advance notice
                    will be provided where reasonably possible.
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  4. Funding, Fees, and Taxes
                </h3>
                <div className="space-y-3">
                  <p>
                    <strong>4.1 Prefunding.</strong> Partner must prefund its
                    SarafCard Wallet in order to purchase Vouchers.
                  </p>
                  <p>
                    <strong>4.2 Finality of Deposits.</strong> All prefunding
                    deposits are final, non-refundable, and non-withdrawable.
                    Deposited funds must be used to purchase Vouchers.
                  </p>
                  <p>
                    <strong>4.3 Limited Refund Exception.</strong> Refunds of
                    unused balances are permitted only if SarafCard is
                    permanently unable to deliver Vouchers due to program
                    suspension, regulatory prohibition, or force majeure.
                  </p>
                  <p>
                    <strong>4.4 Fees.</strong> Partner shall pay the face value
                    of Vouchers purchased, minus any agreed wholesale discount,
                    plus any transaction or processing fees disclosed in the
                    Partner Portal.
                  </p>
                  <p>
                    <strong>4.5 Taxes.</strong> Partner is solely responsible
                    for determining, collecting, and remitting any applicable
                    taxes in relation to its resale of Vouchers. SarafCard does
                    not provide tax advice.
                  </p>
                  <p>
                    <strong>4.6 Price Changes.</strong> SarafCard may revise
                    fees, discounts, or product pricing at any time by updating
                    the Pricing Schedule in the Portal with 3 days' notice,
                    unless earlier required by law or provider mandate.
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  5. Compliance Obligations
                </h3>
                <div className="space-y-3">
                  <p>
                    <strong>5.1 AML/FTC.</strong> Partner must comply with
                    SarafCard's Anti-Money Laundering (AML) Policy and Financial
                    Transaction Compliance (FTC) Policy, which are incorporated
                    by reference.
                  </p>
                  <p>
                    <strong>5.2 Prohibited Sales.</strong> Partner may not
                    resell Vouchers to:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Persons or entities in sanctioned countries;</li>
                    <li>
                      Individuals or organizations on sanctions or terrorist
                      lists (Canada, UN, EU, OFAC);
                    </li>
                    <li>
                      Any person or entity involved in unlawful activities
                      including money laundering, fraud, or terrorist financing.
                    </li>
                  </ul>
                  <p>
                    <strong>5.3 Records.</strong> Partner shall maintain
                    complete records of Voucher sales and provide evidence of
                    compliance upon SarafCard's request.
                  </p>
                  <p>
                    <strong>5.4 Audit Rights.</strong> SarafCard may audit
                    Partner's compliance with this Agreement.
                  </p>
                  <p>
                    <strong>5.5 Suspension.</strong> SarafCard may suspend or
                    terminate Partner's account if non-compliance is suspected.
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  6. Data and Privacy
                </h3>
                <div className="space-y-3">
                  <p>
                    <strong>6.1 No End-Customer Data.</strong> SarafCard does
                    not share redemption data or end-customer personal
                    information with Partners.
                  </p>
                  <p>
                    <strong>6.2 Partner Data.</strong> SarafCard may process
                    Partner-provided data for purposes of service delivery,
                    compliance, fraud prevention, and operations.
                  </p>
                  <p>
                    <strong>6.3 Privacy Principles.</strong> SarafCard applies
                    international best practices for privacy and data protection
                    but is not subject to or bound by GDPR, CCPA, or other
                    jurisdiction-specific regulations. Partner is responsible
                    for its own legal obligations.
                  </p>
                  <p>
                    <strong>6.4 Aggregated Data.</strong> SarafCard may create
                    anonymized or aggregated data for reporting and analytics.
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  7. Intellectual Property
                </h3>
                <div className="space-y-3">
                  <p>
                    <strong>7.1 Ownership.</strong> SarafCard retains all rights
                    in its Platform, Vouchers, APIs, and Marks.
                  </p>
                  <p>
                    <strong>7.2 License to Partner.</strong> SarafCard grants
                    Partner a limited, revocable license to use SarafCard Marks
                    solely for Voucher resale, subject to Brand Guidelines.
                  </p>
                  <p>
                    <strong>7.3 License to SarafCard.</strong> Partner grants
                    SarafCard the right to use Partner's name and logo for
                    identification as a reseller.
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  8. Confidentiality (NDA)
                </h3>
                <div className="space-y-3">
                  <p>
                    <strong>8.1 Definition.</strong> "Confidential Information"
                    includes non-public technical, business, financial, and
                    operational information, including pricing, APIs, and
                    product roadmaps.
                  </p>
                  <p>
                    <strong>8.2 Obligations.</strong> The receiving Party must
                    maintain confidentiality, use the information only for
                    purposes of this Agreement, and not disclose it without
                    prior written consent.
                  </p>
                  <p>
                    <strong>8.3 Exclusions.</strong> Information that is public,
                    independently developed, or lawfully obtained from third
                    parties is not Confidential Information.
                  </p>
                  <p>
                    <strong>8.4 Duration.</strong> Confidentiality obligations
                    survive for five (5) years after termination, or
                    indefinitely for trade secrets.
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  9. Service Levels and Security
                </h3>
                <div className="space-y-3">
                  <p>
                    <strong>9.1 Availability.</strong> SarafCard uses
                    commercially reasonable efforts to ensure uptime but does
                    not guarantee uninterrupted access.
                  </p>
                  <p>
                    <strong>9.2 Updates.</strong> SarafCard may update or change
                    the Services at any time. Advance notice will be provided
                    for changes materially affecting Partner's use.
                  </p>
                  <p>
                    <strong>9.3 Security.</strong> SarafCard maintains
                    industry-standard safeguards. Partner must implement
                    security measures for protecting Voucher codes and account
                    credentials.
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  10. Finality of Transactions
                </h3>
                <div className="space-y-3">
                  <p>
                    <strong>10.1 No Refunds.</strong> All Voucher purchases and
                    prefunding deposits are final. Partner may not cancel,
                    refund, or reverse transactions.
                  </p>
                  <p>
                    <strong>10.2 Operational Errors.</strong> Only in cases
                    where SarafCard is unable to provision Vouchers due to
                    operational or regulatory failure will refunds of unused
                    balances be made.
                  </p>
                  <p>
                    <strong>10.3 Partner Misdelivery.</strong> SarafCard bears
                    no responsibility for lost, exposed, or misdirected Vouchers
                    once delivered to Partner.
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  11. Representations and Warranties
                </h3>
                <p>Partner represents and warrants that it:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Is a validly incorporated business in good standing;</li>
                  <li>
                    Will comply with this Agreement, applicable laws, and
                    sanctions rules;
                  </li>
                  <li>
                    Will not sell Vouchers to prohibited persons or
                    jurisdictions;
                  </li>
                  <li>
                    Will implement appropriate security and compliance controls.
                  </li>
                </ul>
                <p className="mt-3">
                  SarafCard disclaims all warranties not expressly stated
                  herein, including implied warranties of merchantability,
                  fitness for purpose, or non-infringement.
                </p>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  12. Indemnification
                </h3>
                <div className="space-y-3">
                  <p>
                    <strong>12.1 By Partner.</strong> Partner shall indemnify
                    and hold SarafCard harmless from any claims, damages, or
                    liabilities arising from:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Partner's resale activities;</li>
                    <li>
                      Non-compliance with sanctions, AML, or FTC policies;
                    </li>
                    <li>Breach of confidentiality obligations;</li>
                    <li>Misuse of Vouchers.</li>
                  </ul>
                  <p>
                    <strong>12.2 By SarafCard.</strong> SarafCard will indemnify
                    Partner against third-party IP infringement claims relating
                    to the Platform (excluding misuse or unauthorized
                    modifications by Partner).
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  13. Limitation of Liability
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Neither Party shall be liable for indirect, incidental, or
                    consequential damages.
                  </li>
                  <li>
                    SarafCard's aggregate liability shall not exceed the total
                    fees paid by Partner in the three (3) months preceding a
                    claim.
                  </li>
                  <li>
                    The above limits do not apply to Partner's indemnification
                    obligations, confidentiality breaches, or AML/FTC
                    violations.
                  </li>
                </ul>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  14. Term and Termination
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    This Agreement takes effect upon account creation and
                    remains in force until terminated.
                  </li>
                  <li>
                    Either Party may terminate with thirty (30) days' notice.
                  </li>
                  <li>
                    SarafCard may terminate immediately for breach of
                    compliance, confidentiality, or sanctions obligations.
                  </li>
                  <li>
                    Upon termination, Partner's account will be closed and
                    unused balances forfeited unless Section 4.3 applies.
                  </li>
                </ul>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  15. Governing Law and Disputes
                </h3>
                <p>
                  This Agreement is governed by the laws of Ontario, Canada. The
                  Parties submit to the exclusive jurisdiction of the Ontario
                  courts.
                </p>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  16. General Provisions
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Entire Agreement.</strong> This Agreement, including
                    referenced policies, is the entire agreement between the
                    Parties.
                  </li>
                  <li>
                    <strong>Amendments.</strong> SarafCard may update this
                    Agreement by notice via the Portal or email. Continued use
                    constitutes acceptance.
                  </li>
                  <li>
                    <strong>Assignment.</strong> Partner may not assign this
                    Agreement without SarafCard's consent. SarafCard may assign
                    to affiliates or successors.
                  </li>
                  <li>
                    <strong>Force Majeure.</strong> Neither Party is liable for
                    delays caused by events beyond reasonable control.
                  </li>
                  <li>
                    <strong>Independent Contractors.</strong> The Parties are
                    independent contractors; no joint venture or agency is
                    created.
                  </li>
                  <li>
                    <strong>Severability.</strong> If any term is invalid, the
                    remainder remains enforceable.
                  </li>
                  <li>
                    <strong>Notices.</strong> Communications will be sent via
                    the Partner Portal, email, or other contact details
                    provided.
                  </li>
                </ul>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  17. Definitions
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>"AML / FTC Policies":</strong> SarafCard's
                    Anti-Money Laundering and Financial Transaction Compliance
                    policies.
                  </li>
                  <li>
                    <strong>"Confidential Information":</strong> Non-public
                    data, business, technical, or pricing information.
                  </li>
                  <li>
                    <strong>"End-Customer":</strong> An individual redeeming a
                    Voucher through SarafCard.io.
                  </li>
                  <li>
                    <strong>"Partner Portal":</strong> SarafCard's online system
                    for Partner ordering and management.
                  </li>
                  <li>
                    <strong>"Pricing Schedule":</strong> Current wholesale
                    pricing and fee schedule.
                  </li>
                  <li>
                    <strong>"Sanctions":</strong> Restrictions imposed by UN,
                    Canada, EU, OFAC, or other relevant authorities.
                  </li>
                  <li>
                    <strong>"Voucher":</strong> A prepaid, non-cash instrument
                    issued by SarafCard and redeemable solely on SarafCard.io.
                  </li>
                </ul>
              </div>

              <hr className="my-6 border-gray-600" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Binding Effect
                </h3>
                <p>
                  By creating a Partner Account, funding your wallet, or
                  purchasing Vouchers, you agree to this Agreement. No signature
                  is required.
                </p>
              </div>
            </div>
            <div className="px-1 py-2 lg:p-6 border-t border-gray-600 flex justify-end space-x-4">
              <button
                onClick={() => setShowTermsModal(false)}
                className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setFormData((prev) => ({ ...prev, is_terms_accepted: true }));
                  setShowTermsModal(false);
                  toast.success('Terms and Conditions accepted');
                }}
                className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors"
              >
                Accept Terms
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        onAccept={() =>
          setFormData((prev) => ({ ...prev, is_policy_accepted: true }))
        }
      />
    </div>
  );
}
