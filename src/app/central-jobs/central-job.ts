import { JobTitle } from "../job-titles/job-title";

export interface CentralJob{
  centralId: number;
  centralJobName: string;
  description: string;
  deleteFlag: number;
  jobTitles: JobTitle;
}
