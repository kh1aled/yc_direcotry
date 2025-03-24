"use client";

import { STARTUPS_TEST } from "@/sanity/lib/queries";
import { useState } from "react";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { deletePatchs } from "@/lib/actions";

const Delete = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!confirm("Are you sure you want to delete all startups?")) return;

    setLoading(true);
    console.log("Fetching startups...");

    try {
      const result = await deletePatchs();
      console.log("Delete result:", result);

      if (result.status === "SUCCESS") {
        alert("All startups deleted successfully!");
      } else if (result.status === "NO_DOCUMENTS") {
        alert("No documents found.");
      } else {
        alert("Failed to delete documents. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <button
      onClick={handleClick}
      disabled={loading}
      style={{
        padding: "10px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
      className='startup-form_btn'
    >
      {loading ? "Deleting..." : "Delete All Startups"}
    </button>
  );
};

export default Delete;
