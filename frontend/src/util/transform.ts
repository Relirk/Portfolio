import type { IFirestoreObject } from "./interfaces";

export default function transformProjectsResponse(firestoreProjects: any) {
  const formattedPayload: IFirestoreObject[] = JSON.parse(
    JSON.stringify(firestoreProjects)
  );
  const transform = {
    frontendProjects: [],
    backendProjects: [],
    mobileProjects: [],
    gameProjects: [],
  };

  for (let index = 0; index < formattedPayload.length; index++) {
    const element: IFirestoreObject = formattedPayload[index];
    switch (element.type) {
      case "frontend":
        transform.frontendProjects.push(element);
        break;
      case "backend":
        transform.backendProjects.push(element);
        break;
      case "mobile":
        transform.mobileProjects.push(element);
        break;
      case "game":
        transform.gameProjects.push(element);
        break;
      default:
        break;
    }
  }

  return transform;
}
