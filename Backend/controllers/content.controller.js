import express from 'express';
import { customAlphabet } from 'nanoid';
import Data from '../models/content.model.js';
import {UAParser} from 'ua-parser-js';
import connectDb from '../db/connectDb.js';

export const postData = async(req,res)=>{
    try {
        const {title,content} = req.body;
        if(!content){
            return res.status(401).json({message:"Content is required", success: false});
        }
        const nanoidNumeric  = customAlphabet('0123456789', 5);
        const customId = nanoidNumeric();
        const parser = new UAParser(req.headers['user-agent']);
        const result = parser.getResult();
        const setData = await Data.create({
            title: title,
            content: content,
            customId: customId,
            user: result.os.name
        })
        return res.status(200).json({message:"Content is ready to share", setData, success: true});
    } catch (error) {
        console.error("Error in saving your content",error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export const getData = async(req,res)=>{
    try {
        await connectDb();
        const {customId} = req.params;
        if(!customId){
            return res.status(401).json({message:"ID is required", success: false});
        }
        const data = await Data.findOne({customId});
        if(!data || data.length === 0){
            return res.status(401).json({message:"ID is not valid, please verify again", success: false});
        }
        const dataDetails = {
            title: data.title,
            content: data.content,
            customId: data.customId,
            createdAt: data.createdAt 
        }
        return res.status(200).json({message:"Content has been fetched successfully", dataDetails, success: true});
    } catch (error) {
        console.error("Error in fetching your content",error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}