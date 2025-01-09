import { useState } from "react";
import { FeelbackTaggedMessage, FeelbackValueDefinition, Question, PRESET_YESNO_LIKE_DISLIKE } from "@feelback/react";
import "@feelback/react/styles/feelback.css";

const YES_TAGS = [
    { value: "accurate", title: "Accurate", description: "Accurately describes the product or feature.", },
    { value: "problem-solved", title: "Solved my problem", description: "Helped me resolve an issue.", },
    { value: "clear", title: "Easy to understand", description: "Easy to follow and comprehend.", },
    { value: "product-chosen", title: "Helped me decide to use the product", description: "Convinced me to adopt the product or feature.", },
    { value: "other-yes", title: "Another reason" },
];

const NO_TAGS = [
    { value: "inaccurate", title: "Inaccurate", description: "Doesn't accurately describe the product or feature.", },
    { value: "missing-info", title: "Couldn't find what I was looking for", description: "Missing important information.", },
    { value: "unclear", title: "Hard to understand", description: "Too complicated or unclear.", },
    { value: "bad-examples", title: "Code samples errors", description: "One or more code samples are incorrect.", },
    { value: "other-no", title: "Another reason" },
];

const FEEDBACK_CONTENT_SET_ID = "6d4fac2e-6797-47aa-8d5c-b9318a0655e8";
