const app = require("./app");
app.listen(9999, () => {
  console.log("🚀 Server đang chạy trên http://localhost:9999");
  console.log("📋 API endpoints:");
  console.log("  GET    /accounts");
  console.log("  POST   /accounts");
  console.log("  GET    /accounts/:id");
  console.log("  PUT    /accounts/:id");
  console.log("  DELETE /accounts/:id");
});
