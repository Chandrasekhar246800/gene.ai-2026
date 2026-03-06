export interface TeamMember {
  name: string;
  designation: string;
  organization?: string;
}

export interface TeamSection {
  title: string;
  members: TeamMember[];
}

export const organizingTeam: TeamSection[] = [
  {
    title: "Chief Patron",
    members: [
      {
        name: "Dr. Mariazeena Johnson",
        designation: "Chancellor",
        organization: "Sathyabama Institute of Science & Technology",
      },
    ],
  },
  {
    title: "Patron",
    members: [
      {
        name: "Dr. Bharathi B",
        designation: "Director (Innovation)",
        organization: "Sathyabama Institute of Science & Technology",
      },
    ],
  },
  {
    title: "Conveners",
    members: [
      {
        name: "Dr. Krupakar Parthasarathy",
        designation: "CDDD, SIST",
      },
      {
        name: "Dr. L. Lakshmanan",
        designation: "Prof & Dean, CSE, SIST",
      },
      {
        name: "Dr. Mercy Paul Selvan",
        designation: "CSE, SIST",
      },
      {
        name: "Dr. V. Hari Balaji",
        designation: "VivagenDx Labs, Chennai",
      },
    ],
  },
  {
    title: "Co-Conveners",
    members: [
      {
        name: "Dr. M. Radhakrishnan",
        designation: "CDDD, SIST",
      },
      {
        name: "Dr. Sam Ebenezer",
        designation: "CDDD, SIST",
      },
      {
        name: "Dr. S. Vignesh",
        designation: "CDDD, SIST",
      },
    ],
  },
  {
    title: "Coordinators",
    members: [
      {
        name: "Dr. Grace Kanmani Prince",
        designation: "Biomedical, SIST",
      },
      {
        name: "Dr. Bethany Janney",
        designation: "Biomedical, SIST",
      },
      {
        name: "Dr. Jancy",
        designation: "CSE, SIST",
      },
      {
        name: "Dr. A. Viji Amutha Mary",
        designation: "CSE, SIST",
      },
    ],
  },
];
