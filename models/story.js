import mongoose, { Schema } from "mongoose";

const storySchema = new Schema(
    {
        title: String,
        detail: String,
    }, {
    timestamps: true
}
)

let Story;
try {
    Story = mongoose.model('stories')

} catch {
    Story = mongoose.model('stories', storySchema)
}

export default Story;