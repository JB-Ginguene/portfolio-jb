export type Experience = {
  isHovering: boolean;
  isExperience: boolean;
  title: string;
  company?: string;
  technos: {
    front?: string;
    back?: string;
    tool?: string;
  };
  github?: string;
  website?: string;
};
