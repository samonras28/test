import { ColorData }  from './ColorData';
import { ProjectData }  from './ProjectData';
export interface ProjectDemo {
    group?: string;
    id?: string;
    //color?: ColorData[];
    listProjectData?: ProjectData[];
}
