export function errorHandler(err, req, res, next) {
  console.error("Server Error:", err);

  return res.status(500).json({
    status: 500,
    message: "Internal Server Error",
  });
}
