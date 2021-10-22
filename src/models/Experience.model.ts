export type Experience = {
  isHovering: boolean;
  isExperience: boolean;
  title: string;
  company?: string;
  technos: {
    front?: string;
    back?: string;
  };
  github: string;
};
