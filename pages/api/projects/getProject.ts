import path from "path";
import fs from "fs";

const imagesDir = path.join(process.cwd(), "public/images/projects/project-1");
const imageNames = fs.readdirSync(imagesDir);

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import projectsData from "../../../public/data/projects.json";
import type { NextApiRequest, NextApiResponse } from "next";
import { Project } from "@/app/Types/Project";

type Data = {
  project?: Project;
  images: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): any {
  try {
    if (req.method === "GET") {
      const id =
        typeof req.query.id === "string"
          ? parseInt(req.query.id, 10)
          : req.query.id;

      const fetchedProject = projectsData.find((project) => {
        return project.id === id;
      });

      const data: Data = {
        project: fetchedProject,
        images: imageNames,
      };

      res.status(200).json(data);
    }
  } catch (error) {
    console.error(error);
  }
}
