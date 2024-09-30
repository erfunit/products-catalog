"use client";

import React from "react";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import ResetButton from "./ResetButton";
import { Drawer } from "vaul";

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
          <Drawer.Trigger className="btn btn-primary">Filter</Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
              <div className="p-4 bg-white rounded-t-[10px] flex-1">
                <Drawer.Handle />
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
