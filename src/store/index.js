import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import workExperincesReducer from "./workExperiencesSlice";
import skillsReducer from "./skillsSlice";
import contactReducer from "./contactSlice";
import playgroundReducer from "./playgroundSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    workExperiences: workExperincesReducer,
    skills: skillsReducer,
    contact: contactReducer,
    playground: playgroundReducer,
  },
});
