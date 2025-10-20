'use client';

import {
  BanknotesIcon,
  ClockIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function DashboardIndex() {
  const [showBalance] = useState<boolean>(true);
  const [adminInfo, setAdminInfo] = useState<any>(null);

  useEffect(() => {
    const storedAdminInfo = localStorage.getItem('admin_info');
    if (storedAdminInfo) {
      const parsedAdminInfo = JSON.parse(storedAdminInfo);
      setAdminInfo(parsedAdminInfo);
    }
  }, []);

  // Demo cards data
  const demoCards = [
    {
      id: 'card1',
      cardNumber: '**** **** **** 1234',
      cardHolder: 'John Doe',
      expiry: '12/27',
      balance: 1200.5,
      status: 'active',
    },
    {
      id: 'card2',
      cardNumber: '**** **** **** 5678',
      cardHolder: 'Jane Smith',
      expiry: '09/26',
      balance: 800.0,
      status: 'active',
    },
    {
      id: 'card3',
      cardNumber: '**** **** **** 9012',
      cardHolder: 'Alice Brown',
      expiry: '03/28',
      balance: 500.75,
      status: 'inactive',
    },
  ];

  // Demo transactions for last 10 days
  const today = new Date();
  const demoRecentTransactions = Array.from({ length: 10 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (9 - i));
    const statuses = ['completed', 'pending', 'failed'];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    return {
      timestamp: date,
      voucher_code: `VOUCHER${1000 + i}`,
      id: `${i + 1}`,
      amount: Math.floor(Math.random() * 500) + 50,
      status,
      created_at: date.toISOString(),
    };
  });

  const demoStats = {
    total_vouchers: 120,
    total_revenue: demoRecentTransactions.reduce((sum, t) => sum + t.amount, 0),
    pending_transactions: demoRecentTransactions.filter(
      (t) => t.status === 'pending'
    ).length,
    success_rate:
      (demoRecentTransactions.filter((t) => t.status === 'completed').length /
        demoRecentTransactions.length) *
      100,
    recent_transactions: demoRecentTransactions,
  };

  const stats = [
    {
      name: 'Total Balance',
      value: showBalance
        ? `$${demoCards.reduce((sum, c) => sum + c.balance, 0).toFixed(2)}`
        : '••••••',
      icon: BanknotesIcon,
      color: 'success',
    },
    {
      name: 'Active Cards',
      value: demoCards.filter((c) => c.status === 'active').length,
      icon: CreditCardIcon,
      color: 'metallic',
    },
    {
      name: 'This Month',
      value: 42, // demo
      icon: ClockIcon,
      color: 'info',
    },
  ];

  const cards = demoCards;

  return (
    <div className="min-h-screen bg-night-bg dark:bg-night-bg relative">
      {/* Premium Background Pattern - FIXED with pointer-events-none */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-night-bg via-night-surface to-night-surface-alt dark:from-night-bg dark:via-night-surface dark:to-night-surface-alt" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 relative z-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-night-surface-glass dark:bg-night-surface-glass backdrop-blur-premium border border-night-border dark:border-night-border rounded-2xl shadow-3d-dark p-6 hover:shadow-3d transition-all duration-300"
          >
            <div className="flex items-center">
              <div className="p-4 rounded-xl bg-metallic-gradient shadow-3d-dark">
                <stat.icon className="h-8 w-8 text-night-bg" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-night-text-muted dark:text-night-text-muted">
                  {stat.name}
                </p>
                <p className="text-2xl font-bold text-night-text dark:text-night-text">
                  {stat.value}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cards Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-night-surface-glass dark:bg-night-surface-glass backdrop-blur-premium border border-night-border dark:border-night-border rounded-2xl shadow-3d-dark p-8 mb-6 relative z-10"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-night-text dark:text-night-text">
            Your Cards
          </h2>
          <Link
            href="/dashboard/cards"
            className="text-metallic-silver hover:text-night-text text-sm font-medium transition-colors duration-300"
          >
            View all cards →
          </Link>
        </div>

        {cards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.slice(0, 3).map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="bg-night-surface border border-night-border rounded-xl p-4">
                  <div className="text-lg font-bold">{card.cardNumber}</div>
                  <div className="text-sm">{card.cardHolder}</div>
                  <div className="text-xs text-night-text-muted">
                    Exp: {card.expiry}
                  </div>
                  <div className="mt-2 text-night-text">
                    Balance: {showBalance ? `$${card.balance}` : '••••••'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <CreditCardIcon className="mx-auto h-16 w-16 text-night-text-muted dark:text-night-text-muted" />
            <h3 className="mt-4 text-lg font-medium text-night-text dark:text-night-text">
              No cards found
            </h3>
            <p className="mt-2 text-sm text-night-text-muted dark:text-night-text-muted">
              Contact support to get your first SarafCard.
            </p>
          </div>
        )}
      </motion.div>

      {/* Recent Transactions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-night-surface-glass dark:bg-night-surface-glass backdrop-blur-premium border border-night-border dark:border-night-border rounded-2xl shadow-3d-dark p-8 mb-6 relative z-10"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-night-text dark:text-night-text">
            Recent Activity
          </h2>
          <Link
            href="/dashboard/transactions"
            className="text-metallic-silver hover:text-night-text text-sm font-medium transition-colors duration-300"
          >
            View all transactions →
          </Link>
        </div>

        <div className="space-y-4">
          {demoStats.recent_transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex flex-col">
                <span className="font-medium text-foreground">
                  {transaction.voucher_code}
                </span>
                <span className="text-sm text-muted-foreground">
                  {new Date(transaction.timestamp).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    transaction.status === 'completed'
                      ? 'bg-green-100 text-green-700'
                      : transaction.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {transaction.status}
                </span>
                <span className="font-medium text-foreground">
                  ${transaction.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-night-surface-glass dark:bg-night-surface-glass backdrop-blur-premium border border-night-border dark:border-night-border rounded-2xl shadow-3d-dark p-8 relative z-10"
      >
        <h2 className="text-2xl font-semibold text-night-text dark:text-night-text mb-6">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/dashboard/cards"
            className="bg-night-surface-glass dark:bg-night-surface-glass backdrop-blur-premium border border-night-border dark:border-night-border rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-3d-dark hover:shadow-3d text-night-text dark:text-night-text hover:text-metallic-silver"
          >
            <CreditCardIcon className="h-8 w-8 mx-auto mb-2" />
            <span className="text-sm font-medium">My Cards</span>
          </Link>

          <Link
            href="/dashboard/transactions"
            className="bg-night-surface-glass dark:bg-night-surface-glass backdrop-blur-premium border border-night-border dark:border-night-border rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-3d-dark hover:shadow-3d text-night-text dark:text-night-text hover:text-metallic-silver"
          >
            <ClockIcon className="h-8 w-8 mx-auto mb-2" />
            <span className="text-sm font-medium">Transactions</span>
          </Link>

          <Link
            href="/dashboard/profile"
            className="bg-night-surface-glass dark:bg-night-surface-glass backdrop-blur-premium border border-night-border dark:border-night-border rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-3d-dark hover:shadow-3d text-night-text dark:text-night-text hover:text-metallic-silver"
          >
            <div className="h-8 w-8 mx-auto mb-2 rounded-full bg-metallic-gradient flex items-center justify-center shadow-3d-dark">
              <span className="text-night-bg text-sm font-bold">
                {adminInfo?.username || 'U'}
              </span>
            </div>
            <span className="text-sm font-medium">Profile</span>
          </Link>

          <Link
            href="/dashboard/support"
            className="bg-night-surface-glass dark:bg-night-surface-glass backdrop-blur-premium border border-night-border dark:border-night-border rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-3d-dark hover:shadow-3d text-night-text dark:text-night-text hover:text-metallic-silver"
          >
            <div className="h-8 w-8 mx-auto mb-2 rounded-full bg-metallic-gradient flex items-center justify-center shadow-3d-dark">
              <span className="text-night-bg text-lg font-bold">24/7</span>
            </div>
            <span className="text-sm font-medium">Support</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
