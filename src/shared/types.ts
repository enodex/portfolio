export interface allDataType {
  skills: {
    image: string;
    title: string;
    link: string;
  }[];
  projects: {
    id: string;
    title: string;
    description: string;
    demo: string;
    github: string;
    technologies: string[];
    image: {
      url: string;
    };
    planq-img : "https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png";
  }[];
  smallProjects: {
    id: string;
    title: string;
    description: string;
    link: string;
    icon: {
      url: string;
    };
  }[];
}
