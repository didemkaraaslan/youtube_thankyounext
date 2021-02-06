import { videos } from "../../../videos";

export default (req, res) => {
  res.status(200).json(videos);
};
