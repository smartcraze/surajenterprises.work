await fetch("/api/kharchi/notify", {
  method: "POST",
  body: JSON.stringify({
    phone: "+919123456789",
    name: "Suraj",
    date: new Date()
  }),
  headers: {
    "Content-Type": "application/json"
  }
})
