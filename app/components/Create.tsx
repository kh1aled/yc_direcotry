'use client'
import { createInitialPatchs } from '@/lib/actions';
import React, { useState } from 'react';

const Create = () => {
    const [loading, setLoading] = useState(false);

    const handleCreate = async () => {
        setLoading(true);
        try {
            const result = await createInitialPatchs();
            if (result.status === "SUCCESS") {
                alert("All Startups Created Successfully");
            } else {
                alert("Failed to Create Data");
            }
        } catch (error) {
            console.error("Unexpected Error:", error);
            alert("An unexpected error occurred!");
        } finally {
            setLoading(false); // إعادة تعيين حالة التحميل
        }
    };

    return (
        <button onClick={handleCreate} disabled={loading} className='startup-form_btn'>
            {loading ? "Creating..." : "Create Startups"}
        </button>
    );
};

export default Create;
