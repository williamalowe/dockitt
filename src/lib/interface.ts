export interface Dockitt {
  // id: number,
  // task: string,
  // status: string,
  // priority: string,
  // tag: string,
  // description: string
  id: number;
  task: string;
  status: string;
  priority: string;
  tag: string;
  description: string;
  created_at: string;
  created_by: string;
  project: string
}

export interface Note {
  id: number;
  created_at: string;
  author: string;
  message: string;
}
