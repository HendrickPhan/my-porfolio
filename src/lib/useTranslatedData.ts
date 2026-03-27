import { useLanguage } from "./i18n";
import { experienceDescriptions, projectDescriptions, educationThesis } from "./data";

export function useTranslatedDescriptions() {
  const { language } = useLanguage();

  const getExperienceDescription = (companyKey: keyof typeof experienceDescriptions): string[] => {
    return experienceDescriptions[companyKey][language];
  };

  const getProjectDescription = (projectKey: keyof typeof projectDescriptions): string => {
    return projectDescriptions[projectKey][language];
  };

  const getEducationThesis = (level: "master" | "bachelor"): string => {
    return educationThesis[level][language];
  };

  return {
    language,
    getExperienceDescription,
    getProjectDescription,
    getEducationThesis,
    experienceDescriptions,
    projectDescriptions,
    educationThesis,
  };
}
