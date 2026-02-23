import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import workExperincesReducer from "./workExperiencesSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    workExperiences: workExperincesReducer,
  },
});
