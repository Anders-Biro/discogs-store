import { makeFetch } from "./utils";

const USER = "JawKnea";
const PUBLIC_FOLDER = "0";

export const fetchReleases = (page) =>
  makeFetch(`/users/${USER}/collection/folders/${PUBLIC_FOLDER}/releases?page=2`);
export const fetchRecord = id => makeFetch(`/releases/${id}`);
export const fetchArtist = id => makeFetch(`/artists/${id}`);