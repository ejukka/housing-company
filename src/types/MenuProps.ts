import { History, LocationState } from "history";

interface menuProps {
  title: string;
  imageUrl: string;
  size: string;
  history: History<LocationState>;
}

export default menuProps;
