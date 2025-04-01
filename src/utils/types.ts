export interface Project {
  id: string;
  title: string;
  platform: string[];
  thumbnailDescription: string;
  projectDescription: string;
  technicalDescription: {
    descriptionText: string;
    bulletPoints: string[];
    results: string;
    tools: string[];
  };
  technologies: string[];
  gameLink: string;
}
