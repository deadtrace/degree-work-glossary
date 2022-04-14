import terms from "../../data/terms";

export default function handler(req, res) {
  res.status(200).json(terms);
}
