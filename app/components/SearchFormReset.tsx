"use client";

import Link from "next/link";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) {
      form.reset();
    }
  };

  return (
    <button type="reset" className="search-btn" onClick={reset}>
      <Link  href={"/"}>
        <i className="ri-close-line text-white size-5"></i>
      </Link>
    </button>
  );
};

export default SearchFormReset;
