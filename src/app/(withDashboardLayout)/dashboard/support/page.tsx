'use client';
import {
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  ClockIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
// import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useState } from 'react';
export default function SupportPage() {
  const [activeTab, setActiveTab] = useState<'contact' | 'faq' | 'tickets'>(
    'contact'
  );
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // Demo FAQs
  const faqs = [
    {
      id: 1,
      question: 'How do I check my card balance?',
      answer:
        'You can check your card balance on the Dashboard or Cards page. The balance is displayed on each virtual card.',
    },
    {
      id: 2,
      question: "Why can't I see my transaction amounts?",
      answer:
        'For security, you can toggle the visibility of amounts using the eye icon on any page that shows financial information.',
    },
    {
      id: 3,
      question: 'How do I update my phone number?',
      answer:
        "Go to your Profile page and click 'Edit Profile'. You can update your phone number and country code there.",
    },
    {
      id: 4,
      question: 'What should I do if my card is blocked?',
      answer:
        "If your card is blocked, please contact our support team immediately. We'll help you understand the reason and resolve the issue.",
    },
    {
      id: 5,
      question: 'How can I export my transaction history?',
      answer:
        'On the Transactions page, you can export your transaction history in PDF or CSV format using the export buttons.',
    },
  ];

  // Demo tickets state
  const [tickets, setTickets] = useState([
    {
      id: 1,
      subject: 'Card not working',
      message: 'My card is being declined at online stores.',
      status: 'open',
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      subject: 'Unable to login',
      message: 'I forgot my password and cannot reset it.',
      status: 'closed',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
  ]);

  // Demo form state
  const [form, setForm] = useState({
    category: '',
    priority: 'medium',
    subject: '',
    message: '',
  });
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');
    if (!form.category || !form.subject || !form.message) {
      setFormError('Please fill all required fields.');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setTickets((prev) => [
        {
          id: prev.length + 1,
          subject: form.subject,
          message: form.message,
          status: 'open',
          createdAt: new Date().toISOString(),
        },
        ...prev,
      ]);
      setForm({ category: '', priority: 'medium', subject: '', message: '' });
      setSubmitting(false);
      setActiveTab('tickets');
    }, 800);
  };
  console.log('Form submitted:', form);

  const tabs = [
    { id: 'contact', name: 'Contact Support', icon: ChatBubbleLeftRightIcon },
    { id: 'faq', name: 'FAQ', icon: QuestionMarkCircleIcon },
    { id: 'tickets', name: 'My Tickets', icon: EnvelopeIcon },
  ];
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center bg-white dark:bg-gray-800/50 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/50 rounded-xl p-6 shadow-lg mb-6"
      >
        <h1 className="text-3xl font-bold text-day-text dark:text-night-text">
          Support Center
        </h1>
        <p className="text-day-text-muted dark:text-night-text-muted mt-2">
          We're here to help with any questions or issues
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="glass-card p-6 text-center">
          <EnvelopeIcon className="h-8 w-8 mx-auto text-primary-500 mb-3" />
          <h3 className="font-semibold text-day-text dark:text-night-text">
            Email Support
          </h3>
          <p className="text-sm text-day-text-muted dark:text-night-text-muted mt-1">
            support@sarafcard.io
          </p>
          <p className="text-xs text-day-text-muted dark:text-night-text-muted mt-2">
            Response within 24 hours
          </p>
        </div>

        <div className="glass-card p-6 text-center">
          <ChatBubbleLeftRightIcon className="h-8 w-8 mx-auto text-success-500 mb-3" />
          <h3 className="font-semibold text-day-text dark:text-night-text">
            Live Chat
          </h3>
          <p className="text-sm text-day-text-muted dark:text-night-text-muted mt-1">
            Available 9 AM - 6 PM
          </p>
        </div>

        <div className="glass-card p-6 text-center">
          <ClockIcon className="h-8 w-8 mx-auto text-info-500 mb-3" />
          <h3 className="font-semibold text-day-text dark:text-night-text">
            Response Time
          </h3>
          <p className="text-sm text-day-text-muted dark:text-night-text-muted mt-1">
            Average: 2-4 hours
          </p>
          <p className="text-xs text-day-text-muted dark:text-night-text-muted mt-2">
            Monday - Friday
          </p>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-2"
      >
        <nav className="flex space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(tab.id as 'contact' | 'faq' | 'tickets')
              }
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-slate-500 dark:bg-slate-700 text-white'
                  : 'text-muted-foreground hover:bg-muted-foreground/10'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </motion.div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {activeTab === 'contact' && (
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold text-day-text dark:text-night-text mb-6">
              Submit a Support Request
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-day-text dark:text-night-text mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleInputChange}
                    className="input-glass"
                  >
                    <option value="">Select a category</option>
                    <option value="account">Account Issues</option>
                    <option value="cards">Card Problems</option>
                    <option value="transactions">Transaction Questions</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Fees</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-day-text dark:text-night-text mb-2">
                    Priority
                  </label>
                  <select
                    name="priority"
                    value={form.priority}
                    onChange={handleInputChange}
                    className="input-glass"
                  >
                    <option value="low">Low - General questions</option>
                    <option value="medium">Medium - Account issues</option>
                    <option value="high">High - Urgent problems</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-day-text dark:text-night-text mb-2">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleInputChange}
                  placeholder="Brief description of your issue"
                  className="input-glass"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-day-text dark:text-night-text mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleInputChange}
                  placeholder="Please provide detailed information about your issue..."
                  className="input-glass resize-none"
                />
              </div>
              {formError && (
                <p className="mt-1 text-sm text-error-600 dark:text-error-400">
                  {formError}
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary flex items-center space-x-2"
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span>{submitting ? 'Submitting...' : 'Submit Request'}</span>
              </button>
            </form>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold text-day-text dark:text-night-text mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-day-border dark:border-night-border rounded-lg"
                >
                  <button
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)
                    }
                    className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-day-surface-alt dark:hover:bg-night-surface-alt rounded-lg transition-colors"
                  >
                    <span className="font-medium text-day-text dark:text-night-text">
                      {faq.question}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 text-day-text-muted dark:text-night-text-muted transform transition-transform ${
                        expandedFAQ === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedFAQ === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 pb-3"
                    >
                      <p className="text-day-text-muted dark:text-night-text-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tickets' && (
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold text-day-text dark:text-night-text mb-6">
              My Support Tickets
            </h2>
            {tickets.length > 0 ? (
              <div className="space-y-4">
                {tickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="border border-day-border dark:border-night-border rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-day-text dark:text-night-text">
                        {ticket.subject}
                      </h3>
                      <span
                        className={`badge-${
                          ticket.status === 'open' ? 'warning' : 'success'
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </div>
                    <p className="text-sm text-day-text-muted dark:text-night-text-muted mb-2">
                      {ticket.message}
                    </p>
                    <div className="flex items-center justify-between text-xs text-day-text-muted dark:text-night-text-muted">
                      <span>Ticket #{ticket.id}</span>
                      <span>
                        {new Date(ticket.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <EnvelopeIcon className="mx-auto h-12 w-12 text-day-text-muted dark:text-night-text-muted" />
                <h3 className="mt-2 text-sm font-medium text-day-text dark:text-night-text">
                  No support tickets
                </h3>
                <p className="mt-1 text-sm text-day-text-muted dark:text-night-text-muted">
                  You haven't submitted any support requests yet.
                </p>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="btn-primary mt-4"
                >
                  Submit Your First Request
                </button>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
