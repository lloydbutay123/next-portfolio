import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import workExperincesReducer from "./workExperiencesSlice";
import skillsReducer from "./skillsSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    workExperiences: workExperincesReducer,
    skills: skillsReducer,
  },
});
