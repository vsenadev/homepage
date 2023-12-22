import React from "react";
import { IPages } from "../interface/Home.interface";

export async function getPages(setData: React.Dispatch<React.SetStateAction<IPages | undefined>>){
    setData(require('../data/pages.json'));
}