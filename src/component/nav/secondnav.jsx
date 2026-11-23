import React from 'react';
import { useEffect, useState } from 'react'

import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  } from '@headlessui/react'
  import { XMarkIcon } from '@heroicons/react/24/outline'
  import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
  
  const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
  ]
  const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: true },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: '2l', label: '2L', checked: false },
        { value: '6l', label: '6L', checked: false },
        { value: '12l', label: '12L', checked: false },
        { value: '18l', label: '18L', checked: false },
        { value: '20l', label: '20L', checked: false },
        { value: '40l', label: '40L', checked: true },
      ],
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Secondnav = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [isHeading, setIsHeading] = useState("Newest");
    const [issortOptions, setsortOptions] = useState([
        { name: 'Most Popular', href: '#', current: false },
      //   { name: 'Best Rating', href: '#', current: false },
        { name: 'Newest', href: '#', current: true },
        { name: 'Free', href: '#', current: false },
        { name: 'Low to High', href: '#', current: false },
        { name: 'High to Low', href: '#', current: false },
      ]);
  
    const changeHeading=(e)=>{
        if(!isHeading.includes(e)){
           setIsHeading(e);
           setsortOptions((element) =>
              element.map((headline) =>
                  headline.name === e ? { ...headline, current: true } : {...headline, current: false }
              )
            );
        }
    }
  
    useEffect((e)=>{
        console.log(isHeading);
        console.log(issortOptions);
  
    },[isHeading]);
    return (
        <div className="sm:px-6 lg:px-8 fixed top-16 right-0 left-0 z-10 bg-gray-50">      
        <div className="flex items-baseline justify-between border-b border-gray-200 pt-1 pb-1 px-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-700">{isHeading}</h1>

        <div className="flex items-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="group cursor-pointer inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                {issortOptions.map((option) => (
                  <MenuItem key={option.name}>
                    <a
                      href={option.href}
                      onClick={()=>changeHeading(option.name)}
                      className={classNames(
                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                        'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                      )}
                    >
                      {option.name}
                    </a>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>

          {/* <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
            <span className="sr-only">View grid</span>
            <Squares2X2Icon aria-hidden="true" className="size-5" />
          </button> */}
          {/* <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
          >
            <span className="sr-only">Filters</span>
            <FunnelIcon aria-hidden="true" className="size-5" />
          </button> */}
        </div>
      </div>
      </div>
    );
}

export default Secondnav;
