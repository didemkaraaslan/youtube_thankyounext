import { videos } from "../../../videos";

export default (req, res) => {
  const { id } = req.query;

  const video = videos.find((video) => video.id.toString() === id);

  if (video) {
    res.status(200).json(video);
  } else {
    res.status(404).json({
      message: "Error. No such video!",
    });
  }
};
