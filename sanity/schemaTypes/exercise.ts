import { defineField, defineType } from "sanity";

export default defineType({
    name: "exercise",
    title: "Exercise",
    type: "document",
    icon: () => "🏋️‍♂️",
    fields: [
        defineField({
            name: "name",
            title: "Exercise Name",
            description: "The name of the exercise that will be displayed to the users",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            description: "A detailed description explaining how to perform the exercise",
            type: "text",
            rows: 4,
        }),
        defineField({
            name: "difficulty",
            title: "Difficulty Level",
            description: "The difficulty level of the exercise to help users choose appropriate workouts",
            type: "string",
            options: {
                list: [
                    { title: "Beginner", value: "beginner" },
                    { title: "Intermediate", value: "intermediate" },
                    { title: "Advanced", value: "advanced" },
                ],
                layout: "radio",
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Exercise Image",
            description: "An image showing the proper form of the demonstration of the exercise",
            type: "image",
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alt text",
                    description: "Description of the exercise image for accessibility and SEO purposes",
                },
            ],
        }),
        defineField({
            name: "videoUrl",
            title: "Video URL",
            description: "An url link to a video demonstration of the exercise",
            type: "url",
        }),
        defineField({
            name: "isActive",
            title: "Is Active",
            description: "Toggle to activate or deactivate the exercise from the app",
            type: "boolean",
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "difficulty",
            media: "image",
        },
    },
})
