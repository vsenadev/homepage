import React from "react";
import {IAsideNews, IPages} from "../interface/Home.interface";

export async function getPages(setData: React.Dispatch<React.SetStateAction<IPages | undefined | string[]>>) {
    try {
        const response = await import('../data/pages.json');
        setData(response.name);
    } catch (error) {
        console.error("Error loading pages:", error);
    }
}

export async function getAsideNews(setData: React.Dispatch<React.SetStateAction<{ title: string, description: string }[] | undefined  >>) {
    try {
        const response = await import('../data/asideNews.json');
        setData(response.news);
    } catch (error) {
        console.error("Error loading pages:", error);
    }
}
