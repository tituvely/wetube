export const trending = (req, res) => {
  return res.render("home");
};
export const see = (req, res) => {
  return res.render("watch");
};
export const edit = (req, res) => {
  return res.render("edit");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
