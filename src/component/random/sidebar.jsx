// src/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser , FaFilter, FaTimes } from 'react-icons/fa';
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
    { name: 'Dating', href:"#" },
    { name: 'Working', href:'#' },
    { name: 'Cruising', href: '#' },
  ]
  const filters = [
    {
      id: 'want',
      name: 'Want',
      options: [
        { value: 'dating', label: 'Dating', checked: false },
        { value: 'advanture', label: 'Adventure', checked: false },
        { value: 'romantic', label: 'Romantic', checked: false },
        { value: 'party', label: 'Party', checked: true },
        { value: 'friendship', label: 'Friendship', checked: true },
        { value: 'games', label: 'Games', checked: false },
        { value: 'working', label: 'Working', checked: false },
        { value: 'carcrusing', label: 'Car Cruising', checked: false },
        { value: 'cruising', label: 'Cruising', checked: false },
        { value: 'bikecruising', label: 'Bike Cruising', checked: false },
        { value: 'trip', label: 'Trip', checked: false },
        { value: 'kinky', label: 'Kinky', checked: false },
        { value: 'hardcore', label: 'Hardcore', checked: false },
        { value: 'brutal', label: 'Brutal', checked: false },
        { value: 'anal', label: 'Anal', checked: false },
        { value: 'fisting', label: 'Fisting', checked: false },
        { value: 'titsplay', label: 'Tits Play', checked: false },
        { value: 'assplay', label: 'Ass Play', checked: false },
        { value: 'crossplay', label: 'Crossplay', checked: false },
        { value: 'threesome', label: 'Three Some', checked: false },
        { value: 'gangbang', label: 'Gangbang', checked: false },
        { value: 'onlywatching', label: 'Only Watching', checked: false },
        { value: 'masturbation', label: 'Only Masturbation', checked: false },
      ],
    },
    {
      id: 'body-category',
      name: 'Body Category',
      options: [
        { value: 'girl', label: 'Girl', checked: false },
        { value: 'women', label: 'Women', checked: false },
        { value: 'latina', label: 'Latina', checked: true },
        { value: 'milf', label: 'MILF', checked: false },
        { value: 'bbw', label: 'BBW', checked: true },
        { value: 'bigass', label: 'Big Ass', checked: false },
        { value: 'bigtits', label: 'Big Tits', checked: false },
        { value: 'thick', label: 'Thick', checked: false },
        { value: 'fattybelly', label: 'Fatty Belly', checked: false },
        { value: 'gym', label: 'GYM', checked: false },
        { value: 'men', label: 'Men', checked: false },
        { value: 'boy', label: 'Boy', checked: false },
        { value: 'bigchest', label: 'Big Chest', checked: false },
        { value: 'beard', label: 'Beard', checked: false },
        { value: 'non-beard', label: 'Non-Beard', checked: false },
        { value: 'bigarms', label: 'Big Arms', checked: false },
        { value: 'blade', label: 'Blade', checked: false },
        { value: 'bigdick', label: 'Big Dick', checked: false },
        { value: 'smalldick', label: 'Small Dick', checked: false },
        { value: 'darknipples', label: 'Dark Nipples', checked: false },
        { value: 'brown nipples', label: 'Brown Nipples', checked: false },
        { value: 'black', label: 'Black', checked: false },
        { value: 'white', label: 'White', checked: false },
        { value: 'pinknipples', label: 'Pink Nipples', checked: false },
        { value: 'curvy', label: 'Curvy', checked: false},
        { value: 'outerlips', label: 'Outer Lips', checked: false },
        { value: 'innerlips', label: 'Inner Lips', checked: false },
        { value: 'hairy', label: 'Hariy', checked: false },
        { value: 'skinny', label: 'Skinny', checked: false },
      ],
    },
    {
      id: 'age',
      name: 'Age',
      options: [
        { value: '18+', label: '18+', checked: true },
        { value: '25+', label: '25+', checked: false },
        { value: '30+', label: '30+', checked: false },
        { value: '40+', label: '40+', checked: false },
      ],
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Sidebar = (props) => {
      const [isHeading, setIsHeading] = useState("Newest");
      const [issortOptions, setsortOptions] = useState([
          { name: 'Most Popular', href: '#', current: false },
        //   { name: 'Best Rating', href: '#', current: false },
          { name: 'Newest', href: '#', current: true },
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
    <div className="flex flex-col h-screen bg-stone-950 text-white w-64 overflow-y-auto fixed top-28 right-0 left-0 z-10 transform transition-transform duration-300 ease-in-out p-3 text-center">
      <nav className="flex-grow">
        <section aria-labelledby="products-heading" className="pt-6 pb-24 ">
                    <h2 id="products-heading" className="sr-only">
                      Products
                    </h2>
        
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-1">
                      {/* Filters */}
                      <form className= {props.isFilter + "lg:block md:block"} >
                        <h3 className="sr-only">Categories</h3>
                        <ul role="list" className="space-y-4 border-gray-200 pb-6 text-sm font-medium text-gray-200">
                          {subCategories.map((category) => (
                            <li key={category.name}>
                              <a href={category.href} className='hover:[text-shadow:_0_4px_8px_rgba(255_255_255_/_0.5)]'>{category.name}</a>
                            </li>
                          ))}
                        </ul>
        
                        {filters.map((section) => (
                          <Disclosure key={section.id} as="div" className=" rounded-sm border-gray-200 py-6 w-60">
                            <h3 className="-my-3 flow-root">
                              <DisclosureButton className="group flex w-full cursor-pointer rounded-xl items-center justify-between p-2 bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-800">{section.name}</span>
                                <span className="ml-6 flex ">
                                  <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                                  <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                                </span>
                              </DisclosureButton>
                            </h3>
                            <DisclosurePanel className="pt-6">
                              <div className="space-y-4">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex gap-3">
                                    <div className="flex h-5 shrink-0 items-center">
                                      <div className="group grid size-4 grid-cols-1">
                                        <input
                                          defaultValue={option.value}
                                          defaultChecked={option.checked}
                                          id={`filter-${section.id}-${optionIdx}`}
                                          name={`${section.id}[]`}
                                          type="checkbox"
                                          className="col-start-1 row-start-1 appearance-none rounded-sm border hover:shadow-md shadow-gray-50 border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                        />
                                        <svg
                                          fill="none"
                                          viewBox="0 0 14 14"
                                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                        >
                                          <path
                                            d="M3 8L6 11L11 3.5"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="opacity-0 group-has-checked:opacity-100"
                                          />
                                          <path
                                            d="M3 7H11"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="opacity-0 group-has-indeterminate:opacity-100"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                    <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-400 hover:[text-shadow:_0_4px_8px_rgba(255_255_255_/_0.5)]">
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </DisclosurePanel>
                          </Disclosure>
                        ))}
                      </form>
        
                      {/* Product grid */}
                      <div className="lg:col-span-3">{/* Your content */}</div>
                    </div>
                  </section>
      </nav>
    </div>
  );
};

export default Sidebar;