
import fs from "fs";
import path from "path";

const dataDir = path.resolve(process.env.PWD, 'data/projects');

export const getProject = (projectDirName) => {

    const project = {
        'projectDirName':undefined,
        'name': undefined,
        'absoluteDir':undefined,
    };

    const absoluteDir = path.resolve(dataDir, projectDirName);
    const configPath = path.resolve(absoluteDir, 'config.json');

    const configRaw = fs.readFileSync(configPath, {encoding:'utf8'});

    const config = JSON.parse(configRaw);

    project.name = config.name;
    project.projectDirName = projectDirName;
    project.absoluteDir = absoluteDir;

    return project;

}

export const getProjects = async () => {

    const projects = [];

    let dirNames = await fs.readdirSync(dataDir).map((dirName) => {

        return dirName;
    });

    for(const dirName of dirNames){

        const project = await getProject(dirName);

        projects.push(project);
    }

    return projects;

}
