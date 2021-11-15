interface Section {
  title: string;
  postings: Posting[];
}

interface Posting {
  additionalPlain: string;
  additional: string;
  categories: Categories;
  createdAt: number;
  descriptionPlain: string;
  description: string;
  id: string;
  text: string;
  hostedUrl: string;
  applyUrl: string;
  lists: List[];
}

interface Categories {
  commitment: string;
  department: string;
  location: string;
  team: string;
}

interface List {
  text: string;
  context: string;
}
