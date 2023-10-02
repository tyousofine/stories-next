import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Story from "@/models/story";


export async function PUT(req, { params }) {
    const { id } = params;
    const { newTitle: title, newDetail: detail } = await req.json();
    await connectMongoDB();
    await Story.findByIdAndUpdate(id, { title, detail })
    return NextResponse.json({ message: "Topic updated" }, { status: 200 })
}

export async function GET(req, { params }) {
    const { id } = params;
    await connectMongoDB();
    const theStory = await Story.findById(id)
    return NextResponse.json(theStory, { status: 200 })
}