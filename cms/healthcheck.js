const opt = {
  host: "localhost",
  port: process.env.PORT,
};

try {
  fetch(`http://${opt.host}:${opt.port}/ping`, { method: "GET" }).then(
    (res) => {
      if (res.status === 200) {
        res.text().then(console.log);
        return;
      }
      throw new Error("Not ready");
    }
  );
} catch (e) {
  console.log(e.message);
  process.exit(1);
}
