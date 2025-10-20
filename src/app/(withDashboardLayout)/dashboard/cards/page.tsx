'use client';
import {
  EyeIcon,
  EyeSlashIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

import { motion } from 'framer-motion';
import { useState } from 'react';
import VirtualCard from './VirtualCard';

export default function CardsPage() {
  const [showBalance, setShowBalance] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Demo cards data
  const cards = [
    {
      id: 'card1',
      maskedNumber: '**** **** **** 1234',
      type: 'visa',
      status: 'active',
      balance: 1200.5,
      expiryDate: '2027-12-31',
      currency: 'USD',
    },
    {
      id: 'card2',
      maskedNumber: '**** **** **** 5678',
      type: 'mastercard',
      status: 'inactive',
      balance: 800.0,
      expiryDate: '2026-09-30',
      currency: 'USD',
    },
    {
      id: 'card3',
      maskedNumber: '**** **** **** 9012',
      type: 'visa',
      status: 'blocked',
      balance: 500.75,
      expiryDate: '2028-03-31',
      currency: 'USD',
    },
    {
      id: 'card4',
      maskedNumber: '**** **** **** 3456',
      type: 'mastercard',
      status: 'active',
      balance: 300.0,
      expiryDate: '2027-06-30',
      currency: 'USD',
    },
    {
      id: 'card5',
      maskedNumber: '**** **** **** 7890',
      type: 'visa',
      status: 'expired',
      balance: 0.0,
      expiryDate: '2025-01-31',
      currency: 'USD',
    },
  ];

  // Filter cards based on search and status
  const filteredCards = cards.filter((card) => {
    const matchesSearch =
      card.maskedNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || card.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusCounts = {
    all: cards.length,
    active: cards.filter((card) => card.status === 'active').length,
    inactive: cards.filter((card) => card.status === 'inactive').length,
    blocked: cards.filter((card) => card.status === 'blocked').length,
    expired: cards.filter((card) => card.status === 'expired').length,
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
          <h1 className="text-3xl font-bold text-day-text dark:text-night-text">
            My Cards
          </h1>
          <p className="text-day-text-muted dark:text-night-text-muted">
            Manage and view your virtual cards
          </p>
        </div>

        <button
          onClick={() => setShowBalance(!showBalance)}
          className="btn-glass flex items-center space-x-2 px-4 py-2"
        >
          {showBalance ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
          <span>{showBalance ? 'Hide' : 'Show'} Balances</span>
        </button>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-day-text-muted dark:text-night-text-muted" />
              <input
                type="text"
                placeholder="Search cards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-glass pl-10"
              />
            </div>
          </div>

          {/* Status Filter */}
          <div className="sm:w-48">
            <div className="relative">
              <FunnelIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-day-text-muted dark:text-night-text-muted" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="input-glass pl-10 appearance-none"
              >
                <option value="all">All Cards ({statusCounts.all})</option>
                <option value="active">Active ({statusCounts.active})</option>
                <option value="inactive">
                  Inactive ({statusCounts.inactive})
                </option>
                <option value="blocked">
                  Blocked ({statusCounts.blocked})
                </option>
                <option value="expired">
                  Expired ({statusCounts.expired})
                </option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cards Grid */}
      {filteredCards.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <VirtualCard card={card} showBalance={showBalance} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center py-12"
        >
          <div className="glass-card p-8">
            {searchTerm || statusFilter !== 'all' ? (
              <>
                <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-day-text-muted dark:text-night-text-muted" />
                <h3 className="mt-2 text-sm font-medium text-day-text dark:text-night-text">
                  No cards found
                </h3>
                <p className="mt-1 text-sm text-day-text-muted dark:text-night-text-muted">
                  Try adjusting your search or filter criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setStatusFilter('all');
                  }}
                  className="btn-secondary mt-4"
                >
                  Clear filters
                </button>
              </>
            ) : (
              <>
                <div className="h-12 w-12 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">+</span>
                </div>
                <h3 className="mt-2 text-sm font-medium text-day-text dark:text-night-text">
                  No cards yet
                </h3>
                <p className="mt-1 text-sm text-day-text-muted dark:text-night-text-muted">
                  Contact support to get your first SarafCard.
                </p>
                <a href="/support" className="btn-primary mt-4 inline-flex">
                  Contact Support
                </a>
              </>
            )}
          </div>
        </motion.div>
      )}

      {/* Summary Stats */}
      {cards.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-semibold text-day-text dark:text-night-text mb-4">
            Card Summary
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-success-600 dark:text-success-400">
                {statusCounts.active}
              </p>
              <p className="text-sm text-day-text-muted dark:text-night-text-muted">
                Active Cards
              </p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-day-text dark:text-night-text">
                {showBalance
                  ? `$${cards
                      .reduce((sum, card) => sum + card.balance, 0)
                      .toFixed(2)}`
                  : '••••••'}
              </p>
              <p className="text-sm text-day-text-muted dark:text-night-text-muted">
                Total Balance
              </p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-info-600 dark:text-info-400">
                {cards.filter((card) => card.type === 'visa').length}
              </p>
              <p className="text-sm text-day-text-muted dark:text-night-text-muted">
                Visa Cards
              </p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-warning-600 dark:text-warning-400">
                {cards.filter((card) => card.type === 'mastercard').length}
              </p>
              <p className="text-sm text-day-text-muted dark:text-night-text-muted">
                Mastercard
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
