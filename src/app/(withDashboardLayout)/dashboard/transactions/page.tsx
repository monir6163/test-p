'use client';
import {
  ArrowDownTrayIcon,
  CheckCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  status: string;
  category: string;
}

export default function TransitionPage() {
  const [showBalance, setShowBalance] = useState(true);
  const [searchTerm] = useState('');
  const [statusFilter] = useState('all');
  const [categoryFilter] = useState('all');
  // dateRange intentionally unused in demo
  void 0;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const pageSize = 10;

  // Extended demo transactions data
  const demoTransactions = [
    {
      id: 1,
      date: '2025-08-10',
      description: 'Payment to John Doe',
      amount: -120.5,
      status: 'completed',
      category: 'payment',
    },
    {
      id: 2,
      date: '2025-08-09',
      description: 'Transfer from Alice',
      amount: 300.0,
      status: 'completed',
      category: 'transfer',
    },
    {
      id: 3,
      date: '2025-08-08',
      description: 'Refund from Store',
      amount: 50.0,
      status: 'pending',
      category: 'refund',
    },
    {
      id: 4,
      date: '2025-08-07',
      description: 'Service Fee',
      amount: -5.0,
      status: 'completed',
      category: 'fee',
    },
    {
      id: 5,
      date: '2025-08-06',
      description: 'Payment to Jane Smith',
      amount: -75.0,
      status: 'failed',
      category: 'payment',
    },
    {
      id: 6,
      date: '2025-08-05',
      description: 'Transfer to Bob',
      amount: -200.0,
      status: 'completed',
      category: 'transfer',
    },
    {
      id: 7,
      date: '2025-08-04',
      description: 'Subscription Fee',
      amount: -15.99,
      status: 'completed',
      category: 'fee',
    },
    {
      id: 8,
      date: '2025-08-03',
      description: 'Payment from Client',
      amount: 450.0,
      status: 'completed',
      category: 'payment',
    },
    {
      id: 9,
      date: '2025-08-02',
      description: 'Refund for Order #123',
      amount: 100.0,
      status: 'completed',
      category: 'refund',
    },
    {
      id: 10,
      date: '2025-08-01',
      description: 'Late Payment Fee',
      amount: -25.0,
      status: 'pending',
      category: 'fee',
    },
    // Add even more to test pagination
    {
      id: 11,
      date: '2025-07-31',
      description: 'Payment to Supplier',
      amount: -320.0,
      status: 'completed',
      category: 'payment',
    },
    {
      id: 12,
      date: '2025-07-30',
      description: 'Transfer from Bank',
      amount: 600.0,
      status: 'completed',
      category: 'transfer',
    },
  ];

  // Filtering logic
  const filteredTransactions = demoTransactions.filter((t) => {
    const matchesStatus = statusFilter === 'all' || t.status === statusFilter;
    const matchesCategory =
      categoryFilter === 'all' || t.category === categoryFilter;
    const matchesSearch =
      !searchTerm ||
      t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(t.id).includes(searchTerm);
    return matchesStatus && matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.max(
    1,
    Math.ceil(filteredTransactions.length / pageSize)
  );
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleExport = (format: 'csv' | 'pdf') => {
    toast.success('Transactions exported successfully!', {
      duration: 2000,
      icon: <CheckCircleIcon className="w-5 h-5 text-green-500" />,
      description: `Exported ${
        filteredTransactions.length
      } transactions as ${format.toUpperCase()}.`,
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between bg-white dark:bg-gray-800/50 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/50 rounded-xl p-6 shadow-lg mb-6"
      >
        <div>
          <h1 className="text-3xl font-bold">Transaction History</h1>
          <p className="text-gray-500">
            View and manage your transaction history
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="btn-glass flex items-center space-x-2 px-4 py-2"
          >
            {showBalance ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
            <span>{showBalance ? 'Hide' : 'Show'} Amounts</span>
          </button>
          <button
            onClick={() => handleExport('csv')}
            className="btn-glass flex items-center space-x-2 px-4 py-2"
          >
            <ArrowDownTrayIcon className="h-5 w-5" /> <span>CSV</span>
          </button>
          <button
            onClick={() => handleExport('pdf')}
            className="btn-glass flex items-center space-x-2 px-4 py-2"
          >
            <ArrowDownTrayIcon className="h-5 w-5" /> <span>PDF</span>
          </button>
        </div>
      </motion.div>

      {/* Transaction List */}
      <div className="glass-card p-0 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-right">Amount</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTransactions.map((t) => (
              <tr
                key={t.id}
                className="hover:glass-card cursor-pointer"
                onClick={() => setSelectedTransaction(t as any)}
              >
                <td className="px-4 py-2">{t.id}</td>
                <td className="px-4 py-2">{t.date}</td>
                <td className="px-4 py-2">{t.description}</td>
                <td className="px-4 py-2 text-right">
                  {showBalance ? (
                    <span
                      className={
                        t.amount < 0 ? 'text-red-500' : 'text-green-600'
                      }
                    >
                      {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount).toFixed(2)}
                    </span>
                  ) : (
                    '••••'
                  )}
                </td>
                <td className="px-4 py-2 capitalize">{t.status}</td>
                <td className="px-4 py-2 capitalize">{t.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between p-4">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Modal for details */}
      {selectedTransaction && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-white/95 via-white/90 to-white/85 dark:from-gray-800/50 dark:via-gray-900/35 dark:to-black/20 backdrop-blur-xl border border-gray-200/60 dark:border-white/15 rounded-2xl p-6 shadow-2xl shadow-black/20 dark:shadow-black/40 w-full max-w-md">
            <button
              className="absolute top-3 right-3"
              onClick={() => setSelectedTransaction(null)}
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold mb-4">Transaction Details</h2>
            <p>
              <strong>ID:</strong> {selectedTransaction.id}
            </p>
            <p>
              <strong>Date:</strong> {selectedTransaction.date}
            </p>
            <p>
              <strong>Description:</strong> {selectedTransaction.description}
            </p>
            <p>
              <strong>Amount:</strong> ${selectedTransaction.amount.toFixed(2)}
            </p>
            <p>
              <strong>Status:</strong> {selectedTransaction.status}
            </p>
            <p>
              <strong>Category:</strong> {selectedTransaction.category}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
