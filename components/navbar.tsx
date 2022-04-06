
import Link from 'next/link';

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

// Theme credits: https://darrenwhite.dev/blog/nextjs-tailwindcss-theming

const themes = [
    { name: 'Professional' },
    { name: 'Reworded' },
    { name: 'Current Self' },
    { name: 'University (Minerva)' },
    { name: 'High School (Go Sabers!)' },
    { name: 'Brian in Kindergarten' },
    { name: 'Stealth' },
    { name: 'Pink' },
  ]

const navigation = [{ name: 'Home', href: '/' }, { name: 'Bucket List', href: '/bucket-list' },{ name: 'Photography', href: 'https://brianswanberg.wixsite.com/photos' }]; 

export const Navbar = () => {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

  return (

    <div className="py-2 px-2 sm:px-6 lg:px-8 w-[100%] bg-th-background">
    <div className="relative flex items-center justify-between h-16">

      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">


        <div className="sm:ml-6 mt-2 font-bold">
          <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className="px-3 py-2 rounded-md text-xl sm:text-sm text-th-fontingsecondary font-mainfont font-medium hover:bg-th-fontingsecondary hover:text-th-background">
                    {item.name}
                  </a>
                </Link>
              ))}
              </div>
          </div>
        </div>
        <div className='place-items-end mt-2'>
                    <label className='text-th-fontingsecondary text-l font-mainfont ml-3'>Choose theme: &nbsp;&nbsp;&nbsp;&nbsp; </label>
                    <select
                    name="theme"
                    id="theme-select"
                    className="bg-th-background-secondary font-mainfont text-th-fontingsecondary border-th-accent-dark text-l border px-3"
                    onChange={(e) => setTheme(e.currentTarget.value)}
                    value={theme}
                    >
                    <option value="">Select Theme</option>
                    {themes.map(t => (
                        <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>{t.name}</option>
                    )
                    )}
                    </select>
                </div>
      </div>
     
    </div>

  );
};
