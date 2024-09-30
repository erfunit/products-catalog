"use client";

import React from "react";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import ResetButton from "./ResetButton";
import { Drawer } from "vaul";
import { BsFilter } from "react-icons/bs";

const SearchInputs = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <>
      <SearchBar />
      <FilterBar callback={() => closeModal()} />
      <ResetButton />
    </>
  );
};

const SearchAndFilter = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="col-span-6 lg:col-span-3 border h-fit p-3 rounded-lg sticky top-3 hidden md:block">
        <SearchInputs closeModal={closeModal} />
      </div>

      <div className="md:hidden block">
        <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
          <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
            Filter
            <BsFilter />
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-white p-5 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
              <div className="p-4 bg-white rounded-t-[10px] flex-1">
                <Drawer.Handle />
                {/* <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" /> */}
                <div className="max-w-md mx-auto">
                  <Drawer.Title className="font-medium mb-4 text-gray-900">
                    Filter and Search through Products
                  </Drawer.Title>
                  <SearchInputs closeModal={closeModal} />
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </>
  );
};

export default SearchAndFilter;
