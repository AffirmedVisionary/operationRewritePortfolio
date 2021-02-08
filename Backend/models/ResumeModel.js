import mongoose from 'mongoose'
import { ObjectID } from 'bson'

const workSchema = mongoose.Schema(
    {
        _id: ObjectID,
        company: { type: String, required: true },
        dateFrom: { type: Date, required: true },
        dateTo: {type: Date, required: true },
        position: { type: String, required: true },
        duties: {type: Array, required: true },
    }
)

const educationSchema = mongoose.Schema(
    {
        _id: ObjectID,
        institution: { type: String, required: true },
        date: { type: Date, required: true },
        course: { type: String, required: true },
        grade: { type: String },
        notes: {type: String}
    }
)

const awardSchema = mongoose.Schema(
    {
        _id: ObjectID,
        awardingBody: { type: String },
        reason: {type: String, required: true },
        achieved: { type: String },
        date: {type: Date, required: true },
    }
)

const resumeSchema = mongoose.Schema(
    {
        personalProfile: {type: String},
        skills: Array,
        workExperience: [workSchema],
        education: [educationSchema],
        awards: [awardSchema],
        interests: Array
    }
)

const Resume = mongoose.model("Resume", resumeSchema, "Resume")

export default Resume