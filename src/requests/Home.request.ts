import React from "react";
import { IPages } from "../interface/Home.interface";

export async function getPages(setData: React.Dispatch<React.SetStateAction<IPages | undefined | string[]>>) {
    try {
        const response = await import('../data/pages.json');
        setData(response.name);
    } catch (error) {
        console.error("Error loading pages:", error);
    }
}
