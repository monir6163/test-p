'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { currentAdminInfo, isLoggedIn } from '@/hooks/useUserStatusCheck';
import { logoutAdmin } from '@/services/actions/logoutUser';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  FiChevronDown,
  FiCreditCard,
  FiDollarSign,
  FiHelpCircle,
  FiHome,
  FiKey,
  FiLogOut,
  FiMoon,
  FiSettings,
  FiSun,
  FiUser,
} from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import logo from '../../../public/assets/images/admin/favicon.png';

const dashboardPages = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    icon: FiHome,
    color: 'text-blue-500',
  },
  {
    name: 'Cards',
    path: 'cards',
    icon: FiCreditCard,
    color: 'text-green-500',
  },
  {
    name: 'Redeem',
    path: 'redeem',
    icon: FiKey,
    color: 'text-purple-500',
  },

  {
    name: 'Transactions',
    path: 'transactions',
    icon: FiDollarSign,
    color: 'text-orange-500',
  },
  {
    name: 'Support',
    path: 'support',
    icon: FiHelpCircle,
    color: 'text-indigo-500',
  },
  // {
  //   name: 'Reports',
  //   path: 'Reports',
  //   icon: FiBarChart,
  //   color: 'text-teal-500',
  // },
  // {
  //   name: 'Country Management',
  //   path: 'Country-Management',
  //   icon: FiMapPin,
  //   color: 'text-amber-500',
  // },
  // {
  //   name: 'Health Monitoring',
  //   path: 'Health-Monitoring',
  //   icon: FiActivity,
  //   color: 'text-red-500',
  // },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  const isAdminLoggedIn = isLoggedIn();
  const loggedInAdmin = currentAdminInfo();

  useEffect(() => {
    if (!isAdminLoggedIn) {
      router.push('/login');
    }
  }, [isAdminLoggedIn, router]);

  if (!isAdminLoggedIn) {
    return null;
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    await logoutAdmin(router);
  };

  return (
    <div className="relative overflow-hidden">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open</span>
        <svg
          className="w-6 h-6 text-xl text-gray-300 dark:text-gray-400 hover:text-red-700 hover:transition-all duration-300 ease-in-out"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? '' : '-translate-x-full sm:translate-x-0'
        }`}
        aria-label="Sidebar"
      >
        <div className="h-screen px-3 py-4 bg-gray-100 dark:bg-transparent dark:backdrop-blur-md dark:border-r dark:border-white/5 dark:glass-premium flex flex-col">
          <Link href={`/dashboard`} className="lg:h-16 lg:mb-5">
            <div
              className="flex items-center justify-center mb-4 lg:mb-8 cursor-pointer"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Image
                src={logo}
                alt="SarafCard Logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </Link>
          <div className="flex justify-end items-center mb-5 sm:hidden">
            <button
              className="text-xl text-orange hover:text-primary hover:transition-all duration-300 ease-in-out dark:text-primary"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <RxCross2 />
            </button>
          </div>

          {/* Menu Container */}
          <div className="flex-1 overflow-y-auto lg:overflow-y-hidden">
            <ul className="font-medium lg:mt-12">
              {/* Profile Dropdown for Mobile */}
              <div className="lg:hidden mb-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="w-full flex items-center justify-between space-x-2 hover:text-primary dark:hover:text-primary transition-all duration-300 ease-in-out rounded-md py-2.5 px-3 md:mt-6 border border-gray-200 dark:border-gray-700 cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <FiUser className="w-4 h-4" />
                        <span
                          className={`${
                            pathname === '/dashboard/profile'
                              ? 'text-primary dark:text-primary'
                              : 'dark:text-dim'
                          }`}
                        >
                          {loggedInAdmin?.username}
                        </span>
                      </div>
                      <FiChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 ml-3" align="start">
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {loggedInAdmin?.username}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {loggedInAdmin?.email}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground capitalize">
                          Role: {loggedInAdmin?.role}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link
                        href="/dashboard/profile"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        <FiUser className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/dashboard/settings"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        <FiSettings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => handleLogout()}
                      className="text-red-600 dark:text-red-400"
                    >
                      <FiLogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setTheme('light')}>
                      <FiSun className="mr-2 h-4 w-4" />
                      <span>Light Mode</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')}>
                      <FiMoon className="mr-2 h-4 w-4" />
                      <span>Dark Mode</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <hr className="mt-2 lg:hidden" />

              {/* Dynamic Menu Items */}
              {dashboardPages.map((page) => {
                const Icon = page.icon;
                const href =
                  page.path === 'dashboard'
                    ? '/dashboard'
                    : `/dashboard/${page.path.toLowerCase()}`;
                const isActive =
                  page.path === 'dashboard'
                    ? pathname === '/dashboard'
                    : pathname.includes(
                        `/dashboard/${page.path.toLowerCase()}`
                      );

                return (
                  <li key={page.path} className="my-1">
                    <Link
                      href={href}
                      className={`w-full flex items-center p-3 rounded-lg hover:text-primary dark:hover:text-primary group hover:transition-all duration-300 ease-in-out cursor-pointer ${
                        isActive
                          ? 'text-gray-700 dark:text-white bg-gradient-to-r from-gray-50 to-gray-100 dark:from-white/20 dark:to-white/5 shadow-lg border border-gray-200/60 dark:border-white/20'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-800 dark:hover:text-primary'
                      }`}
                      style={
                        isActive
                          ? {
                              background:
                                theme === 'dark'
                                  ? 'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02)), linear-gradient(180deg, rgba(42, 51, 64, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)'
                                  : 'linear-gradient(135deg, rgba(249, 250, 251, 0.9) 0%, rgba(243, 244, 246, 0.9) 50%, rgba(229, 231, 235, 0.8) 100%)',
                              backdropFilter:
                                theme === 'dark'
                                  ? 'blur(20px) saturate(180%)'
                                  : 'blur(8px)',
                              border:
                                theme === 'dark'
                                  ? '1px solid rgba(255, 255, 255, 0.15)'
                                  : '1px solid rgba(209, 213, 219, 0.4)',
                              boxShadow:
                                theme === 'dark'
                                  ? 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 8px 25px rgba(0, 0, 0, 0.2), 0 4px 15px rgba(0, 0, 0, 0.1)'
                                  : '0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                            }
                          : {}
                      }
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon
                          className={`w-5 h-5 ${
                            isActive
                              ? theme === 'dark'
                                ? 'text-white'
                                : page.color
                              : page.color
                          }`}
                        />
                        <span>{page.name}</span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </aside>

      {/* dashboard header*/}
      <div className="py-7 hidden lg:flex justify-end items-center bg-gray-100 dark:bg-transparent dark:backdrop-blur-md dark:border-b dark:border-white/5 dark:glass-premium px-10 fixed top-0 left-0 right-0 z-30">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex justify-center items-center space-x-2 mr-10 hover:text-primary dark:hover:text-primary transition-all ease-in-out duration-300 rounded-lg px-4 py-2.5 cursor-pointer hover:bg-gray-100/50 dark:hover:bg-white/5 backdrop-blur-sm">
              <FiUser className="w-4 h-4" />
              <span
                className={`text-md font-[500] ${
                  pathname === '/dashboard/profile'
                    ? 'text-primary dark:text-primary'
                    : 'dark:text-dim'
                }`}
              >
                {loggedInAdmin?.username}
              </span>
              <FiChevronDown className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {loggedInAdmin?.username}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {loggedInAdmin?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/profile" className="hover:cursor-pointer">
                <FiUser className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings" className="hover:cursor-pointer">
                <FiSettings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => handleLogout()}
              className="text-red-600 dark:text-red-400 hover:cursor-pointer"
            >
              <FiLogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => setTheme('light')}
              className="hover:cursor-pointer"
            >
              <FiSun className="mr-2 h-4 w-4" />
              <span>Light Mode</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme('dark')}
              className="hover:cursor-pointer"
            >
              <FiMoon className="mr-2 h-4 w-4" />
              <span>Dark Mode</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className={`${isSidebarOpen ? 'sm:ml-64' : ''} sm:ml-64`}>
        {/* dashboard content */}
        <div className="min-h-screen overflow-y-auto lg:pt-28 lg:pb-14 lg:px-8">
          <div className="w-full bg-transparent rounded-lg p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
