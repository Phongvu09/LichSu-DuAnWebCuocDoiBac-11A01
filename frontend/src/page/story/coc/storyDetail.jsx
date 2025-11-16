import React from "react";
import { Link, useParams } from "react-router-dom";
import rawData from "../../../data/story.json";
import "./storyDetail.css";

/**
 * Chuyển rawData thành danh sách story phẳng, dễ tìm kiếm.
 * @param {Array} data - Dữ liệu thô từ JSON
 * @returns {Array} Danh sách story đã flatten
 */
function flattenStories(data) {
    return data.flatMap(page =>
        Object.entries(page)
            .filter(([key, val]) => key.startsWith("story") && val.title)
            .map(([key, val]) => ({
                id: `${page.id}-${key}`, // vd: "1-story1"
                pageId: page.id,
                keyStory: key,
                title: val.title,
                name: val.name || "",
                intro: val.intro || "",
                content: val.content || "",
            }))
    );
}

const stories = flattenStories(rawData);

export default function StoryDetail() {
    const { pageId, storyKey } = useParams();
    const storyId = `${pageId}-${storyKey}`;

    // Tìm story theo id ghép
    const story = stories.find((s) => s.id === storyId);

    if (!story) {
        return (
            <main className="container">
                <p className="not-found">Không tìm thấy câu chuyện.</p>
                <Link to="/story" className="back-link">Quay lại danh sách</Link>
            </main>
        );
    }

    return (
        <main className="container">
            <h1 className="title">{story.title}</h1>
            {story.name && <h3 className="story-name">{story.name}</h3>}
            {story.intro && <p className="story-intro">{story.intro}</p>}
            <article className="story-content" style={{ whiteSpace: "pre-line" }}>
                {story.content}
            </article>
            <Link to="/story" className="back-link">Quay lại danh sách</Link>
        </main>
    );
}
