import connectMongoDB from "@/libs/mongodb";
import Story from "@/models/story";
import { Mongoose } from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { title, detail } = await req.json();
    await connectMongoDB();
    await Story.create({ title, detail });
    return NextResponse.json({ message: 'Topic Created' }, { status: 201 })
}

export async function GET(req, res) {
    await connectMongoDB();
    const stories = await Story.find()
    return NextResponse.json({ stories })
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id')
    await connectMongoDB();
    await Story.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Topic Deleted' }, { status: 200 })
}